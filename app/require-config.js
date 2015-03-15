
var rootPath = './';
var modulesPath = rootPath + 'scripts/modules';

require.config({
	baseUrl: rootPath,
    paths: {
        modules: modulesPath
    }
});