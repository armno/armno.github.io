---
layout: blog
title: "ใช้งาน Bower"
description: Bower เป็น client-side package manager จากทาง Twitter ใช้สำหรับติดตั้ง / ค้นหา / อัพเดท 3rd-party package ได้สะดวกมาก ทำได้ผ่าน Terminal ครับ
published: false
---

ปกติแล้วเวลาเราจะติดตั้ง package หรือ plugin สักตัว สิ่งที่ต้องทำก็คือ (สมมุติ jQuery)

1. เข้าเว็บ [jquery.com](http://jquery.com/)
2. กดปุ่ม download
3. unzip แล้ว copy ไฟล์ไปไว้ใน directory ที่ทำงานอยู่
4. เพิ่ม path ในไฟล์ html

หรือสะดวกขึ้นมาหน่อยก็จะใช้ plugin ของ editor อย่าง [Nettuts+ Fetch](http://armno.in.th/2012/09/09/sublime-text-2-nettuts-fetch/) แต่ก็ยังไม่สะดวกสำหรับการหา package ใหม่ หรือการอัพเกรดเวอร์ชั่นของ package เดิม Bower ช่วยแก้ปัญหาเหล่านี้ได้ครับ

[Bower](http://bower.io) เป็น client-side package manager จากทาง Twitter ใช้สำหรับติดตั้ง / ค้นหา / อัพเดท 3rd-party package ได้สะดวกมากขึ้น ทำได้ผ่าน Terminal ที่เดียวเลย

### ติดตั้ง Bower

ก่อนติดตั้ง Bower นั้น ในเครื่องต้องมี Node กับ Git อยู่ก่อน ซึ่งหากติดตั้งไว้แล้วก็สามารถติดตั้ง Bower ได้จาก command

<pre class="language-bash"><code>$ npm install -g bower</code></pre>

### ติดตั้ง package ผ่าน Bower

สมมุติว่าเราต้องการติดตั้ง jQuery ก็เพียงแค่รัน

<pre class="language-bash"><code>$ bower install jquery</code></pre>

หรือจะเป็น package CSS ก็ได้ เช่น Normalize.css

<pre class="language-bash"><code>$ bower install normalize-css</code></pre>

ซึ่งโดยปกติแล้ว package ที่ติดตั้งผ่าน Bower ก็จะถูกเก็บไว้ใน directory `bower_components` ครับ (เปลี่ยนได้)

![bower_components directory](http://farm6.staticflickr.com/5547/11545868783_3fc7fa6775_o.png)

ในไฟล์ html เราก็โหลดไฟล์เข้ามาตามปกติ

### `bower search`

### `bower list` / `bower update`

### `bower init`

### `bower.json` / `.bowerrc`

### sublime-bower

#### resources
