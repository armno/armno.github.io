---
comments: true
date: 2012-10-10 14:07:30
layout: post
slug: stylebot-custom-css
title: 'Stylebot: Custom CSS'
categories:
- Web Development
tags:
- CSS
- Extension
- Google Chrome
- Stylebot
description: เคยไหมครับเวลาเข้าเว็บบางเว็บแล้วรู้สึกไม่ชอบใจอะไรบางอย่าง เช่น ฟอนต์ไม่สวย สีพื้นหลังเปรี้ยวเกิน หรือฟอนต์ตัวเล็กเท่าจิ๋มมดครั้นจะไปแจ้งเจ้าของเว็บให้ปรับปรุง ก็ดูจะเกินกำลังไปหน่อย Stylebot ช่วยคุณได้ครับ
---

เคยไหมครับเวลาเข้าเว็บบางเว็บแล้วรู้สึกไม่ชอบใจอะไรบางอย่าง เช่น ฟอนต์ไม่สวย สีพื้นหลังเปรี้ยวเกิน หรือ[ฟอนต์ตัวเล็กเท่าจิ๋มมด](http://www.manager.co.th) ครั้นจะไปแจ้งเจ้าของเว็บให้ปรับปรุง ก็ดูจะเกินกำลังไปหน่อย Stylebot ช่วยคุณได้ครับ

[**Stylebot**](https://github.com/ankit/stylebot) เป็น Extension ของ Google Chrome ที่ให้เราช่วยเปลี่ยน style (CSS) ของเว็บใดๆ ในโลกนี้ได้ โดย Stylebot จะจำค่าที่เราเปลี่ยนแปลงไว้ พอเรากลับเข้าเว็บนั้น style ก็จะเป็นตามที่เรากำหนดไว้ครับ สามารถดาวน์โหลดและติดตั้งได้จาก [Chrome Web Store](https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha) ได้เลย นอกจากนี้ยังมี source บน [Github](https://github.com/ankit/stylebot) ด้วยครับผม

### ใช้งาน Stylebot

กรณีแรกที่ผมใช้ก็กับ WordPress นี่แหละครับ ต้องการเปลี่ยนฟอนต์ของ textarea บางที่จาก sans-serif ให้เป็นพวก monospace เพราะอ่านโค้ดได้ง่ายกว่า อย่างข้างล่างนี่เป็น editor ของ [Contact Form 7](http://wordpress.org/extend/plugins/contact-form-7/) ครับ

![default-sans-serif-font](http://farm9.staticflickr.com/8100/8506203367_0420429f87_o.png)

อยากเปลี่ยนให้เป็นฟอนต์ monospace ก็คลิกขวาที่ textarea แล้วเลือก Stylebot > Style Element เจ้าตัว Stylebot ก็จะงอกออกมาด้านขวามือครับ

[![](http://farm9.staticflickr.com/8388/8507317410_60f3b5c751_z.jpg)](http://www.flickr.com/photos/armno/8507317410/in/photostream/lightbox/)

มีออพชั่นให้ปรับแต่งมากมาย จะเลือกจากตรงนั้นก็ได้ หรือจะเขียน CSS เองก็ได้ หากต้องการเขียนเอง คลิกตรงปุ่ม Advanced ข้างล่างครับ

![stylbot-applied](http://farm9.staticflickr.com/8508/8506211115_85e4de2e96_o.png)

![edit-advanced-css](http://farm9.staticflickr.com/8233/8507324720_f3bec711a1_o.png)

จากนั้นก็กด Save แล้วคราวต่อไปถ้าเราเปิดเว็บนี้อีก Stylebot ก็จะจัดการโหลด style ที่เรากำหนดเองให้อัตโนมัติครับ

ตัวอย่างถัดไป อย่างเช่นเว็บนี้ [Why's (Poignant) Guide to Ruby](http://mislav.uniqpath.com/poignant-guide/) เป็นหนังสือออนไลน์เล่มนึงครับ ฟอนต์ที่ใช้เป็น Utopia แต่ผมอยากเปลี่ยนเป็น Droid Serif ก็ใช้ Stylebot จัดเลย ข้อดีก็คือเวลาคลิกไปหน้าอื่นหรือบทอื่น Stylebot ก็จัดการให้ (ถ้าเขียน CSS Selector ถูกนะ)

![stylebot-in-real-life](http://farm9.staticflickr.com/8531/8506217379_173afce33a_o.png)

ส่วนมากผมก็จะใช้กับฟอนต์เป็นหลัก แต่ก็มีอีกหลายคนที่ใช้งานกับทั้งเว็บ แบบว่าโมฯ จนไม่เหลือโครงเดิมเลยก็มี ตามไปดูได้ที่ [http://stylebot.me/](http://stylebot.me/) ครับผม

Chrome Extension ตัวนี้ เอาไว้ตามใจตัวเองจริงๆ เลย :)
