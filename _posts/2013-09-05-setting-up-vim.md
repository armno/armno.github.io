---
layout: blog
title: "Setting up Vim"
description: ปกติผมใช้ Sublime Text 3 เป็น code editor ตัวหลัก แต่บางครั้งต้องการแก้ไขไฟล์ง่ายๆ เร็วๆ จาก terminal หรือทำโปรเจ็คเล็กๆ (เขียนโค้ดตาม tutorial ในเว็บต่างๆ) ผมก็จะเลือกใช้ Vim แทน เพราะเร็วกว่าเปิดใน Sublime Text ครับ
published: true
---

ปกติผมใช้ Sublime Text 3 เป็น code editor ตัวหลัก แต่บางครั้งต้องการแก้ไขไฟล์ง่ายๆ เร็วๆ จาก terminal หรือทำโปรเจ็คเล็กๆ (เขียนโค้ดตาม tutorial ในเว็บต่างๆ) ผมก็จะเลือกใช้ Vim แทน เพราะเร็วกว่าเปิดใน Sublime Text ครับ

[Vim](http://www.vim.org/) นั้นเป็น editor ที่เราสามารถปรับแต่งได้ค่อนข้างหลากหลายไปตามความชอบและความถนัดของแต่ละคน โพสต์นี้ผมก็ขอแชร์วิธี set up Vim ของผมเองบ้างครับ

> ใช้ได้ทั้ง Ubuntu (13.04) กับ Mac OSX (10.8) เวอร์ชั่นต่ำกว่านี้อาจได้เหมือนกัน แต่ผมไม่ได้ลองเองครับ

> บน OSX นั้น ผมใช้ homebrew เป็นหลัก สามารถดูวิธีติดตั้งได้จาก [brew.sh](http://brew.sh/) ครับ (ง่ายมาก)

![vim](http://farm8.staticflickr.com/7337/9679791742_e1cae8d157_c.jpg)

### ติดตั้ง Vim

บน OSX นั้นมี Vim ติดมาแล้ว แต่ผมติดตั้งจาก homebrew ใหม่อีกที เพื่อให้ง่ายต่อการอัพเดท ส่วนบน Ubuntu นั้นลงผ่าน `apt-get` ได้เลยครับ

OSX

<pre class="language-bash"><code>$ brew install vim</code></pre>

Ubuntu

<pre class="language-bash"><code>$ sudo apt-get install vim</code></pre>

แค่นี้เราสามารถใช้ command `vim` ได้จาก terminal แล้วครับ

### `.vimrc`

ไฟล์ `.vimrc` เป็นไฟล์เก็บค่า config ต่างๆ ของ Vim ถูกเก็บอยู่ที่ home directory ของเรานั่นเอง (`~/.vimrc`) ถ้าหากติดตั้ง Vim แล้วยังไม่มีไฟล์นี้ เราก็สามารถสร้างขึ้นมาใหม่ได้นะครับ

สำหรับไฟล์ `.vimrc` ของผม ก็หน้าตาประมาณนี้ครับ ส่วนมากก็ลอกมาจากหลายๆ ที่ครับ ส่วนที่สองนั้นเป็น color scheme ชื่อว่า railscasts ซึ่งผมไม่ได้หรอกครับ (อ้าว?) เอาเก็บไว้ด้วยกัน กันหาย ส่วน colorscheme ที่ผมใช้จริงๆ ชื่อว่า [Tomorrow Night](https://github.com/chriskempson/tomorrow-theme) ครับ

<script src="https://gist.github.com/armno/2908559.js"></script>

### Plugins

#### [Pathogen](https://github.com/tpope/vim-pathogen)

อันดับแรกต้องลง **Vim-pathogen** ก่อน เป็น plugin ที่ทำให้ลง plugin ตัวอื่นๆ ได้ง่ายขึ้นครับ วิธีลงก็แค่ copy 3 บรรทัดนี้ไปรันใน terminal ได้เลย

<pre class="language-bash"><code>mkdir -p ~/.vim/autoload ~/.vim/bundle; \
curl -Sso ~/.vim/autoload/pathogen.vim \
https://raw.github.com/tpope/vim-pathogen/master/autoload/pathogen.vim</code></pre>

#### [NERDTree](https://github.com/scrooloose/nerdtree)

![nerdtree](http://farm8.staticflickr.com/7396/9679791406_60985bce2e_o.png)

NERDTree เป็น file explorer ของ Vim ครับ ใช้เป็น sidebar คล้ายๆ ของ Sublime Text ได้ ติดตั้ง plugin ตัวนี้ได้ผ่าน Pathogen ครับ

<pre class="language-bash"><code>$ cd ~/.vim/bundle
git clone https://github.com/scrooloose/nerdtree.git</code></pre>

#### [Emmet](http://mattn.github.io/emmet-vim/)

Emmet (ชื่อเดิมคือ [Zen Coding](http://armno.in.th/2012/11/06/emmet-zen-coding-replacement/)) นั้นเป็น plugin ที่ช่วยให้เขียน HTML ได้เร็วขึ้นครับ จริงๆ แล้วผมไม่ค่อยได้ใช้ Emmet ใน Vim แต่ลงไว้ก็ไม่เสียหายครับ สามารถติดตั้งผ่าน Pathogen อีกเหมือนกัน

<pre class="language-bash"><code>$ cd ~/.vim/bundle
$ git clone http://github.com/mattn/emmet-vim.git</code></pre>

ปกติคีย์สำหรับใช้งาน Emmet คือ `Ctrl+Y+,` ผมว่าสูตรนี้มันกดติดยากไปหน่อย เซ็ต key mapping ใน `.vimrc` ให้เป็น `,t` แทน (ผม map ตัว `,` แทน `esc`)

<pre class="language-bash"><code>map &lt;leader&gt;t &lt;C-y&gt;,</code></pre>

#### [Autoclose](https://github.com/Townk/vim-autoclose)

ช่วยปิดพวกวงเล็บ วงเล็บปีกกาให้อัตโนมัติครับ ตัวนี้ติดตั้งผ่าน Pathogen ไม่ได้ ต้องดาวน์โหลดไฟล์มาเองครับ

<pre class="language-bash"><code>$ wget --no-check-certificate https://raw.github.com/Townk/vim-autoclose/master/plugin/AutoClose.vim -O ~/.vim/plugin/AutoClose.vim
$ wget --no-check-certificate https://raw.github.com/Townk/vim-autoclose/master/doc/AutoClose.txt -O ~/.vim/doc/AutoClose.txt</code></pre>

#### [neocomplcache](https://github.com/Shougo/neocomplcache.vim)

![neocomplcache](http://farm4.staticflickr.com/3689/9679852438_c0db1272a3_o.png)

เป็น auto complete ของ Vim ที่ผมใช้อยู่ครับ ทำงานได้ค่อนข้างดีเลยทีเดียว การติดตั้งนั้นทำได้โดยดาวน์โหลดไฟล์เป็น .zip จาก Github repo แล้ว extract ไฟล์ทั้งหมดไปที่โฟลเดอร์ `~/.vim` ครับ

<pre class="language-bash"><code>$ wget --no-check-certificate https://github.com/Shougo/neocomplcache.vim/archive/master.zip -O - | unzip ~/.vim/</code></pre>

แต่บน OSX 10.8 นั้นเจอปัญหาบ้างคือ บางครั้ง neocomplcache ทำให้มี delay ตอนสลับไปมาระหว่าง command mode กับ insert mode ครับ (ประมาณ 1 วินาที)

#### [Powerline](https://github.com/Lokaltog/powerline)

![powerline](http://farm4.staticflickr.com/3797/9676557587_90c9c8c01e_c.jpg)

ทำให้ status bar ของ Vim นั้นมีประโยชน์และน่าสนใจขึ้นมาอีกหน่อย วิธีติดตั้งดูได้จาก [documentation](https://powerline.readthedocs.org/en/latest/overview.html#installation) บนเว็บของ Powerline ได้เลย คอนข้างยาวและยุ่งครับ

Powerline ใน terminal จะไม่มีสีพื้นหลัง ถ้าไม่ได้เซ็ต terminal color mode ให้เป็น 256 สี วิธีเซ็ตก็คือเพิ่ม `set t_Co=256` ในไฟล์ `.vimrc` (ผมเองเปิดบ้างปิดบ้าง ไม่มีพื้นหลังมันก็เรียบๆ สวยดีนะ)

Vim ของผมก็ประมาณนี้ครับ ยังใช้ไม่คล่องแต่ก็พยายามฝึกใช้อยู่ ใครมีเทคนิคอะไรเกี่ยวกับ Vim ก็เอามาแบ่งปันกันได้นะ :)



