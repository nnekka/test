const smartgrid = require('smart-grid');
const settings = {
  outputStyle: 'less',
  columns: 10,
  offset: '15px',
  mobileFirst: false,
  container: {
    maxWidth: '1410px',
    fields: '15px'
  },
  breakPoints: {
    slg: {
      width: '2560px',
      fields: '15px'
    },
    lg: {
      width: '1410px',
      fields: '15px'
    },
    smd: {
      width: '1100px',
      fields: '15px'
    },
    md: {
      width: '960px',
      fields: '15px'
    },
    sm: {
      width: '720px',
      fields: '10px'
    },
    xs: {
      width: '321px',
      fields: '5px'
    },
    my: {
      width: '1175px',
      fields: '15px'
    }
  }
};

smartgrid('src/styles/', settings);

