---
layout: post
title: "Debug Firefox บน Android ผ่าน WiFi"
description: Developer Tools ใน Firefox มี feature WebIDE ที่เราสามารถใช้ debug web app จาก Firefox บน Android ได้ผ่าน WiFi ถือว่าสะดวกดี มีขั้นตอนการ setup เพียงเล็กน้อยครับ
published: false
cover-image: 
thumbnail: 
tags:
---

Developer Tools ของ Firefox นั้นได้รับการพัฒนามาอย่างต่อเนื่อง ไม่ได้น้อยหน้า DevTools ของ Google Chrome เลย
(ถ้าดูจาก [home page ของ Developer Tools](https://developer.mozilla.org/en-US/docs/Tools) จะมี feature เยอะมาก) 
วันนี้เราจะมาดูวิธีการใช้ feature WebIDE ของ Firefox เพื่อ debug web app ที่อยู่บน Firefox บน Android ผ่าน WiFi กัน

## สิ่งที่ต้องมี

- Firefox Desktop จะเป็นตัวธรรมดา หรือ [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) ก็ได้ครับ
- Android device ที่มี 
  - [Firefox for Android](https://play.google.com/store/apps/details?id=org.mozilla.firefox) (v. 42 ขึ้นไป)
  - แอพ [Barcode Scanner (ZXing Team)](https://play.google.com/store/apps/details?id=com.google.zxing.client.android)

![](/img/posts/firefox-wifi-debug/mobile-download-app.png)

## Firefox for Android

![](/img/posts/firefox-wifi-debug/mobile-firefox-menu.png)

กดปุ่ม menu แล้วเลือก Settings > Advanced

![](/img/posts/firefox-wifi-debug/mobile-firefox-settings.png)

เปิด Remote debugging via Wi-Fi

![](/img/posts/firefox-wifi-debug/mobile-firefox-dev-settings.png)


## Firefox Desktop

เปิด WebIDE จากเมนู Tools > Web Developer > WebIDE

![](/img/posts/firefox-wifi-debug/desktop-webide.png)

ชื่อ device ที่เปิดตัวเลือก Remote debugging via Wi-Fi ไว้ ก็จะขึ้นมาอยู่ด้านขวามือของหน้าต่าง WebIDE

![](/img/posts/firefox-wifi-debug/desktop-devices-list.png)

พอคลิกเลือกที่ชื่อ device ในครั้งแรก WebIDE จะแสดงรูป QR Code ขึ้นมา 

![](/img/posts/firefox-wifi-debug/desktop-scan-qr-code.png)

ส่วนใน Firefox for Android ก็จะมี dialog ขึ้นมาถามว่า
มีเครื่องอื่นใน network ต้องการเชื่อมต่อเข้ามา เราต้องการ scan QR code เพื่ออนุญาตหรือไม่
ก็เลือก Scan หรือ Scan and Remember ได้เลย จะได้ไม่ต้อง scan หลายรอบ

![](/img/posts/firefox-wifi-debug/mobile-permission-requests.png)

พอ scan QR code แล้ว Developer Tools ของ WebIDE ก็จะใช้งาน debug web app ที่ Firefox for Android ได้ทันที
ตรงซ้ายมือด้านล่าง จะแสดงชื่อ tab ที่เปิดทั้งหมดของ Firefox for Android ก็เลือกจิ้ม debug ได้ตามต้องการครับ

![](/img/posts/firefox-wifi-debug/desktop-devtools-enabled.png)

Happy debugging ครับ
