const path = require('path')

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
    entry: path.resolve(__dirname, 'src'),
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        port: 4200,
        hot: true
    }
}