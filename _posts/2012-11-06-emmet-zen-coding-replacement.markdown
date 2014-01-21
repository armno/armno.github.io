---
comments: true
date: 2012-11-06 12:07:33
layout: post
slug: emmet-zen-coding-replacement
title: Emmet - ตัวแทน Zen Coding
wordpress_id: 2105
categories:
- Web Development
tags:
- Emmet
- Sublime Text 2
- Web Development
- Zen Coding
description: เคยเขียนเรื่อง Zen Coding ใน Netbeans มาแล้วครั้งหนึ่ง ตอนนี้ Zen Coding เปลี่ยนชื่อเป็น Emmet แล้วครับ มาพร้อมกับฟีเจอร์ใหม่อีกเยอะแยะมากมาย
---

![emmet-logo](http://farm9.staticflickr.com/8368/8505157745_b742631eef_o.png)

เคยเขียนเรื่อง [Zen Coding ใน Netbeans](http://armno.in.th/2010/10/20/%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b9%83%e0%b8%8a%e0%b9%89-zen-coding-%e0%b8%aa%e0%b8%b3%e0%b8%ab%e0%b8%a3%e0%b8%b1%e0%b8%9a-netbeans-ide/) มาแล้วครั้งหนึ่ง ตอนนี้ Zen Coding เปลี่ยนชื่อเป็น [**Emmet**](http://emmet.io) แล้วครับ มาพร้อมกับฟีเจอร์ใหม่อีกเยอะแยะมากมาย เห็นที่ฮอตๆ ก็คงเป็นส่วนของ CSS เช่น `m10` เป็น `margin: 10px;` รวมถึงจัดการ vendor prefix ให้ด้วย ([ดูตัวอย่าง](http://docs.emmet.io/css-abbreviations/vendor-prefixes/)) นอกจากนี้ยังมี action อีกมากมายที่ทำให้โค้ดได้เร็วขึ้น ผมเขียนเองไม่หมด ตามไปดูได้ที่ [http://docs.emmet.io/](http://docs.emmet.io/) ครับผม เขาทำ document ไว้ดีมากเลยล่ะ

### ติดตั้ง Emmet ใน Sublime Text 2

Emmet กับ [Sublime Text](http://armno.in.th/2011/09/20/sublime-text-2-editor-%e0%b9%80%e0%b8%84%e0%b8%a3%e0%b8%b7%e0%b9%88%e0%b8%ad%e0%b8%87%e0%b8%a2%e0%b8%99%e0%b8%95%e0%b9%8c-v12/) นั้นถือว่าเข้ากันได้อย่างเป็นปี่เป็นขลุ่ยกันเลยทีเดียว (ว่าไปนั่น) มีปลั๊กอิน [Emmet for Sublime Text บน Github](https://github.com/sergeche/emmet-sublime) ด้วย โดยที่ก่อนติดตั้ง Emmet นั้นต้องเอา Zen Coding ออกก่อน _(Package Control > Remove Package > Zen Coding)_ ไม่งั้นมันจะตีกันแล้วจะเดี้ยงทั้งคู่

เราสามารถติดตั้ง Emmet ได้จาก [Package Control](https://github.com/wbond/sublime_package_control) ครับ แต่ ณ ตอนที่เขียนอยู่นี้ เห็นหลายคน[มีปัญหากับ Package Control](https://github.com/wbond/sublime_package_control/issues/231) ที่ดาวน์โหลด zip ball จาก Github ไม่ได้ ทำให้ลงปลั๊กอินไม่ผ่าน ดังนั้นแนะนำให้ลงแบบ manual ดีกว่า คือโหลดไฟล์ทั้งหมดของ Emmet มาไว้ที่โฟลเดอร์ Packages ของ Sublime Text

<pre><code class="language-bash">cd ~/.config/sublime-text-2/Packages/
git clone https://github.com/sergeche/emmet-sublime.git
</code></pre>

จากนั้น restart Sublime Text ก็น่าจะใช้งานได้ละครับ

### ลง Zen Coding/Emmet แล้วกด Enter ไม่ลง

[YuthNo](http://yuthno.wordpress.com) ถามมาเมื่อวาน ผมก็เคยเจอบ้างเหมือนกัน ลองลบทั้ง Zen Coding กับ Emmet ออกทั้งคู่แล้วลงใหม่ดูครับ ถ้ายังไม่เวิร์กอีก อาจเป็นเพราะเวอร์ชั่นของแพ็คเกจบางแพ็คเกจนั้นเก่าเกินไป (ผมเจอใน Ubuntu) ลองตามไปอ่านได้ที่ [issue#87](https://github.com/sergeche/emmet-sublime/issues/87) หรือ issue อื่นๆ ก็ได้ครับ

`Happy Coding` ครับผม :)
