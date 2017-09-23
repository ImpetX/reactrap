var autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer(
            {
               browsers: ["last 10 versions", "not ie < 10", "not OperaMini > 0", "not UCAndroid > 0", "not QQAndroid > 0"]
            }
        )
    ]
}