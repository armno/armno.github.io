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

![include bower packages](http://farm3.staticflickr.com/2829/11558637724_eb298ff7b3_o.png)

ปกติแล้ว `bower install` จะติดตั้ง package เวอร์ชั่นล่าสุดให้เราเสมอ แต่เราก็สามารถระบุเวอร์ชั่นของ package ที่จะติดตั้งได้ โดยเพิ่ม `#<version>` ต่อท้ายเข้าไปหลังชื่อ package ครับ (ของผมต้องใส่ `"` ครอบเพราะเวลาพิมพ์เครื่องหมาย `#` แล้ว zsh มันบ่นครับ)

<pre class="language-bash"><code>$ bower install "jquery#1.9"</code></pre>

### ค้นหา package

ทำได้ผ่าน command `bower search <package name>` ครับ เช่นผมต้องการหา normalize ก็

<pre class="language-bash"><code>$ bower search normalize</code></pre>

สามารถใช้ `grep` ในการฟิลเตอร์ผลการค้นหาได้ครับ เช่น

<pre class="language-bash"><code>$ bower search normalize | grep bootstrap</code></pre>

![bower search](http://farm6.staticflickr.com/5478/11558436455_4e0ae6b582_o.png)

search มีประโยชน์เวลาติดตั้ง package ครับ เนื่องจากเราต้องใส่ชื่อ package ให้ตรงกับชื่อ package ของ Bower (ในรูปบนคือตัวสีฟ้า) ไม่งั้น Bower จะหา package ไม่เจอ และติดตั้งไม่ได้ครับ

### ดูรายชื่อ package ที่ติดตั้งไว้แล้ว

<pre class="language-bash"><code>$ bower list</code></pre>

command นี้จะแสดงรายชื่อ package กับเวอร์ชั่นที่ติดตั้งไว้แล้ว และก็มีบอกด้วยว่า package ไหนมีเวอร์ชั่นใหม่ออกมาหรือยัง

[pic - bower list command]

หากต้องการอัพเดท package ก็ใช้ command `bower update` package ที่อัพเดทก็จะเป็นเวอร์ชั่นล่าสุดครับ

<pre class="language-bash"><code>$ bower update jquery</code></pre>

[pic - bower update command]

### `bower init`

### `bower.json` / `.bowerrc`

### sublime-bower

#### resources