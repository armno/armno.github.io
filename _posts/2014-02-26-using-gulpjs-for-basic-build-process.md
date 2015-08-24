---
title: "ใช้งาน Gulp.js"
description: "Gulp.js นั้นเป็น build tool/task runner ช่วยให้เราลดเวลาของขั้นตอนการทำงานซ้ำๆ ใน build process ไปได้เยอะ (sass/minify/concat js/html) เป็น tool ลักษณะเดียวกับ Grunt แต่ config คนละแบบครับ"
layout: post
published: true
thumbnail: http://farm6.staticflickr.com/5487/12794346545_facca0edf4_c.jpg
tags: gulp tooling buildtools
---

ปกติเมื่อเราทำเว็บ ก็จะมีสิ่งที่ต้องทำเป็นประจำอยู่จำนวนหนึ่ง เช่น

- minify HTML/JavaScript/CSS หรือ รวมเป็นไฟล์ 1 ไฟล์
- optimize รูปให้มีขนาดเล็กลง
- compile Sass/Less
- run tests

ขั้นตอนเหล่านี้เป็นส่วนหนึ่งของ build process ที่จำเป็นต้องทำซ้ำๆ อยู่ตลอดเวลา [Gulp](http://gulpjs.com) เป็นตัวช่วยรัน task เหล่านี้ให้อัตโนมัติในระหว่างที่เรากำลัง develop อยู่ได้ครับ (อารมณ์แบบเปิดบอทเวลาเล่นเกม) ซึ่งเรายังสามารถสร้างเงื่อนไขในการรันแต่ละ task ให้ต่างกันได้ด้วย

ถ้าใครใช้ [Grunt](http://gruntjs.com/) อยู่ก็จะพบว่าเป็น tool ลักษณะเดียวกัน เพียงแต่มีแนวคิดในการ config คนละแบบ และ gulp มี built-in watcher มาให้ตั้งแต่แรก

![gulp logo](http://farm4.staticflickr.com/3778/12794817294_bd522b5461_z.jpg)

## ติดตั้ง Gulp

ก่อนติดตั้ง Gulp ต้องมี node อยู่ในเครื่องก่อน จากนั้นก็ติดตั้งผ่าน command

{% highlight bash %}
$ npm install -g gulp
{% endhighlight %}

## 1st Gulp task

ลองทำ task ง่ายๆ ให้ Gulp log คำว่า `lorem ipsum` ใน console ทุกครั้งที่เรา save ไฟล์ index.html

{% highlight bash %}
$ mkdir firstgulp
$ cd firstgulp
{% endhighlight %}

อันดับแรกต้องติดตั้ง package `gulp` แบบ local (ใน project) ก่อน

{% highlight bash %}
$ npm install --save-dev gulp
{% endhighlight %}

จากนั้นสร้างไฟล์ใหม่ชื่อว่า `gulpfile.js` (เทียบได้กับ `Grunfile.js` ของ Grunt) เพื่อเขียน task แรกกัน

{% highlight js %}
var gulp = require('gulp');

gulp.task('lorem', function() {
  console.log('lorem ipsum');
});

gulp.task('default', function() {
  gulp.watch('index.html', ['lorem']);
});
{% endhighlight %}

เสร็จแล้วก็แค่รัน

{% highlight bash %}
$ gulp
{% endhighlight %}

![gulp-lorem](http://farm6.staticflickr.com/5487/12794346545_facca0edf4_c.jpg)

ในความเป็นจริงคงไม่มีใครใช้ gulp เพื่อ `console.log`  เพียงอย่างเดียว มาดู use case ที่ใช้งานกันจริงๆ ดีกว่า

## ใช้ Gulp compile Sass

เราลองมาตั้งค่าให้ Gulp compile Sass ให้เป็น css กัน หลักการง่ายๆ ก็คือสร้าง watcher task สำหรับไฟล์ `.scss` เมื่อไฟล์เหล่านี้ถูกแก้ไข ก็ให้ Gulp compile Sass ให้ครับ

Gulp plugin ของ Sass นั้นมีอยู่ 2 ตัวคือ [gulp-sass](https://github.com/dlmanning/gulp-sass) กับ [gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass) ซึ่ง gulp-sass นั้นทำงานได้เร็วกว่าก็จริง แต่ไม่ support indented syntax (`.sass`) ดังนั้นผมจึงเลือกใช้ gulp-ruby-sass แทน

อันดับแรกต้องลง Gulp plugin ที่ชื่อว่า `gulp-ruby-sass` ก่อน

{% highlight bash %}
$ npm install --save-dev gulp-ruby-sass
{% endhighlight %}

จากนั้นใน gulpfile.js ก็โหลด module gulp-ruby-sass เข้ามาใช้ และก็เพิ่ม watch task เข้าไปครับ

{% highlight js %}
// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('css', function(){
  return sass('sass/')
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
  gulp.watch('sass/**/*.sass', ['css']);
});
{% endhighlight %}

ทุกครั้งที่เรา save ไฟล์ `.sass` ใน directory 'sass' (รวมถึง sub-directory) gulp ก็จะรัน task css ซึ่ง compile Sass เป็น CSS ตาม directory ปลายทางที่ระบุไว้

> `pipe()` ของ Gulp ก็คล้ายๆ กับ [pipe ของ Unix](http://en.wikipedia.org/wiki/Pipeline_(Unix)) เลยครับ รับ output ของ command แรกไปเป็น input ของ command ต่อไป (และต่อไปเรื่อยๆ)

## เพิ่ม task อีก

ลองให้ Gulp จัดการหลายๆ task พร้อมๆ กัน คือการ concatenate JavaScript, minify JavaScript และ minify HTML รวดเดียว

ก่อนอื่นต้องติดตั้ง plugin ที่จะใช้ก่อน

{% highlight bash %}
$ npm install --save-dev gulp-concat gulp-uglify gulp-htmlmin
{% endhighlight %}

จากนั้นเพิ่ม watcher กับ task เข้าไป

{% highlight js %}
// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

gulp.task('css', function(){
  return sass('sass/')
        .pipe(gulp.dest('./css'));
});

gulp.task('js', function(){
  return gulp.src([
        './src/js/model.js',
        './src/js/controller.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('html', function() {
  return gulp.src(['./src/index.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['css', 'js', 'html'], function() {
  gulp.watch('./sass/**/*.sass', ['css']);
  gulp.watch('./src/**/*.js', ['js']);
  gulp.watch('./src/index.html', ['html']);
});
{% endhighlight %}

หรือเขียนอีกสไตล์หนึ่ง ให้รัน build task ทุกครั้งที่เราแก้ไขไฟล์ครับ (แต่จะดูสิ้นเปลืองไปหน่อยถ้าโปรเจ็คมีขนาดใหญ่ เพราะต้องรันทุก task)

{% highlight js %}
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

gulp.task('build', function() {
    sass('/sass')
        .pipe(gulp.dest('./css'));

    gulp.src([
        './src/js/model.js',
        './src/js/controller.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));

    gulp.src(['./src/index.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', function() {
  gulp.watch('./src/**/*', ['build']);
});
{% endhighlight %}

ด้วยความที่ gulpfile.js มีลักษณะคล้าย node app จึงมีวิธีเขียนได้หลายแบบ ได้ผลออกมาเหมือนกันครับ (คนที่เขียน nodejs เป็นอยู่แล้วน่าจะชอบ Gulp) นอกจากนี้ Gulp ยังมี plugin เพิ่มขึ้นเรื่อยๆ คาดว่าจะเป็น tool อีกตัวที่ได้รับความนิยมเพิ่มขึ้นในปี 2014 ครับ

ลองเล่นกันดูนะ
