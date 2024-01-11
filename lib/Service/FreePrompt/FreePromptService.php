<?php

// SPDX-FileCopyrightText: Sami Finnilä <sami.finnila@nextcloud.com>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\TpAssistant\Service\FreePrompt;

use Exception;
use OCA\TpAssistant\AppInfo\Application;
use OCA\TpAssistant\Db\FreePrompt\PromptMapper;
use OCP\AppFramework\Http;
use OCP\DB\Exception as DBException;
use OCP\IConfig;
use OCP\IL10N;
use OCP\PreConditionNotMetException;
use OCP\TextProcessing\Exception\TaskFailureException;
use OCP\TextProcessing\FreePromptTaskType;
use OCP\TextProcessing\IManager;
use OCP\TextProcessing\Task;
use Psr\Log\LoggerInterface;

class FreePromptService {
	public function __construct(
		private IConfig $config,
		private LoggerInterface $logger,
		private IManager $textProcessingManager,
		private ?string $userId,
		private PromptMapper $promptMapper,
		private IL10N $l10n
	) {
	}

	/*
	 * @param string $prompt
	 * @param int $nResults
	 * @param bool $showPrompt
	 * @return string
	 * @throws Exception
	 */
	public function processPrompt(string $prompt, int $nResults): string {
		$taskTypes = $this->textProcessingManager->getAvailableTaskTypes();
		if (!in_array(FreePromptTaskType::class, $taskTypes)) {
			$this->logger->warning('FreePromptTaskType not available');
			throw new Exception($this->l10n->t('FreePromptTaskType not available'), Http::STATUS_INTERNAL_SERVER_ERROR);
		}

		if ($this->userId === null) {
			$this->logger->warning('User id is null when trying to process prompt');
			throw new Exception($this->l10n->t('Failed process prompt; unkown user'), Http::STATUS_INTERNAL_SERVER_ERROR);
		}
		
		// Generate a unique id for this generation
		while (true) {
			$genId = bin2hex(random_bytes(32));
			// Exceedingly unlikely that this will ever happen, but just in case:
			if(count($this->textProcessingManager->getUserTasksByApp($this->userId, Application::APP_ID, $genId)) === 0) {
				break;
			} else {
				continue;
			}
		}

		// Generate nResults prompts
		for ($i = 0; $i < $nResults; $i++) {
			
			// Create a db entity for the generation
			$promptTask = new Task(FreePromptTaskType::class, $prompt, Application::APP_ID, $this->userId, $genId);

			// Run or schedule the task:
			try {
				$this->textProcessingManager->runOrScheduleTask($promptTask);
			} catch (DBException | PreConditionNotMetException | TaskFailureException $e) {
				$this->logger->warning('Failed to run or schedule a task', ['exception' => $e]);
				throw new Exception($this->l10n->t('Failed to run or schedule a task'), Http::STATUS_INTERNAL_SERVER_ERROR);
			}

			// If the task was run immediately, we'll skip the notification..
			// Otherwise we would have to dispatch the notification here.
		}

		// Save prompt to database
		$this->promptMapper->createPrompt($this->userId, $prompt);
		
		return $genId;
	}

	/**
	 * @return array
	 * @throws Exception
	 */
	public function getPromptHistory(): array {
		if ($this->userId === null) {
			$this->logger->warning('User id is null when trying to get prompt history');
			throw new Exception($this->l10n->t('Failed to get prompt history'), Http::STATUS_INTERNAL_SERVER_ERROR);
		}

		try {
			return $this->promptMapper->getPromptsOfUser($this->userId);
		} catch (DBException $e) {
			$this->logger->warning('Failed to get prompts of user', ['exception' => $e]);
			throw new Exception($this->l10n->t('Failed to get prompt history'), Http::STATUS_INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * @param string $genId
	 * @return array
	 * @throws Exception
	 */
	public function getOutputs(string $genId): array {
		$tasks = $this->textProcessingManager->getUserTasksByApp($this->userId, Application::APP_ID, $genId);
		
		if (count($tasks) === 0) {
			$this->logger->warning('No tasks found for gen id: ' . $genId);
			throw new Exception($this->l10n->t('Generation not found'), Http::STATUS_BAD_REQUEST);
		}
		
		$outputs = [];
		/** @var Task $task */
		foreach ($tasks as $task) {
			$row = ['prompt' => $task->getInput(), 'text' => $task->getOutput(), 'status' => $task->getStatus()];
			if ($task->getStatus() === Task::STATUS_SCHEDULED) {
				$row['completion_time'] = $task->getCompletionExpectedAt();
			}
			array_push($outputs, $row);
		}

		return $outputs;
	}

	/**
	 * @param string $genId
	 * @return void
	 * @throws Exception
	 */
	public function cancelGeneration(string $genId): void {
		if ($this->userId === null) {
			$this->logger->warning('User id is null when trying to cancel generation');
			throw new Exception($this->l10n->t('Failed to cancel generation'), Http::STATUS_INTERNAL_SERVER_ERROR);
		}
		
		// Get all tasks that have this genId as identifier.
		/** @var Task[] $tasks */
		$tasks = $this->textProcessingManager->getUserTasksByApp($this->userId, Application::APP_ID, $genId);

		// Cancel all tasks
		foreach ($tasks as $task) {
			$this->textProcessingManager->deleteTask($task);
		}

		return;
	}

}