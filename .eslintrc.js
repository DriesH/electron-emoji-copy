module.exports = {
  extends: 'react-app',
  globals: {
    __IS_ELECTRON__: true,
  },
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
  },
};
