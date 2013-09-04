---
comments: true
date: 2009-04-22 22:05:36
layout: blog
slug: statpress-huge-db
title: Statpress ทำพิษ!
wordpress_id: 694
categories:
- Life
tags:
- Database
- Hosting
- StatPress
- WordPress
- บล็อก
---

WordPress Plugin ตัวนึงชื่อว่า **StatPress** ที่เคยได้ยินกิตติศัพท์มานาน ไม่นึกไม่ฝันว่าจะต้องมาเจอกับตัวเอง ทำตัวไม่ถูกเลย .. ปัญหาของผมก็คือ ปลั๊กอินตัวนี้หยุดทำงานมาได้ประมาณ ๒ สัปดาห์แล้ว (เฉพาะส่วนที่เป็น counter แต่ว่าส่วน keywork tracker ยังทำงานอยู่) คิดว่าต้นเหตุคงมาจากฐานข้อมูลที่บวมขึ้นเรื่อยๆ แต่ผมก็ไม่ได้ซีเรียสอะไรมาก ก็ปล่อยๆมาตลอด 

 

จนกระทั่งเมื่อวาน ทาง **[appservhosting](http://www.appservhosting.com)** ส่งอีเมลแจ้งมาว่า StatPress ทำให้ server load สูงมาก และอาจทำให้ฐานข้อมูล Corrupt ได้ และแนะนำให้ลบปลั๊กอินตัวนี้ ผมไม่รอช้าครับรีบลบเลย เกรงว่าจะไปรบกวนคนอื่น เพราะ appservhosting ส่งรูป load graph ของ server มาให้ดูด้วย สูงจนน่าตกใจจริงๆ

 

เคยอ่านในเว็บบอร์ด WordThai เหมือนกันว่า StatPress ทำให้ DB บวมขึ้นเรื่อยๆ .. ไม่รู้เหมือนกันว่า StatPress Reloaded จะดีกว่าไหม แต่ผมคงเลือกที่จะไม่ใช้เลยดีกว่า [Google Analytics](http://www.google.com/analytics) อย่างเดียวก็เพียงพอแล้วสำหรับผมน่ะ
