import os
import glob
import re

articles_dir = '/Users/akshay/Downloads/german/energie-alemi/src/pages/Ratgeber/articles/'

for filepath in glob.glob(os.path.join(articles_dir, '*.tsx')):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Fix import
    content = content.replace("import { Link } from 'react-router';\nimport { useTranslation } from 'react-i18next'; from 'react-router';", 
                              "import { Link } from 'react-router';\nimport { useTranslation } from 'react-i18next';")
                              
    content = content.replace("import { Link } from 'react-router';\nimport { useTranslation } from 'react-i18next';\nimport { useTranslation } from 'react-i18next'; from 'react-router';", 
                              "import { Link } from 'react-router';\nimport { useTranslation } from 'react-i18next';")
                              
    # Fix escaped single quotes
    content = content.replace("\\'en\\'", "'en'")
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
