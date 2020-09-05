'use strict';

const {watch, task, src, dest} = require('gulp'),
      {yellow, gray}           = require(`colors/safe`),
      {log}                    = require(`gulp-util`),
      sourcemaps               = require(`gulp-sourcemaps`),
      ts                       = require(`gulp-typescript`),
      error                    = error => {log(yellow(error.toString()))};

task(`watch`, cb => {
	// callback
	cb();

	// scss
	const sass = require(`gulp-sass`);
	watch([`**/*.scss`, `!**/_*.scss`, `!node_modules/**/*`], {queue: false}).on(`change`, path => {
		log(gray(path));
		src(path)
			.pipe(sourcemaps.init())
			.pipe(sass()).on(`error`, error)
			.pipe(sourcemaps.write())
			.pipe(dest('.'));
	});

	// ts
	const fs       = require(`fs`);
	const tsconfig = JSON.parse(fs.readFileSync(`tsconfig.json`));
	watch([`**/*.ts`, `!**/*.d.ts`, `!node_modules/**/*`], {queue: false}).on(`change`, path => {
		log(gray(path));
		src(path)
			.pipe(sourcemaps.init())
			.pipe(ts(tsconfig.compilerOptions)).on(`error`, error)
			.pipe(sourcemaps.write())
			.pipe(dest(`.`));
	});

});

const tsProject = ts.createProject('extension-opera/extension/tsconfig.json');
task('ts', () => tsProject.src().pipe(tsProject()).js.pipe(dest(file => file.base)));