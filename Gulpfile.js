var fs = require('fs'),
    gulp = require("gulp"),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

var srcPath = "study/qmgj/view/",
    distPath = "study-dist/";
var isday = "/day06";
/*
 * @desc less文件监听、编译
 */
gulp.task('less', function() {
    var onError = function(err) {
        plugins.notify.onError({
            title: "Gulp",
            subtitle: "Failure!",
            message: "less error: <%= error.message %>",
            sound: "Beep"
        })(err);
        this.emit('end');
    };
    return gulp.src([ srcPath + '**/*.less'])
        .pipe(plugins.plumber({
            errorHandler: onError
        }))
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer({
            browsers: ['last 20 versions'],
            cascade: true
        }))
        // .pipe(plugins.minifyCss())
        .pipe(gulp.dest( srcPath ))
        .pipe(plugins.livereload());
});
/*
 * @desc less html变化 刷新浏览器 livereload
 */
gulp.task('look', function() {
    plugins.livereload.listen();
    gulp.watch([srcPath + '**/*.less'], ['less']);
});
/*
 * @desc js校验
 */
function jsHintrc(e){
    var onError = function(err) {
        plugins.notify.onError({
            title:    "Gulp",
            subtitle: "Failure!",
            message:  "js代码不规范,看控制台先!!!",
            sound:    "Beep"
        })(err);
        this.emit('end');
    };
    gulp.src( e.path,{ base: srcPath } )
        .pipe(plugins.plumber({errorHandler: onError}))
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter(function (result, data, opt){
            if( result ){
                console.log( result );
            }
            return result;
        }))
        .pipe(plugins.jshint.reporter('fail'))
        .pipe(plugins.notify({
            title: 'Gulp',
            subtitle: 'success',
            message: 'js OK now',
            sound: "Pop"
        }))
}
/*
 * @desc 清理dist目录文件
 */
gulp.task("clean", function() {
    return gulp.src(distPath, {
            read: false
        })
        .pipe(plugins.rimraf());
});

/*
 * @desc 复制文件到dist目录
 */
gulp.task("copy", function() {
    return gulp.src([
            srcPath + '**/*.*',
            '!' + srcPath + 'assets/**/*/all.css',
            '!' + srcPath + "assets/svg/**/*.*"
        ])
        .pipe(gulp.dest(distPath))
});
var jsArrday = [srcPath + isday +'/app/app.js',srcPath + isday +'/app/controller/**/*.js'];
gulp.task('watchjs', function() {
    plugins.livereload.listen();
    gulp.watch( jsArrday,["concatjs"])
});
gulp.task("concatjs",function(){
        return gulp.src(jsArrday)
        .pipe(plugins.uglify({
            mangle: true,
            compress: {
                drop_console: true
            }
        }))
        .pipe(plugins.concat("app.min.js"))
        .pipe(gulp.dest(srcPath +  isday +'/app/'));
});


/*
 * @desc 默认监听less文件和html转为jst函数
 */
gulp.task("default", ['localhost','look']);

gulp.task('localhost', function() {
    plugins.connect.server({
        root: './study/',
        port: 8090
    });
});

gulp.task('localhost2', function() {
    plugins.connect.server({
        root: './music/',
        port: 8092
    });
});
