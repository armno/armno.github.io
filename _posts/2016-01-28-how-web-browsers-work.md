---
layout: post
title: "วิธีการทำงานของ web browser"
description:
published: true
cover-image:
thumbnail:
tags:
---

HTML, CSS กับ JavaScript เป็น 3 องค์ประกอบหลักของเว็บไซต์ทั่วๆ ไปที่เราเห็นกันอยู่
ส่วน web browser นั้นก็มีหน้าที่แปลง code ของทั้ง 3 ส่วนประกอบนั้น แสดงผลออกมาเป็นเว็บไซต์ให้เราได้ใช้งาน
ในฐานะคนทำเว็บ การเข้าใจหลักการทำงานของ web browser นั้นช่วยให้เข้าใจถึงที่มาที่ไปของสิ่งที่ปรากฏบนหน้าจอ
รวมถึงปัญหาที่อาจพบเจอได้ระหว่างทำเว็บเว็บหนึ่ง โดยเฉพาะการ optimize performance ครับ

ในโพสต์นี้จะขอข้ามเรื่อง network connection ไป แต่จะเริ่มตั้งแต่การทำงานของ web browser
หลังจากได้รับ response เป็น code จาก server ไปจนถึงขั้นตอนสุดท้ายคือตัวเว็บไปปรากฏบนหน้าจอ
หรือพูดง่ายๆ ก็คือ ตั้งแต่ browser ได้รับ code `<html><head></head>...</html>` จนถึงขั้นตอนการ render เว็บจ้า

ขั้นตอนหลักๆ มีอยู่ ดังนี้

## 1. การสร้าง DOM กับ CSSOM

DOM (Document Object Model) คือตัวแสดงคุณสมบัติและความสัมพันธ์ระหว่างแต่ละ object ในหน้าเว็บ
ซึ่งก็จะประกอบไปด้วย properties กับ methods ของแต่ละ object พร้อมกับความสัมพันธ์กับ object อื่นๆ
เช่น object A เป็น parent ของ object B และขณะเดียวกันก็ทำให้ object B เป็น child ของ object A เช่นกัน

ส่วน CSSOM (CSS Object Model) นั้นก็เช่นเดียวกับ DOM แต่เป็นการสร้าง object model จาก CSS ของเว็บ
ที่มีทั้ง properties ที่เราคุ้นเคยกันใน CSS พร้อมกับความสัมพันธ์กับ object อื่นๆ ซึ่งก็คือคุณสมบัติ cascading ของ CSS ครับ

การสร้าง object จาก code ที่ได้รับมาจาก server นั้น จะประกอบด้วย 2 ขั้นตอนย่อยคือ Tokenizing กับ Lexing

### Tokenizing

Tokenizing ในโลก DOM คือกระบวนการที่บอกว่า code แต่ละตัว หรือแต่ละช่วงนั้น มันคือส่วนประกอบใดของ element ตาม spec ของ W3C
ตัวอย่างเช่น เรามี `<button type="submit">Go</button>` ซึ่งถือเป็น 1 element กระบวนการ tokenizing คือการระบุว่า

  * `<button>` คือ tag เปิด
  * `type` คือ attribute ที่มี value คือ `"submit"`
  * `Go` คือ text ที่อยู่ระหว่าง tag เปิด กับ tag ปิด
  * `</button>` คือ tag ปิดของ element นี้

นั่นคือการระบุแต่ละส่วนของ code ออกมาเป็น token (แยกออกเป็นส่วนๆ) นั่นเอง

alright

  - Lexing (Creating nodes)
  - DOM Construction
  - CSSOM Construction
    - Why CSSOM needs to have tree structure
2. Render Tree construction
  - Render Tree = DOM & CSSOM combined
  - Render tree contains only visibile nodes required to render the page
3. Layout
  - Determine position and size of each object
4. Paint
  - Draw actual pixels on the page
