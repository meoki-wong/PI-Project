const autoprefixer = require('autoprefixer'); // 浏览器前缀处理工具
const pxtorem = require('postcss-pxtorem'); // 可以把px自动切换为rem，如果需要使用px的时候改成 px 就可以生效

const config = {
    outputDir: 'dist',
    publicPath: './',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5, // 换算的基数 37.5px = 1rem
                        propList: ['*'] // 属性的选择器，*表示通用与所有选择器
                    })
                ]
            }
        }
    },
    devServer: {
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
     },
        // inline: true
    }
}


module.exports = config;