module.exports = (api) => {
  api.cache(false)

  const presets = [
    ['@babel/preset-env', {
      useBuiltIns: 'usage', // or "entry",
      corejs: 3,
      modules: false,
    }],
    '@babel/preset-react',
  ]

  return {
    presets,
  }
}
