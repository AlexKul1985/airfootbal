const gulp = require('gulp');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const less = require('gulp-less');
const concat = require('gulp-concat');
const del = require('del');
const plumber = require("gulp-plumber");
const rigger = require("gulp-rigger");
const notify = require("gulp-notify");
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const spritesmith = require("gulp.spritesmith");
const gutil = require('gulp-util');
const ftp = require('gulp-ftp');



const config = {
    src: {
        main:'./src',
        temp:'/template/pages/index.html',
        html:'/',
        less: '/less/*.*',
        css:'/css/',
        jsPre:'/js/',
        jsLib:['./src/libs/jquery/jquery.js','./src/libs/slick/slick.js','./src/js/polyfill/AddEventListener.js','./src/js/polyfill/querySelector.js','./src/js/polyfill/classList.js','./src/js/mysripts/hendSubmitObject.js','./src/js/mysripts/main.js'],// Установка порядка конкатенации JS файлов
        img:'/image/*.*',
        fonts:'/fonts/**/*.*',
        sprite:'/image/sprite/',
        spriteName:'sprite.png'
    },
    build: {
        main:'./build',
        html:'./build/',
        css:'/css/',
        js:'/js/',
        img:'/image/',
        fonts:'/fonts/'
    },
    watch:{
        temp: ['./src/template/modules/*.html','./src/template/sections/*.html'],
        html:'./src/*.html',
        less:'./src/less/**/*.*',
        css:'./src/css/style.css',
        js:['./src/js/**/*.js','./src/libs/**/*.js'],
        jsPost:['./src/js/all.min.js']
    }
        
};

        
 
 gulp.task('html', function() {
     gulp.src(config.src.main+config.src.temp)
        .pipe(rigger())
        .pipe(gulp.dest(config.src.main+config.src.html))
        .pipe(browserSync.reload({
            stream: true
        }));
         
       
});


 gulp.task('css',function(){
    gulp.src(config.src.main+config.src.less)
        .pipe(less())
        .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
        
        .pipe(gcmq())
        .pipe(sourcemaps.init())
     .pipe(autoprefixer({
                browsers: ['> 0.001%','ie 9','ie 8','ie 7'],
                cascade: false
            }))
             .pipe(cleanCSS({
                 level: 2
             }))
             .pipe(sourcemaps.write('.'))

            .pipe(gulp.dest(config.src.main + config.src.css))
            .pipe(browserSync.reload({
                stream: true
            }));

 });

 gulp.task('js',function(){
    gulp.src(config.src.jsLib)
        .pipe(sourcemaps.init())
        .pipe(concat('all.min.js'))
        
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.src.main + config.src.jsPre))
        .pipe(browserSync.reload({
            stream: true
        }));
 });


 gulp.task('build:fonts', function(){
    gulp.src(config.src.main + config.src.fonts)
        .pipe(gulp.dest(config.build.main + config.build.fonts));
});

gulp.task('build:img', function(){
    gulp.src(config.src.main + config.src.img)
        .pipe(imagemin({
            progressive: true,
            use:[pngquant()]
        }))
        .pipe(gulp.dest(config.build.main + config.build.img));
});


 gulp.task('del', function(){
    let path = config.build.main + '/*';
    
    if(path.substr(0, 1) === '/'){
        console.log("never delete files from root :)");
    }
    else{
        del.sync(path);
    }
});   


gulp.task('cleansprite', function() {
    return del.sync(config.src.main + config.src.sprite + config.src.spriteName);
});



gulp.task('spritemade', function() {
    var spriteData =
        gulp.src(config.src.main + config.src.sprite + '*.*')
        .pipe(spritesmith({
            imgName: config.src.spriteName,
            cssName: 'sprite.less',
            padding: 5,
             cssVarMap: function(sprite) {
                sprite.name = 's-' + sprite.name;
            }
            
        }));

    spriteData.img.pipe(gulp.dest(config.src.main + config.src.sprite)); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest(config.src.main+'/less/lib/')); // путь, куда сохраняем стили
});

gulp.task('sprite', ['cleansprite', 'spritemade']);//Сборка спрайта


gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: config.src.main
        }
    });
});


gulp.task('build',['js','css','build:img','build:fonts'],function(){
    gulp.src(config.src.main+'/*.html')
    .pipe(gulp.dest(config.build.main));
    gulp.src(config.src.main + config.src.css+'style.css')
    .pipe(gulp.dest(config.build.main + config.build.css));
    gulp.src(config.src.main + config.src.jsPre+'all.min.js')
    .pipe(uglify())
    .pipe(gulp.dest(config.build.main + config.build.js));
    gulp.src(config.src.main + config.src.sprite + config.src.spriteName) 
    .pipe(imagemin({
            progressive: true,
            use:[pngquant()]
        }))
      .pipe(gulp.dest(config.build.main + config.build.img+'sprite/'));
      browserSync.init({
        server: {
            baseDir: config.build.main
        }
    });
});

    
gulp.task('watch', ['browserSync','html','css','js'], function () {
    gulp.watch(config.watch.temp,['html']);
    gulp.watch(config.watch.html, browserSync.reload);
    gulp.watch(config.watch.less,['css']);
    gulp.watch(config.watch.js,['js']);
    
});

gulp.task('postbuild',function(){
      browserSync.init({
        server: {
            baseDir: config.build.main
        }
    });
    
});
gulp.task('send:html',function(){
	gulp.src(config.src.main+'/*.html')
    .pipe(gulp.dest(config.build.main));
    
});
gulp.task('send:css',function(){
	gulp.src(config.src.main + config.src.css+'style.css')
    .pipe(gulp.dest(config.build.main + config.build.css));
   
});
gulp.task('send:js',function(){
	 gulp.src(config.src.main + config.src.jsPre+'all.min.js')
    .pipe(uglify())
    .pipe(gulp.dest(config.build.main + config.build.js));
    
});
gulp.task('send:sprite',function(){
	 gulp.src(config.src.main + config.src.sprite + config.src.spriteName) 
    .pipe(imagemin({
            progressive: true,
            use:[pngquant()]
        }))
      .pipe(gulp.dest(config.build.main + config.build.img+'sprite/'));
     
});
gulp.task('watchbuild',function(){
	gulp.watch(config.watch.pug,['html']);
    gulp.watch(config.watch.html, ['send:html']);
    gulp.watch(config.watch.less,['css']);
    gulp.watch(config.watch.css,['send:css']);
    gulp.watch(config.watch.js,['js']);
    gulp.watch(config.watch.jsPost,['send:js']);
});
gulp.task('default',['watch']);
// gulp.task('ftp', function () {
//     return gulp.src('build/*')
//         .pipe(ftp({
//             host: '92.53.96.30',
//             user: 'cu32630',
//             pass: 'o6ihr668usjt'
//         }))
//         .pipe(gutil.noop());
//     });
       
       
       

        


