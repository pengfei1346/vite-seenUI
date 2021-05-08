const { series, src, dest } = require('gulp')
const sass = require('gulp-dart-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')

// 定义重命名白名单
const noElPrefixFile = /(index|base|reset|display)/

function compile() {
    return src('./src/*.scss')  // 处理scss文件
        .pipe(sass.sync())
        .pipe(autoprefixer({}))
        .pipe(cssmin())
        .pipe(rename(function (path) {
            if(!noElPrefixFile.test(path.basename)) {
                path.basename = `s-${path.basename}`
            }
        })) //  重命名
        .pipe(dest('./lib'))  // 处理完成后保存的目录
}

function copyfont() { // 拷贝字体样式
    return src('./src/fonts/**')
        .pipe(cssmin())
        .pipe(dest('./lib/fonts'))
}

exports.build = series(compile, copyfont);