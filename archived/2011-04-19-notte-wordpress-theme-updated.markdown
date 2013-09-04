---
comments: true
date: 2011-04-19 23:50:06
layout: blog
slug: notte-wordpress-theme-updated
title: Notte WordPress Theme Updated
wordpress_id: 1545
categories:
- Web Development
tags:
- CSS3
- HTML5
- Notte
- WordPress Theme
---

ภาคต่อจาก [**My First WordPress Theme**](http://armno.in.th/2010/07/20/my-first-wordpress-theme/) กับ theme แรกและ theme เดียวของผมนะครับ

[![image](http://files.armno.in.th/uploads/2011/04/image_thumb.png)](http://files.armno.in.th/uploads/2011/04/image.png)

จากเวอร์ชั่นแรก ผมค่อยๆอัพเดทเรื่อยๆ เนื่องจากความคิดส่วนตัวว่า “มันยังไม่เสร็จ” คิดอะไรออกใส่ลงไป ทำไปทำมาก็อย่างที่เห็นครับ เปลี่ยนไปจากเดิมค่อนข้างเยอะเลย แต่ layout หลักยังเป็น 2 coloum (1 content + 1 sidebar) เหมือนเดิมครับผม

เริ่มเลยดีกว่า ..




### แรงบันดาลใจ


ได้จากบทความนี้ครับ [**Create a Clean Business Web Layout in Photoshop**](http://webdesignfan.com/create-a-clean-business-web-layout-in-photoshop/) ซึ่งในตอนแรกผมแค่คิดว่า หัดทำตาม tutorial เพื่อฝึกฝีมือ ชอบโทนสีแล้วก็พื้นหลังที่เป็น grid pattern ครับ .. แต่พอทำเข้าจริงๆ คิดว่าไหนๆก็ไหนๆแล้ว ดัดแปลงเป็นแบบที่ต้องการเลยดีกว่า เลยไปมั่วใน Photoshop และได้ผลประมาณนี้ครับ ออกไปทางแนว personal website มากกว่า blog

[![webdesignfan_business_layout_grid_2](http://files.armno.in.th/uploads/2011/04/webdesignfan_business_layout_grid_2_thumb.jpg)](http://files.armno.in.th/uploads/2011/04/webdesignfan_business_layout_grid_2.jpg)

header ใหญ่เท่าโลก ตาม trend ครับ พยายามตัดสิ่งที่ไม่จำเป็นออกให้มากที่สุด .. font **Lobster** กับ **Ubuntu** จาก [Google Web Fonts](http://www.google.com/webfonts) ครับ .. กับ design ตัวนี้ บอกตรงๆว่าหมดมุกในส่วน content ตรงกลางครับ ไม่รู้จะใส่อะไร เลยออกมาธรรมดามาก .. อ้อ รูปลิงจาก [@nemopear](http://twitter.com/nemopear) ครับ ![Smile](http://files.armno.in.th/uploads/2011/04/wlEmoticon-smile.png)


### PSD to HTML


จริงๆก็คงจะไม่ใช่เท่าไหร่นัก เนื่องจากผมมาทางสาย coder ไม่ใช่ designer ทำไฟล์ psd ไว้เลยได้แค่ดูเป็นแบบ ไม่ได้ถึงกับ slice + convert แบบ pixel perfect ตาม design เป๊ะๆ (ตอนทำ photoshop ในหัวผมก็คิดแต่ว่า ตรงนี้จะเขียน css ยังไงวะ หรือเอาง่ายๆก็คือ ออกแบบเพื่อให้โค้ดง่าย .. นั่นแหละครับ) เป้าหมายหลักคือ ใช้รูปให้น้อยที่สุด

[![image](http://files.armno.in.th/uploads/2011/04/image1.png)](http://armno.in.th/labs/nextwptheme/)

ดูเวอร์ชั่นโค้ดเสร็จแล้วที่ [_demo_](http://armno.in.th/labs/nextwptheme/) ครับ (หรือคลิกที่รูปก็ได้นะ)

ใช้ [HTML5Boilerplate](http://html5boilerplate.com/) เป็นหลัก featuring กับ [960.gs](http://960.gs) ครับ .. ตรงที่ไม่เหมือน design ก็เป็น welcome text ตรงกลางที่ยืด background ออกไปเต็มความกว้างเพจ แล้วก็มี footer ข้างล่างครับที่นึกได้ตอนโค้ดว่า ที่ออกแบบไว้มันมืดไปหน่อย


### แก้ไข theme Notte เดิม


หลังจากที่โค้ด html + css เสร็จ รู้สึกว่า content ตรงกลางยังขัดใจ ไม่ลงตัว ดูมันแบนๆติดไปกับพื้นหลัง (ทั้งข้อความและรูปลิง) เลยเอามาแต่ header ก่อนดีกว่า ตรงไหนที่เรายังไม่ชอบก็เว้นไปก่อน .. แล้วก็ ขี้เกียจเขียนโค้ดใหม่ตั้งแต่แรกด้วย (ขี้เกียจเยอะมาก) .. เอาวะ แก้แม่งจากของเดิมนี่แหละ .. HTML5Boilerplate กับ 960.gs ที่ทำมาเลยหมดความหมายเลย เพราะว่าโครงเดิมของ Notte theme ไม่ได้ใช้ทั้งสองตัว (ซะอย่างงั้นน่ะ ![Sad smile](http://files.armno.in.th/uploads/2011/04/wlEmoticon-sadsmile.png))

[![image](http://files.armno.in.th/uploads/2011/04/image_thumb1.png)](http://files.armno.in.th/uploads/2011/04/image2.png)

หน้าที่เป็น single post จะไม่มีข้อความ welcome text ครับ เพราะจะกินพื้นที่ content เยอะมาก


### Header


[![image](http://files.armno.in.th/uploads/2011/04/image_thumb2.png)](http://files.armno.in.th/uploads/2011/04/image3.png)

ใช้ฟอนต์ [Lobster](http://www.google.com/webfonts/family?family=Lobster&subset=latin) สำหรับ heading tags ส่วน navigation ใช้ฟอนต์ [Ubuntu](http://www.google.com/webfonts/family?family=Ubuntu&subset=latin) ครับ .. แถบข้างบนใช้พื้นหลังเป็นรูป (ที่มี noise pattern) .. ตรงนี้ใช้ css3 ทำ box-shadow แล้วก็ rgba พื้นสีเทาอ่อน ให้เห็นทะลุไปพื้นหลังจริงๆของเพจ (ที่เป็นรูป grid) อีกที .. ข้อความใหญ่เบ้งตรงนั้น hard code เข้าไปใน header.phpเลยครับ ง่ายดี ![Open-mouthed smile](http://files.armno.in.th/uploads/2011/04/wlEmoticon-openmouthedsmile.png)

[![image](http://files.armno.in.th/uploads/2011/04/image_thumb3.png)](http://files.armno.in.th/uploads/2011/04/image4.png)

ทำเมนูไว้ 5 อัน ใช้ได้แค่ 3 อันแรกครับ สองอันหลังยังไม่ได้ทำ .. ตรงนี้ hard code ลงไปใน theme เลย (อีกแล้ว) ไม่ได้ใช้ menu ของ WordPress เพราะไม่ได้ต้องการอะไรเพิ่มเติม


### Content


[![image](http://files.armno.in.th/uploads/2011/04/image_thumb4.png)](http://files.armno.in.th/uploads/2011/04/image5.png)

พยายามให้พื้นหลังใกล้เคียงสีขาวมากที่สุด แต่ก็ขอมี rgba หน่อยนึง (ชอบ) .. ลดขนาดฟอนต์ลงจาก 14px เหลือ 13px เพราะดูใน Linux แล้วผมว่า 14px จะใหญ่เกินไปสำหรับฟอนต์ภาษาไทย .. แล้วก็ขยายความกว้างของ content ไปนู่น 1020px


### Sidebar


[![image](http://files.armno.in.th/uploads/2011/04/image_thumb5.png)](http://files.armno.in.th/uploads/2011/04/image6.png)

หลักๆก็คงแบบเดิมไว้ แต่กว้างขึ้นนิดหน่อยครับ .. ฟอนต์สำหรับหัวข้อของ widget ยังคงใช้ Lobster อยู่


### Footer




### [![image](http://files.armno.in.th/uploads/2011/04/image_thumb6.png)](http://files.armno.in.th/uploads/2011/04/image7.png)


หลักๆแล้วก็ยังเหมือนเดิมครับ ผมใส่ margin-bottom เว้นที่ข้างล่างไว้หน่อย เพื่อให้มันดูเหมือน “ลอย” ขึ้นมาจากพื้นหลังอีกที


### IE?


เครื่องผมมีแค่ IE8 ก็จะทดสอบแค่เวอร์ชั่นนี้นะครับ ![Smile with tongue out](http://files.armno.in.th/uploads/2011/04/wlEmoticon-smilewithtongueout.png) .. จริงๆแล้วผมไม่ได้ใส่ใจอะไรมากเลยกับ IE เพราะดูจากสถิติคนเข้าเว็บแล้ว IE8 นำ IE6 อยู่พอสมควร เลยคิดว่าทำให้แค่ “พอดูได้” ใน IE8 ก็พอครับ ที่หายไปใน IE8 ก็พวก CSS3 ต่างๆ (box shadow, text shadow, border radius) ส่วน rgba background ใช้รูป transparent PNG แก้ขัดเอาครับ (ใช้ Modernizr ทำ css fallback class ให้ IE โดยเฉพาะนะเนี่ย)

[![image](http://files.armno.in.th/uploads/2011/04/image_thumb7.png)](http://files.armno.in.th/uploads/2011/04/image8.png)


### สรุป





	
  * layout หลักยังคงเดิม การเปลี่ยนแปลงส่วนมากไปตกที่ CSS

	
  * มีไอเดียเกี่ยวกับ WordPress Theme จดไว้มากมาย แต่กับ Notte Theme นี้คงจะหยุดแค่นี้ครับ คงไม่มีเวอร์ชั่นถัดไปแล้ว เพราะว่าโค้ดเริ่มมาไม่ดี อยากทำใหม่ทั้ง css และ html

	
  * ให้เวอร์ชั่นเป็น 0.95 ละกันนะ ยังไม่ถึง 1 เพราะมันไม่ถึง

	
  * theme นี้ดูแล้วไม่น่าจะเอาไปใช้กับ blog อื่นได้สะดวกนัก แต่ถ้าใครอยากได้ไปทำต่อ, ไปดูโค้ดเล่น, ก็ยินดีครับ


ขอคำแนะนำเพื่อปรับปรุงด้วยครับ ![Smile](http://files.armno.in.th/uploads/2011/04/wlEmoticon-smile.png)
