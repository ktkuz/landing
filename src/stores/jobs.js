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
	{ name: 'Диктор', responsibilities: [
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
]);
