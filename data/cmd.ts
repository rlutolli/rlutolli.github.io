// Command data for RollingMenu

export type Action = {
  icon?: React.ReactNode;
  id: string;
  keywords?: string[];
  section?: string;
  shortcut?: string;
  title: string;
  url?: string;
};

export const actions: Action[] = [
  {
    icon: 'HomeIcon',
    id: 'home',
    keywords: ['home', 'index', 'main'],
    section: 'Navigation',
    title: 'Home',
    url: '/',
  },
  {
    icon: 'GitHubLogo',
    id: 'github',
    keywords: ['github', 'gh', 'code', 'open source'],
    section: 'Social',
    title: 'GitHub',
    url: 'https://github.com/rlutolli',
  },
  {
    icon: 'TwitterLogo',
    id: 'twitter',
    keywords: ['twitter', 'x', 'tweet', 'social'],
    section: 'Social',
    title: 'Twitter',
    url: 'https://x.com/rlutolli23',
  }
];
