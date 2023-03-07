import Grid from '../image/grid.jpg';
import Сlamp from '../image/clamp.png';

const navigationList = [
  { title: '1-ое отделение', link: '*' },
  { title: '2-ое отделение', link: '*' },
  { title: 'Печь №5', link: '/one_department' },
  { title: 'Шихтовый двор', link: '/charge_yard' },
  { title: 'РММ 1-го отделения', link: '*' },
  { title: 'Участок производства порашковой проволоки', link: '*' },
  { title: 'Газоочистка 1-го отделения', link: '*' },
  { title: 'РММ 3-го отделения', link: '*' },
  { title: 'Газоочистка 3-го отделения', link: '*' },
  { title: 'Насосная оборотного цыкла', link: '*' },
  { title: '1-ое отделение', link: '*' },
];

const chargeYardList = [
  {
    list: [
      { title: 'Грохот кокса', link: '/coke-rumble' },
      { title: 'Грохот кварцита 3-е отделение', link: '*' },
      { title: 'Грохот квацита 1-е отделение', link: '*' },
    ],
    subTitle: 'Узел расссева',
  },

  {
    list: [
      { title: 'Кран 17900', link: '*' },
      { title: 'Кран 003', link: '*' },
      { title: 'Кран 009', link: '*' },
    ],
    subTitle: 'ГПМ',
  },

  {
    list: [
      { title: '4-х волковая', link: '/four-crusher' },
      { title: '2-х волковая', link: '*' },
      { title: 'Щековая дробилка кокса 3-е отделение', link: '*' },
      { title: 'Щековая дробилка кокса 1-е отделение', link: '*' },
    ],
    subTitle: 'Дробилки',
  },

  {
    list: [
      { title: 'Конвеер 9м', link: '*' },
      { title: 'Конвеер 9', link: '*' },
      { title: 'Конвеер 9А', link: '*' },
      { title: 'Конвеер 25', link: '*' },
      { title: 'Конвеер 24', link: '*' },
      { title: 'Конвеер 1', link: '*' },
      { title: 'Конвеер 2(реверсивный)', link: '*' },
      { title: 'Конвеер 3', link: '*' },
      { title: 'Конвеер 4', link: '*' },
    ],
    subTitle: 'Конвеера',
  },
];

const meshReplacement = {
  description: [
    { title: 'Размеры сетки 20мм:', src: Grid, alt: 'сетка' },
    { title: 'Размеры сетки 5мм: 1800х1200мм', src: '', alt: '' },
  ],
  tools: [{ title: 'Гвоздодер' }, { title: 'Молоток' }],
  spareParts: [{ title: 'Гвозди' }],
  sIZ: [{ title: 'Распиратор' }, { title: 'Страховочная привязь' }],
  safetyPrecautions: [
    { title: 'Забрать ключ бирку' },
    { title: 'Разобрать схему' },
  ],
};

const beltReplacement = {
  description: [{ title: 'Маркеровка ремней: Д(Г)-4500', src: '', alt: '' }],
  tools: [
    { title: 'Ключи 17-19' },
    { title: 'Нож' },
    { title: 'Большая отвертка или монтажка' },
  ],
  spareParts: [{ title: '?' }],
  sIZ: [{ title: 'Распиратор' }],
  safetyPrecautions: [
    { title: 'Забрать ключ бирку' },
    { title: 'Разобрать схему' },
  ],
};

const stoveNumberFive = [
  {
    list: [
      { title: 'Лебедка подката', link: '/roll-winch' },
      { title: 'Лебедка отката', link: '*' },
    ],
    subTitle: 'Ковшевоз',
  },
];

const ropeReplacement = {
  description: [
    { title: 'Канат: диаметр 24мм,длинна 40м', src: '', alt: '' },
    {
      title: 'Размеры жимка:130мм Х 50 мм ,по центрам отверстий 80мм',
      src: Сlamp,
      alt: 'хомут',
    },
  ],
  tools: [{ title: 'Ключи 22-24' }, { title: 'Молоток' }],
  spareParts: [{ title: 'Болт,гайка на 16' }],
  sIZ: [{ title: 'Распиратор' }],
  safetyPrecautions: [
    { title: 'Забрать ключ бирку' },
    { title: 'Разобрать схему' },
  ],
};

const searchList = [
  { value: 'замена сетки на грохоте кокса', link: '/mesh-replacement' },
  {
    value: 'замена каната(тросса) на лебёдке отката ковшевоза ',
    link: '/rope-replacement',
  },
  {
    value: 'замена ремней на 4х (четырёх) волковой дробилке',
    link: '/belt-replacement',
  },
];

export {
  navigationList,
  searchList,
  chargeYardList,
  stoveNumberFive,
  meshReplacement,
  ropeReplacement,
  beltReplacement,
};
