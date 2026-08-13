# CLAUDE.md — คู่มือประจำโปรเจกต์เว็บไซต์ J.A. Tech Entaneer

> ไฟล์นี้คือบันทึกส่งต่อสำหรับ Claude Code อ่านก่อนเริ่มทำงานทุกครั้ง
> เจ้าของโปรเจกต์ไม่ใช่โปรแกรมเมอร์ ต้องอธิบายเป็นภาษาไทยที่เข้าใจง่าย ทำทีละขั้น รอยืนยันก่อนไปต่อ

## ภาษาที่ใช้สื่อสาร
- ตอบเป็นภาษาไทยเสมอ อธิบายศัพท์เทคนิคเป็นไทย
- เจ้าของเพิ่งเริ่มเรียนเว็บ ทำตามคำแนะนำได้ แต่ต้องละเอียดและทีละขั้น
- ห้ามสมมุติข้อมูล ถ้าข้อมูลไม่พอให้ถามก่อน — โดยเฉพาะสเปกสินค้าและข้อมูลบริษัท (ลูกค้าอุตสาหกรรมตรวจสอบได้)

## เว็บไซต์นี้คืออะไร
- เว็บบริษัท J.A. Tech Entaneer — ผู้ผลิตฟิลเตอร์อุตสาหกรรมและงานวิศวกรรม จ.ลำพูน
- HTML + CSS + JavaScript ธรรมดา (ไม่ใช่ React/Next.js) — เลือกไว้เพราะเจ้าของดูแลเองได้ง่าย
- 2 ภาษา (ไทย/อังกฤษ) รวม 10 หน้า
- Deploy ผ่าน Vercel เชื่อมกับ GitHub repo: jatentaneer/jat-en-website
- โดเมนจริง: www.jat-en.com (มี SSL อัตโนมัติจาก Vercel)

## โครงสร้างไฟล์
```
jat-en-website/
├── index.html              หน้าแรกไทย
├── maintenance.html        หน้าปิดปรับปรุง (สำรอง ไม่ใช้ปกติ)
├── css/style.css           ไฟล์ตกแต่งเดียว ใช้ร่วมทุกหน้า (ทั้งไทยและอังกฤษ)
├── js/main.js              เมนูมือถือ
├── images/                 โลโก้ favicon รูปสินค้า รูปงาน
├── files/                  (เตรียมไว้สำหรับ Catalogue PDF ยังว่าง)
├── pages/                  หน้าย่อยภาษาไทย
│   ├── products.html
│   ├── services.html
│   ├── about.html
│   └── contact.html
├── en/                     หน้าภาษาอังกฤษทั้งหมด
│   ├── index.html
│   ├── products.html
│   ├── services.html
│   ├── about.html
│   └── contact.html
├── sitemap.xml
├── robots.txt
└── vercel.json             ตั้ง cleanUrls: true (สำคัญ ดูกฎด้านล่าง)
```

## ลำดับส่วนในหน้าแรก (index.html และ en/index.html) — ห้ามสลับโดยไม่ถาม
1. Hero (แถบน้ำเงิน + Tagline + h1 + ปุ่ม 2 ปุ่ม)
2. สินค้า 8 กลุ่ม (section products, พื้นขาว) — **สินค้าอยู่ก่อนบริการ** (เจ้าของเลือกไว้)
3. บริการ 4 กลุ่ม (section services-home, พื้นฟ้าอ่อน)
4. ทำไมต้องเรา 3 ข้อ + แถบ EHEDG (section why-us, พื้นขาว)
5. footer

## โครงการ์ดสินค้าหน้าแรก (สำคัญเวลาเพิ่ม/แก้สินค้า)
การ์ดแต่ละใบใช้โครงนี้ (รูปด้านบน + กล่องข้อความด้านล่าง):
```html
<div class="card">
  <img src="images/xxx-1.jpg" alt="..." class="card-image">
  <div class="card-body">
    <h3>ชื่อสินค้า</h3>
    <p>คำอธิบาย</p>
  </div>
</div>
```
- สินค้าทุกกลุ่มมีรูปจริงแล้ว รวม Disk Filter (ไม่มี card-noimage แล้ว)
- หน้าอังกฤษใช้ `../images/` หน้าไทยใช้ `images/`

## กฎเหล็ก (เรียนรู้มาด้วยความยากลำบาก — ห้ามพลาดซ้ำ)

### 1. ลิงก์ต้องขึ้นต้นด้วย / เสมอ (สำคัญที่สุด)
เพราะ vercel.json ตั้ง `cleanUrls: true` (ตัด .html ออกจาก URL) การเขียนลิงก์แบบชื่อไฟล์เฉย ๆ จะทำให้เกิด 404 บนเว็บจริง (แต่ไม่เจอตอนทดสอบ Live Server)
- หน้าไทย: `/pages/products`, `/pages/contact`, หน้าแรก `/`
- หน้าอังกฤษ: `/en/products`, `/en/contact`, หน้าแรก `/en/index.html`
- ยกเว้น (ไม่ต้องแตะ): `tel:` `mailto:` และลิงก์ภายนอก (Google Maps, Facebook, LINE)

### 2. เส้นทางไฟล์ในโฟลเดอร์ย่อย
ไฟล์ใน pages/ และ en/ อยู่ลึก 1 ชั้น ต้องใช้ `../` เรียกของนอกโฟลเดอร์
- CSS: `../css/style.css`
- รูป: `../images/xxx.jpg`
- ไฟล์หน้าแรก (index.html) อยู่ชั้นนอก เรียกตรง ๆ `css/style.css`, `images/xxx.jpg`

### 3. CSS อยู่ไฟล์เดียว
สี/ฟอนต์/ขนาดทั้งหมดอยู่ที่ css/style.css แก้ที่เดียวเปลี่ยนทั้งเว็บ ห้ามเขียน CSS ฝังในไฟล์ HTML

### 4. ระบบ 2 ภาษาต้องสมมาตร
แก้อะไรในหน้าไทย ต้องแก้หน้าอังกฤษคู่กันด้วย และมีปุ่มสลับภาษา (lang-switch) ที่ชี้ไปหน้าเดียวกันของอีกภาษา รวมถึง hreflang ใน <head>
ตัวอย่าง hreflang (หน้าแรกใช้ /en/index.html ส่วนหน้าอื่นใช้แบบไม่มี .html):
```html
<link rel="alternate" hreflang="th" href="https://www.jat-en.com/pages/products">
<link rel="alternate" hreflang="en" href="https://www.jat-en.com/en/products">
```

### 5. footer ซ้ำในทุกไฟล์
เป็นข้อจำกัดของ HTML ธรรมดา แก้ footer ต้องแก้ทั้ง 10 ไฟล์
footer มีบรรทัด Tagline (class="footer-tagline") อยู่ — เจ้าของเลือกเก็บไว้ ห้ามลบ

### 6. ห้ามเปลี่ยนขนาดตัวอักษรที่เจ้าของตั้งเอง
เจ้าของปรับขนาดบางจุดเองแล้ว เช่น .hero-eyebrow = 26px และ .hero h1
อย่า "แก้กลับ" หรือปรับขนาดพวกนี้ตอนจัดระเบียบโค้ด ถ้าจะเปลี่ยนต้องถามก่อน

### 7. ถามก่อนแก้หลายไฟล์หรือแก้ CSS ที่กระทบทั้งเว็บ
ก่อนแก้ style.css (กระทบทุกหน้า) หรือแก้หลายไฟล์รวดเดียว ให้อธิบายว่าจะทำอะไรบ้างและขอยืนยันก่อน
แก้ทีละอย่าง ทดสอบก่อน แล้วค่อยไปต่อ — อย่าแก้รวดเดียวหลายจุด

## ระบบดีไซน์ (ตาม Brand Book)
- สีหลัก (--navy): #004682 JA Deep Blue
- สีรอง (--blue): #1482BE JA Sky Blue
- พื้นอ่อน (--light-blue): #E8F2F9
- สีข้อความ (--text): #404040
- ฟอนต์หัวข้อ: Prompt / เนื้อความ: Sarabun (โหลดจาก Google Fonts ผ่าน @import บนสุดของ style.css)
- ไอคอนใช้ SVG เส้น (Lucide) สีเดียว ห้ามใช้อีโมจิ
- ตัวแปรสีอยู่ที่ :root บนสุดของ style.css
- ข้อความจัดชิดซ้าย (ห้ามใช้ justify — ภาษาไทยจะเกิดช่องว่างกลางบรรทัด)

## แบรนด์
- ชื่อไทย: บริษัท เจ.เอ. เทค เอนทาเนีย จำกัด
- ชื่ออังกฤษ: J.A. Tech Entaneer Co., Ltd.  (สะกด Entaneer ห้ามเป็น Engineer)
- Tagline: Beyond the Filter — Engineering for You
- จุดขายหลัก: EHEDG (มาตรฐานสุขลักษณะยุโรป), ผลิตตามงานจริง, ตอบไวส่งตรงเวลา

## ข้อมูลติดต่อ
- โทร: 065-528-1599 | สำนักงาน: 053-584-699
- อีเมล: sales@jat-en.com
- LINE: @844grvis (ลิงก์ https://line.me/R/ti/p/@844grvis)
- Facebook: https://www.facebook.com/profile.php?id=61591400297939
- Google Maps: https://maps.app.goo.gl/pnWfmge7c5DZkszd6
- ที่อยู่: 128/7 หมู่ที่ 4 ตำบลป่าสัก อำเภอเมืองลำพูน จังหวัดลำพูน 51000
- เวลาทำการ: จันทร์–ศุกร์ 8:00–17:00

## สินค้า 8 กลุ่ม (ตามลำดับที่แสดง)
1. Sintered Filter — ไส้กรองตะแกรงผนึกหลายชั้น
2. Filter Housing — ถังกรอง
3. Inline Filter — ฟิลเตอร์ในเส้นท่อ
4. Basket Strainer — ตะกร้ากรอง
5. Disk Filter — แผ่นกรอง
6. Cartridge Filter — ไส้กรองทรงกระบอก
7. Made to Order Filter — งานสั่งผลิตพิเศษ
8. งานอื่นๆ / Others

## บริการ 4 กลุ่ม
1. Filter Manufacturing — ผลิตฟิลเตอร์
2. Engineering Design — ออกแบบวิศวกรรม
3. Installation Service — งานติดตั้ง
4. Maintenance & Support — บำรุงรักษาและบริการหลังการขาย

## วิธีทำงาน (workflow)
1. แก้ไฟล์ในโฟลเดอร์นี้
2. ทดสอบด้วย Live Server ในเครื่องก่อน
3. Commit + Push ผ่าน Git → Vercel สร้างเว็บใหม่อัตโนมัติใน 1-2 นาที
4. ถ้าพัง: ย้อนกลับผ่าน Vercel Instant Rollback หรือ git revert

## สถานะปัจจุบัน (เสร็จแล้ว)
- เว็บ 2 ภาษา 10 หน้า ครบ ใช้งานจริง
- SEO พื้นฐาน: sitemap, robots.txt, hreflang, title/description มีคำค้น
- เชื่อม Google Search Console + ส่ง sitemap แล้ว (Google เก็บหน้าแล้ว)
- ปุ่ม LINE, favicon, เมนูมือถือ, sticky header ทำงานถูกต้อง
- รูปสินค้าครบทุกกลุ่ม (รวม Disk Filter)

## งานที่เหลือ (ยังไม่ทำ)
1. เติมสเปก/จุดเด่นแต่ละกลุ่มสินค้า (รอเจ้าของกรอกข้อมูลในแบบฟอร์ม Word แล้วเอามาลงหน้า products ทั้ง 2 ภาษา)
2. ส่วน "ตัวอย่างผลงาน" ในหน้าบริการ — **ตอนนี้ services.html ทั้งไทยและอังกฤษยังไม่มีส่วนนี้**
   แผน: เพิ่มส่วนแสดงงานตัวอย่าง 8 งาน งานละ 1 รูป + คำอธิบายสั้น ทั้ง 2 ภาษา (ยังไม่ได้เตรียมรูป)
   ชื่อไฟล์รูปที่วางแผนไว้ + คำอธิบาย:
   - work-installation-1.jpg → ติดตั้งระบบกรองในไลน์ผลิต พร้อมทดสอบการทำงาน / Filtration system installation and commissioning
   - work-repair-1.jpg → งานซ่อมถังกรองในไลน์ผลิต / Filter vessel repair on production lines
   - work-dismantle-1.jpg → งานรื้อถอนอุปกรณ์ต่างๆ ของถังกรอง / Dismantling of filter vessel components
   - work-glasstube-1.jpg → งานเปลี่ยนท่อหลอดแก้ว / Glass tube replacement
   - work-acidline-1.jpg → เดินไลน์ท่อส่งสารเคมี Acid CIP System Cleaner / Acid CIP cleaning chemical pipeline installation
   - work-watertreatment-1.jpg → งานปรับปรุงระบบน้ำ Water Treatment / Water treatment system improvement
   - work-welding-1.jpg → เชื่อมท่อรอยรั่ว Plate Heat Exchanger / Plate heat exchanger leak welding
   - work-modify-1.jpg → โมดิฟายที่วางปั๊มสารเคมีและที่ยึดแนวท่อสแตนเลส / Modification of chemical pump mounts and stainless pipe supports
3. ภาพพรีวิวตอนแชร์ลิงก์ LINE/Facebook (Open Graph meta tags + รูป og-image)
4. Catalogue PDF ให้ดาวน์โหลด (ไฟล์ไปไว้ในโฟลเดอร์ files/)
5. SEO ระยะยาว: แยกหน้าสินค้าทีละกลุ่ม (ทำเมื่อข้อมูลสเปกพร้อม), ลงไดเรกทอรีธุรกิจไทย
6. รอ Google Business Profile ยืนยันผ่าน (ส่งวิดีโอแล้ว รอผล)

## เตรียมรูปเสมอ
รูปใหม่ทุกรูป: ตั้งชื่อภาษาอังกฤษตัวเล็ก ไม่มีเว้นวรรค (ใช้ - คั่น), ย่อที่ squoosh.app
(ด้านยาว 1200px, MozJPEG, Quality 75), เอาเข้าโฟลเดอร์ images/
