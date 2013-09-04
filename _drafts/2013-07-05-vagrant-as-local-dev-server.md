---
layout: blog
title: "ใช้งาน Vagrant สำหรับ local development "
description: Vagrant  
---

"รันในเครื่องฉันมันออกนะ" ถือเป็นปัญหาที่พบบ่อยอันดับตั้นๆ ของการทำเว็บ (รวมไปถึง software แขนงอื่นๆ) ซึ่งเราก็แก้ได้มั่ง ไม่ได้มั่ง สาเหตุก็มาจาก development environment ของแต่ละคนนั้นไม่เหมือนกัน บางคนลง package ไว้เยอะ บางคน config server ไว้แบบไม่เหมือนเพื่อน ผลลัพธ์ที่ได้ในการรันแต่ละครั้งก็แตกต่างกันออกไปได้ 

Vagrant นั้นช่วยให้เราสามารถสร้าง virtual machine ที่เหมือนๆ กันขึ้นมาได้สำหรับ developer หลายๆ คน ซึ่งในทีมก็สามารถใช้ virtual machine ตัวนี้เป็น development server ได้ ซึ่งถ้าจะให้ถูกต้องก็คือ development server ตัวนี้ก็ควรจะจำลำลอง production server มาให้เหมือนที่สุดครับ ซึ่งจะทำให้เรามั่นใจได้ว่า ถ้ารันใน development server แล้วออก รันใน production server ก็จะออกเหมือนกัน

Vagrant นั้นทำงานบน virtualization tools อย่าง VirtualBox หรือ VMWare ในที่นี้ผมจะใช้ VirtualBox เพราะมันฟรี และรันได้ทุก platform ครับผม

### ติดตั้ง VirtualBox

VirtualBox นั้นสามารถ download ได้จากลิ้งก์ [download VirtualBox](https://www.virtualbox.org/wiki/Downloads) เลือกตาม OS ที่ใช้ แล้วก็ install ตามปกตินะครับ

### ติดตั้ง Vagrant

หลังจากลง VirtualBox แล้วก็ลง Vagrant ครับ หาได้จากหน้า [download Vagrant](http://downloads.vagrantup.com/) เลือกตาม OS เหมือนเดิม สำหรับ Vagrant เวอร์ชั่นล่าสุดนี้ ทางผู้พัฒนาไม่แนะนำให้ลงผ่าน <code>gem</code> แล้วนะครับ

### Vagrant init

<pre><code class="language-bash">$ mkdir vagrant-test
$ cd vagrant-test
$ vagrant init</code></pre>

4. update config file

command <code>vagrant init</code> จะสร้างไฟล์ <code>Vagrantfile</code> ใน directory ที่เรารน command นี้ ซึ่งไฟล์ <code>Vagrantfile</code> ก็จะเก็บ config ต่างๆ ของ Vagrant ไว้ครับ

5. vagrant up (will download .box image and up)

<pre><code class="language-bash">$ vagrant up</code></pre>

เราก็จะเจอกับ error มากมาย สืบทราบมาว่า เป็น bug ของ VirtualBox เวอร์ชั่น 4.2.12 ครับ

6. fix that openssl shit

<pre><code class="language-bash">$ cd ~/.vagrant.d/boxes/ubuntu1204/virtualbox
$ openssl sha1 *.vmdk *.ovf > box.mf</code></pre>

7. up again

<pre><code class="language-bash">$ vagrant up</code></pre>

8. shared directory
9. set up lamp stack
10. virtualhost and mapping
