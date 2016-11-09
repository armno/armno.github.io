---
layout: post
title: "ย้าย Blog จาก GitHub Pages มาที่ DigitalOcean ตอน 1"
description: บันทึกเรื่องราวของการย้ายบล็อก armno.in.th จาก GitHub Pages มาโฮสต์เองบน server ที่ DigitalOcean ในตอนที่ 1 นี้จะเกี่ยวกับการ set up server ทั่วไป พร้อมกับ jekyll-hook เพื่อทำการ automated deploy จาก GitHub ครับ
published: true
cover-image:
thumbnail: "https://armno.in.th/img/posts/move-from-github-to-digital-ocean/cert-info.png"
tags: blog jekyll github letsencrypt
---

ตั้งแต่เปลี่ยนมาใช้ [Jekyll แทน WordPress](https://armno.in.th/2013/03/09/from-wordpress-to-jekyll/) blog นี้ก็ถูกโฮสต์อยู่บน GitHub Pages มาตลอด โดยที่ใช้ custom domain armno.in.th แทน armno.github.io

มีประเด็นที่อยากจะปรับปรุงคือ

1. Static resources อย่างไฟล์ CSS/JS รวมไปถึงรูปภาพต่างๆ มี expiration time (ใน HTTP headers) อยู่ที่ 10 นาที ซึ่งถือว่าสั้นมาก และเปลี่ยนค่าไม่ได้เพราะอยู่บน server ของ GitHub
2. ไม่สามารถใช้ HTTPS กับ custom domain บน GitHub Pages ได้ ถ้าอยากใช้ต้องใช้ร่วมกับ [Universal SSL ของ CloudFlare](https://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/)

เลยมีอยู่ช่วงนึงที่ผมปิด custom domain และเปลี่ยน URL จาก armno.in.th กลับไปเป็น armno.github.io เพียงเพื่อจุดประสงค์เดียว คือให้ใช้งานผ่าน HTTPS ได้ (แก้ปัญหาข้อ 2.) แต่ปัญหา ณ ตอนนั้นก็คือ GitHub Pages ยังไม่มี option `Enforce HTTPS` ทำให้เวลาเปิดเว็บจะสลับไปมาระหว่าง `http` กับ `https` ซึ่งดูแล้วก็แปลกๆ

<div class="text-center">
  <img src="/img/posts/move-from-github-to-digital-ocean/enforce-https-option.png" srcset="/img/posts/move-from-github-to-digital-ocean/enforce-https-option-2x.png 2x" alt="option enforce https ใน repo settings">
</div>

อีกอย่างก็ยังแก้ปัญหาข้อ 1. ไม่ได้ ก็เลยคิดว่าอยากจะลองย้าย blog จาก GitHub Pages ไปอยู่บน server ที่เช่าเองที่ DigitalOcean ดู โดยหวังผลคือ

1. ใช้งานผ่าน HTTPS ได้ 100% บน domain armno.in.th (ด้วย Let’s Encrypt)
2. สามารถควบคุมปัจจัยต่างๆ ที่เกี่ยวกับ performance ได้มากที่สุด ซึ่งบางอย่างนั้นจำเป็นต้องตั้งค่าที่ server (อย่างน้อยก็เซ็ต expire headers ของ static resource ได้เพื่อแก้ปัญหาข้อ 1. ข้างบน)
3. Blog จะโหลดไวขึ้นหากย้ายมาไว้ที่ droplet ของ DigitalOcean ที่ตั้งไว้ที่ประเทศสิงคโปร์
4. Workflow ของการเขียน blog ต้องเหมือนเดิม คือต้องมีการ deploy อัตโนมัติทุกครั้งที่ push code ไปที่ master branch เหมือนตอนใช้ GitHub Pages

เอาล่ะ เริ่มเลย

## สร้าง Droplet ใหม่บน DigitalOcean

Droplet ที่สร้างใหม่บน DigitalOcean เลือกเป็น Ubuntu 16.04 LTS ส่วน datacenter ก็เลือกที่สิงคโปร์

เนื่องจากผมเคยทำงานกับ web server เพียงตัวเดียวคือ Apache ในครั้งนี้เลยถือโอกาสลองหาประสบการณ์ใหม่ ด้วยการเลือก nginx เป็น web server แทน ส่วน guide ก็หาเอาในเว็บ DigitalOcean มีเยอะ ทำตามง่าย ผมก็ตาม guide ทั้งสองด้านล่างเพื่อเซ็ต server + firewall รวมไปถึง nginx ด้วย

- [Initial Server Setup with Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
- [How To Install Nginx on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04)

ส่วน DNS ก็เซ็ตให้ชี้ไปที่ IP address ของ server ใหม่นี้ ก็เหมือนกับการเซ็ต DNS ทั่วๆ ไป

## Let’s Encrypt

[Let’s Encrypt](https://letsencrypt.org/) เป็น certificate authority (CA) จาก Linux Foundation และมี sponsor เป็นบริษัท IT ชั้นนำของโลก มีจุดประสงค์คือให้บริการ HTTPS ที่ฟรี ใช้งานง่าย และมีความปลอดภัยสูง

การเซ็ต certificate ของ Let’s Encrypt นั้น ถ้าเทียบกับ CA เจ้าอื่นแล้วถือว่าง่ายกว่ามาก และใช้เวลาเพียงนิดเดียว ขั้นตอนทั้งหมดสามารถทำได้ผ่าน command line interface วิธีการก็ดูได้จาก link ข้างล่างเลยครับ

- [How To Secure Nginx with Let's Encrypt on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)

<div class="text-center">
  <img src="/img/posts/move-from-github-to-digital-ocean/letsencrypt-homepage.jpg"
  srcset="/img/posts/move-from-github-to-digital-ocean/letsencrypt-homepage-2x.jpg 2x" alt="หน้า home page ของ letsencrypt">
</div>


### auto-renew

Cert ของ Let’s Encrypt นั้นมีอายุแค่ 90 วันนับจากวันที่เริ่มใช้งาน ใน guide แนะนำว่าควรจะ renew cert ทุกๆ 60 วัน ซึ่งสามารถเซ็ต cronjob ให้รันทุกๆ 60 วันเพื่อรัน command letsencrypt ได้ หลังจากรัน renew แล้วก็ต้อง restart nginx เพื่อให้ webserver ใช้ cert ตัวใหม่ที่เพิ่ง renew ไป

```sh
30 2 * * 1 /usr/bin/letsencrypt renew >> /var/log/le-renew.log
35 2 * * 1 /bin/systemctl reload nginx
```

พอมาถึงตรงนี้ก็จะมีโดเมน armno.in.th ที่ใช้งานผ่าน HTTPS ได้ไปยาวๆ เลย ไม่ต้องกังวลว่าจะลืมต่ออายุ SSL ของ Let’s Encrypt ครับ

<div class="text-center">
  <img src="/img/posts/move-from-github-to-digital-ocean/cert-info.png"
    srcset="/img/posts/move-from-github-to-digital-ocean/cert-info-2x.png 2x"
    alt="valid SSL ของ domain armno.in.th">
</div>

เมื่อโดเมนพร้อมแล้ว ขั้นตอนต่อไปก็คือต้องทำ auto-deploy ของ Jekyll แบบของ GitHub Pages

## Jekyll-hook

หลักการทำงานของ webhooks ใน GitHub คือ ทุกครั้งที่เรา push code ขึ้นไปที่ repo GitHub ก็จะส่ง HTTP `POST` request ไปยัง URL ที่เรากำหนดไว้ พร้อมกับข้อมูลต่างๆ ของ commit นั้นๆ นั่นหมายความว่า ก่อนอื่นเราต้องมี URL ที่ว่านี้ก่อน หน้าที่ของ URL นี้ก็คือเป็นตัวรับข้อมูลผ่านทาง `POST` request นั่นเอง

tool ที่ผมใช้คือ [jekyll-hook](https://github.com/developmentseed/jekyll-hook) เป็น web server ที่ทำจาก Express ร่วมกับ [pm2](http://pm2.keymetrics.io/) เป็นตัวจัดการ process ของ jekyll-hook อีกทีครับ

หน้าที่ของ jekyll-hook ก็คือ

- รอรับข้อมูลที่ส่งมาจาก webhook ผ่านทาง method `POST`
- validate ความถูกต้องของ payload ที่ส่งมาทาง `POST`
- run shell script เพื่อ build และ deploy jekyll

> **Note** - jekyll-hook ตอนนี้อยู่ในสถานะ no longer maintained ก็คือผู้พัฒนาหยุดทำต่อแล้ว เพราะมีวิธีอื่นที่ง่ายกว่า สามารถดูในจาก [Deployment methods](https://jekyllrb.com/docs/deployment-methods/) บนเว็บของ Jekyll ได้ ส่วนตัว tool เองยังใช้งานได้อยู่ครับ

หลังจาก[ติดตั้ง](https://github.com/developmentseed/jekyll-hook#installation)และเริ่มใช้งาน jekyll-hook บน server แล้ว จึงไปตั้งค่า webhook ใน settings ของ repo

<div class="text-center">
  <img src="/img/posts/move-from-github-to-digital-ocean/webghook-settings.png" srcset="/img/posts/move-from-github-to-digital-ocean/webghook-settings-2x.png 2x" alt="Webhooks settings ของ repo">
</div>

ทุกครั้งที่ผม push code ไปที่ master branch บน github repo รอเพียงไม่กี่วินาที blog ก็ update เหมือนตอนใช้ GitHub Pages ทุกประการ

## Custom Domain กลับคืนมา

สร้างไฟล์ชื่อ CNAME ไว้ที่ root level ของ repo เพื่อให้ armno.github.io redirect ไปที่ armno.in.th ทำให้หน้าเพจเดิมๆ ที่ถูก google index ไว้ สามารถ redirect ไปที่ armno.in.th ได้อย่างถูกต้องครับ

<div class="text-center">
  <img src="/img/posts/move-from-github-to-digital-ocean/custom-domain.png" srcset="/img/posts/move-from-github-to-digital-ocean/custom-domain-2x.png 2x" alt="Custom domain settings ของ repo">
</div>

ถึงตอนนี้ ก็ได้ระบบ blog เดิม ที่เพิ่มเติมคืออยู่บน server DigitalOcean แบบที่ต้องการแล้ว

ต่อไปตอนที่ 2 จะเป็นการ optimize performance ครับ
