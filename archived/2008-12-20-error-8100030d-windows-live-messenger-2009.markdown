---
comments: false
date: 2008-12-20 17:24:50
layout: blog
slug: error-8100030d-windows-live-messenger-2009
title: Error 8100030d ใน Windows Live Messenger 2009
wordpress_id: 388
categories:
- Life
tags:
- AVG
- MSN
- MSN Error
- Windows Live Messenger
---

นั่งเล่นเน็ตอยู่เพลินๆ ได้รับข้อความจากเซิฟเวอร์ **Windows Live Messenger** ให้อัพเดทเป็นเวอร์ชั่น 2009 (เดิมผมใช้ 2009 Beta อยู่) ไอ้เราก็เห็นมันออกมาได้สองสามวัน เป็น **Windows Live Essentials 2009** ยังไม่อยากจะอัพเดท .. แต่ทำไงได้ เค้าบังคับ! ผมก็เลยอัพเดทผ่านโปรแกรม คิดว่าอัพเดทไปแล้วคงไม่น่ามีปัญหาอะไร ที่ไหนได้…

Sign In ไม่ได้ ติด **Error Code: 8100030d** ทุกครั้งไป เลยไปหาคำตอบ[จากบล็อกของ n-blue](http://n-blue.nblogz.net/windows-live-essentials-2009-final-released/) และพี่กูเกิ้ล ลองทำอยู่หลายวิธี ทั้งเคลียร์แคช, เคลียร์ข้อมูลทุกแอ็คเคาท์ที่อยู่ในเครื่อง ก็ยังไม่ได้แฮะ .. สุดท้ายเส้นผมบังภูเขา ในบล็อกของ Windows Live Team บอกเอาไว้ว่า ใครใช้ AVG ต้องปิดคอมโพเนนต์บางตัวก่อน .. เราใช้อยู่นี่หว่า ปิดแล้ว sign in ได้เลยแฮะ

สำหรับใครที่ใช้** AVG Internet Security เวอร์ชั่น 8** แล้วติด error ของ msn เหมือนผม ลองทำตามนี้ดูนะครับ

* ดับเบิ้ลคลิก tray icon ของ AVG เพื่อแสดงหน้าต่างหลักของโปรแกรม แล้วก็ดับเบิ้ลคลิกที่คอมโพเนนท์ที่ชื่อว่า Web Shield ครับ
[![msne1](http://www.armno.in.th/wp-content/uploads/2008/12/msne1-thumb.png)](http://www.armno.in.th/wp-content/uploads/2008/12/msne1.png)
* ปิดการทำงานในส่วน Instant Messaging ของมันซะ ในแท็บ Instant Messaging เอาเครื่องหมายถูกหน้า Instant Messaging Protection ออกซะ เป็นอันเสร็จพิธี

[![msne2](http://www.armno.in.th/wp-content/uploads/2008/12/msne2-thumb.png)](http://www.armno.in.th/wp-content/uploads/2008/12/msne2.png)

คราวนี้ WLM ของเราก็จะกลับมา Sign In ได้อย่างเดิมแล้ว