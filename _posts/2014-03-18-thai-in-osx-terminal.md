---
layout: post
title: "ภาษาไทยใน Terminal (OSX)"
description: "เพิ่งลง OSX Mavericks ใหม่แล้วภาษาไทยใน terminal มันเพี้ยนๆ ซ่อมได้ด้วยการ set locale ให้ถูกครับ"
thumbnail: "http://farm4.staticflickr.com/3726/13239980733_839b6109c2.jpg"
---

เพิ่งลง OSX Mavericks (10.9) ใหม่ แล้วภาษาไทยใน terminal (ใช้ iTerm2) มันมีปัญหา เป็นแบบนี้ครับ (รัน `git diff`)

![default osx locale](http://farm4.staticflickr.com/3726/13239980733_839b6109c2_z.jpg)

ส่วนใน Vim ก็เละตุ้มเป๊ะ

![thai in vim](http://farm3.staticflickr.com/2843/13239831945_496eab8158_z.jpg)

ลองหาใน Google ดู ก็พบว่าเป็นปัญหาที่ locale ในเครื่องเรา ที่มันอ่านภาษาไทยไม่ออก เมื่อรัน command `locale` มันก็ได้แบบนี้ครับ

{% highlight bash %}
$ locale
LANG=
LC_COLLATE="C"
LC_CTYPE="C"
LC_MESSAGES="C"
LC_MONETARY="C"
LC_NUMERIC="C"
LC_TIME="C"
LC_ALL=
{% endhighlight %}

วิธีแก้ก็คือ เซ็ต locale ให้มันเป็น `en_US.UTF-8` ครับ โดยเพิ่ม 2 บรรทัดนี้เข้าไปใน `~/.zshrc` (ถ้าใครใช้ bash ก็เป็น `~/.bashrc`)

{% highlight bash %}
# ~/.zshrc
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
{% endhighlight %}

พบว่าภาษาไทยแสดงผลได้ดีแล้ว

![fixed locale in iterm](http://farm8.staticflickr.com/7237/13239980853_6c9f68cffd_z.jpg)

![fixed thai in vim](http://farm4.staticflickr.com/3831/13239980653_940c67005c_z.jpg)

เช็ค locale ดูก็เป็น `en_US.UTF-8`

{% highlight bash %}
$ locale
LANG="en_US.UTF-8"
LC_COLLATE="en_US.UTF-8"
LC_CTYPE="en_US.UTF-8"
LC_MESSAGES="en_US.UTF-8"
LC_MONETARY="en_US.UTF-8"
LC_NUMERIC="en_US.UTF-8"
LC_TIME="en_US.UTF-8"
LC_ALL="en_US.UTF-8"
{% endhighlight %}

ที่มา: [In OSX Lion, LANG is not set to utf8. how to fix?](http://stackoverflow.com/questions/7165108/in-osx-lion-lang-is-not-set-to-utf8-how-fix)

### ปล.
- ผมไม่ค่อยรู้เรื่อง locale เท่าไหร่ เอะอะก็ใช้ UTF8 ไว้ก่อน
- ไม่รู้งานนี้ฟอนต์ที่ใช้มีส่วนเกี่ยวด้วยไหม แต่ฟอนต์ที่ผมใช้กับ iTerm2 คือ [Inconsolata for Powerline](https://github.com/Lokaltog/powerline-fonts/tree/master/Inconsolata) ครับ

