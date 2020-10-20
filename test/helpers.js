const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Farzad Sunavala',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Farzad Sunavala',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Farzad Sunavala',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Farzad Sunavala',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Farzad Sunavala',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
