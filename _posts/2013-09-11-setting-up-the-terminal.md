---
layout: blog
title: "Setting up the Terminal"
description: Terminal นั้นก็เป็นอีก tool สำคัญที่ต้องใช้บ่อยๆ ถือว่าเป็นหนึ่งในเครื่องมือทำมาหากินของ web developer ยุคนี้เลยก็ว่าได้ ผมเองมีปรับแต่ง terminal บ้าง หลักๆ ก็เพื่อให้ใช้งานได้สะดวกขึ้นครับ
published: true
---

สวัสดีเว็บเนิร์ด

Terminal นั้นก็เป็นอีก tool สำคัญที่ต้องใช้บ่อยๆ ถือว่าเป็นหนึ่งในเครื่องมือทำมาหากินของ web developer ยุคนี้เลยก็ว่าได้ ผมเองมีปรับแต่ง terminal บ้าง หลักๆ ก็เพื่อให้ใช้งานได้สะดวกขึ้น (เน้นความบันเทิงมากกว่า) การใช้งานก็ Unix basic command ทั่วๆ ไปไม่ได้พิเศษอะไร

> อ้างอิงกับ Mac OSX 10.8 เป็นหลัก ส่วน Ubuntu ใช้ด้วยกันได้เป็นส่วนมากครับ

### 1. iTerm2

[iTerm2](http://www.iterm2.com/#/section/home) นั้นช่วยทำให้ terminal ของเราทำอะไรได้หลายอย่างมากขึ้น ผมใช้แทนแอพ Terminal ที่ติดมากับ OSX ไปเลย ฟีเจอร์ที่ผมใช้บ่อยๆ ก็คงเป็น Split pane แบบนี้ hotkey ก็คือ `cmd+d` เพื่อ split pane ในแนวตั้ง และ `cmd+shift+d` สำหรับแนวนอน (คล้าย [tmux](http://tmux.sourceforge.net/))

![iTerm2 split pane](http://farm4.staticflickr.com/3711/9719235200_d0540d6249_c.jpg)

สลับ cursor ไประหว่าง pane ก็แค่กด `option+cmd+ลูกศร` (บนล่างซ้ายขวา แล้วแต่ทิศทางที่จะไป)

ก่อนอื่นตั้งค่า hotkey เพื่อให้เปิด terminal ได้ง่ายๆ จากเมนู Preferences ของ iTerm2 ครับ ผมตั้งให้เป็น `control+enter`

![iTerm2 hotkey settings](http://farm8.staticflickr.com/7315/9719260254_f84804a49c_c.jpg)

ส่วน Window profile นั้นก็เซ็ตให้เป็น Fullscreen ทีนี้ไม่ว่าจะใช้งานโปรแกรมไหนอยู่ แค่กด `control+enter` ก็จะมี terminal งอกออกมา

![iTerm2 window settings](http://farm3.staticflickr.com/2883/9719260560_075a6205b1_c.jpg)

### 2. Tomorrow Night theme

theme ของ iTerm2 นั้นยังไม่ถูกใจเท่าไหร่ ผมชอบ [Tomorrow Night](https://github.com/chriskempson/tomorrow-theme) มากกว่า วิธีติดตั้งก็แค่ download zip file มา เข้าไปที่ directory `iTerm2` แล้วก็ double click ไฟล์ที่ชอบ มันก็จะไปโผล่ใน color setting ของ iTerm2 ให้เลือกครับ

![iTerm2 with Tomorrow Night](http://farm4.staticflickr.com/3832/9719460240_708db74989_c.jpg)

หรือใครชอบสีอีกโทนหนึ่ง ลองดู [Solarized](http://ethanschoonover.com/solarized) ก็ได้ครับ มีสองสไตล์ให้เลือก

### 3. Zsh & Oh-my-Zsh!

ปกติ Mac หรือ Linux ก็จะมี `bash` เป็น default [shell](http://en.wikipedia.org/wiki/Unix_shell) ติดมาให้ ผมก็ใช้ตามที่มีเรื่อยมา จนวันนึงผมเห็นฝรั่งสักคนนี่แหละ เขาใช้ [Zsh](http://www.zsh.org/) (z shell) ผมก็เลยลองเล่นดู .. จนถึงทุกวันนี้ก็ไม่กลับไปใช้ bash อีกเลย ไม่รู้เหมือนกันว่าทำไม

#### วิธีติดตั้ง zsh (OSX)

ทำผ่าน Homebrew น่าจะง่ายที่สุด หลังจากติดตั้งแล้ว ก็ต้องเซ็ต default shell เป็น zsh ด้วยครับ

<pre class="language-bash"><code>$ brew install zsh
$ chsh -s /usr/local/bin/zsh</code></pre>

ส่วน Oh-my-zsh นั้น เป็น open source project ที่เพิ่มความสามารถให้กับ zsh ได้อีกมากมาย ทั้ง theme ทั้ง plugin

ที่ผมชอบก็คงเป็น theme ที่มีให้เลือกเยอะมาก (หรือจะทำเองก็ได้) กับที่มันกด tab แล้วเลื่อนๆ ไปแบบนี้ได้

![zsh](http://farm8.staticflickr.com/7408/9719380336_b6b4bd6049_c.jpg)

วิธีการติดตั้ง zsh กับ oh-my-zsh ดูได้จาก [Github repo](https://github.com/robbyrussell/oh-my-zsh) เลยครับผม

### 4. Pure

เนื่องจาก theme แต่ละอันของ oh-my-zsh นั้นดูรกรุงรังและสีสันแสบตาเหลือเกิน pure ของ [@sindresorhus](https://github.com/sindresorhus) จึงเป็น theme ที่ผมเลือกใช้แทนครับ (สไตล์มินิมอล) แถมยังบอก execution time ของ command ล่าสุด้วย

![pure.zsh execution time](http://farm8.staticflickr.com/7301/9719528696_f847205d08_o.png)

<del>วีธีติดตั้งก็คือ clone [Pure Github repo](https://github.com/sindresorhus/pure) มาไว้ตรงไหนก็ได้ แล้วก็เพิ่ม path ของไฟล์ `pure.zsh` เข้าไปในไฟล์ `~/.zshrc` (ไฟล์เก็บค่า config ของ zsh)</del>

<em>update 2014/01/03</em> &ndash; ตอนนี้ theme Pure นั้นถูกรวมเข้าไปอยู่ใน repository ของ oh-my-zsh แล้ว (อยู่ใน `~/.oh-my-zsh/themes/pure.zsh-theme`) ซึ่งทำให้สามารถใช้ theme Pure ได้การจากการตั้งค่าในไฟล์ `.zshrc` ได้เลยครับ

![activate pure theme from .zshrc file](http://farm8.staticflickr.com/7457/11728257223_fcf9bac89f_o.png)

#### Bonus

ทำให้ unstaged file ของคำสั่ง `git status` เป็นสีเหลือง จะได้มาครบทั้ง เขียว เหลือง แดง (ความจริงให้มันดูไม่เหมือนกับ staged file แค่นั้นเอง)

![multicolor git](http://farm6.staticflickr.com/5472/9716342435_e5441038d4_c.jpg)

ตั้งค่าโดยการรัน command นี้ใน terminal ครับ (เปลี่ยนเป็นสือื่นก็ได้นะ)

<pre class="language-bash"><code>$ git config --global color.status.changed "yellow"</code></pre>

รายชื่อ status ทั้งหมดที่สามารถเปลี่ยนสีได้ ดูได้จาก [how to colorize output of git](http://unix.stackexchange.com/questions/44266/how-to-colorize-output-of-git) ได้เลยครับ

ส่วนฟอนต์ที่ใช้คือ [Inconsolata](http://levien.com/type/myfonts/inconsolata.html) ครับม

หมดแล้ว ใครมีของเล่นเอามาแนะนำกันมั่งนะครับ