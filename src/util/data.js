import heury1 from '../img/projects/heury.png';
import heury2 from '../img/projects/heuryvid.mp4';
import heury3 from '../img/projects/heury3.png';
import wetrain1 from '../img/projects/wetrain.png';
import art1 from '../img/projects/artgal.png';
import market1 from '../img/projects/market.png';
import dmi1 from '../img/projects/dmi.png';

export const data = [
  {
    id: 'pr-1',
    name:'Heury',
    description: 'Web App based on React',
    team: false,
    previews: [
      {
        type: 'img',
        prev: heury1
      },
      {
        type: 'vid',
        prev: heury2
      },
      {
        type: 'img',
        prev: heury3
      }
    ],
    links: [
      {
        site: 'App, Try It!',
        link: 'https://daniel1martinez2.github.io/Heury/#/session'
      },
      {
        site: 'Github',
        link: 'https://github.com/Daniel1martinez2/Heury'
      },
      {
        site: 'Behance',
        link: 'https://www.behance.net/gallery/133164279/Heury-Heuristic-report-Web-App'
      },
    ]
  },
  {
    id: 'pr-2',
    name:'We Train',
    description: 'Social Network App',
    team: true,
    previews: [
      {
        type: 'img',
        prev: wetrain1
      },
    ],
    links: [
      
    ]
  },
  {
    id: 'pr-3',
    name:'Art Gallery',
    description: 'E-Commerce',
    team: false,
    previews: [
      {
        type: 'img',
        prev: art1
      },
    ],
    links: [
      {
        site: 'Web Page',
        link: ''
      },
      {
        site: 'Github',
        link: ''
      },
      {
        site: 'Behance',
        link: ''
      },
      {
        site: 'Dribble',
        link: ''
      },
    ]
  },
  {
    id: 'pr-4',
    name:'UX/UI design case',
    description: 'Usability research',
    team: true,
    previews: [
      {
        type: 'img',
        prev: market1
      },
    ],
    links: [
      {
        site: 'Behance',
        link: ''
      },
    ]
  },
  {
    id: 'pr-5',
    name:'Design contest: Trasnochón',
    description: 'First place',
    team: true,
    previews: [
      {
        type: 'img',
        prev: dmi1
      },
    ],
    links: [
      {
        site: 'Behance',
        link: ''
      },
    ]
  },

]

/**
 * [
    {
      state: 'front',
      name: 'c1',
      image: heury,
      title: 'Heury',
      description: 'Web App based on React',
      style:{},
      link: '/projects/pr-1'
    },
    {
      state: 'right',
      name: 'c2',
      image: wetrain,
      title: 'We Train',
      description: 'Social Network App',
      style:{},
      link: ''
    },
    {
      state: 'right',
      name: 'c3',
      image: artgal,
      title: 'Art Gallery',
      description: 'E-Commerce',
      style:{},
      link: ''
    },
    {
      state: 'right',
      name: 'c4',
      image: market,
      title: 'UX/UI design case',
      description: 'Usability research',
      style:{},
      link: ''
    },
    {
      state: 'right',
      name: 'c5',
      image: dmi,
      title: 'Design contest',
      description: 'First place',
      style:{},
      link: ''
    },
    {
      state: 'right',
      name: 'c6',
      image: nodi,
      title: 'Community app',
      description: 'HCI research',
      style:{},
      link: ''
    },
  ]
 */