---
layout: post
title: "Device Mode ใน Google Chrome"
description: Device mode เป็นส่วนหนึ่งของ Chrome Devtools ทำให้เราทำงานกับ responsive website หรือ mobile web app ได้สะดวกมากขึ้น โดยที่เราสามารถให้ chrome จำลองตัวเองเป็น mobile device ที่ไม่เพียงแค่เซ็ตขนาดหน้าจอ แต่ยังมีฟีเจอร์อื่นๆ ให้อีกมากมายครับ
published: true
thumbnail:
---

ใน Chrome Devtools จะมี [device mode](https://developer.chrome.com/devtools/docs/device-mode) เป็นส่วนหนึ่งที่มีประโยชน์มากกับการทำ responsive website หรือ mobile web app
หรือแม้กระทั่ง hybrid app อย่าง Cordova ก็ด้วยครับ โดยที่ device mode ใน devtools ก็คือการจำลอง Google Chrome
ให้เป็นเหมือน mobile device เครื่องหนึ่ง สิ่งที่จะได้ก็คือ

- ขนาดหน้าจอ (ขนาด browser) ตาม device ที่เลือก
- จำลอง device pixel ratio
- user agent string ก็ตาม device ที่เลือก
- จำลอง network condition (WiFi, 2G, 3G)
- ตั้งค่า CSS Media แบบ manual ได้
- จำลองค่า geolocation หรือ accelerometer ก็ได้

> เท่าที่ได้ใช้งาน device mode มา รู้สึกได้ว่าเป็นอีกฟีเจอร์หนึ่งของ devtools ที่ถูกให้ความสำคัญพอสมควร ได้เห็นฟีเจอร์ให้ของ device mode เพิ่มขึ้นมาเรื่อยๆ ครับ

> ในโพสต์นี้ผมใช้งาน device mode บน Chrome Canary อาจจะมีหรือยังไม่มีบางฟีเจอร์ใน Chrome Beta หรือ Stable ก็ได้ครับผม

## เริ่มใช้งาน device mode

เปิด devtools ขึ้นมาใน Chrome (<kbd>command</kbd> + <kbd>shift</kbd> + <kbd>I</kbd>) แล้วคลิก icon รูปโทรศัพท์ อยู่ใกล้ๆ รูปแว่นขยาย

![activate device mode](/img/posts/device-mode/activate-icon.png)

ก็จะได้เจอหน้าจอแบบนี้ครับ

![chrome device mode](/img/posts/device-mode/device-mode-activated.png)

## เลือก mobile device

อันดับแรกเลย เราสามารถเลือก device จาก preset ที่มีอยู่แล้วได้ มี mobile device พื้นฐานมาให้ครบๆ ตามแต่ละ OS/platform แต่ละ device ก็จะมีขนาดหน้าจอ, device pixel ratio กับ user agent string ที่ต่างกันออกไป

![device presets](/img/posts/device-mode/device-preset.png)

**(Canary)** ถัดมาเป็นส่วน orientation ซึ่งใน canary มีตัวเลือกนี้เพิ่มเข้ามา ทำให้เราสามารถเลือกว่าจะให้ขนาดหน้าจอนั้นเป็นแนวตั้งหรือแนวนอน แถมยังเลือกได้ด้วยว่าจะให้เป็นแบบที่มี navigation bar (UI ของ browser) พร้อมทั้ง keyboard ติดมาด้วยหรือไม่ ทำให้เราเห็นภาพขนาดจริงๆ ของ viewport เวลาเว็บของเราไปอยู่บน browser ได้ด้วย

อย่างในรูปนี้ ส่วนที่เป็นขอบดำด้านบนและล่าง ก็คือ UI ของ Safari บน iOS เทียบกับ iOS Simulator แล้วถือว่า devtools ทำได้ใกล้เคียงของจริงมาก

![orientation options](/img/posts/device-mode/orientation-options.png)

## Network Throttling

ถือว่าเป็นอีกหนึ่ง killer feature เลยก็ว่าได้ ทำให้เราสามารถจำลองความเร็วอินเตอร์เน็ตหลายๆ แบบได้
มีประโยชน์กับการ optimize performance มากๆ เพราะทำให้ developer เห็นภาพชัดขึ้นว่า
ถ้าเว็บของเราถูกโหลดผ่านความเร็วอินเตอร์เน็ตที่แตกต่างกัน สิ่งที่ user จะเห็นนั้นจะช้าหรือเร็วยังไง

สิ่งที่ผมชอบก็คือ นอกจากจะจำลองความเร็วเน็ตได้แล้ว ยังจำลอง network latency ให้ด้วย ซึ่งตรงกับสถานการณ์จริงมาก

![network options](/img/posts/device-mode/network-options.png)

## Media Queries Indicator

ถ้าในไฟล์ CSS ของเรามี media queries `@media` อยู่ด้วย ก็จะเห็นแถบสีสำหรับแบ่ง breakpoint ใน CSS ตามที่เราเขียนได้ด้วย

![media queries](/img/posts/device-mode/media-queries.png)

![media queries](/img/posts/device-mode/media-queries-2.png)

## `@media` override

device mode ยังมีตัวเลือกอื่นๆ ให้เล่นกันอีก เช่น บางครั้งต้องเขียน CSS ให้ `@media print` devtools ก็มีตัวเลือกให้ chrome แปลงร่างเป็น printer ได้ CSS ที่มี `@media print` กำกับอยู่ก็จะทำงาน (เมื่อก่อนต้องกด print preview แล้วก็เดาเอา)

![media override](/img/posts/device-mode/media-override.png)

## Sensors

ใน tab Sensors เราสามารถจำลอง touch event, geolocation กับ accelerometer ได้ ผมเองไม่ค่อยได้ใช้ส่วนนี้มาก แต่คิดว่าถ้าใครได้ทำเว็บที่ใช้ API พวกนี้บ่อยๆ น่าจะมีประโยชน์พอสมควรครับ

![sensors options](/img/posts/device-mode/sensors.png)

นั่นแหละครับท่านผู้ชม สำหรับผมแล้ว device mode ใน devtools ถือว่าเป็น tool ที่ช่วยทำ responseive web/hybrid app ได้ง่ายขึ้นอีกเยอะเลย
แต่ก็ยังมีส่วนที่ขาดหายไปอยู่ เช่น การจำลอง CPU/GPU performance ของ mobile device นั้นยังไม่มี (mobile device นั้นช้ากว่า pc พอสมควร)
แต่ยังไงลองเล่นกันดูนะ รับรองจะติดใจ


