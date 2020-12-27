'use strict';

const {watch, task, src, dest} = require('gulp'),
      {yellow, gray}           = require(`colors/safe`),
      sass                     = require(`gulp-sass`),
      sourcemaps               = require(`gulp-sourcemaps`),
      ts                       = require(`gulp-typescript`),
      error                    = error => {console.log(yellow(error.toString()))},
      scss_glob                = [`**/*.scss`, `!**/_*.scss`, `!node_modules/**/*`],
      uglify                   = require(`gulp-uglify-es`).default,
      scss_task                = src =>
	      src.pipe(sourcemaps.init())
	         .pipe(sass()).on(`error`, error)
	         .pipe(sourcemaps.write())
	         .pipe(dest('.')),
      ts_glob                  = [`**/*.ts`, `!**/*.d.ts`, `!node_modules/**/*`],
      ts_task                  = src => src
	      .pipe(sourcemaps.init())
	      .pipe(ts.createProject(`tsconfig.json`)()).on(`error`, error)
	      .pipe(uglify()).on(`error`, error)
	      .pipe(sourcemaps.write())
	      .pipe(dest(`.`));

task(`watch`, cb => {
	// callback
	cb();

	// scss
	watch(scss_glob).on(`change`, path => {
		console.log(gray(path));
		scss_task(src(path, {base: `.`, sourcemaps: true}));
	});

	// ts
	watch(ts_glob).on(`change`, path => {
		console.log(gray(path));
		ts_task(src(path, {base: `.`, sourcemaps: true}));
	});

});

task(`scss`, cb => {
	cb();
	scss_task(src(scss_glob, {base: `.`, sourcemaps: true}));
});

task(`ts`, cb => {
	cb();
	ts_task(src(ts_glob, {base: `.`, sourcemaps: true}));
});