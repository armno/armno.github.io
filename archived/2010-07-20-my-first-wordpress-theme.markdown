---
comments: true
date: 2010-07-20 07:31:23
layout: blog
slug: my-first-wordpress-theme
title: My First WordPress Theme
wordpress_id: 1301
categories:
- Web Development
tags:
- CSS3
- HTML5
- WordPress
- WordPress Theme
---

สวัสดีครับ .. หลังจากที่แอบซุ่มเปลี่ยนธีมทึมๆนี้อยู่ได้สักพัก คงได้ฤกษ์เปิดตัวอย่างเป็นทางการซะที (ว่าไปนั่น) ด้วยความตั้งใจมานานนนนนมากแล้ว ที่อยากลองทำ WordPress Theme ดูซักครั้ง แต่ไม่เคยสำเร็จซักครั้ง เพราะผมไปติดอยู่ตรงออกแบบใน Photoshop ซึ่งเป็นสิ่งที่ทำไม่เป็นเลย .. ชอบ Web Design ก็จริง แต่ไม่มีความสามารถครับ เพราะชีวิตประจำวันก็มีแต่เขียนโค้ดๆ ไม่ได้ลงมือ design จริงๆจังๆซักที .. ว่าแล้วโครงการทำ WordPress Theme ก็ล้มไปพักใหญ่

จริงๆแล้วผมเคย[ลองออกแบบ WordPress Theme](http://armno.in.th/20090626/new-design-1-for-armno-in-th) ที่อยากทำ ใน Photoshop แล้วครั้งนึงครับ หน้าตาก็ประมาณข้างล่างนี้ .. นานแล้วเหมือนกันนะ แต่ว่าตอนนั้นก็ไม่ได้ทำเป็น WordPress Theme จริงๆจังๆซักที เงียบหายไปเลย

[![newblog2](http://files.armno.in.th/uploads/2010/07/newblog2_thumb.png)](http://files.armno.in.th/uploads/2010/07/newblog2.png)

แต่แล้วมีแรงฮึดอีกครั้งจากไหนไม่รู้ จากการเริ่มศึกษาเรื่อง **HTML5** กับ **CSS3** อย่างเอาจริง ประกอบกับเป็นช่วงที่ WordPress 3.0 คลอด RC พอดี เลยคิดเล่นๆว่าลองถอดแบบ **TwentyTen Theme** มาเป็น HTML5 กับ CSS3 ดู จะเป็นยังไง .. ตอนเริ่มแรก คิดแค่ตรงนี้ครับ .. แต่แล้วมันก็ออกมาเป็นแบบนี้ ..

[![theme_screenshot](http://files.armno.in.th/uploads/2010/07/theme_screenshot_thumb.png)](http://files.armno.in.th/uploads/2010/07/theme_screenshot2.png)

จะมีส่วนที่เหมือน TwentyTen ก็ตรง Layout หลัก นอกนั้นก็มั่วหมดเลย .. ผมไม่ได้จริงจังอะไรมาก ก็ทำๆไปเรื่อยๆ ไม่มีการวางแผน ไม่ track เวลาที่ใช้ ไม่มี wireframe หรืออะไรประมาณนั้นเลย แบบว่าคิดอะไรได้ ก็ใส่ๆไป .. เป็นวิธีการทำงานที่ไม่ดีนะครับ อย่าเอาเป็นอย่างเลย (แต่ผมก็แอบทำบ่อยๆ แบบว่าขี้เกียจ)

### โครงสร้าง HTML

Concept หลักของผมก็คือ** “ลองของ”** อะไรทุกอย่างที่ยังไม่รู้ หรือรู้แล้วแต่ยังไม่ได้ลองทำจริงๆ มีอะไรยัดใส่ให้หมดครับ .. สิ่งแรกก็คือ โครงสร้างของธีมนี้ต้องเป็น HTML5 เป็นหลัก ก็พอได้ไอเดียจากบทความนี้ครับ [“Design a blog with HTML5”](http://html5doctor.com/designing-a-blog-with-html5/) จาก html5doctor.com .. จริงๆก็ยังมีความรู้อยู่น้อยมาก และยังสับสนในบางเรื่องบางส่วนครับ จึงไปเก็บ “[HTML5 Starter Pack](http://sickdesigner.com/resources/HTML5-starter-pack/index.html)” มา เพราะมีให้ครบทั้ง html, css, js ให้เราพร้อมลุยได้ทันที

เนื่องด้วยผมอยากได้ layout แบบ TwentyTen จึงวางเป็น 2 column (1 content + 1 right sidebar) พร้อมด้วยรูป Header ขนาดพอเหมาะ ที่เหลือก็ไหลตามน้ำครับ .. มีหลายอย่างที่ผมหยิบใส่ แล้วเอาออก บางอย่างก็ไม่ได้คิดว่าจะเอามาใช้เลย แต่ดันมาอยู่ในธีม ก็มีนะ

### Header

[![header](http://files.armno.in.th/uploads/2010/07/header_thumb.png)](http://files.armno.in.th/uploads/2010/07/header.png)

รูปแบบการจัดวางชื่อบล็อก รูป เมนู ก็เอามาจาก TwentyTen ครับ เพิ่มไปหน่อยคือส่วนขวาบน ไอคอนที่ลิ้งก์ไปยังเพจต่างๆที่อาจจะเป็นประโยชน์ .. ส่วน navigation หลักของบล็อกนี้ "พ่น" เอาลิสต์ของหมวดหมู่ (Category) ของบล็อกนี้ออกมาครับ โดยที่แสดงเฉพาะ parent category ออกมา แล้วให้บรรดา sub-category อยู่ใต้ category นั้นๆ คอยแสดงผลออกมาเมื่อเลื่อนเมาส์เหนือ category หลักครับ

[![image](http://files.armno.in.th/uploads/2010/07/image_thumb18.png)](http://files.armno.in.th/uploads/2010/07/image18.png)

แอบยัด CSS3 ไปหลายจุด เริ่มจาก **nth-child selector** ในการใส่ icon หน้า category ต่างๆ แล้วก็ทำ drop-down menu ตามบทความนี้ครับ “[CSS3 Dropdown Menu](http://www.webdesignerwall.com/tutorials/css3-dropdown-menu/)” จาก webdesignerwall .. ลองใช้ **RGBA** สำหรับสีพื้นของ menu ดูด้วย .. ส่วนตัวคุ้นเคยกับ HEX มากกว่า RGB ครับ ก็เลยมึนๆเกี่ยวกับสีพอสมควร ก็เลยเนียนใส่เป็นสีเทาซะเลย ง่ายดี

### Footer

อาจเรียกได้ว่าเป็นส่วนที่สิ้นคิดที่สุดของธีมนี้ก็ว่าได้ เพราะผมไม่รู้จะใส่อะไรจริงๆ นอกจากโลโก้ของ [WordPress](http://armno.in.th/content/wordpress) แล้วก็ถ้อยคำแสดงความเป็นเจ้าของ แค่นั้นเอง

[![footer](http://files.armno.in.th/uploads/2010/07/footer_thumb.png)](http://files.armno.in.th/uploads/2010/07/footer.png)

### Content

ส่วนหัวไม่มีอะไรมากครับ ชื่อโพสต์ วันที่ ผู้เขียน และก็ปุ่ม Like ของ [Facebook](http://www.facebook.com) เพื่อความ in trend

[![content_header](http://files.armno.in.th/uploads/2010/07/content_header_thumb.png)](http://files.armno.in.th/uploads/2010/07/content_header.png)

ท้ายโพสต์ ใส่ metadata เล็กๆน้อยๆไว้ครับ ไม่แน่ใจเหมือนกันว่าไอคอนเล็กๆนั่นจะพอสื่อถึง category, tags, comments ได้ดีพอหรือเปล่า .. ส่วน style ของ [WP-PageNavi](http://wordpress.org/extend/plugins/wp-pagenavi/) ทำไว้เสร็จสรรพ (ถ้าไม่ได้ลงปลั๊กอินตัวนี้ หรือ inactive ไว้ ก็จะแสดงเป็น Newer Post กับ Older Post ตามแบบ TwentyTen ครับ)

[![content_footer](http://files.armno.in.th/uploads/2010/07/content_footer_thumb.png)](http://files.armno.in.th/uploads/2010/07/content_footer.png)

Related Post ได้ของใหม่เป็นปลั๊กอินชื่อ [WP-Thumbie](http://wordpress.org/extend/plugins/wp-thumbie/) หน้าตาดูดีมีชาติตระกูลมากขึ้น มี thumbnail ให้ดูเล่นๆด้วยนะ

[![content_related_post](http://files.armno.in.th/uploads/2010/07/content_related_post_thumb.png)](http://files.armno.in.th/uploads/2010/07/content_related_post.png)

### Comments

มี [Gravatar](http://en.gravatar.com/) ตามแบบธีมทั่วไป เว้นสเปซไว้เยอะๆเพื่อให้ดูสบายตา .. ในส่วนคอมเม้นต์นี้ ใช้ฟีเจอร์ใหม่ใน WordPress 3.0 ที่ทำให้การสร้าง comment form ได้แบบง่ายโคตรๆ จากบทความนี้ครับ "[WordPress 3.0 Tip: The Comment Form](http://ottopress.com/2010/wordpress-3-0-theme-tip-the-comment-form/)" จาก ottopress.com ครับผม

[![content_comment](http://files.armno.in.th/uploads/2010/07/content_comment_thumb.png)](http://files.armno.in.th/uploads/2010/07/content_comment.png)

มีนิดนึงสำหรับปุ่ม Comment ได้ไอเดียวและวิธีการจากบทความ "[CSS3 Gradient Buttons](http://www.webdesignerwall.com/tutorials/css3-gradient-buttons/)" จาก webdesignerwall.com อีกแล้วครับท่าน

### Sidebar

ส่วนบนใส่ Author Info. ไว้ครับ (ดึงมาจากข้อมูลที่ตาม User Settings) สำหรับบล็อกนี้มีผมเป็น author อยู่คนเดียว จึงดึงมาไว้ตรงนั้นแบบให้อยู่ตลอดเลย .. ส่วนด้านล่างนั้น widgetize เรียบร้อยแล้ว ลาก widget ใส่ได้เต็มที่แล้วล่ะ ![Smile](http://files.armno.in.th/uploads/2010/07/wlEmoticonsmile.png)

[![sidebar](http://files.armno.in.th/uploads/2010/07/sidebar_thumb.png)](http://files.armno.in.th/uploads/2010/07/sidebar.png)

### Theme Options Page

มี Theme Options Page กับเขาด้วยครับผม จากบทความดีๆ เข้าใจง่ายๆจาก Nettuts "[How to Integrate an Options Page into Your WordPress Theme](http://net.tutsplus.com/tutorials/wordpress/how-to-integrate-an-options-page-into-your-wordpress-theme/)" ทำให้การ save/load options ต่างๆของธีมที่ทำขึ้นมานี้ สะดวกขึ้นครับ .. ตอนนี้มี options ลวกๆแค่ 4 อย่าง กับ header image เท่านั้นที่ปรับแต่งได้จาก admin panel ครับ

[![theme_options](http://files.armno.in.th/uploads/2010/07/theme_options_thumb.png)](http://files.armno.in.th/uploads/2010/07/theme_options.png)

### Cross-broser Test

ขี้เกียจ capture รูปมาละครับ (อ้าว??!!) ก็พอสรุปได้คร่าวๆดังนี้ครับ
	
* Firefox 3.6 – OK
* IE8 - ไม่มีคุณสมบัติของ CSS3 เหลืออยู่เลย แต่ layout ยังพอดูดีครับ
* Google Chrome 5.0 – OK
* Safari 5.0 – OK แต่ฟอนต์ภาษาไทยจะแปลกๆหน่อย ตามฉบับ Safari
* Opera 10.53 – OK แต่ border-radius ของ navigation ไม่ออกซะงั้น

ส่วน browser อื่นๆนอกเหนือจากนี้ ไม่ได้ทดสอบครับ ถ้าเกิดพังขึ้นมา ก็เอาเป็น ธีมนี้ไม่รองรับแล้วกันนะ (ส่วน IE6 ผมใส่ปลั๊กอินสำหรับ warn user ไว้แล้วนะ) แค่ layout ไม่พังสำหรับ modern browsers ทั้งหมด ก็ OK สำหรับผมแล้วล่ะ

### @Todo
	
* เพิ่มความสามารถในการ customize เมนูหลัก ตอนนี้ยังปรับอะไรไม่ได้เลย - 08.05.2010
* metadata ของหน้า page ยังแสดงผลผิด - 08.05.2010 เสร็จแล้ว 08.28.2010
* Threaded Comnments - 08.05.2010 เสร็จแล้ว 08.19.2010
* เพิ่ม icon อีกหน่อยมั้ย ? จืดมากกก
* ปรับปรุงหน้า Search Results - 08.22.2010 เสร็จแล้ว 09.25.2010
* default wideget ยังไม่เสร็จ - 08.27.2010 เสร็จแล้ว 09.25.2010

ธีมนี้ยังไม่ถือว่าเสร็จสมบูรณ์ครับ (ถึงแม้จะพอใช้งานได้) ยังต้อง refactor code และแก้บั๊กในหลายๆส่วน (ท่านใดพบเจอและช่วยแจ้ง จักเป็นพระคุณยิ่งครับ ![Open-mouthed smile](http://files.armno.in.th/uploads/2010/07/wlEmoticonopenmouthedsmile2.png)) .. ตอนนี้อยากให้มีคนมาช่วยดูโค้ดให้จริงๆเลยเชียว (โดยเฉพาะส่วนที่เป็น HTML5 ในแง่ของ semantics และ standards) เขียนขึ้นมาก็มั่วๆไป อ่านจากบทความหลายๆที่ ไม่เหมือนกัน ก็งงๆกันไป

ขอขอบคุณบทความ(ที่ไม่ได้ยังไม่ได้กล่าวถึง) ดังต่อไปนี้ด้วยครับ
	
* [How to create your first WordPress Theme Par 1](http://www.1stwebdesigner.com/tutorials/how-to-create-your-first-wordpress-theme-part-1/) และ [Part 2](http://www.1stwebdesigner.com/tutorials/how-to-create-your-first-wordpress-theme-part-2-2/)
* [How to Make Your Theme WordPress 3.0 Compatible](http://millionclues.com/problogging/wordpress-tips/make-your-theme-wordpress-3-0-compatible/)

### อ่านมาตั้งนาน ไม่แจกหรอกหรือ?

ธีมนี้ทำขึ้นมาเพื่อ**ศึกษาและทดลอง**เป็นหลักครับ ยังมีหลายส่วนที่ผมคิดว่ายังไม่ลงตัว หลายส่วนที่ยังต้องปรับปรุง และอีกบางส่วนที่ถูกออกแบบจากโครงสร้างของบล็อกนี้เป็นหลัก .. เลยคิดว่า**ยังไม่แจกธีม**นี้ครับ .. ในอนาคตหากมีโอกาสได้ปรับปรุงจริงๆจังๆ พร้อมกับทำให้มัน common มากกว่านี้ (และมีคนอยากได้ด้วย) ก็อาจจะแจกจ่ายกันต่อไปครับ

แต่สำหรับท่านที่สนใจ อยากได้โค้ดไปลองเล่น ไปศึกษา หรือเอาไปวิจารณ์โค้ด ผมยินดีให้ครับ ![Smile](http://files.armno.in.th/uploads/2010/07/wlEmoticonsmile.png)

_ปล. ธีมนี้ยังไม่มีชื่อครับ ยังไม่ได้คิดเลย .. คิดไม่ออกด้วยนะที่จริง_

_ธีมนี้ชื่อ Notte ครับ .. เป็นภาษาอิตาเลี่ยน แปลว่า Night (กลางคืน) เนื่องจากเวลาที่ผมใช้พัฒนาธีมนี้ ส่วนมากเป็นกลางคืนน่ะครับ_
