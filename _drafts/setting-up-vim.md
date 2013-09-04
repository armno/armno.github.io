# Setting up Vim

ปกติผมใช้ Sublime Text 3 เป็น code editor ตัวหลัก แต่บางครั้งต้องการแก้ไขไฟล์ง่ายๆ เร็วๆ จาก terminal หรือทำโปรเจ็คเล็กๆ (เขียนโค้ดตาม tutorial ในเว็บต่างๆ) ผมก็จะเลือกใช้ Vim แทน เพราะเร็วกว่าเปิดใน Sublime Text ครับ

Vim นั้นเป็น editor ที่เราสามารถปรับแต่งได้ค่อนข้างหลากหลายไปตามความชอบและความถนัดของแต่ละคน โพสต์นี้ผมก็ขอแชร์วิธี set up Vim ของผมเองบ้างครับ

> ใช้ได้ทั้ง Ubuntu (13.04) กับ Mac OSX (10.8) เวอร์ชั่นต่ำกว่านี้อาจได้เหมือนกัน แต่ผมไม่ได้ลองเองครับ

> บน OSX นั้น ผมใช้ homebrew เป็นหลัก สามารถดูวิธีติดตั้งได้จาก [brew.sh](http://brew.sh/) ครับ (ง่ายมาก)

### ติดตั้ง Vim

บน OSX นั้นมี Vim ติดมาแล้ว แต่ผมติดตั้งจาก homebrew ใหม่อีกที เพื่อให้ง่ายต่อการอัพเดท ส่วนบน Ubuntu นั้นลงผ่าน `apt-get` ได้เลยครับ

OSX

`$ brew install vim`

Ubuntu

`$ sudo apt-get install vim`

แค่นี้เราสามารถใช้ command `vim` ได้จาก terminal แล้วครับ

### `.vimrc`

ไฟล์ `.vimrc` เป็นไฟล์เก็บค่า config ต่างๆ ของ Vim ถูกเก็บอยู่ที่ home directory ของเรานั่นเอง (`~/.vimrc`) ถ้าหากติดตั้ง Vim แล้วยังไม่มีไฟล์นี้ เราก็สามารถสร้างขึ้นมาใหม่ได้นะครับ

สำหรับไฟล์ `.vimrc` ของผม ก็หน้าตาประมาณนี้ครับ ส่วนที่สองนั้นเป็น color scheme ชื่อว่า railscasts เป็นตัวหลักที่ผมใช้กับ Vim ครับ ซึ่ง path ที่เก็บไฟล์นี้ก็จะอยู่ที่ `~/.vim/color/railscasts.vim`

[gist 2908559]

### Plugins

#### Pathogen

อันดับแรกต้องลง Vim-pathogen ก่อน เป็น plugin ที่ทำให้ลง plugin ตัวอื่นๆ ได้ง่ายขึ้นครับ วิธีลงก็แค่ copy 3 บรรทัดนี้ไปรันใน terminal ได้เลย

```
mkdir -p ~/.vim/autoload ~/.vim/bundle; \
curl -Sso ~/.vim/autoload/pathogen.vim \
    https://raw.github.com/tpope/vim-pathogen/master/autoload/pathogen.vim
```

#### NERDTree

NERDTree เป็น file explorer ของ Vim ครับ ใช้เป็น sidebar คล้ายๆ ของ Sublime Text ได้ ติดตั้ง plugin ตัวนี้ได้ผ่าน Pathogen ครับ

```
cd ~/.vim/bundle
git clone https://github.com/scrooloose/nerdtree.git
```

#### Emmet

จริงๆ แล้วผมไม่ค่อยได้ใช้ Emmet ใน Vim แต่ลงไว้ก็ไม่เสียหายครับ สามารถติดตั้งผ่าน Pathogen อีกเหมือนกัน

```
cd ~/.vim/bundle
git clone http://github.com/mattn/emmet-vim.git
```

#### Autoclose

ช่วยปิดพวกวงเล็บ วงเล็บปีกกาให้อัตโนมัติครับ ตัวนี้ติดตั้งผ่าน Pathogen ไม่ได้ ต้องดาวน์โหลดไฟล์มาเองครับ

```
$ wget --no-check-certificate https://raw.github.com/Townk/vim-autoclose/master/plugin/AutoClose.vim -O ~/.vim/plugin/AutoClose.vim
$ wget --no-check-certificate https://raw.github.com/Townk/vim-autoclose/master/doc/AutoClose.txt -O ~/.vim/doc/AutoClose.txt
```

#### neocomplcache

เป็น auto complete ของ Vim ที่ผมใช้อยู่ครับ ทำงานได้ค่อนข้างดีเลยทีเดียว การติดตั้งนั้นทำได้โดยดาวน์โหลดไฟล์เป็น .zip จาก Github repo แล้ว extract ไฟล์ทั้งหมดไปที่โฟลเดอร์ `~/.vim` ครับ

```
$ wget --no-check-certificate https://github.com/Shougo/neocomplcache.vim/archive/master.zip -O - | unzip ~/.vim/
```

#### Powerline

ทำให้ status bar ของ Vim นั้นมีประโยชน์และน่าสนใจขึ้นมาอีกหน่อย 

Vim ของผมก็ประมาณนี้ครับ ใครมีเทคนิคอะไรเกี่ยวกับ Vim ก็เอามาแบ่งปันกันได้นะ :)



