// import { FuseNavigation } from '@fuse/types';

export const navItems: any[] = [
  {
    id: '0',
    moduleId: 0,
    parentId: null,
    title: 'Home',
    // translate: "nav.dashboard",
    url: '/home',
    type: 'item',
    icon: 'dashboard'
  },
  {
    id: '1',
    moduleId: 1,
    parentId: null,
    title: 'Message List',
    // translate: "nav.analysis",
    url: '/message-list',
    type: 'item',
    icon: 'supervised_user_circle'
  },
  {
    id: '2',
    moduleId: 2,
    parentId: null,
    title: 'Provider',
    // translate: "nav.analysis",
    url: '/provider',
    type: 'item',
    icon: 'supervised_user_circle'
  },
  {
    id: '3',
    moduleId: 3,
    parentId: null,
    title: 'Channel',
    // translate: "nav.analysis",
    url: '/channel',
    type: 'item',
    icon: 'supervised_user_circle'
  },
  {
    id: '4',
    moduleId: 4,
    parentId: null,
    title: 'Currency',
    // translate: "nav.analysis",
    url: '/currency',
    type: 'item',
    icon: 'supervised_user_circle'
  },
  {
    id: '5',
    moduleId: 5,
    parentId: null,
    title: 'Search Data Group',
    // translate: "nav.analysis",
    url: '/search_data_group',
    type: 'item',
    icon: 'supervised_user_circle'
  },
  {
    id: '6',
    moduleId: 6,
    parentId: null,
    title: 'Rule-Engine',
    // translate: "nav.analysis",
    // url: '/search_data_group',
    type: 'collapsable',
    icon: 'supervised_user_circle',
    children: [
      {
        id: '7',
        moduleId: 7,
        parentId: '6',
        title: 'Rule Params',
        url: '/rule-engine/rule-param',
        type: 'item',
        icon: 'supervised_user_circle'
      },
      {
        id: '8',
        moduleId: 8,
        parentId: '6',
        title: 'Rules',
        url: '/rule-engine/rule',
        type: 'item',
        icon: 'supervised_user_circle'
      }
    ]
  }
];
