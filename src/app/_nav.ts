import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Demo',
    url: '/demo',
    icon: 'fa fa-user',
    children: [
      {
        name: 'Users',
        url: '/demo/users',
        icon: 'fa fa-users'
      },
      {
        name: 'Add User',
        url: '/demo/add-user',
        icon: 'fa fa-plus'
      },
    ]
  },
];
