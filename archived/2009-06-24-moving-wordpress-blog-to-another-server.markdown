---
comments: true
date: 2009-06-24 19:30:12
layout: blog
slug: moving-wordpress-blog-to-another-server
title: วิธีการย้ายบล็อก WordPress
wordpress_id: 845
categories:
- Web Development
tags:
- WordPress
- ย้ายบล็อก
---

ผมเพิ่งย้ายบล็อกมาจาก armno.in.th ครับ ก่อนหน้านี้เคยย้ายบล็อก WordPress มาทีนึงแล้ว แต่เป็นการย้ายแบบไม่เต็ม 100% เพราะว่าแค่ export posts กับ theme ออกมา ข้อมูลบางส่วนหายไปก็มีเหมือนกัน .. คราวนี้เลยย้ายบล็อกแบบ **“โคลนนิ่ง”** เอาให้แบบว่า ของใหม่เหมือนของเดิมเป๊ะๆเลยล่ะ .. เผื่อมีประโยชน์กับผู้ที่ต้องการข้อมูลนะครับ

สิ่งที่เราจะทำวันนี้: ย้ายบล็อก WordPress (แบบติดตั้งเอง) จากโฮสต์หนึ่ง ไปยังอีกโฮสต์หนึ่ง
สิ่งที่ต้องมี: แค่ ftp client กับ text editor ก็พอละมั้ง

เริ่มกันเลย…

**1. Export ฐานข้อมูลบล็อกเก่า** .. โฮสต์ที่ผมใช้มี phpMyAdmin ให้ ก็เข้าไป export ฐานข้อมูลได้เลยครับ .. ผมเลือกเป็นไฟล์ sql เลย เพราะฐานข้อมูลไม่ใหญ่มาก

[![01export_db](http://www.armno.in.th/wp-content/uploads/WordPress_10531/01export_db_thumb.gif)](http://www.armno.in.th/wp-content/uploads/WordPress_10531/01export_db.gif)



**2. ก็อปปี้ไฟล์ทุกไฟล์ของบล็อกมาไว้ในเครื่อง** .. ผมใช้ FileZilla ก็เข้าไปโฟลเดอร์ที่เก็บไฟล์ของ WordPress บนเซิฟเวอร์ และก็อปปี้ทุกไฟล์ไว้ในเครื่องเราก่อน โดยเลือกไฟล์ทั้งหมด (Ctrl+A) แล้วเลือก **“ดาวน์โหลด”**

[![02get_files](http://www.armno.in.th/wp-content/uploads/WordPress_10531/02get_files_thumb.gif)](http://www.armno.in.th/wp-content/uploads/WordPress_10531/02get_files.gif)

**3. ติดตั้ง WordPress บนโฮสต์ใหม่** .. ก็ติดตั้งแบบปกติเลยครับ เหมือนเราเริ่มติดตั้ง WordPress ใช้ครั้งแรก (ไม่ขอลงรายละเอียดนะครับ ^^)

**4. ลบตารางในฐานข้อมูลของบล็อกใหม่ แล้ว import ไฟล์ฐานข้อมูลของบล็อกเก่า** (ที่ export ออกมาในข้อ 1) เข้าไปแทนที่ครับ

[![03clear_db](http://www.armno.in.th/wp-content/uploads/WordPress_10531/03clear_db_thumb.gif)](http://www.armno.in.th/wp-content/uploads/WordPress_10531/03clear_db.gif)

[![04import_db](http://www.armno.in.th/wp-content/uploads/WordPress_10531/04import_db_thumb.gif)](http://www.armno.in.th/wp-content/uploads/WordPress_10531/04import_db.gif)

**5. แก้ไขไฟล์ wp-config.php ให้ตรงตามฐานข้อมูลใหม่** .. จากไฟล์ในข้อ 2 นะครับ ซึ่งไฟล์นี้จะอยู่ที่ root folder ของ WordPress .. แก้ข้อมูลของ database username, password กับ database name ให้เป็นของโฮสต์ใหม่

[![05change_config](http://www.armno.in.th/wp-content/uploads/WordPress_10531/05change_config_thumb.gif)](http://www.armno.in.th/wp-content/uploads/WordPress_10531/05change_config.gif)

**6. ลบไฟล์ทุกไฟล์ของ WordPress บนบล็อกใหม่ แล้วอัพโหลดไฟล์ในเครื่องเราเข้าไปแทนที่** (อย่าลืมแก้ไฟล์ wp-config.php ตามข้อ 5 ก่อนนะครับ)

[![06upload_files](http://www.armno.in.th/wp-content/uploads/WordPress_10531/06upload_files_thumb.gif)](http://www.armno.in.th/wp-content/uploads/WordPress_10531/06upload_files.gif)

**7. แก้ไข site url ในฐานข้อมูลให้ถูกต้อง** .. ถึงขั้นตอนนี้ ถ้าไม่มีปัญหาอะไร บล็อกใหม่น่าจะรันได้ และหน้าตาเหมือนบล็อกเดิมเปี๊ยบ .. แต่ยังไม่หมดครับ Site Url ของเรายังเป็นบล็อกเดิมอยู่ ให้ล็อกอินเข้าไปที่ wp-admin แล้วแก้ไข WordPress address กับ Blog address ให้ถูกต้อง จากเมนู Settings –> General ครับ

[![07change_url](http://www.armno.in.th/wp-content/uploads/WordPress_10531/07change_url_thumb.gif)](http://www.armno.in.th/wp-content/uploads/WordPress_10531/07change_url.gif)

** ขั้นตอนนี้ถ้าใครมีปัญหา (แบบผม) คือขึ้น Fetal Error หรืออะไรประมาณนี้ แนะนำให้ไปรัน MySQL Query ใน phpMyAdmin เลยครับ โดยรัน SQL Query ตามนี้เลย (yournewblog.com ก็เปลี่ยนเป็น url ของบล็อกใหม่นะครับ) .. หลังจากนั้นค่อยเข้าไปที่ wordpress admin แล้วแก้ blog address อีกทีนึง

[![071sql_update](http://www.armno.in.th/wp-content/uploads/WordPress_10531/071sql_update_thumb.gif)](http://www.armno.in.th/wp-content/uploads/WordPress_10531/071sql_update.gif)

    
    UPDATE wp_options SET option_value = "http://www.yournewblog.com" WHERE option_id = 1


เสร็จแล้วครับ :)


###### สรุป





	
  1. สำรองฐานข้อมูลของบล็อกเก่า

	
  2. สำรองไฟล์ทั้งหมดของบล็อกเก่า

	
  3. ติดตั้ง WordPress บนโฮสต์ใหม่

	
  4. แทนที่ฐานข้อมูล และไฟล์ทั้งหมดบนโฮสต์ใหม่ ด้วยไฟล์ที่ export มาจากโฮสต์เก่า

	
  5. อย่าลืมแก้ไฟล์ wp-config.php ล่ะ

	
  6. แก้ไข site url กับ blog url ให้เรียบร้อย


เป็นอันเสร็จพิธี .. หวังว่าคงมีประโยน์นะครับ

;)
