const config = {

  port: process.env.PORT || 8000,

  ITEMS_PER_PAGE: 100,

  defaultPropertyOrder: 'name',

  defaultSortStatus: {
    id: false,
    name: true,
    city: false,
    gender: false,
    atheist: false,
  },
};

export default config;
