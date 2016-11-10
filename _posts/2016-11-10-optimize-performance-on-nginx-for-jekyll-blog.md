---
layout: post
title: "ย้าย Blog จาก GitHub Pages มาที่ DigitalOcean ตอน 2: #PERFMATTERS"
description: "หลังจาก setup server พร้อมกับ deploy process เสร็จแล้ว ก็ถึงเวลาที่ต้อง optimize blog นี้ให้ไวขึ้น โพสต์นี้จะเกี่ยวกับการ config server nginx กับ jekyll เพื่อ performance ครับ"
published: true
cover-image: "/img/posts/move-from-github-to-digital-ocean-part-2/cover.png"
thumbnail: "https://armno.in.th/img/posts/move-from-github-to-digital-ocean-part-2/thumbnail.png"
tags: jekyll nginx browsers perfmatters
---

ต่อจาก[ตอนที่ 1](https://armno.in.th/2016/11/08/moving-from-github-pages-to-digital-ocean/) หลังจาก setup server พร้อมกับ deploy process เสร็จแล้ว ก็ถึงเวลาที่ต้อง optimize blog นี้ให้ไวขึ้นดังใจหวังเสียที

## Test, don't guess

ก็คงเหมือนเวลาเราป่วย ก็ควรจะไปหาหมอเพื่อให้หมอตรวจดูอาการก่อน ไม่ควรพยายามรักษาเองทั้งๆ ที่ไม่รู้สาเหตุ เพราะอาจจะรักษาไม่หาย หรืออาจทำให้อาการหนักกว่าเดิม

[Paul Lewis](https://aerotwist.com) ได้กล่าวไว้ว่า ["Don't Guess it, Test it"](https://aerotwist.com/blog/dont-guess-it-test-it/) คือเราควรจะใช้ tool เพื่อหาปัญหาด้าน performance ของแต่ละเว็บไซต์ แล้วแก้ให้ตรงจุดจะดีกว่า

ก่อนอื่นก็ต้องรู้ก่อนว่า สิ่งที่ควรปรับปรุงมีจุดไหนบ้าง ซึ่ง tool ที่ผมใช้ประจำก็คือ [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) นี่แหละ เพราะว่าเร็วและง่ายดี

<div class="text-center">
  <img src="/img/posts/move-from-github-to-digital-ocean-part-2/pagespeed-summary.png"
  srcset="/img/posts/move-from-github-to-digital-ocean-part-2/pagespeed-summary-2x.png 2x" alt="ผลจาก PageSpeed Insights ก่อน optimize">
</div>

PageSpeed Insights บอกว่ามีส่ิงที่ควรปรับปรุงคือ

- ใช้งาน HTTP Caching (ตั้งค่า expiration time ของ static assets)
- ใช้งาน gzip compression

<div class="text-center">
  <img src="/img/posts/move-from-github-to-digital-ocean-part-2/pagespeed-browser-caching.png"
  srcset="/img/posts/move-from-github-to-digital-ocean-part-2/pagespeed-browser-caching-2x.png 2x" alt="PageSpeed แนะนำว่า ควรใช้งาน HTTP Caching">
</div>

<div class="text-center">
  <img src="/img/posts/move-from-github-to-digital-ocean-part-2/pagespeed-gzip.png"
  srcset="/img/posts/move-from-github-to-digital-ocean-part-2/pagespeed-gzip-2x.png 2x" alt="PageSpeed แนะนำว่า ควรใช้งาน GZIP compression">
</div>

ทั้งสองอย่างต้องตั้งค่าที่ nginx โชคดีที่ทีม [H5BP](https://github.com/h5bp/) ทำตัวอย่าง config ของ nginx เอาไว้ที่ repo [server-configs-nginx](https://github.com/h5bp/server-configs-nginx) ซึ่งรวบรวมเอา best practices ต่างๆ ไว้ ผมก็เลยไปดูเป็นตัวอย่างและนำมาปรับใช้แบบบูรณาการ .. ก็คือลอกมานั่นเอง

> [เวอร์ชั่น Apache](https://github.com/h5bp/server-configs-apache) ก็มีเหมือนกันนะ

## HTTP Caching

HTTP Caching เป็นการใส่ข้อมูลใน header ของไฟล์ เพื่อบอกให้ browser รู้ว่าต้อง cache ไฟล์นี้หรือไม่ นานเท่าไหร่ มีประโยชน์คือ หากไฟล์ไฟล์นั้นถูก cache ไว้แล้ว และ cache ยังไม่หมดอายุ browser จะไม่จำเป็นต้องส่ง network request ไปที่ server อีก แต่จะดึงมาจาก cache แทน ทำให้ไฟล์นั้นโหลดได้ไวขึ้น ทุกๆ browser ในวันนี้ก็ support HTTP caching หมดแล้ว

ก่อนอื่นผม download [config file ของ expire rules](https://github.com/h5bp/server-configs-nginx/blob/master/h5bp/location/expires.conf) มาไว้ที่ `/etc/nginx/conf.d/expires.conf` บน server เอามาไว้ตรงนี้เผื่อว่าจะใช้เป็น config แชร์กันหลายๆ  โดเมน

จากนั้นก็ include ไฟล์ข้างบนใน nginx config file ของโดเมนนี้ ซึ่งอยู่ที่ `/etc/nginx/sites-enabled/armno.in.th`

```
server {
  ...
  include conf.d/expires.conf;
  ...
}
```

save file แล้วก็ restart nginx ด้วย `$ sudo service nginx restart`


### เปิดใช้งาน GZIP compression

GZIP ช่วยบีบอัดข้อมูลจำพวก text ให้มีขนาดเล็กลงได้มาก ทำให้ browser โหลดไฟล์ได้ไวขึ้น ซึ่งเราต้องไป config web server ของเราให้สามารถส่งไฟล์ gzip ผ่าน network request จาก browser ได้

ไฟล์ที่ต้องแก้ก็คือ `/etc/nginx/nginx.conf` โดยเพิ่ม config ที่เกี่ยวกับ gzip ใน `http` block ครับ (code เอามาจาก [nginx.conf template](https://github.com/h5bp/server-configs-nginx/blob/master/nginx.conf) ของ H5BP/server-configs/nginx)

```
http {
  ...
  # Enable gzip compression.
  gzip on;

  # Compression level (1-9).
  # 5 is a perfect compromise between size and CPU usage, offering about
  # 75% reduction for most ASCII files (almost identical to level 9).
  gzip_comp_level    5;

  # Don't compress anything that's already small and unlikely to shrink much
  # if at all (the default is 20 bytes, which is bad as that usually leads to
  # larger files after gzipping).
  gzip_min_length    256;

  # Compress data even for clients that are connecting to us via proxies,
  # identified by the "Via" header (required for CloudFront).
  gzip_proxied       any;

  # Tell proxies to cache both the gzipped and regular version of a resource
  # whenever the client's Accept-Encoding capabilities header varies;
  # Avoids the issue where a non-gzip capable client (which is extremely rare
  # today) would display gibberish if their proxy gave them the gzipped version.
  gzip_vary          on;

  # Compress all output labeled with one of the following MIME-types.
  gzip_types
  application/atom+xml
  application/javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rss+xml
  application/vnd.geo+json
  application/vnd.ms-fontobject
  application/x-font-ttf
  application/x-web-app-manifest+json
  application/xhtml+xml
  application/xml
  font/opentype
  image/bmp
  image/svg+xml
  image/x-icon
  text/cache-manifest
  text/css
  text/plain
  text/vcard
  text/vnd.rim.location.xloc
  text/vtt
  text/x-component
  text/x-cross-domain-policy;
  ...
}
```

save file แล้วก็ restart nginx ด้วย `$ sudo service nginx restart` อีกครั้งหนึ่ง

## Minify HTML output ของ Jekyll

ปกติ HTML output ของ Jekyll ในโฟลเดอร์ `_site` นั้นจะไม่ถูก compress ไว้ แต่เราสามารถทำได้ผ่าน plugin อย่างเช่น [compressor.rb](https://gist.github.com/mytharcher/2758691), [minify-html](https://github.com/octopress/minify-html) หรือจะใช้วิธีที่ง่ายกว่านั้น คือ [minify HTML ด้วย Liquid layout](http://jch.penibelst.de/) ซึ่งไม่ต้องใช้ plugin เลย ผมเลือกใช้วิธีนี้ครับ

วิธีการนั้นก็คือ download `compress.html` มาจากเว็บไซต์ ใส่ไว้ใน `/layouts/compress.html` แล้วก็ค่อยให้ default layout นั้นใช้ compress layout อีกทีหนึ่ง เพราะว่าเราสามารถใช้ layout jekyll ซ้อนกันได้หลายๆ ชั้น

`/layouts/default.html`

```html
---
layout: compress
---

<!DOCTYPE html>
  ...
```

ลำดับชั้น layout ของ blog นี้ก็คือ `post` layout > `default` layout > `compress` layout > output ใน `_site/` ตามลำดับ

## วัดผลอีกครั้ง

PageSpeed Insights บอกว่ายังคงเหลือไฟล์ JavaScript อีกบางส่วนที่ควรจะปรับปรุงเรื่อง expiration time แต่ทั้งเนื่องด้วยไฟล์นั้นถูกดึงมาจาก remote server (Google Analytics, YouTube) ที่ไม่สามารถคุม expiration time ได้ ก็คงต้องปล่อยไว้แบบนั้นครับ ส่วนไฟล์อื่นๆ ที่โหลดมาจาก server ตัวเองก็ถูก optimize ได้หมด

<div class="text-center">
  <img src="/img/posts/move-from-github-to-digital-ocean-part-2/result-pagespeed.png"
  srcset="/img/posts/move-from-github-to-digital-ocean-part-2/result-pagespeed-2x.png 2x" alt="ผลจาก PageSpeed Insights หลัง optimize">
</div>

สามารถเช็คได้โดยใช้ webpagetest.org ซึ่งจะแสดงข้อมูลได้ละเอียดกว่า

<div class="text-center">
  <img src="/img/posts/move-from-github-to-digital-ocean-part-2/webpagetest-overview.png"
  srcset="/img/posts/move-from-github-to-digital-ocean-part-2/webpagetest-overview-2x.png 2x" alt="ผลจาก PageSpeed Insights หลัง optimize">
</div>

ดูได้ว่า static assets แต่ละไฟล์ มีการใช้งาน HTTP caching และ GZIP ไว้ทั้งหมด

<div class="text-center">
  <img src="/img/posts/move-from-github-to-digital-ocean-part-2/webpagetest-static-assets.png"
  srcset="/img/posts/move-from-github-to-digital-ocean-part-2/webpagetest-static-assets-2x.png 2x" alt="ข้อมูลต่างๆ ของ static resources จาก webpagetest.org">
</div>

## สรุป

- ย้ายบ้านจาก GitHub Pages มาไว้ที่ DigitalOcean ได้
- ตั้งค่า expiration time ของ static assets ได้จาก config ของ nginx
- เปิดใช้งาน GZIP compression ได้จาก config ของ nginx
- ใช้ `compress.html` layout ของ jekyll เพื่อ minify output HTML
- [inline critical CSS](https://armno.in.th/2015/05/04/use-loadcss-to-improve-rendering-performance/) ด้วย `loadCss`

ถึงแม้ว่า blog นี้จะเป็นแค่ static website ธรรมดาๆ ที่ไม่ค่อยมี CSS หรือ JavaScript แต่ก็ยังพอมีส่วนอื่นๆ ที่สามารถ optimize ให้ load และ render เร็วขึ้นได้ สนุกดีครับ
