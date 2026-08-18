import urllib.request
import re
import ssl
from html.parser import HTMLParser

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

class ImageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.images = set()

    def handle_starttag(self, tag, attrs):
        if tag == 'img':
            for name, value in attrs:
                if name == 'src':
                    self.images.add(value)
        elif tag == 'source':
            for name, value in attrs:
                if name == 'srcset':
                    # srcset can have multiple urls separated by comma
                    urls = [u.strip().split(' ')[0] for u in value.split(',')]
                    for u in urls:
                        self.images.add(u)

def check_url(url):
    req = urllib.request.Request(url, method='HEAD', headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req, timeout=5, context=ctx)
        return response.getcode()
    except Exception as e:
        return str(e)

for page in ['https://energie-alemi.de/', 'https://energie-alemi.de/tarifberatung-aachen']:
    print(f"Checking {page} ...")
    req = urllib.request.Request(page, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
    except Exception as e:
        print(f"Failed to fetch {page}: {e}")
        continue
    
    parser = ImageParser()
    parser.feed(html)
    
    for img_path in parser.images:
        if img_path.startswith('/'):
            img_url = 'https://energie-alemi.de' + img_path
        elif img_path.startswith('http'):
            img_url = img_path
        else:
            img_url = 'https://energie-alemi.de/' + img_path
            
        status = check_url(img_url)
        if status != 200:
            print(f"  [ERROR] {img_url} returned {status}")
    print("Done checking images.")

