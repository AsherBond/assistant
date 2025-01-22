OC.L10N.register(
    "assistant",
    {
    "Failed to notify when ready; unknown user" : "Produciuse un fallo ao notificar cando estaba listo; usuario descoñecido",
    "Send a message to a Talk conversation" : "Enviar unha mensaxe a unha conversa en Parlar",
    "List Talk conversations" : "Lista de conversas en Parlar",
    "List messages in a Talk conversation" : "Lista de mensaxes nunha conversa en Parlar",
    "Schedule a calendar event" : "Programar un evento no calendario",
    "List calendars" : "Lista de calendarios",
    "User not logged in" : "O usuario non accedeu",
    "User not found" : "Non se atopou o usuario",
    "Failed to create a chat session" : "Produciuse un fallo ao crear unha sesión de parola",
    "Failed to update the chat session" : "Produciuse un fallo ao actualizar a sesión de parola",
    "Failed to delete the chat session" : "Produciuse un fallo ao eliminar a sesión de parola",
    "Failed to get chat sessions" : "Produciuse un fallo ao recibir as sesións de parola",
    "Session not found" : "Non se atopou a sesión",
    "Message content is empty" : "O contido da mensaxe está baleiro",
    "Failed to add a chat message" : "Produciuse un fallo ao engadir unha mensaxe da parola",
    "Failed to get chat messages" : "Produciuse un fallo ao recibir as mensaxes da parola",
    "Failed to delete a chat message" : "Produciuse un fallo ao eliminar unha mensaxe da parola",
    "Failed to delete the last message" : "Produciuse un fallo ao eliminar a última mensaxe",
    "Failed to add a chat message into DB" : "Produciuse un fallo ao engadir unha mensaxe da parola na BD",
    "Failed to generate a title for the chat session" : "Produciuse un fallo ao xerar un título para a sesión de parola",
    "Nextcloud Assistant" : "Asistente de Nextcloud",
    "Assistant task" : "Tarefa de asistente",
    "AI text generation" : "IA de xeración de texto",
    "AI image generation" : "Xeración de imaxes mediante IA",
    "AI audio transcription" : "Transcrición de son mediante IA",
    "AI context writer" : "Redactor de contexto de IA",
    "Writing style: %1$s; Source material: %2$s" : "Estilo de escritura: %1$s; Material de partida: %2$s",
    "Task for \"%1$s\" has finished" : "A tarefa para «%1$s» rematou",
    "\"%1$s\" task for \"%2$s\" has finished" : "A tarefa «%1$s» para «%2$s» rematou",
    "Input: %1$s" : "Entrada: %1$s",
    "Result: %1$s" : "Resultado: %1$s",
    "View results" : "Ver os resultados",
    "Task for \"%1$s\" has failed" : "Produciuse un fallo na tarefa para «%1$s»",
    "\"%1$s\" task for \"%2$s\" has failed" : "Produciuse un fallo na tarefa «%1$s» para «%2$s»",
    "View task" : "Ver tarefa",
    "Chat with AI" : "Parola cunha IA",
    "Chat with an AI model." : "Parola cun modelo de IA.",
    "Generate text" : "Texto xerado",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "Enviar unha solicitude ao asistente, por exemplo: escribe un primeiro borrador dunha presentación, dáme suxestións para unha presentación, escribe un borrador de resposta ao meu compañeiro.",
    "Artificial Intelligence" : "Intelixencia artificial",
    "Process and transform text" : "Procesar e transformar texto",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Local Large language model](https://github.com/nextcloud/llm2#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)\n\nMore details on how to set this up in the [admin docs](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)" : "Esta aplicación ofrece unha interface de usuario para usar a función de procesamento de texto de Nextcloud.\n\nPermítelle aos usuarios iniciar tarefas de IA, ser notificados cando rematen e ver os resultados.\nO asistente tamén aparece noutras aplicacións como Texto para procesar facilmente partes dun documento.\n\nPode ver máis detalles sobre a API do asistente OCS e as posibilidades de integración da interface no\n[documento do programador](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Como usalo\n\nAparece unha nova entrada do menú da cabeceira dereita. Cando se preme nela, amosase o asistente e pode seleccionar o tipo de tarefa e definir a entrada que quere procesar.\n\nA tarefa pode executarse inmediatamente ou programarse dependendo da estimación de tempo fornecida polo provedor de IA.\nUnha vez programada a tarefa, executarase como traballo en segundo plano. Cando remate, recibirá unha notificación\nna que se amosarán os resultados.\n\nPoden integrarse outras aplicacións co asistente. Por exemplo, Text amosará un botón en liña xunto a cada parágrafo\npara seleccionar directamente un tipo de tarefa para procesar este parágrafo. Se selecciona unha tarefa deste xeito,\nabrirase o asistente coa tarefa preseleccionada e o texto de entrada definido.\n\nMáis detalles e capturas de pantalla no [documento do usuario](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n##Características\n\nNo asistente, a lista de tarefas dispoñíbeis depende dos provedores dispoñíbeis instalados a través doutras aplicacións.\nIsto significa que dispón de total liberdade sobre o servizo/software que executará as súas tarefas de IA.\n\n### Provedores de procesamento de texto\n\nAta agora, o [Gran modelo de linguaxe local](https://github.com/nextcloud/llm2#readme\n)\ne as aplicacións [Integración OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\ninclúen provedores de procesamento de texto para:\n* Resumr\n* Extraer temas\n* Xerar un títular\n* Obtér unha resposta dunha indicación libre\n* Reformular (só OpenAi/LocalAi)\n* Redacción por contexto: xera texto cun estilo especificado. O estilo pódese describir ou fornecer mediante un texto de exemplo.\n\n### Texto a imaxe (xeración de imaxes)\n\nProvedores coñecidos:\n* [Integración OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Texto a imaxe de Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Voz a texto (transcrición de son)\n\nProvedores coñecidos:\n* [Integración OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Voz a texto de Local Whisper](https://apps.nextcloud.com/apps/stt_whisper)\n\nDispón de máis información sobre como configuralo na [documentación do administrador](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)",
    "Find more details on how to set up Assistant and recommended backends in the Administration documentation." : "Atopará máis información sobre como configurar o Asistente e as infraestrutura recomendada na documentación de administración.",
    "Select which features you want to enable" : "Seleccione as funcións que quere activar",
    "Top-right assistant" : " Asistente arriba á dereita",
    "To be able to use this feature, please install at least one AI text processing provider." : "Para poder utilizar esta funcionalidade, instale polo menos un provedor de procesamento de texto coa IA.",
    "AI text generation smart picker" : "Selector intelixente de xeración de texto mediante IA",
    "To enable this feature, please install an AI text processing provider for the free prompt task type:" : "Para activar esta funcionalidade, instale un provedor de procesamento de texto mediante IA para o tipo de tarefa de indicación libre:",
    "Text-to-image smart picker" : "Selector intelixente de procesamento de texto a imaxe",
    "To enable this feature, please install a text-to-image provider:" : "Para activar esta funcionalidade instale un provedor de procesamento de texto a imaxe:",
    "Speech-to-text smart picker" : "Selector intelixente de procesamento de voz a texto",
    "To enable this feature, please install a speech-to-text provider:" : "Para activar esta funcionalidade instale un provedor de procesamento de voz a texto:",
    "Chat User Instructions for Chat Completions" : "Instrucións de usuario da parola para Conclusións da parola",
    "It is passed on to the LLM for it to better understand the context." : "Pásase ao LLM para que entenda mellor o contexto.",
    "\"{user}\" is a placeholder for the user's display name." : "«{user}» é un marcador de substitución para o nome para amosar do usuario.",
    "Chat User Instructions for Title Generation" : "Instrucións de usuario da parola para a xeración de títulos",
    "It is passed on to the LLMs to let it know what to do" : "Pásase aos LLM para que saiban que facer",
    "\"{user}\" is a placeholder for the user's display name here as well." : "«{user}» tamén aquí é un marcador de substitución para o nome para amosar do usuario.",
    "Last N messages to consider for chat completions" : "Últimas N mensaxes a ter en conta para as conclusións da parola",
    "This includes the user instructions and the LLM's messages" : "Isto inclúe as instrucións de usuario e as mensaxes do LLM",
    "Number of messages to consider for chat completions (excluding the user instructions, which is always considered)" : "Número de mensaxes a ter en conta para a conclusión da parola (excluíndo as instrucións de usuario, que sempre se teñen en conta)",
    "Assistant admin options saved" : "Gardáronse as opcións de administración do Asistente",
    "Failed to save assistant admin options" : "Produciuse un fallo ao gardar as opcións de administración do Asistente",
    "The task ran successfully but the result is identical to the input." : "A tarefa executouse correctamente mais o resultado é idéntico ao da entrada.",
    "This output was generated by AI. Make sure to double-check and adjust." : "Esta saída foi xerada pola IA. Asegúrese de facer unha dobre comprobación e axustar.",
    "Back to the assistant" : "Volver ao asistente",
    "Previous \"{taskTypeName}\" tasks" : "Tarefas «{taskTypeName}» anteriores",
    "Show previous tasks" : "Amosar tarefas anteriores",
    "Hide advanced options" : "Agochar as opcións avanzadas",
    "Show advanced options" : "Amosar as opcións avanzadas",
    "Try again" : "Ténteo de novo",
    "Send request" : "Enviar a solicitude",
    "Launch this task again" : "Iniciar de novo esta tarefa",
    "Launch a task" : "Iniciar unha tarefa",
    "Failed to parse some files" : "Produciuse un fallo ao analizar algúns ficheiros",
    "Generate a first draft for a blog post about privacy" : "Xerar un primeiro borrador para unha publicación de blog sobre privacidade",
    "What is the venue for the team retreat this quarter?" : "Cal é o lugar no que se fará a retirada do equipo este trimestre?",
    "Type or paste the text to summarize" : "Escriba ou pegue o texto para resumir",
    "Type or paste the text to generate a headline for" : "Escriba ou pegue o texto para o que xerar un título",
    "Type or paste the text to extract the topics from" : "Escriba ou pegue o texto do que extraer os temas",
    "landscape trees forest peaceful" : "paisaxe árbores bosque tranquilidade",
    "a number" : "un número",
    "Shakespeare or an example of the style" : "Shakespeare ou un exemplo do estilo",
    "A description of what you need or some original content" : "Unha descrición do que necesita ou algún contido orixinal",
    "Close" : "Pechar",
    "Close Nextcloud Assistant" : "Pechar o Asistente de Nextcloud",
    "The Assistant wants to perform sensitive actions on your behalf." : "O Asistente quere realizar accións sensíbeis no teu nome.",
    "Confirm those actions" : "Confirme esas accións",
    "Cancel" : "Cancelar",
    "If you are not satisfied with the actions the Assistant wants to run, you can adjust your request by sending a new message instead of clicking the \"Cancel\" button." : "Se non está satisfeito coas accións que quere executar o Asistente, pode axustar a súa solicitude enviando unha nova mensaxe no canto de premer no botón «Cancelar».",
    "New conversation" : "Nova conversa",
    "Loading conversations…" : "Cargando conversas…",
    "No conversations yet" : "Aínda non hai conversas",
    "Delete" : "Eliminar",
    "Conversation title" : "Título da conversa",
    "Edit title" : "Editar o título",
    "Generate title" : "Xerar o título",
    "Creating a new conversation" : "Creando unha nova conversa",
    "Hello there! What can I help you with today?" : "Ola! En que podo axudarlle hoxe?",
    "Try sending a message to spark a conversation." : "Probe a enviar unha mensaxe para iniciar unha conversa.",
    "Load older messages" : "Cargar mensaxes antigas",
    "Retry response generation" : "Volver tentar a xeración de respostas",
    "Conversation deletion" : "Eliminación da conversa",
    "Are you sure you want to delete \"{sessionTitle}\"?" : "Confirma que quere eliminar «{sessionTitle}»?",
    "Error generating a response" : "Produciuse un erro ao xerar unha resposta",
    "Error getting the generated title for the conversation" : "Produciuse un erro ao obter o título xerado para a conversa",
    "Error checking if the session is thinking" : "Produciuse un erro ao comprobar se a sesión está a pensar",
    "Error updating title of conversation" : "Produciuse un erro ao actualizar o título da conversa",
    "Untitled conversation" : "Conversa sen título",
    "Error generating a title for the conversation" : "Produciuse un erro ao xerar un título para a conversa",
    "Error deleting conversation" : "Produciuse un erro ao eliminar a conversa",
    "Error fetching conversations" : "Produciuse un erro ao recuperar as conversas",
    "Error deleting message" : "Produciuse un erro ao eliminar a mensaxe",
    "Error fetching messages" : "Produciuse un erro ao recuperar as mensaxes",
    "Error creating a new message" : "Produciuse un erro ao crear unha mensaxe nova",
    "Invalid response received for a new conversation request" : "Recibiuse unha resposta non válida para unha nova solicitude de conversa",
    "Error creating a new conversation" : "Produciuse un erro ao crear unha nova conversa",
    "Error regenerating a response" : "Produciuse un erro ao volver xerar unha resposta",
    "Error loading messages" : "Produciuse un erro ao cargar as mensaxes",
    "Loading messages…" : "Cargando as mensaxes…",
    "The text must be shorter than or equal to {maxLength} characters, currently {length}" : "O texto debe ser máis curto ou igual a {maxLength} caracteres, actualmente ten {length}",
    "Cancel editing" : "Cancelar a edición",
    "Submit" : "Enviar",
    "Type a message…" : "Escriba unha mensaxe…",
    "Processing…" : "Procesando…",
    "You" : "Vde.",
    "Message copied to clipboard" : "Copiouse a mensaxe no portapapeis",
    "Copy message" : "Copiar a mensaxe",
    "Regenerate message" : "Volver xerar a mensaxe",
    "Delete message" : "Eliminar a mensaxe",
    "Selective context" : "Contexto selectivo",
    "Select Files/Folders" : "Seleccionar ficheiros/cartafoles",
    "Select Providers" : "Seleccionar provedores",
    "Choose Files/Folders" : "Escoller ficheiros/cartafoles",
    "Choose" : "Escoller",
    "Clear Selection" : "Limpar a selección",
    "Error fetching default provider key" : "Produciuse un erro ao recuperar a chave predeterminada do provedor",
    "Error fetching providers" : "Produciuse un erro ao recuperar provedores",
    "No sources referenced" : "Non hai ningunha orixe referenciada",
    "No provider found" : "Non se atopou ningún provedor",
    "AI Providers need to be installed to use the Assistant" : "Para empregar o asistente deben estar instalados os provedores de IA",
    "tool" : "ferramenta",
    "integration" : "Integración",
    "complete AI documentation" : "completa documentación de IA",
    "AI provider apps can be found in the {toolLink} and {integrationLink} app settings sections." : "As aplicacións de provedores de IA pódense atopar nas seccións de configuración das aplicacións {toolLink} e {integrationLink}.",
    "You can also check the {aiAdminDocLink}" : "Tamén pode consultar a {aiAdminDocLink}",
    "AI image generation smart picker" : "Selector intelixente de xeración de imaxes mediante IA",
    "AI transcription smart picker" : "Selector intelixente de transcrición mediante IA",
    "No suitable providers are available. They must first be enabled by your administrator." : "Non hai provedores axeitados dispoñíbeis. Primeiro debe ser activado pola administración do sitio.",
    "Configured Backends" : "Infraestruturas configuradas",
    "The following services are used as backends for Nextcloud Assistant:" : "Os seguintes servizos están a empregarse como infraestruturas para o Asistente de Nextcloud:",
    "{providerName} for {taskName}" : "{providerName} para {taskName}",
    "Assistant options saved" : "Gardáronse as opcións do Asistente",
    "Failed to save assistant options" : "Produciuse un fallo ao gardar as opcións do Asistente",
    "Getting results…" : "Obtendo resultados…",
    "Run task in the background and get notified" : "Executar a tarefa en segundo plano e recibir notificacións",
    "Back to the Assistant" : "Volver ao asistente",
    "Cancel task" : "Cancelar a tarefa",
    "You will receive a notification when it has finished" : "Recibirá unha notificación cando remate",
    "Your task has been scheduled" : "A súa tarefa foi programada",
    "Nothing yet" : "Aínda non hai ren",
    "You have not submitted any \"{taskTypeName}\" task yet" : "Aínda non enviou ningunha tarefa «{taskTypeName}»",
    "Succeeded" : "Satisfactoriamente",
    "Cancelled" : "Cancelado",
    "Failed" : "Fallado",
    "Running" : "En execución",
    "Scheduled" : "Programado",
    "Input" : "Entrada",
    "Result" : "Resultado",
    "This task is scheduled" : "Esta tarefa está programada",
    "Unknown status" : "Estado descoñecido",
    "_{n} image has been generated_::_{n} images have been generated_" : ["Xerouse {n} imaxe","Xeráronse {n} imaxes"],
    "_Generation of {n} image is scheduled_::_Generation of {n} images is scheduled_" : ["Está programada a xeración de {n} imaxe","Está programada a xeración de {n} imaxes"],
    "Start recording" : "Comezar a gravar",
    "Dismiss recording" : "Rexeitar a gravación",
    "End recording and send" : "Finalizar a gravación e enviar",
    "Error while recording audio" : "Produciuse un erro ao gravar o son",
    "Choose file" : "Escoller o ficheiro",
    "Choose a file" : "Escoller un ficheiro",
    "No file selected" : "Non seleccionou ningún ficheiro",
    "Choose a value" : "Escoller un valor",
    "Upload from device" : "Enviar desde o dispositivo",
    "Select from Nextcloud" : "Seleccionar de Nextcloud",
    "Pick one or multiple files" : "Escolla un ou varios ficheiros",
    "Remove this media" : "Retirar este multimedia",
    "Download this media" : "Descargar este multimedia",
    "Share this media" : "Compartir este multimedia",
    "Share" : "Compartir",
    "Could not upload the recorded file" : "Non foi posíbel enviar o ficheiro gravado",
    "Output file share link copied to clipboard" : "A ligazón para compartir ficheiros de saída copiouse no portapapeis",
    "Could not copy to clipboard" : "Non foi posíbel copiar ao portapapeis",
    "Pick a file" : "Escolla un ficheiro",
    "Clear value" : "Limpar o valor",
    "Type some number" : "Escriba algún número",
    "The current value is not a number" : "O valor actual non é un número",
    "Advanced" : "Avanzado",
    "Copy output" : "Copiar a saída",
    "Copy" : "Copiar",
    "Choose a text file" : "Escoller un ficheiro de texto",
    "Unexpected response from text parser" : "Resposta non agardada do analizador de texto",
    "Could not parse file" : "Non foi posíbel analizar o ficheiro",
    "Result could not be copied to clipboard" : "Non foi posíbel copiar o resultado no portapapeis",
    "Upload file" : "Enviar ficheiro",
    "Could not upload the file" : "Non foi posíbel enviar o ficheiro",
    "Could not upload the files" : "Non foi posíbel enviar os ficheiros",
    "Your task with ID {id} has failed" : "Produciuse un fallo coa súa tarefa co ID {id}",
    "Failed to schedule your task" : "Produciuse un fallo ao programar a súa tarefa",
    "Submit the current task's result" : "Enviar o resultado da tarefa actual",
    "Assistant error" : "Produciuse un erro do asistente",
    "Please log in to view the task result" : "Acceda para ver o resultado da tarefa",
    "This task does not exist or has been cleaned up" : "Esta tarefa non existe ou foi limpada",
    "Failed to schedule the task" : "Produciuse un fallo ao programar a tarefa",
    "Failed to get the last message" : "Produciuse un fallo ao recibir a última mensaxe",
    "Failed to process prompt; unknown user" : "Produciuse un fallo ao procesar as indicacións; usuario descoñecido",
    "Failed to get prompt history; unknown user" : "Produciuse un fallo ao obter o historial de indicacións; usuario descoñecido",
    "Failed to get outputs; unknown user" : "Produciuse un fallo ao obter as saídas; usuario descoñecido",
    "Failed to cancel generation; unknown user" : "Produciuse un fallo ao cancelar a xeración; usuario descoñecido",
    "Some internal error occurred. Contact your sysadmin for more info." : "Produciuse un erro interno. Póñase en contacto coa administración do sistema para obter máis información.",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Non se atopou ningún provedor de conversión de voz a texto. Instale un da tenda de aplicacións para usar esta función.",
    "Audio file not found." : "Non se atopou o ficheiro de son.",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "Non ten permiso para crear un ficheiro/directorio de gravación, póñase en contacto coa administración do sistema para resolver esta incidencia.",
    "Failed to set visibility of image files; unknown user" : "Produciuse un fallo ao definir a visibilidade dos ficheiros de imaxe; usuario descoñecido",
    "Unknown error while retrieving prompt history." : "Produciuse un erro descoñecido ao recuperar o historial de indicacións.",
    "Context write" : "Redacción por contexto",
    "Writes text in a given style based on the provided source material." : "Escribe texto nun estilo determinado baseándose no material de partida fornecido.",
    "Transcribe" : "Transcribir",
    "Transcribe audio to text" : "Transcribir son a texto",
    "Generate image" : "Xerar imaxe",
    "Generate an image from a text" : "Xerar unha imaxe a partir dun texto",
    "Canceled by user" : "Cancelada polo usuario.",
    "FreePromptTaskType not available" : "Tipo de tarefa de indicación libre (FreePromptTaskType) non dispoñíbel",
    "Failed to run or schedule a task" : "Produciuse un fallo ao executar ou programar unha tarefa",
    "Failed to get prompt history" : "Produciuse un fallo ao obter o historial de indicacións",
    "Generation not found" : "Non se atopou a xeración",
    "Multiple tasks found" : "Atopáronse varias tarefas",
    "Transcript not found" : "Non se atopou a transcrición",
    "No text to image processing provider available" : "Non hai ningún provedor de procesamento de texto para imaxes dispoñíbel",
    "Image request error" : "Produciuse un erro na solicitude de imaxe",
    "Image generation not found." : "Non se atopou a xeración de imaxe.",
    "Retrieving the image generation failed." : "Produciuse un fallo ao recuperar a xeración da imaxe.",
    "Image generation failed." : "Produciuse un fallo na xeración da imaxe.",
    "Image file names could not be fetched from database" : "Non foi posíbel recuperar os nomes dos ficheiros de imaxe da base de datos",
    "Image file not found in database" : "Non se atopou o ficheiro de imaxe na base de datos",
    "Image file not found" : "Non se atopou o ficheiro de imaxe",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "Esta aplicación ofrece unha interface de usuario para usar a función de procesamento de texto de Nextcloud.\n\nPermítelle aos usuarios iniciar tarefas de IA, ser notificados cando rematen e ver os resultados.\nO asistente tamén aparece noutras aplicacións como Texto para procesar facilmente partes dun documento.\n\nPode ver máis detalles sobre a API do asistente OCS e as posibilidades de integración da interface no\n[documento do programador](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Como usalo\n\nAparece unha nova entrada do menú da cabeceira dereita. Cando se preme nela, amosase o asistente e pode seleccionar o tipo de tarefa e definir a entrada que quere procesar.\n\nA tarefa pode executarse inmediatamente ou programarse dependendo da estimación de tempo fornecida polo provedor de IA.\nUnha vez programada a tarefa, executarase como traballo en segundo plano. Cando remate, recibirá unha notificación\nna que se amosarán os resultados.\n\nPoden integrarse outras aplicacións co asistente. Por exemplo, Text amosará un botón en liña xunto a cada parágrafo\npara seleccionar directamente un tipo de tarefa para procesar este parágrafo. Se selecciona unha tarefa deste xeito,\nabrirase o asistente coa tarefa preseleccionada e o texto de entrada definido.\n\nMáis detalles e capturas de pantalla no [documento do usuario](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n##Características\n\nNo asistente, a lista de tarefas dispoñíbeis depende dos provedores dispoñíbeis instalados a través doutras aplicacións.\nIsto significa que dispón de total liberdade sobre o servizo/software que executará as súas tarefas de IA.\n\n### Provedores de procesamento de texto\n\nAta agora, o [Gran modelo de linguaxe](https://github.com/nextcloud/llm#readme)\ne as aplicacións [Integración OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\ninclúen provedores de procesamento de texto para:\n* Resumr\n* Extraer temas\n* Xerar un títular\n* Obtér unha resposta dunha indicación libre\n* Reformular (só OpenAi/LocalAi)\n* Redacción por contexto: xera texto cun estilo especificado. O estilo pódese describir ou fornecer mediante un texto de exemplo.\n\n### Texto a imaxe (xeración de imaxes)\n\nProvedores coñecidos:\n* [Integración OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Texto a imaxe de Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Voz a texto (transcrición de son)\n\nProvedores coñecidos:\n* [Integración OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Voz a texto de Local Whisper](https://apps.nextcloud.com/apps/stt_whisper)",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "Para activar esta funcionalidade, instale un provedor de procesamento de texto mediante IA para o tipo de tarefa de indicación libre.",
    "To enable this feature, please install a text-to-image provider." : "Para activar esta funcionalidade instale un provedor de procesamento de texto a imaxe.",
    "To enable this feature, please install a speech-to-text provider." : "Para activar esta funcionalidade instale un provedor de procesamento de voz a texto.",
    "Image storage" : "Almacenamento de imaxes",
    "Image generation idle time (days)" : "Tempo de agarda da inactividade da xeración de imaxes (días)",
    "Days until generated images are deleted if they are not viewed" : "Os días de agarda ata que se eliminan as imaxes xeradas se non se ven",
    " This includes the user instructions and the LLM's messages" : "Isto inclúe as instrucións de usuario e as mensaxes do LLM",
    "Writing style" : "Estilo de escritura",
    "Describe the writing style you want to use or supply an example document." : "Describa o estilo de escritura que quere que se utilice ou forneza un documento de exemplo.",
    "Source material" : "Material orixinal",
    "Describe what you want the document to be written on." : "Describa sobre que quere que se escriba no documento.",
    "Type some text" : "Escriba algún texto",
    "Output" : "Saída",
    "Copy output text to clipboard" : "Copiar o texto de saída no portapapeis",
    "Reset the output value to the originally generated one" : "Restabelecer o valor de saída ao xerado orixinalmente",
    "Reset" : "Restabelecer",
    "Text Generation" : "Xeración de texto",
    "Audio transcription" : "Transcrición de son",
    "Unknown Result Type" : "Tipo de resultado descoñecido",
    "The task ran successfully but the generated text is empty." : "A tarefa executouse correctamente mais o texto xerado está baleiro.",
    "Run a task" : "Executar unha tarefa",
    "Loading conversations..." : "Cargando conversas…",
    "Edit Title" : "Editar o título",
    "Generate Title" : "Xerar o título",
    "Loading messages..." : "Cargando as mensaxes…",
    "Type a message..." : "Escriba unha mensaxe…",
    "Thinking..." : "Pensando…",
    "Text generation content" : "Contido da xeración de texto",
    "The text generation task was scheduled to run in the background." : "A tarefa de xeración de texto foi programada para executarse en segundo plano.",
    "Estimated completion time: " : "Tempo estimado de conclusión:",
    "This can take a while…" : "Isto pode levar un tempo…",
    "Some generations are still being processed in the background! Showing finished generations." : "Algunhas xeracións aínda están a seren procesadas en segundo plano! Amosando as xeracións rematadas.",
    "Loading generations…" : "Cargando xeracións…",
    "Include prompt in the final result" : "Incluír a indicación no resultado final",
    "Unexpected server response" : "Resposta non agardada do servidor",
    "The processing of generations failed." : "O procesamento das xeracións fracasou.",
    "The processing of some generations failed." : "O procesamento dalgunhas xeracións fracasou.",
    "Text generation error" : "Produciuse un erro na xeración de texto",
    "Unknown text generation API error" : "Produciuse un erro descoñecido na API de xeración de texto",
    "Prompt" : "Indicación",
    "Result {index}" : "Resultado {index}",
    "Run in the background" : "Executar en segundo plano",
    "Record Audio" : "Gravar son",
    "Choose Audio File" : "Escoller o ficheiro de son",
    "Reset recorded audio" : "Restabelecer o son gravado",
    "Stop recording" : "Deter a gravación",
    "No audio file selected" : "Non seleccionou ningún ficheiro de son",
    "Selected Audio File:" : "Ficheiro de son seleccionado:",
    "Choose audio file in your storage" : "Escolla o ficheiro de son no seu almacenamento",
    "Choose audio File" : "Escoller o ficheiro de son",
    "Copy result" : "Copiar o resultado",
    "Audio input" : "Entrada de son",
    "Unknown input" : "Entrada descoñecida",
    "Running…" : "En execución…",
    "Unknown error" : "Produciuse un erro descoñecido",
    "Task result was copied to clipboard" : "O resultado da tarefa copiouse no portapapeis",
    "Image generation" : "Xeración de imaxes",
    "Edit visible images" : "Editar as imaxes visíbeis",
    "Click to toggle generation visibility" : "Prema para cambiar a visibilidade da xeración",
    "Generated image" : "Imaxe xerada",
    "This generation has no visible images" : "Esta xeración non ten imaxes visíbeis",
    "Estimated generation time left: " : "Tempo restante estimado de xeración:",
    "The image(s) will be displayed here once generated." : "A(s) imaxe(s) amosara(n)se aquí unha vez xerada(s).",
    "This image generation was scheduled to run in the background." : "Esta xeración de imaxe foi programada para executarse en segundo plano.",
    "Image generation failed" : "Produciuse un fallo na xeración da imaxe.",
    "Rate limit reached. Please try again later." : "Acadouse o límite da taxa. Tenteo de novo máis tarde.",
    "Unknown server query error" : "Produciuse un erro de consulta de servidor descoñecido",
    "Failed to get images" : "Produciuse un fallo ao recibir as imaxes",
    "Include the prompt in the result" : "Incluír a indicación no resultado",
    "Number of results" : "Número de resultados",
    "Enter your question or task here:" : "Introduza aquí a súa pregunta ou tarefa:",
    "Preview text generation by AI" : "Vista previa da xeración de texto por IA",
    "Notify when ready" : "Notificar cando estea listo",
    "Submit text generated by AI" : "Enviar o texto xerado por IA",
    "Regenerate" : "Rexenerar",
    "Preview" : "Vista previa",
    "You will be notified when the text generation is ready." : "Recibirá unha notificación cando a xeración de texto estea lista.",
    "Notify when ready error" : "Produciuse un erro ao notificar cando está listo",
    "Unknown notify when ready error" : "Produciuse un error descoñecido ao notificar cando está listo",
    "The task could not be found. It may have been deleted." : "Non foi posíbel atopar a tarefa. Quizais foi eliminada.",
    "Schedule Transcription" : "Programar unha transcrición",
    "Successfully scheduled transcription" : "A transcrición foi programada correctamente",
    "Failed to schedule transcription" : "Produciuse un fallo ao programar a transcrición",
    "Unknown API error" : "Produciuse un erro descoñecido na API",
    "Preview image generation by AI" : "Vista previa da xeración de imaxes mediante IA",
    "Submit image(s) generated by AI" : "Enviar imaxes xeradas por IA",
    "Send" : "Enviar",
    "Show/hide advanced options" : "Amosar/agochar as opcións avanzadas",
    "Advanced options" : "Opcións avanzadas",
    "A description of the image you want to generate" : "Unha descrición da imaxe que quere xerar",
    "Image generation cancel error" : "Produciuse un erro de cancelación de xeración de imaxe",
    "Unknown image generation cancel error" : "Produciuse un erro descoñecido de cancelación de xeración de imaxe",
    "Unexpected response from server." : "Resposta non agardada do servidor.",
    "Image generation error" : "Produciuse un erro de xeración de imaxe",
    "Unknown image generation error" : "Produciuse un erro descoñecido de xeración de imaxe",
    "You will be notified when the image generation is ready." : "Recibirá unha notificación cando a xeración de imaxes estea lista.",
    "Copy the link to this generation to clipboard" : "Copiar a ligazón a esta xeración no portapapeis",
    "Copy link to clipboard" : "Copiar a ligazón no portapapeis",
    "Image link copied to clipboard" : "A ligazón da imaxe foi copiada no portapapeis",
    "Image link could not be copied to clipboard" : "Non foi posíbel copiar a ligazón á imaxe no portapapeis"
},
"nplurals=2; plural=(n != 1);");
