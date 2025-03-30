OC.L10N.register(
    "assistant",
    {
    "Failed to notify when ready; unknown user" : "Falha ao notificar quando estiver pronto; usuário desconhecido",
    "Send a message to a Talk conversation" : "Enviar uma mensagem para uma conversa do Talk",
    "Create a conversation" : "Criar uma conversa",
    "Send an email" : "Enviar um e-mail",
    "Schedule a calendar event" : "Agendar um evento de calendário",
    "Add a calendar task" : "Adicionar uma tarefa de calendário",
    "Create a Deck card" : "Criar um cartão de Deck",
    "User not logged in" : "Usuário não conectado",
    "User not found" : "Usuário não encontrado",
    "Failed to create a chat session" : "Falha ao criar uma sessão de bate-papo",
    "Failed to update the chat session" : "Falha ao atualizar a sessão de bate-papo",
    "Failed to delete the chat session" : "Falha ao excluir a sessão de bate-papo",
    "Failed to get chat sessions" : "Falha ao obter sessões de bate-papo",
    "Session not found" : "Sessão não encontrada",
    "Message content is empty" : "O conteúdo da mensagem está vazio",
    "Failed to add a chat message" : "Falha ao adicionar uma mensagem de bate-papo",
    "Failed to get chat messages" : "Falha ao obter mensagens de bate-papo",
    "Failed to delete a chat message" : "Falha ao excluir uma mensagem de bate-papo",
    "Failed to delete the last message" : "Falha ao excluir a última mensagem",
    "Failed to add a chat message into DB" : "Falha ao adicionar uma mensagem de bate-papo ao banco de dados",
    "Failed to generate a title for the chat session" : "Falha ao gerar um título para a sessão de bate-papo",
    "Nextcloud Assistant" : "Assistente Nextcloud",
    "Assistant task" : "Tarefa do assistente",
    "AI text generation" : "Gerador de texto com IA",
    "AI image generation" : "Geração de imagem de IA",
    "AI audio transcription" : "Transcrição de áudio AI",
    "AI context writer" : "Escritor de contexto de IA",
    "Writing style: %1$s; Source material: %2$s" : "Estilo de escrita: %1$s; Material de origem: %2$s",
    "Context Chat" : "Context Chat",
    "Task for \"%1$s\" has finished" : "A tarefa para \"%1$s\" foi concluída",
    "\"%1$s\" task for \"%2$s\" has finished" : "A tarefa \"%1$s\" para \"%2$s\" foi concluída",
    "Input: %1$s" : "Entrada: %1$s",
    "Result: %1$s" : "Resultado: %1$s",
    "View results" : "Ver resultados",
    "Task for \"%1$s\" has failed" : "6 A tarefa para \"%1$s\" falhou",
    "\"%1$s\" task for \"%2$s\" has failed" : "A tarefa \"%1$s\" para \"%2$s\" falhou",
    "View task" : "Ver tarefa",
    "Chat with AI" : "Bate-papo com IA",
    "Chat with an AI model." : "Converse com um modelo de IA.",
    "Generate text" : "Gerar texto",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "Envie um pedido ao Assistente, por exemplo: escreva um primeiro rascunho de uma apresentação, dê-me sugestões de apresentação, escreva um rascunho de resposta ao meu colega.",
    "Artificial Intelligence" : "Inteligência artificial",
    "Process and transform text" : "Processar e transformar texto",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Local Large language model](https://github.com/nextcloud/llm2#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)\n\nMore details on how to set this up in the [admin docs](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)" : "Este aplicativo traz uma interface de usuário para usar o recurso de processamento de texto Nextcloud.\n\nEle permite que os usuários iniciem tarefas de IA, sejam notificados quando terminarem e vejam os resultados.\nO assistente também aparece em outros aplicativos como o Text para processar facilmente partes de um documento.\n\nMais detalhes sobre a API assistente do OCS e possibilidades de integração de front-end no\n[documento do desenvolvedor](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Como usar\n\nUma nova entrada de menu no cabeçalho direito é exibida. Uma vez clicado, o assistente é exibido e você pode selecionar o tipo de tarefa e\ndefina a entrada que deseja processar.\n\nA tarefa pode ser executada imediatamente ou agendada dependendo da estimativa de tempo fornecida pelo provedor de IA.\nDepois que uma tarefa for agendada, ela será executada como um trabalho em segundo plano. Quando terminar, você receberá uma notificação\na partir do qual os resultados podem ser exibidos.\n\nOutros aplicativos podem ser integrados ao assistente. Por exemplo, o Texto exibirá um botão embutido ao lado de cada parágrafo\npara selecionar diretamente um tipo de tarefa para processar este parágrafo. Selecionar uma tarefa desta forma abrirá o assistente com a tarefa\nsendo pré-selecionado e o texto de entrada definido.\n\nMais detalhes e capturas de tela no [documento do usuário](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Recursos\n\nNo assistente, a lista de tarefas disponíveis depende dos provedores disponíveis instalados por meio de outros aplicativos.\nIsso significa que você tem total liberdade sobre qual serviço/software realmente executará suas tarefas de IA.\n\n### Provedores de processamento de texto\n\nAté agora, o [modelo de linguagem local grande](https://github.com/nextcloud/llm2#readme)\ne os aplicativos [integração OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\nincluem provedores de processamento de texto para:\n* Resumir\n* Extraia tópicos\n* Gere um título\n* Obtenha uma resposta em um prompt gratuito\n* Reformular (somente OpenAi/LocalAi)\n* Escritor de contexto: Gere texto com um estilo especificado. O estilo pode ser descrito ou fornecido por meio de um texto de exemplo.\n\n### Texto para imagem (geração de imagem)\n\nProvedores conhecidos:\n* [Integração OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Difusão estável Text2Image](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Fala para texto (transcrição de áudio)\n\nProvedores conhecidos:\n* [Integração OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Fala para texto por sussurro local](https://apps.nextcloud.com/apps/stt_whisper)\n\nMais detalhes sobre como configurar isso nos [documentos administrativos](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)",
    "Assistant admin options saved" : "Opções de administração do assistente salvas",
    "Failed to save assistant admin options" : "Falha ao salvar as opções de administração do assistente",
    "Find more details on how to set up Assistant and recommended backends in the Administration documentation." : "Encontre mais detalhes sobre como configurar o Assistant e back-ends recomendados na documentação de Administração.",
    "Select which features you want to enable" : "Selecione quais recursos você deseja ativar",
    "Top-right assistant" : "Assistente superior direito",
    "To be able to use this feature, please install at least one AI task processing provider." : "Para poder usar esse recurso, instale pelo menos um provedor de processamento de tarefas de IA.",
    "AI text generation smart picker" : "Seletor inteligente de geração de texto AI",
    "To enable this feature, please install an AI task processing provider for the free prompt task type:" : "Para ativar esse recurso, instale um provedor de processamento de tarefas de IA para o tipo de tarefa de prompt gratuito:",
    "Text-to-image smart picker" : "Seletor inteligente de texto para imagem",
    "To enable this feature, please install a text-to-image provider:" : "Para ativar esse recurso, instale um provedor de texto para imagem:",
    "Speech-to-text smart picker" : "Seletor inteligente de fala para texto",
    "To enable this feature, please install a speech-to-text provider:" : "Para ativar esse recurso, instale um provedor de fala para texto:",
    "Chat User Instructions for Chat Completions" : "Instruções do usuário do bate-papo para concluir o bate-papo",
    "It is passed on to the LLM for it to better understand the context." : "Ele é repassado ao LLM para que ele entenda melhor o contexto.",
    "\"{user}\" is a placeholder for the user's display name." : "\"{usuário}\" é um espaço reservado para o nome de exibição do usuário.",
    "Chat User Instructions for Title Generation" : "Instruções do usuário do bate-papo para geração de títulos",
    "It is passed on to the LLMs to let it know what to do" : "Ele é repassado aos LLMs para que ele saiba o que fazer",
    "\"{user}\" is a placeholder for the user's display name here as well." : "\"{usuário}\" é um espaço reservado para o nome de exibição do usuário aqui também.",
    "Last N messages to consider for chat completions" : "Últimas N mensagens a serem consideradas para conclusão de bate-papo",
    "This includes the user instructions and the LLM's messages" : "Isso inclui as instruções do usuário e as mensagens do LLM",
    "Number of messages to consider for chat completions (excluding the user instructions, which is always considered)" : "Número de mensagens a serem consideradas para conclusão do bate-papo (excluindo as instruções do usuário, que é sempre considerada)",
    "The task ran successfully but the result is identical to the input." : "A tarefa foi executada com êxito, mas o resultado é idêntico à entrada.",
    "This output was generated by AI. Make sure to double-check and adjust." : "Esta saída foi gerada pela IA. Certifique-se de verificar e ajustar.",
    "Hide advanced options" : "Ocultar opções avançadas",
    "Show advanced options" : "Mostrar opções avançadas",
    "Try again" : "Tente novamente",
    "Send request" : "Enviar solicitação",
    "Launch this task again" : "Inicie esta tarefa novamente",
    "Launch a task" : "Iniciar uma tarefa",
    "Failed to parse some files" : "Falha ao analisar alguns arquivos",
    "Generate a first draft for a blog post about privacy" : "Gere um primeiro rascunho para uma postagem de blog sobre privacidade",
    "What is the venue for the team retreat this quarter?" : "Qual é o local do retiro da equipe neste trimestre?",
    "Type or paste the text to summarize" : "Digite ou cole o texto para resumir",
    "Type or paste the text to generate a headline for" : "Digite ou cole o texto para gerar um título para",
    "Type or paste the text to extract the topics from" : "Digite ou cole o texto para extrair os tópicos",
    "landscape trees forest peaceful" : "panorama árvores floresta pacífico",
    "a number" : "um número",
    "Shakespeare or an example of the style" : "Shakespeare ou um exemplo do estilo",
    "A description of what you need or some original content" : "Uma descrição do que você precisa ou algum conteúdo original",
    "Back to the assistant" : "De volta ao assistente",
    "Previous \"{taskTypeName}\" tasks" : "Tarefas anteriores de \"{taskTypeName}\"",
    "Show previous tasks" : "Mostrar tarefas anteriores",
    "Close" : "Fechar",
    "Close Nextcloud Assistant" : "Fechar o Assistente Nextcloud",
    "Less" : "Menos",
    "More" : "Mais",
    "If you are not satisfied with the actions the Assistant wants to run, you can adjust your request by sending a new message instead of clicking the \"Cancel\" button." : "Se você não estiver satisfeito com as ações que o Assistente deseja executar, poderá ajustar sua solicitação enviando uma nova mensagem em vez de clicar no botão \"Cancelar\".",
    "The Assistant wants to perform sensitive actions on your behalf." : "O Assistente deseja executar ações sensíveis em seu nome.",
    "Cancel" : "Cancelar",
    "Confirm those actions" : "Confirme essas ações",
    "Are you sure you want to delete \"{sessionTitle}\"?" : "Tem certeza que quer remover \"{sessionTitle}\"?",
    "Error generating a response" : "Erro ao gerar uma resposta",
    "Error getting the generated title for the conversation" : "Erro coletando o título gerado para a conversa",
    "Error checking if the session is thinking" : "Verificação de erro se a sessão está pensando",
    "Error updating title of conversation" : "Erro ao atualizar o título da conversa",
    "Untitled conversation" : "Conversa sem título",
    "Error generating a title for the conversation" : "Erro ao gerar um título para a conversa",
    "Error deleting conversation" : "Erro ao excluir conversa",
    "Error fetching conversations" : "Erro ao buscar conversas",
    "Error deleting message" : "Erro ao excluir mensagem",
    "Error fetching messages" : "Erro ao buscar mensagens",
    "Error creating a new message" : "Erro ao criar uma nova mensagem",
    "Invalid response received for a new conversation request" : "Resposta inválida recebida para uma nova solicitação de conversa",
    "Error creating a new conversation" : "Erro ao criar uma nova conversa",
    "Error regenerating a response" : "Erro ao regenerar uma resposta",
    "New conversation" : "Nova conversa",
    "Loading conversations…" : "Carregando conversas…",
    "No conversations yet" : "Ainda não há conversas",
    "Delete" : "Excluir",
    "Conversation title" : "Título da conversa",
    "Edit title" : "Editar título",
    "Generate title" : "Gerar título",
    "Creating a new conversation" : "Criando uma nova conversa",
    "Hello there! What can I help you with today?" : "Oi! Em que posso ajudá-lo hoje?",
    "Try sending a message to spark a conversation." : "Tente enviar uma mensagem para iniciar uma conversa.",
    "Load older messages" : "Carregar mensagens mais antigas",
    "Retry response generation" : "Geração de resposta de repetição",
    "Conversation deletion" : "Remoção de conversa",
    "Error loading messages" : "Erro ao carregar mensagens",
    "Loading messages…" : "Carregando mensagens…",
    "The text must be shorter than or equal to {maxLength} characters, currently {length}" : "O texto deve ser menor ou igual a {maxLength} personagens, atualmente {length}",
    "Cancel editing" : "Cancelar edição",
    "Submit" : "Enviar",
    "Type a message…" : "Digite uma mensagem...",
    "Processing…" : "Processando...",
    "You" : "Você",
    "Message copied to clipboard" : "Mensagem copiada para a área de transferência",
    "(empty message)" : "(mensagem vazia)",
    "Copy message" : "Copiar mensagem",
    "Regenerate message" : "Regenerar mensagem",
    "Delete message" : "Excluir mensagem",
    "Select Files/Folders" : "eleger arquivos/pastas",
    "Select Providers" : "Selecione Provedores",
    "Choose Files/Folders" : "Escolha Arquivos/Pastas",
    "Choose" : "Escolher",
    "Clear Selection" : "Seleção Clara",
    "Error fetching default provider key" : "Erro ao buscar a chave do provedor padrão",
    "Error fetching providers" : "Erro ao buscar provedores",
    "Context Chat has not finished indexing all your documents yet, it may not be able to answer your questions, yet." : "O Context Chat ainda não terminou de indexar todos os seus documentos, portanto, talvez ainda não seja possível responder às suas perguntas.",
    "Selective context" : "Contexto seletivo",
    "No sources referenced" : "Nenhuma fonte referenciada",
    "tool" : "ferramenta",
    "integration" : "integração",
    "complete AI documentation" : "documentação completa de IA",
    "No provider found" : "Nenhum provedor encontrado",
    "AI Providers need to be installed to use the Assistant" : "Os provedores de IA precisam ser instalados para usar o Assistente",
    "Assistant options saved" : "Opções do assistente salvas",
    "Failed to save assistant options" : "Falha ao salvar as opções do assistente",
    "AI image generation smart picker" : "Seletor inteligente de geração de imagens AI",
    "AI transcription smart picker" : "Seletor inteligente de transcrição de IA",
    "No suitable providers are available. They must first be enabled by your administrator." : "Não há fornecedores adequados disponíveis. Eles devem primeiro ser habilitados pelo administrador.",
    "Configured Backends" : "Backends Configurados",
    "The following services are used as backends for Nextcloud Assistant:" : "Os seguintes serviços são usados ​​como back -end para o NextCloud Assistant:",
    "{providerName} for {taskName}" : "{providerName} para {taskName}",
    "Getting results…" : "Obtendo resultados…",
    "Run task in the background and get notified" : "Execute tarefa em segundo plano e seja notificado",
    "Back to the Assistant" : "Voltar ao Assistente",
    "Cancel task" : "Cancelar tarefa",
    "Your task has been scheduled" : "Sua tarefa foi agendada",
    "You will receive a notification when it has finished" : "Você receberá uma notificação quando terminar",
    "You have not submitted any \"{taskTypeName}\" task yet" : "Você ainda não enviou nenhuma tarefa \"{taskTypeName}\"",
    "Nothing yet" : "Nada ainda",
    "Succeeded" : "Sucesso",
    "Cancelled" : "Cancelado",
    "Failed" : "Falhou",
    "Running" : "Corrida",
    "Scheduled" : "Agendada",
    "Input" : "Entrada",
    "_{n} image has been generated_::_{n} images have been generated_" : ["{n} imagens foram geradas","{n} imagens foram geradas","{n} imagens foram geradas"],
    "Result" : "Resultado",
    "_Generation of {n} image is scheduled_::_Generation of {n} images is scheduled_" : ["A geração de {n} imagens está agendada","A geração de {n} imagens está agendada","A geração de {n} imagens está agendada"],
    "This task is scheduled" : "Esta tarefa está agendada",
    "Unknown status" : "Estado desconhecido",
    "Error while recording audio" : "Erro ao gravar áudio",
    "Start recording" : "Comece a gravar",
    "Dismiss recording" : "Dispensar gravação",
    "End recording and send" : "Terminar a gravação e enviar",
    "Choose file" : "Escolher arquivo",
    "Choose a file" : "Escolher um arquivo",
    "No file selected" : "Nenhum arquivo selecionado",
    "Choose a value" : "Escolha um valor",
    "Could not upload the recorded file" : "Não foi possível fazer o envio do arquivo gravado",
    "Output file share link copied to clipboard" : "Link de compartilhamento de arquivo de saída copiado para a área de transferência",
    "Could not copy to clipboard" : "Não foi possível copiar para a área de transferência",
    "Upload from device" : "Enviar do dispositivo",
    "Select from Nextcloud" : "Selecione em Nextcloud",
    "Pick one or multiple files" : "Escolha um ou vários arquivos",
    "Remove this media" : "Remover esta mídia",
    "Download this media" : "Baixe esta mídia",
    "Share this media" : "Compartilhe esta mídia",
    "Share" : "Compartilhar",
    "Pick a file" : "Escolha um arquivo",
    "Clear value" : "Limpar valor",
    "Type some number" : "Digite algum número",
    "The current value is not a number" : "O valor atual não é um número",
    "Advanced" : "Avançada",
    "Choose a text file" : "Escolha um arquivo de texto",
    "Unexpected response from text parser" : "Resposta inesperada do analisador de texto",
    "Could not parse file" : "Não foi possível analisar o arquivo",
    "Result could not be copied to clipboard" : "O resultado não pôde ser copiado para a área de transferência",
    "Copy output" : "Copiar saída",
    "Copy" : "Copiar",
    "Upload file" : "Enviar arquivo",
    "Could not upload the file" : "Não foi possível fazer o envio do arquivo",
    "Could not upload the files" : "Não foi possível fazer o envio dos arquivos",
    "Your task with ID {id} has failed" : "Sua tarefa com id {id} falhou",
    "Failed to schedule your task" : "Falha ao agendar sua tarefa",
    "Submit the current task's result" : "Envie o resultado da tarefa atual",
    "Assistant error" : "Erro do assistente",
    "Please log in to view the task result" : "Faça login para ver o resultado da tarefa",
    "This task does not exist or has been cleaned up" : "Esta tarefa não existe ou foi limpa",
    "Failed to schedule the task" : "Falha ao agendar a tarefa",
    "Failed to get the last message" : "Falha ao obter a última mensagem",
    "Failed to process prompt; unknown user" : "Falha ao processar o prompt; usuário desconhecido",
    "Failed to get prompt history; unknown user" : "Falha ao obter histórico de prompt; usuário desconhecido",
    "Failed to get outputs; unknown user" : "Falha ao obter resultados; usuário desconhecido",
    "Failed to cancel generation; unknown user" : "Falha ao cancelar a geração; usuário desconhecido",
    "Some internal error occurred. Contact your sysadmin for more info." : "Ocorreu algum erro interno. Entre em contato com seu administrador de sistema para obter mais informações.",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Nenhum provedor de conversão de fala em texto foi encontrado. Instale um da app store para usar esse recurso.",
    "Audio file not found." : "Arquivo de áudio não encontrado.",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "Sem permissão para criar arquivo/diretório de gravação, entre em contato com o administrador do sistema para resolver esse problema.",
    "Failed to set visibility of image files; unknown user" : "Falha ao definir a visibilidade dos arquivos de imagem; usuário desconhecido",
    "Unknown error while retrieving prompt history." : "Erro desconhecido ao recuperar o histórico de prompts.",
    "Context write" : "Gravação de contexto",
    "Writes text in a given style based on the provided source material." : "Escreve texto em um determinado estilo com base no material de origem fornecido.",
    "Transcribe" : "Transcrever",
    "Transcribe audio to text" : "Transcrever áudio para texto",
    "Generate image" : "Gerar imagem",
    "Generate an image from a text" : "Gerar uma imagem a partir de um texto",
    "Canceled by user" : "Cancelado pelo usuário",
    "FreePromptTaskType not available" : "FreePromptTaskType não disponível",
    "Failed to run or schedule a task" : "Falha ao executar ou agendar uma tarefa",
    "Failed to get prompt history" : "Falha ao obter o histórico de prompts",
    "Generation not found" : "Geração não encontrada",
    "Multiple tasks found" : "Várias tarefas encontradas",
    "Transcript not found" : "Transcrição não encontrada",
    "No text to image processing provider available" : "Não há provedor de processamento de texto em imagem disponível",
    "Image request error" : "Erro na requisição de imagem",
    "Image generation not found." : "Geração de imagem não encontrada.",
    "Retrieving the image generation failed." : "Falha ao recuperar a geração da imagem.",
    "Image generation failed." : "Geração de imagem falhou.",
    "Image file names could not be fetched from database" : "Nomes de arquivos de imagem não puderam ser recuperados do banco de dados",
    "Image file not found in database" : "Arquivo da imagem não foi encontrado no banco de dados",
    "Image file not found" : "Arquivo de imagem não encontrado",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "Este aplicativo traz uma interface de usuário para usar o recurso de processamento de texto Nextcloud.\n\nEle permite que os usuários iniciem tarefas de IA, sejam notificados quando terminarem e vejam os resultados.\nO assistente também aparece em outros aplicativos como o Text para processar facilmente partes de um documento.\n\nMais detalhes sobre a API assistente do OCS e possibilidades de integração de frontend no\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Como usá-lo\n\nUma nova entrada de menu no cabeçalho direito é exibida. Uma vez clicado, o assistente é exibido e você pode selecionar o tipo de tarefa e\ndefina a entrada que deseja processar.\n\nA tarefa pode ser executada imediatamente ou agendada dependendo da estimativa de tempo fornecida pelo provedor de IA.\nDepois que uma tarefa for agendada, ela será executada como um trabalho em segundo plano. Quando terminar, você receberá uma notificação\na partir do qual os resultados podem ser exibidos.\n\nOutros aplicativos podem ser integrados ao assistente. Por exemplo, o Texto exibirá um botão embutido além de cada parágrafo\npara selecionar diretamente um tipo de tarefa para processar este parágrafo. Selecionar uma tarefa desta forma abrirá o assistente com a tarefa\nsendo pré-selecionado e o texto de entrada definido.\n\nMais detalhes e capturas de tela no [documento do usuário](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Características\n\nNo assistente, a lista de tarefas disponíveis depende dos provedores disponíveis instalados por meio de outros aplicativos.\nIsso significa que você tem total liberdade sobre qual serviço/software realmente executará suas tarefas de IA.\n\n### Provedores de processamento de texto\n\nAté agora, o [modelo de linguagem grande](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\nincluem provedores de processamento de texto para:\n* Resumir\n* Extrair tópicos\n* Gere um título\n* Obtenha uma resposta em um prompt gratuito\n* Reformulado (somente OpenAi/LocalAi)\n* Escritor de contexto: gera texto com um estilo especificado. O estilo pode ser descrito ou fornecido através de um texto de exemplo.\n\n### Texto para imagem (geração de imagem)\n\nFornecedores conhecidos:\n* [Integração OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n*[Difusão Estável Text2Image](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Fala para texto (transcrição de áudio)\n\nFornecedores conhecidos:\n* [Integração OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Fala para texto por sussurro local](https://apps.nextcloud.com/apps/stt_whisper)",
    "To be able to use this feature, please install at least one AI text processing provider." : "Para poder usar esse recurso, instale pelo menos um provedor de processamento de texto AI.",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "Para ativar esse recurso, instale um provedor de processamento de texto AI para o tipo de tarefa de prompt gratuito.",
    "To enable this feature, please install a text-to-image provider." : "Para ativar esse recurso, instale um provedor de texto para imagem.",
    "To enable this feature, please install a speech-to-text provider." : "Para ativar esse recurso, instale um provedor de voz para texto.",
    "Image storage" : "Armazenamento de imagens",
    "Image generation idle time (days)" : "Tempo ocioso de geração de imagem (dias)",
    "Days until generated images are deleted if they are not viewed" : "Dias até que as imagens geradas sejam excluídas se não forem visualizadas",
    " This includes the user instructions and the LLM's messages" : " Isso inclui as instruções do usuário e as mensagens do LLM",
    "Writing style" : "Estilo de escrita",
    "Describe the writing style you want to use or supply an example document." : "Descreva o estilo de escrita que deseja usar ou forneça um documento de exemplo.",
    "Source material" : "Material de origem",
    "Describe what you want the document to be written on." : "Descreva onde você deseja que o documento seja escrito.",
    "Type some text" : "Digite algum texto",
    "Text Generation" : "Geração de texto",
    "Audio transcription" : "Transcrição de áudio",
    "Unknown Result Type" : "Tipo de resultado desconhecido",
    "Output" : "Saída",
    "Copy output text to clipboard" : "Copie o texto de saída para a área de transferência",
    "Reset the output value to the originally generated one" : "Redefina o valor de saída para o gerado originalmente",
    "Reset" : "Redefinir",
    "The task ran successfully but the generated text is empty." : "A tarefa foi executada com êxito, mas o texto gerado está vazio.",
    "Run a task" : "Execute uma tarefa",
    "Loading conversations..." : "Carregando conversas...",
    "Edit Title" : "Editar título",
    "Generate Title" : "Gerar título",
    "Loading messages..." : "Carregando mensagens...",
    "Type a message..." : "Digite uma mensagem...",
    "Thinking..." : "Pensando...",
    "Unexpected server response" : "Resposta inesperada do servidor",
    "The processing of generations failed." : "O processamento de gerações falhou.",
    "The processing of some generations failed." : "O processamento de algumas gerações falhou.",
    "Text generation error" : "Erro na geração de texto",
    "Unknown text generation API error" : "Erro desconhecido na API de geração de texto",
    "Prompt" : "Pronto",
    "Result {index}" : "Resultado {index}",
    "Text generation content" : "Conteúdo de geração de texto",
    "The text generation task was scheduled to run in the background." : "A tarefa de geração de texto foi agendada para ser executada em segundo plano.",
    "Estimated completion time: " : "Tempo estimado de conclusão:",
    "This can take a while…" : "Isso pode demorar um pouco…",
    "Some generations are still being processed in the background! Showing finished generations." : "Algumas gerações ainda estão sendo processadas em segundo plano! Mostrando gerações acabadas.",
    "Loading generations…" : "Carregando gerações…",
    "Include prompt in the final result" : "Incluir prompt no resultado final",
    "Run in the background" : "Executar em segundo plano",
    "Choose Audio File" : "Escolha o Arquivo de Áudio",
    "Record Audio" : "Gravar Áudio",
    "Reset recorded audio" : "Redefinir áudio gravado",
    "Stop recording" : "Pare de gravar",
    "No audio file selected" : "Nenhum arquivo de áudio selecionado",
    "Selected Audio File:" : "Arquivo de Áudio Selecionado:",
    "Choose audio file in your storage" : "Escolha o arquivo de áudio em seu armazenamento",
    "Choose audio File" : "Escolha o arquivo de áudio",
    "Audio input" : "Entrada de áudio",
    "Unknown input" : "Entrada desconhecida",
    "Running…" : "Executando...",
    "Unknown error" : "Erro desconhecido",
    "Task result was copied to clipboard" : "O resultado da tarefa foi copiado para a área de transferência",
    "Copy result" : "Copiar resultado",
    "Image generation failed" : "Geração de imagem falhou",
    "This generation has no visible images" : "Essa geração não possui imagens visíveis",
    "Rate limit reached. Please try again later." : "Limite atingido. Tente novamente mais tarde.",
    "Unknown server query error" : "Erro desconhecido em solicitação ao servidor",
    "Image generation" : "Geração de imagem",
    "Edit visible images" : "Edita imagens visíveis",
    "Click to toggle generation visibility" : "Clique para alternar a visualização da geração",
    "Generated image" : "Imagem gerada",
    "Estimated generation time left: " : "Tempo estimado para fim da geração:",
    "The image(s) will be displayed here once generated." : "As imagem(ns) serão exibidas aqui depois de geradas.",
    "This image generation was scheduled to run in the background." : "Essa geração de imagem estava programada para ser executada em segundo plano.",
    "Failed to get images" : "Falha ao obter imagens",
    "Include the prompt in the result" : "Incluir o prompt no resultado",
    "Number of results" : "Número de resultados",
    "Regenerate" : "Regenerado",
    "Preview" : "Visualizar",
    "Enter your question or task here:" : "Digite sua pergunta ou tarefa aqui:",
    "Preview text generation by AI" : "Prever geração de texto com IA",
    "Notify when ready" : "Notificar quando estiver pronto",
    "Submit text generated by AI" : "Enviar texto gerado por IA",
    "The task could not be found. It may have been deleted." : "A tarefa não foi encontrada. Pode ter sido excluído.",
    "Successfully scheduled transcription" : "Transcrição agendada com sucesso",
    "Failed to schedule transcription" : "Falha ao agendar a transcrição",
    "Unknown API error" : "Erro de API desconhecido",
    "Schedule Transcription" : "Transcrição do Cronograma",
    "A description of the image you want to generate" : "Uma descrição da imagem que você deseja gerar",
    "Image generation cancel error" : "Erro de cancelamento de geração de imagem",
    "Unknown image generation cancel error" : "Erro desconhecido de cancelamento na geração de imagem",
    "Unexpected response from server." : "Resposta inesperada do servidor.",
    "Image generation error" : "Erro na geração da imagem",
    "Unknown image generation error" : "Erro desconhecido ao gerar imagem",
    "You will be notified when the image generation is ready." : "Você será notificado quando a geração de imagem estiver pronta.",
    "Notify when ready error" : "Erro ao notificar quando pronto",
    "Unknown notify when ready error" : "Erro desconhecido ao notificar quando pronto",
    "Preview image generation by AI" : "Prever geração de imagem por IA",
    "Submit image(s) generated by AI" : "Enviar imagens geradas pela IA",
    "Send" : "Enviar",
    "Show/hide advanced options" : "Exibir/Esconder opçòes avançadas",
    "Advanced options" : "Opções avançadas",
    "Image link copied to clipboard" : "Link da imagem copiado para a área de transferência",
    "Image link could not be copied to clipboard" : "Não foi possível copiar o link da imagem para a área de transferência",
    "Copy the link to this generation to clipboard" : "Copie o link desta geração para a área de transferência",
    "Copy link to clipboard" : "Copiar link para a área de transferência"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
