OC.L10N.register(
    "assistant",
    {
    "Send a message to a Talk conversation" : "Отправить сообщение в конференцию",
    "Create a conversation" : "Создать обсуждение",
    "Send an email" : "Отправить по эл. почте",
    "Add a calendar task" : "Создать задачу в календаре",
    "Create a Deck card" : "Создать карточку",
    "User not logged in" : "Пользователь не авторизировался",
    "User not found" : "Пользователь не найден",
    "Failed to add a chat message" : "Не удалось добавить сообщение в чат",
    "Nextcloud Assistant" : "Помощник Nextcloud",
    "AI text generation" : "ИИ генерация текста",
    "AI image generation" : "ИИ генерация изображения",
    "Task for \"%1$s\" has finished" : "Задача для \"%1$s\" завершена",
    "\"%1$s\" task for \"%2$s\" has finished" : "\"%1$s\" задача для \"%2$s\" завершена",
    "Input: %1$s" : "Ввод: %1$s",
    "View results" : "Просмотр результатов",
    "Task for \"%1$s\" has failed" : "Задача для \"%1$s\" сбойнула",
    "\"%1$s\" task for \"%2$s\" has failed" : "\"%1$s\" задача для \"%2$s\" сбойнула",
    "View task" : "Просмотреть задачу",
    "Chat with AI" : "Чат с ИИ",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "Отправьте запрос Ассистенту, например: написать черновик презентации, дать мне предложения по презентации, написать черновик ответа моему коллеге.",
    "Artificial Intelligence" : "Искусственный интеллект",
    "Process and transform text" : "Обрабатывать и преобразовывать текст",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Local Large language model](https://github.com/nextcloud/llm2#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)\n\nMore details on how to set this up in the [admin docs](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)" : "Это приложение предоставляет пользовательский интерфейс для использования функции обработки текста Nextcloud.\n\nОно позволяет пользователям запускать задачи ИИ, получать уведомления об их завершении и видеть результаты.\nПомощник также появляется в других приложениях, таких как Text, для легкой обработки частей документа.\n\nБолее подробная информация об API помощника OCS и возможностях интеграции с внешним интерфейсом приведена в\n[документе разработчика](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Как его использовать\n\nПоявляется новый пункт меню справа. После нажатия отображается помощник, и вы можете выбрать тип задачи и задать ввод, который хотите обработать.\n\nЗадача может быть запущена немедленно или запланирована в зависимости от оценки времени, предоставленной поставщиком ИИ.\nПосле того, как задача запланирована, она будет запущена как фоновое задание. По завершении вы получите уведомление,\nиз которого можно отобразить результаты.\n\nДругие приложения могут интегрироваться с помощником. Например, Text отобразит встроенную кнопку рядом с каждым абзацем,\nчтобы напрямую выбрать тип задачи для обработки этого абзаца. Выбор задачи таким образом откроет помощника с предварительно выбранной задачей и заданным текстом ввода.\n\nБолее подробная информация и скриншоты в [документе пользователя](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Функции\n\nВ помощнике список доступных задач зависит от доступных поставщиков, установленных через другие приложения.\nЭто означает, что у вас есть полная свобода в выборе того, какой сервис/программное обеспечение фактически будет выполнять ваши задачи ИИ.\n\n### Поставщики обработки текста\n\nНа данный момент [модель локального большого языка](https://github.com/nextcloud/llm2#readme)\nи приложения [интеграция OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\nвключают поставщиков обработки текста для:\n* Обобщения\n* Извлечения тем\n* Генерации заголовка\n* Получения ответа из бесплатной подсказки\n* Переформулирования (только OpenAi/LocalAi)\n* Контекстного писателя: Генерация текста с указанным стилем. Стиль может быть описан или предоставлен с помощью примера текста.\n\n### Текст в изображение (генерация изображений)\n\nИзвестные поставщики:\n* [Интеграция OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Стабильная диффузия Text2Image](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Речь в текст (транскрипция аудио)\n\nИзвестные поставщики:\n* [Интеграция OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Речь в текст Local Whisper](https://apps.nextcloud.com/apps/stt_whisper)\n\nБолее подробная информация о том, как настроить это, находится в [администраторе документы](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)",
    "Assistant admin options saved" : "Администраторские опции ассистента сохранены",
    "Failed to save assistant admin options" : "Сбой сохранения администраторских опций ассистента",
    "Find more details on how to set up Assistant and recommended backends in the Administration documentation." : "Более подробную информацию о настройке Assistant и рекомендуемых бэкэндах можно найти в документации по администрированию.",
    "Select which features you want to enable" : "Выберите, какие функции вы хотите включить",
    "Top-right assistant" : "Ассистент в правом верхнем углу",
    "AI text generation smart picker" : "Генерация текста с помощью ИИ",
    "Text-to-image smart picker" : "Умный выбор текста в изображение",
    "Speech-to-text smart picker" : "Умный селектор для преобразования речи в текст",
    "Number of messages to consider for chat completions (excluding the user instructions, which is always considered)" : "Количество сообщений, которые следует учитывать при завершении чата (исключая инструкции пользователя, которые всегда учитываются)",
    "Try again" : "Попытаться снова",
    "Send request" : "Отправить запрос",
    "Show previous tasks" : "Показать прошлые задачи",
    "Close" : "Закрыть",
    "Close Nextcloud Assistant" : "Закрыть Помощника Nextcloud",
    "Less" : "Меньше",
    "More" : "Ещё",
    "Cancel" : "Отмена",
    "Error creating a new message" : "Ошибка при создании нового сообщения",
    "Invalid response received for a new conversation request" : "Получен неверный ответ на новый запрос на беседу",
    "Error creating a new conversation" : "Ошибка при создании нового диалога",
    "New conversation" : "Новый разговор",
    "Delete" : "Удалить",
    "Edit title" : "Редактировать заголовок",
    "Generate title" : "Генерация заголовка",
    "Creating a new conversation" : "Создание новой беседы",
    "Error loading messages" : "Ошибка загрузки сообщений",
    "Loading messages…" : "Загрузка сообщений…",
    "Cancel editing" : "Отменить редактирование",
    "Submit" : "Отправить ответ",
    "Type a message…" : "Набирает сообщение…",
    "Processing…" : "Обработка…",
    "You" : "Вы",
    "(empty message)" : "(пустое сообщение)",
    "Copy message" : "Копировать сообщение",
    "Delete message" : "Удалить сообщение",
    "Choose" : "Выберите",
    "Clear Selection" : "Отменить выбор",
    "integration" : "интеграция",
    "Assistant options saved" : "Опции ассистента сохранены",
    "Failed to save assistant options" : "Сбой сохранения опций ассистента",
    "AI image generation smart picker" : "Генерация изображений с помощью ИИ",
    "AI transcription smart picker" : "Умный селектор транскрипции ИИ",
    "Getting results…" : "Получение результатов…",
    "Cancel task" : "Отменить задачу",
    "Succeeded" : "Успешно",
    "Cancelled" : "Отменено",
    "Failed" : "Не удалось",
    "Running" : "Бег",
    "Scheduled" : "Запланированное",
    "Input" : "Ввод",
    "Result" : "Результат",
    "Error while recording audio" : "Не удалось записать звук",
    "Start recording" : "Начать запись",
    "Dismiss recording" : "Отменить запись",
    "End recording and send" : "Завершить запись и отправить",
    "Choose file" : "Выберите файл",
    "Choose a file" : "Выберите файл",
    "No file selected" : "Файлы не выбраны",
    "Could not copy to clipboard" : "Не удалось скопировать в буфер обмена.",
    "Upload from device" : "Загрузить с устройства",
    "Select from Nextcloud" : "Выбрать из Nextcloud",
    "Pick one or multiple files" : "Выберите один или несколько файлов",
    "Share" : "Поделиться",
    "Pick a file" : "Выберите файл",
    "Advanced" : "Дополнительно",
    "Result could not be copied to clipboard" : "Результат не может быть скопирован в буфер обмена",
    "Copy" : "Копировать",
    "Upload file" : "Загрузить файл",
    "Failed to schedule your task" : "Сбой планирования задачи",
    "This task does not exist or has been cleaned up" : "Эта задача не существует или удалена",
    "Failed to schedule the task" : "Не удалось запланировать задачу",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Поставщик преобразования речи в текст не найден. Чтобы использовать эту функцию, установите его из магазина приложений.",
    "Audio file not found." : "Аудиофайл не найден.",
    "Context write" : "Контекстная запись",
    "Writes text in a given style based on the provided source material." : "Пишет текст в заданном стиле на основе предоставленного исходного материала.",
    "Transcribe" : "Транскрибировать",
    "Generate image" : "Генерировать изображение",
    "Image request error" : "Ошибка запроса изображения",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "Это приложение предоставляет пользовательский интерфейс для использования функции обработки текста Nextcloud.\n\nОно позволяет пользователям запускать задачи ИИ, получать уведомления об их завершении и видеть результаты.\nПомощник также появляется в других приложениях, таких как Text, для легкой обработки частей документа.\n\nБолее подробная информация об API помощника OCS и возможностях интеграции с внешним интерфейсом приведена в\n[документе разработчика](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Как его использовать\n\nПоявляется новый пункт меню справа. После нажатия отображается помощник, и вы можете выбрать тип задачи и задать ввод, который хотите обработать.\n\nЗадача может быть запущена немедленно или запланирована в зависимости от оценки времени, предоставленной поставщиком ИИ.\nПосле того, как задача запланирована, она будет запущена как фоновое задание. По завершении вы получите уведомление,\nиз которого можно отобразить результаты.\n\nДругие приложения могут интегрироваться с помощником. Например, Text отобразит встроенную кнопку рядом с каждым абзацем,\nчтобы напрямую выбрать тип задачи для обработки этого абзаца. Выбор задачи таким образом откроет помощника с предварительно выбранной задачей и заданным текстом ввода.\n\nБолее подробная информация и скриншоты в [документе пользователя](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Функции\n\nВ помощнике список доступных задач зависит от доступных поставщиков, установленных через другие приложения.\nЭто означает, что у вас есть полная свобода в выборе того, какой сервис/программное обеспечение фактически будет выполнять ваши задачи ИИ.\n\n### Поставщики обработки текста\n\nНа данный момент [Большая языковая модель](https://github.com/nextcloud/llm#readme)\nи [интеграция OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai) приложения\nвключают поставщиков обработки текста для:\n* Обобщения\n* Извлечения тем\n* Генерации заголовка\n* Получения ответа из бесплатной подсказки\n* Переформулирования (только OpenAi/LocalAi)\n* Контекстного писателя: Генерация текста с указанным стилем. Стиль может быть описан или предоставлен с помощью примера текста.\n\n### Текст в изображение (генерация изображений)\n\nИзвестные поставщики:\n* [Интеграция OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Речь в текст (транскрипция аудио)\n\nИзвестные поставщики:\n* [Интеграция OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)",
    "Writing style" : "Стиль письма",
    "Source material" : "Исходный материал",
    "Type some text" : "Наберите какой-то текст",
    "Output" : "Вывод",
    "Reset" : "Сброс",
    "Unexpected server response" : "Неожиданный ответ сервера",
    "Choose Audio File" : "Выберите аудиофайл",
    "Record Audio" : "Запись аудио",
    "Stop recording" : "Остановить запись",
    "Selected Audio File:" : "Выбранный аудиофайл:",
    "Audio input" : "Аудиовход",
    "Unknown error" : "Неизвестная ошибка",
    "Image generation failed" : "Не удалось создать изображение",
    "Rate limit reached. Please try again later." : "Достигнут лимит скорости. Попробуйте еще раз позже.",
    "Unknown server query error" : "Неизвестная ошибка запроса сервера",
    "Image generation" : "Создание изображений",
    "Generated image" : "Сгенерированное изображение",
    "Estimated generation time left: " : "Расчетное оставшееся время генерации:",
    "Preview" : "Предварительный просмотр",
    "Unknown API error" : "Неизвестная ошибка API",
    "Send" : "Отправить",
    "Show/hide advanced options" : "Показать/скрыть дополнительные настройки",
    "Advanced options" : "Дополнительные настройки",
    "Copy link to clipboard" : "Скопировать ссылку в буфер обмена"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
