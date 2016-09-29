---
layout: post
title: "ใช้ประโยชน์จาก Project Settings ใน Sublime Text"
description:
published: false
cover-image:
thumbnail:
tags:
---

Sublime Text ดูเผินๆ แล้วเป็น text editor ธรรมดา แต่จริงๆ แล้ว ก็มาพร้อมกับฟีเจอร์ในการจัดการโปรเจ็คอยู่อย่างพอเหมาะ
อาจไม่ครบครันเท่ากับ IDE ทั่วๆ ไป แต่ก็ถือว่าใช้ทำงานได้ดีเลย ลองมาดูกัน

ปกติเราจะใช้ Sublime Text เปิด folder หนึ่งขึ้นมา แล้วก็ทำงานกับโปรเจ็คนั้น แต่จริงๆ แล้ว เราสามารถ save folder นั้น
เป็น "project" เหมือนกับ IDE ตัวอื่นๆ ได้

## Save Project As ...

เริ่มจากการเปิด folder ของ project เราขึ้นมาใน Sublime Text ก่อน โดยไปที่เมนู `File` > `Open ...` (`⌘` + `O`) 
แล้วเลือก **folder** ของ project ขึ้นมา

จากนั้นไปที่เมนู `Project` > `Save Project As ...` แล้วเซฟไฟล์ไปนามสกุล `.sublime-project`

การสร้าง project ใน Sublime Text จะมีประโยชน์คือ เวลาเราจะสลับไปทำ project อื่น
แทนที่จะต้องเปิด folder ของ project ใหม่ทุกครั้งจาก `⌘` + `O` เราสามารถ "กระโดด" หรือ switch ไปอีก project หนึ่งได้เลย
โดยกด `control` + `⌘` + `p` Sublime Text จะแสดงรายชื่อทุก project ที่เราเคยบันทึกไว้
พอเราจิ้ม project ที่ต้องการ (หรือใช้ arrow key เลื่อนขึ้น-ลง แล้วกด `Enter`)
Sublime Text ก็จะโดดไปอีก project หนึ่งเลย **โดยที่เราไม่ต้องไปหาว่า project นั้นอยู่ path ไหนในเครื่องเรา**

## Project Settings

การสร้าง project ใน Sublime Text นั้นก็เหมือนการ "เลื่อนตำแหน่ง" ให้ folder ธรรมดา นั้นมีความสามารถมากกว่าเดิม
เพราะเมื่อมันเป็น project แล้ว เราสามารถตั้งค่าของ Sublime Text ในแต่ project ให้แตกต่างกันออกไป ตามการใช้งานแต่ละ project ได้

เราสามารถเข้าไปแก้ไข project settings ได้จาก `⌘` + `shift` + `p` แล้วค้นหาคำว่า `Project: Edit Project` แล้วกด `Enter` ครับ
(หรือจากเมนู `Project` > `Edit Project`

ตอนที่เพิ่งสร้าง project ใหม่ ใน project settings จะยังไม่มีอะไร มาดูกันว่าเราสามารถตั้งค่าอะไรให้ project ของเราได้บ้าง

### `folders`

### `settings`

### `build_systems`
