import { sidebarProps } from '.'

export const mock_sidebar = {
  links: [
    {
      link: '/home/1',
      newTab: false,
      text: 'Sobre mim',
    },
    {
      id: 'link-2',
      link: '/home/2',
      newTab: false,
      text: 'MyPomo',
    },
    {
      id: 'link-3',
      link: '/home/3',
      newTab: false,
      text: 'MyProjects',
    },
    {
      id: 'link-4',
      link: 'http://localhost/home/4',
      newTab: false,
      text: 'MyPlop',
    },
    {
      id: 'link-5',
      link: '/home/5',
      newTab: false,
      text: 'MyDocuments',
    },
    {
      id: 'link-6',
      link: '/my-learning',
      newTab: false,
      text: 'MyLearning',
    },
  ],
  title: 'Brian',
  srcLogo: '/avatar.jpg',
} as sidebarProps
