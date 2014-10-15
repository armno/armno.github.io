---
layout: post
title: "git stash & git patched commit"
description: ในระหว่างที่กำลังเขียน code อยู่ มีโอกาสที่งานอย่างอื่นจะเข้ามาแทรกได้เสมอ (ไม่ว่าจะเป็น bug หรือ feature ก็ตาม!) เราสามารถใช้ <code>git stash</code> กับ <code>git commit -p</code> ช่วยให้งานที่ทำอยู่นั้นปลอดภัย ไม่หายไปจากโลกได้
published: true
thumbnail:
---

(สถานการณ์จำลอง)

- A: (coding อย่างขะมักเขม้น)
- B: "แก้ bug ตรงนี้ให้หน่อย แป๊ปเดียว" / "เพิ่ม feature นี้หน่อย ลูกค้าอยากได้"
- B: **เอาตอนนี้เลย**
- A: ...

(สถานการณ์จำลอง 2)

- A: (coding อย่างขะมักเขม้น)
- C: (เป็น dev ด้วยกัน) "pull branch X ไป review code/run หน่อย เพิ่ง push ไป"
- A: ...

การมี `git` นั้นทำให้เราสามาถทำ snapshot ของงานส่วนที่เรากำลังทำอยู่ได้ โดยไม่ไปทำของคนอื่นพัง และงานเราไม่หายด้วย ปกติผมจะใช้ 2 command นี้ครับ

## 1. `git stash`

`git stash` ถ้าแปลตรงตัวก็แปลว่า "ซ่อน" code ของเราไว้ก่อน โดย code ที่เราซ่อนไว้จะถูกเก็บใน stash stack และทำให้ repo ของเรา clean เมื่อ stash ไว้แล้วครับ

ตัวอย่างเช่น ใน repo ของเรามี dirty file จาก `git status` (ข้างขวาเป็น output ของ `git diff`)

![a dirty repo](https://farm4.staticflickr.com/3949/15347262219_9c6e4a783c_c.jpg)

เราอยากซ่อน changes ของทั้ง 2 file นี้ไว้ ก็ใช้คำสั่ง `git stash`

{% highlight bash %}
$ git stash
{% endhighlight %}

repo ของเราก็จะกลับมา clean เหมือนเดิม โดยคำสั่ง stash จะบอก HEAD commit hash ว่า repo ของเราถูก revert ไปที่ commit ใด (ปกติก็เป็น commit ล่าสุดก่อนที่มันจะ dirty แหละ)

![git stashed](https://farm6.staticflickr.com/5604/15353372667_1f43fdb4d7_z.jpg)

ถ้าเราแก้ code ไปแล้ว อยาก stash อีก ก็ทำได้ โดยที่ stash ครั้งต่อๆ ไปจะถูกเก็บใน stack เรียกดูได้จาก command `git stash list`

![git 2nd stash](https://farm4.staticflickr.com/3935/15539461345_34e1283e54_o.png)

{% highlight bash %}
$ git stash list
{% endhighlight %}

![git stash list](https://farm4.staticflickr.com/3931/15353821700_3073afaee2.jpg)

เอา code ที่ stash ไว้ ออกมาจาก stack เพื่อทำงานต่อ ใช้ command `git stash pop`

![git stash pop](https://farm4.staticflickr.com/3933/15353530378_5c268ab9d8_o.png)

และเนื่องจากมันเป็น stack เวลา pop มันเลยเอา stash ล่าสุดออกมาก่อน ซึ่งพอ pop ออกมาแล้ว stash นั้นก็จะหายไปจาก list ครับ (ถ้าอยาก pop แบบไม่ให้มันหาย ใช้ command `git stash apply` แทน)

### `git stash` กับ untracked file

ปกติแล้ว `git stash` จะไม่เก็บไฟล์ที่ untracked ไปด้วย (ไฟล์ที่ยังไม่ได้ add ใน git)

![git stash ไม่เก็บไฟล์ untracked](https://farm6.staticflickr.com/5615/15353029939_f6996515ee_z.jpg)

ต้องเพิ่ม parameter `-u` เข้าไปด้วย ให้มัน stash ไฟล์ที่ untracked ไปด้วยครับ

![git stash with -u](https://farm6.staticflickr.com/5614/15354024460_6985843d64_z.jpg)

พอ pop ออกมา ไฟล์ที่เป็น untracked file ก็ยังอยู่ครบเหมือนเดิม

![git stash pop with untracked file](https://farm4.staticflickr.com/3942/15353147449_159851951c_z.jpg)
