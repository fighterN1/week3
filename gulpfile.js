var gulp = require("gulp"),
    babel = require("gulp-babel"),
    es2015 = require("babel-preset-es2015");

gulp.task("default", function() {
    gulp.src("./src/nodeuii/**/*")
        .pipe(babel({ presets: [es2015] }))
        .pipe(gulp.dest("./build/nodeuii"))
});