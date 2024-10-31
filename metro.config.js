const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
      babelTransformer: {
        throwIfNamespace: false, // Namespace xatolarini o'chirish
      },
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
