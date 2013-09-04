---
title: เริ่มใช้งาน Laravel PHP Framework
description: Laravel เป็น PHP Framework ที่กำลังได้รับความนิยมเพิ่มขึ้นอย่างต่อเนื่องในระยะหลังมานี้ ผมเองเพิ่งจะเริ่มศึกษาเหมือนกันครับ เริ่มจากการติดตั้ง Laravel ในเครื่องก่อนเลยละกัน
layout: blog
---

[Laravel](http://laravel.com) เป็น PHP Framework ที่กำลังได้รับความนิยมเพิ่มขึ้นอย่างต่อเนื่องในระยะหลังมานี้ ผมเองเพิ่งจะเริ่มศึกษาเหมือนกันครับ เริ่มจากการติดตั้ง Laravel ในเครื่องก่อนเลยละกัน

Website ของ Laravel อยู่ที่ laravel.com แปลกอย่างหนึ่งที่บนเว็บไม่มีปุ่มให้ download เหมือนกัน framework ตัวอื่นๆ ซึ่งเราสามารถไป download ได้จาก Github แต่ผมจะลงผ่าน [Composer](http://armno.in.th/installing-composer-osx-lion/) ตามแบบใน [document](http://laravel.com/docs/quick) แนะนำดีกว่าครับ

command ที่ใช้สร้างโปรเจ็คจาก <code>composer</code> คือ

<pre><code class="language-bash">$ composer create-project laravel/laravel lava</code></pre>

ในที่นี้ผมสร้างโปรเจ็คใหม่ชื่อ <code>lava</code> ใน <code>~/Sites/</code> ซึ่งเป็น root directory ของเครื่องผมนะครับ

รอสักพักให้ <code>composer</code> download Laravel พร้อมทั้ง dependency ทั้งหลาย

![installing laravel using composer](http://farm4.staticflickr.com/3762/9075798564_a3198ee9e4_z.jpg)

จากนั้นไปที่ <code>http://localhost/lava</code> จะพบว่าหน้าเว็บนั้นไม่โหลด เพราะไฟล์ <code>index.php</code> อยู่ใน directory <code>public</code> อีกที

![root directory of laravel](http://farm4.staticflickr.com/3773/9073674139_4b25c29764_o.png)

พอกดเข้าไปที่ directory <code>public</code> ก็จะเจอ error อะไรไม่รู้เต็มไปหมด

![laravel default errors](http://farm8.staticflickr.com/7418/9073674063_96489f1bc4_z.jpg)

วิธีแก้ก็คือต้องไป <code>chmod</code> directory <code>app/storage</code> ให้เป็น <code>777</code> ซะก่อน

<pre><code class="language-bash">$ chmod -R 777 app/storage</code></pre>

refresh อีกครั้ง error เหล่านั้นก็จะหายไป และเจอหน้าแรกของ Laravel ครับ

![errors solved](http://farm6.staticflickr.com/5343/9073709919_cb736e1cbc_z.jpg)

จากนี้ก็เริ่มโปรเจ็ค Laravel ได้เลยครับ