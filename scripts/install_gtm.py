import os
import glob
import re

def patch_index():
    with open('index.html', 'r') as f:
        content = f.read()

    # Insert into <head>
    head_gtm = """<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JMZ5RD6');</script>
<!-- End Google Tag Manager -->
"""
    if 'Google Tag Manager' not in content:
        content = content.replace('<head>', '<head>\n    ' + head_gtm)

    # Insert into <body>
    body_gtm = """<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JMZ5RD6"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
"""
    if 'noscript' not in content:
        content = content.replace('<body>', '<body>\n    ' + body_gtm)

    with open('index.html', 'w') as f:
        f.write(content)

def patch_attributes():
    files = glob.glob('src/**/*.tsx', recursive=True)
    
    for file in files:
        with open(file, 'r') as f:
            content = f.read()
            original = content

        # 1. Phone links (<a href="tel:..." -> <a data-track="phone" href="tel:...")
        # Be careful not to replace multiple times.
        content = re.sub(r'<a(?![^>]*data-track="phone")([^>]*href="tel:[^>]*>)', r'<a data-track="phone"\1', content)

        # 2. WhatsApp links
        # Sometimes href={whatsappUrl}, let's just find href={whatsappUrl} and add data-track="whatsapp"
        content = re.sub(r'<a(?![^>]*data-track="whatsapp")([^>]*href={whatsappUrl}[^>]*>)', r'<a data-track="whatsapp"\1', content)

        # 3. Google maps links
        content = re.sub(r'<a(?![^>]*data-track="google-maps")([^>]*href="https://(www\.google\.com/maps|maps\.app\.goo\.gl)[^>]*>)', r'<a data-track="google-maps"\1', content)

        # 4. Contact Form Submit button
        if 'type="submit"' in content and 'ContactForm' in file:
            content = re.sub(r'<button(?![^>]*data-track="contact-submit")([^>]*type="submit"[^>]*>)', r'<button data-track="contact-submit"\1', content)

        if original != content:
            with open(file, 'w') as f:
                f.write(content)

patch_index()
patch_attributes()
print("GTM installed and attributes added.")
