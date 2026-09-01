# BioMechaTech Portfolio — GitHub Pages Ready (Flat Structure)

هذه النسخة مبنية على التصميم الأصلي للموقع مع الحفاظ على نظام التنقل ثلاثي الأبعاد والروبوت وBMT Bot والواجهة الأصلية، لكن **بدون مجلد assets**.

## بنية المستودع
جميع الصور والملفات المستخدمة في الموقع موجودة مباشرة في جذر المستودع بجانب `index.html` و`style.css` و`script.js`.

```text
index.html
404.html
style.css
script.js
site.webmanifest
bmt-mark.png
bmt-robot-scene.png
bmt-bot-avatar.png
ambient-scene.jpg
source-reference.png
bmt-icon-192.png
bmt-icon-512.png
Abdalqader-Abueta-CV-2026.pdf
Sway_5.zip
robots.txt
sitemap.xml
.nojekyll
.github/workflows/pages.yml
```

## طريقة الرفع
1. فك ضغط الحزمة.
2. لا ترفع ملف ZIP الخارجي نفسه.
3. ارفع **كل الملفات والمجلد `.github`** إلى جذر Repository، بحيث يظهر `index.html` مباشرة في الجذر.
4. من `Settings → Pages` اختر `GitHub Actions`.
5. افتح `Actions` وانتظر اكتمال Workflow باسم `Deploy BioMechaTech to GitHub Pages`.

## ملاحظات
- لا يوجد مجلد `assets` في هذه النسخة.
- صور الواجهة ليست Base64؛ هي ملفات صور عادية موجودة في الجذر لتسهيل الرفع إلى GitHub.
- الوضع الليلي هو الشكل الأصلي، مع إضافة وضع نهاري حقيقي من زر الشمس/القمر.
- تم تحديث بطاقة Sway إلى Sway 5، وإضافة المشاريع الحديثة مع الإبقاء على نفس تصميم بطاقات النسخة الأصلية.

## الدومين
لم يتم تفعيل `CNAME` تلقائياً. عند تجهيز الدومين، غيّر اسم `CNAME_WHEN_DOMAIN_IS_READY.txt` إلى `CNAME` وضع داخله الدومين الصحيح.


## Final Portfolio v3
- 12 real portfolio project cards; no placeholder card in the project count.
- Fixed no-UI robot background from the approved reference, with transition blur and mobile positioning.
- Communication rail restored on desktop and converted to a mobile bottom dock.
- Verified GitHub, LinkedIn, Instagram, Behance, WhatsApp and email links restored in the Contact section.
- Facebook icon is present but intentionally left without an invented personal URL; provide the exact profile URL to activate it.
- Latest included project packages: Sway 7, BioMechTech Code 2.5, SimuLinker 3.5, HVAC Guide 2.0, Engineer's Weapon 1.1, EngStandard 2.0, Car Diagnostic 1.1 and Modular Rehabilitation Exoskeleton.


## GitHub Pages Upload Edition
This package intentionally excludes large project ZIP archives so it can be uploaded through the GitHub web interface without hitting per-file upload limits. Project cards remain visible and their action buttons open the main GitHub portfolio instead. The CV and all website visuals remain bundled locally.

### Upload
Upload the files in this folder directly to the repository root. Do not upload the outer ZIP file itself.
