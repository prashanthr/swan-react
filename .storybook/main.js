module.exports = {
  stories: ['../stories/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
