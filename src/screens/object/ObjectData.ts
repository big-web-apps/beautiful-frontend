export const comments = [
  {
    postedAt: '10 минут назад',
    body: '<p>Я использую <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Ava Group</a> для покупки недвижимости, у них лучшие менеджеры',
    author: {
      name: 'Яков Якоб',
      image:
        'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    },
  },
  {
    postedAt: '19 минут назад',
    body: 'Окупается аренда за 29 лет? Это даже без учета ремонта и налогов. Какие квартиры...',
    author: {
      name: 'Артем Якоы',
      image:
        'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    },
  },
  {
    postedAt: '56 минут назад',
    body: 'Доллары скоро изымут из оборота, юани не найти, купил эту квартиру и жду...',
    author: {
      name: 'Михаил М',
      image:
        'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    },
  },
];

export interface ObjectModel {
  apartment_complex: apartment_complex;
  id: number | null;
  rooms: number | null;
  floor: number | null;
  liter_name: string | null;
  districts: string | null;
  meter_price: number | null;
  price: number | null;
  image: string | null;
  url: string | null;
  square: number | null;
  sale_price: number | null;
  living_square: number | null;
  coefficient: number | null;
}

export interface apartment_complex {
  id: number | null;
  name: string | null;
  address: string | null;
  class_type: string | null;
  image: string | null;
  latitude: number;
  longitude: number;
}
