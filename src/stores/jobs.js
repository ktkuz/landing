// src/stores/jobs.js
import { writable } from 'svelte/store';

export const jobs = writable([
	{ name: 'Графический дизайнер', engName: 'designer',
		responsibilities:
			[
				'Разработка и создание визуальных концепций',
				'Разработка баннеров, рисунков, логотипов и других графических элементов для сайта и ютуба',
				'Верстка рекламных баннеров на сайт. Сотрудничество с другими специалистами',
			],
		requirements: [
			'Знание продуктов Photoshop и Figma',
			'Наличие портфолио собственных проектов',
			'Опыт работы',
			'Оперативное выполнение задач',
			'Опыт работы в рекламе и знания в области интернет-маркетинга будут вашим преимуществом',
		],
		conditions: [
			'Удаленная работа',
			'Индивидуальный график',
			'Карьерный рост',
		],
		salary: '75000-150000',
	},
	{ name: 'Диктор', engName: 'speaker', responsibilities: [
			'Озвучивание различных текстов для радио, телевидения, рекламных роликов и других медиа-форматов',
			'Участие в записи аудиокниг и подкастов',
			'Подготовка и редактирование текстов перед записью',
			'Обеспечение качественной и четкой подачи информации',
			'Работа в тесном сотрудничестве с редакторами, звукорежиссерами и другими членами команды'
		],
		requirements: [
			'Отличная дикция и постановка голоса',
			'Умение читать текст с выражением и эмоциональной окраской',
			'Опыт работы диктором или в смежной области приветствуется',
			'Грамотная устная и письменная речь',
			'Умение быстро адаптироваться к разным стилям и жанрам текстов',
			'Ответственность и внимательность к деталям',
			'Знание основ звукозаписи и монтажа будет преимуществом'
		],
		conditions: [
			'Работа в профессиональной студии звукозаписи',
			'Гибкий график работы, возможна частичная занятость',
			'Конкурентоспособная заработная плата',
			'Возможность профессионального роста и развития',
		],
		salary: '50000-100000'
	},
	{ name: 'Саппорт в благотворительный фонд',
		engName: 'support',
		responsibilities: [
			'обратная связь',
			'организация работ',
			'подготовка отчетов по работе'
		],
		requirements: [
			'Грамотная речь - письменная и устная. Умение организовать свою мысль',
			'Высокая коммуникативность, дружелюбность. Развитые софт скиллы',
			'Стрессоустойчивость',
			'Умение работать с большими объемами информации и в потоке многозадачности',
			'Умение признавать свои ошибки и исправлять их.',
		],
		conditions: [
			'Удаленная работа',
			'Возможность профессионального обучения и карьерного роста',
			'Возможность влиять на жизнь нуждающихся, участвуя в благотворительных проектах',
			'Дружный и сплоченный коллектив',
		],
		salary: '50000-100000'
	},

	{ name: 'Менеджер в телеграм',
		engName: 'managerTg',
		responsibilities: [
			'Разработка и реализация стратегии развития Telegram-канала',
			'Создание и публикация качественного контента, привлекающего и удерживающего аудиторию',
			'Анализ показателей канала и оптимизация контент-стратегии на основе аналитических данных',
			'Поиск, планирование и закупка рекламных размещений на других платформах и в Telegram-каналах',
		],
		requirements: [
			'Опыт работы в управлении и продвижении Telegram-каналов от 2 лет',
				'Знание механизмов и инструментов Telegram, а также актуальных трендов в сфере SMM',
				'Опыт в планировании и проведении рекламных кампаний, умение оценивать их эффективность',
				'Отличные коммуникативные и организационные навыки',
				'Творческий подход, умение генерировать идеи и внедрять их в работу',
				'Способность работать удаленно и соблюдать сроки',
		],
		conditions: [
			'Удаленная работа',
			'Гибкий график',
			'Работа в инновационной и быстрорастущей компании',
		],
		salary: '50000'
	},

	{ name: 'Проверяющий выхода постов',
		engName: 'checker',
		responsibilities: [
			'Ежедневный мониторинг выхода постов в различных СМИ',
			'Проверка соответствия публикаций установленным требованиям и срокам',
			'Ведение подробного учета всех вышедших постов',
			'Составление регулярных отчетов о состоянии публикаций',
			'Взаимодействие с авторами и редакторами для решения возникающих вопросов'
		],
		requirements: [
			'Высокая степень внимательности и ответственности',
				'Опыт работы в аналогичной должности или в сфере медиа будет преимуществом',
				'Умение работать с большими объемами информации',
				'Отличные навыки организации и ведения отчетности',
				'Знание основных офисных программ (Excel, Google Sheets) и инструментов мониторинга',
				'Способность работать удаленно и соблюдать установленные сроки',
		],
		conditions: [
			'Удаленная работа',
			'Гибкий график',
			'Работа в инновационной и быстрорастущей компании',
		],
		salary: '50000'
	},

	{ name: 'SEO-специалист',
		engName: 'seo',
		responsibilities: [
			'Разработка и реализация SEO-стратегии для вывода лендингов в топ поисковых систем',
			'Проведение аудита сайтов и выявление точек для оптимизации',
				'Работа с ключевыми словами: исследование, подбор и внедрение',
	'Оптимизация контента и структуры сайта для улучшения позиций в поисковых системах',
	'Мониторинг и анализ эффективности проделанной работы, корректировка стратегий на основе полученных данных',
	'Отчетность по проделанной работе и достигнутым результатам',
		],
		requirements: [
			'Опыт работы SEO-специалистом от 3 лет, предпочтительно в сфере казино или букмекерских контор',
				'Подтвержденные успешные кейсы по выводу сайтов в топ',
				'Глубокие знания и понимание алгоритмов работы поисковых систем',
				'Умение проводить аудит сайтов и разрабатывать рекомендации по их улучшению',
				'Опыт работы с инструментами для SEO-анализа',
				'Способность работать на результат и эффективно управлять своим временем',
		],
		conditions: [
			'Удаленная работа',
			'Гибкий график',
			'Сдельная высокая оплата за достигнутый результат',
		],
		salary: '?'
	},

	{ name: 'Аналитик',
		engName: 'analitik',
		responsibilities: [
			'Сбор, обработка и анализ данных о пользователях, играх и маркетинговых кампаниях',
				'Разработка и внедрение методик для анализа ключевых показателей эффективности (KPI)',
				'Подготовка отчетов и презентаций для руководства с рекомендациями по улучшению бизнес-процессов',
				'Выявление и анализ трендов, пользовательских предпочтений и поведения',
				'Сотрудничество с командами маркетинга, продуктового развития и финансов для оптимизации стратегий и достижения бизнес-целей',
				'Мониторинг конкурентной среды и предоставление инсайтов для удержания лидирующих позиций на рынке',
		],
		requirements: [
			'Опыт работы аналитиком от 3 лет, предпочтительно в сфере онлайн-казино',
				'Глубокие знания в области статистического анализа и работы с большими объемами данных',
				'Опыт работы с аналитическими инструментами и программами (SQL, Python, R, Excel, Google Analytics и др.)',
	'Сильные аналитические и критические способности, внимание к деталям',
	'Умение ясно и четко представлять аналитические выводы и рекомендации',
	'Способность работать в динамичной и быстро меняющейся среде',
		],
		conditions: [
			'Удаленная работа',
			'Гибкий график',
			'Сдельная высокая оплата за достигнутый результат',
			'Конкурентоспособная заработная плата и бонусы по результатам работы'
		],
		salary: '?'
	},

	{ name: 'Менеджер',
		engName: 'manager',
		responsibilities: [
			'Разработка и внедрение стратегий для увеличения прибыли и улучшения пользовательского опыта',
				'Управление проектами, координация работы команд и контроль выполнения задач',
				'Анализ ключевых показателей эффективности (KPI) и разработка планов по их улучшению',
				'Оптимизация операционных процессов и повышение эффективности работы команды',
				'Участие в разработке и запуске новых продуктов и услуг',
				'Подготовка отчетов и предоставление рекомендаций для руководства',
		],
		requirements: [
			'Опыт работы на руководящих должностях в онлайн-казино от 3 лет',
				'Глубокие знания в области управления проектами и бизнес-анализа',
				'Отличные коммуникативные и лидерские качества',
				'Умение работать с аналитическими инструментами и программами (Excel, Google Analytics и др)',
	'Способность принимать стратегические решения и управлять изменениями',
		],
		conditions: [
			'Удаленная работа',
			'Гибкий график',
			'Сдельная высокая оплата за достигнутый результат',
			'Конкурентоспособная заработная плата и бонусы по результатам работы'
		],
		salary: '?'
	},
]);
