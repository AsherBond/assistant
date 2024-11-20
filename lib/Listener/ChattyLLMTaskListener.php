<?php

declare(strict_types=1);

namespace OCA\Assistant\Listener;

use OCA\Assistant\AppInfo\Application;
use OCA\Assistant\Db\ChattyLLM\Message;
use OCA\Assistant\Db\ChattyLLM\MessageMapper;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\TaskProcessing\Events\TaskSuccessfulEvent;
use Psr\Log\LoggerInterface;

/**
 * @template-implements IEventListener<TaskSuccessfulEvent>
 */
class ChattyLLMTaskListener implements IEventListener {

	public function __construct(
		private MessageMapper $messageMapper,
		private LoggerInterface $logger,
	) {
	}

	public function handle(Event $event): void {
		if (!($event instanceof TaskSuccessfulEvent)) {
			return;
		}

		$task = $event->getTask();
		$customId = $task->getCustomId();
		$appId = $task->getAppId();
		if ($appId !== (Application::APP_ID . ':chatty-llm')
			|| $customId === null
			|| !preg_match('/^chatty-llm:(\d+)$/', $customId, $matches)
		) {
			return;
		}
		$sessionId = (int)$matches[1];

		$message = new Message();
		$message->setSessionId($sessionId);
		$message->setRole('assistant');
		$message->setContent(trim($task->getOutput()['output'] ?? ''));
		$message->setTimestamp(time());
		try {
			$this->messageMapper->insert($message);
		} catch (\OCP\DB\Exception $e) {
			$this->logger->error('Message insertion error in chattyllm task listener', ['exception' => $e]);
		}
	}
}
