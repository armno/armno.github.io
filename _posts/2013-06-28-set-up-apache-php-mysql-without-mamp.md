---
title: ติดตั้ง Apache, PHP, MySQL บน OSX แบบไม่ง้อ MAMP
description: MAMP (รวมถึง MAMP Pro) นั้นเป็นเครื่องมือที่ดีสำหรับติดตั้ง local web server บน OSX แต่ปัญหาที่ผมพบกับ MAMP คือกินแรมเยอะมาก ซึ่งจริงๆ แล้วเราไม่ต้องมี MAMP ก็รัน web server ในเครื่องได้ Homebrew คือพระเอกของเราครับ
categeory: Web Development
layout: post
---

[MAMP](http://www.mamp.info/en/index.html) (รวมถึง MAMP Pro) นั้นเป็นเครื่องมือที่ดีสำหรับติดตั้ง local web server บน OSX แต่ปัญหาที่ผมพบกับ MAMP คือกินแรมเยอะ (และใช้งานยุ่งยากด้วย) ซึ่งจริงๆ แล้วเราไม่ต้องมี MAMP ก็รัน web server ในเครื่องได้

จริงๆ แล้ว OSX มี Apache กับ PHP ติดมาด้วยอยู่แล้ว แต่สำหรับ PHP นั้นยังเป็นเวอร์ชั่นเก่าอยู่ ซึ่งเราสามารถลง PHP เวอร์ชั่นล่าสุดได้จาก Homebrew ครับ

[Homebrew](http://brew.sh) คือพระเอกของเราครับ ช่วยให้เราลง package สารพัดได้ใน OSX ได้อย่างไม่ยากเย็นนัก (สำหรับผมที่มาจากโลก Ubuntu Homebrew คือเปรียบเสมือนคำสั่ง `apt-get` นั่นเอง)

- โพสต์นี้ทดสอบบน OSX 10.8+ นะครับ
- เหมาะกับคนที่ชอบทำอะไรใน terminal

### ติดตั้ง Homebrew

รัน command ใน terminal

{% highlight bash %}
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
{% endhighlight %}

### ใช้งาน Apache

ใน OSX 10.8 นั้นไม่มีตัวเลือก Web Sharing ให้เลือกใน System Preferences > Sharing แล้ว ซึ่งเราสามารถรัน Apache ได้จาก terminal ครับ

{% highlight bash %}
$ sudo apachectl start
{% endhighlight %}

### ติดตั้ง PHP 5.4

ต่อไปก็ต้องลง PHP ผ่าน Homebrew ครับ สำหรับการลง package ด้วย homebrew นั้นใช้ command <code>brew install &lt;package name&gt;</code> แต่ถ้าไม่แน่ใจว่า <code>package name</code> นั้นมีอะไรบ้าง ใช้ command <code>brew search</code> หาดูก่อนได้ครับ

![brew search](http://farm8.staticflickr.com/7337/9160240552_c55243a996_o.png)

สำหรับ PHP 5.4 นั้นชื่อ package <code>php54</code> (ณ วันที่เขียนยังไม่มี PHP 5.5 ใน homebrew ครับ)

> เลขเวอร์ชั่นของ PHP อาจจะต่างออกไป ตามเวอร์ชั่นที่เลือกลง โพสต์นี้เขียนตอน PHP 5.4 ครับ

{% highlight bash %}
$ brew install php54
{% endhighlight %}

รอสักพักจนเสร็จ PHP 5.4 ก็จะถูกติดตั้งไว้ที่

{% highlight bash %}
/usr/local/Cellar/php54/5.4.15
{% endhighlight %}

![installed php 5.4](http://farm4.staticflickr.com/3708/9158088329_903636e415_z.jpg)

> Package ที่ติดตั้งผ่าน Homebrew จะอยู่ที่ <code>/usr/local/Cellar</code> ครับ

### ติดตั้ง MySQL

ใช้คำสั่ง <code>brew install</code> เหมือนเดิม

{% highlight bash %}
$ brew install mysql
{% endhighlight %}

หลังจาก install เสร็จก็เซ็ต root password ด้วย command

{% highlight bash %}
$ mysql_secure_installation
{% endhighlight %}

ทำตามขั้นตอนไปเรื่อยๆ จนจบได้เลย

### แก้ path ของ PHP สำหรับ Apache

หลังจากลง PHP ด้วย homebrew แล้ว เราก็ต้องบอก Apache ให้โหลด module php5 จากที่ลงใหม่ ไม่ใช่จากของเดิมที่ติดมากับเครื่องครับ

ซึ่งก็คือ เราต้องไปแก้ path ในไฟล์ <code>httpd.conf</code> ครับ

{% highlight bash %}
$ sudo vim /etc/apache2/httpd.conf
{% endhighlight %}

หาบรรทัดนี้

{% highlight text %}
LoadModule php5_module libexec/apache2/libphp5.so
{% endhighlight %}

แล้วแก้เป็น

{% highlight text %}
LoadModule php5_module /usr/local/Cellar/php54/5.4.15/libexec/apache2/libphp5.so
{% endhighlight %}

จากนั้น restart Apache

{% highlight text %}
$ sudo apachectl restart
{% endhighlight %}

### เซ็ต DocumentRoot

ปกติผมจะเซ็ตให้ directory <code>~/Sites</code> เป็น root directory ของ localhost ครับ (เปรียบเสมือน <code>/var/www/</code> ใน Ubuntu) ซึ่งก็ต้องไปแก้ path ในไฟล์ <code>httpd.conf</code> เหมือนเดิม

{% highlight bash %}
$ sudo vim /etc/apache2/httpd.conf
{% endhighlight %}

หา

{% highlight bash %}
DocumentRoot "/Library/WebServer/Documents"
{% endhighlight %}

เปลี่ยนเป็น

{% highlight text %}
DocumentRoot "/Users/armno/Sites" # อย่าลืมเปลี่ยน username เป็นของคุณ
{% endhighlight %}

และตรง <code>&lt;Directory&gt;</code> ก็ต้องเปลี่ยนเป็น path เดียวกันด้วยครับ

{% highlight text %}
<Directory "/Users/armno/Sites">
{% endhighlight %}

สุดท้าย ค้นหา

{% highlight text %}
<IfModule dir_module>
    DirectoryIndex index.html
</IfModule>
{% endhighlight %}

เพิ่ม <code>index.php</code> เข้าไปก่อน <code>index.html</code>

{% highlight text %}
<IfModule dir_module>
    DirectoryIndex index.php index.html
</IfModule>
{% endhighlight %}

จากนั้น save file แล้วก็ restart Apache อีกครั้งครับ (command เดียวกับข้างบน)

### ทดสอบ

{% highlight bash %}
$ echo "<?php phpinfo();" > ~/Sites/info.php
{% endhighlight %}

แล้วเปิด <code>http://localhost/info.php</code> ใน browser ก็จะเจอข้อมูล <code>phpinfo</code> ครับ

![phpinfo](http://farm6.staticflickr.com/5513/9158338115_1a9c7169eb_o.png)

เสร็จแล้ว :D
