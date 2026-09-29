import os
import glob
import re

strings = [
    ("Welche Unterlagen brauche ich für den Stromvergleich?", "What documents do I need for the electricity comparison?"),
    ("Muss ich meinen bisherigen Stromvertrag selbst kündigen?", "Do I have to cancel my current electricity contract myself?"),
    ("Wie lange dauert der Stromanbieterwechsel?", "How long does it take to switch electricity providers?"),
    ("Welche Unterlagen brauche ich für den Gasvergleich?", "What documents do I need for the gas comparison?"),
    ("Muss ich meinen bisherigen Gasvertrag selbst kündigen?", "Do I have to cancel my current gas contract myself?"),
    ("Wie lange dauert der Gasanbieterwechsel?", "How long does it take to switch gas providers?"),
    ("Welche Unterlagen brauche ich für den Internetvergleich?", "What documents do I need for the internet comparison?"),
    ("Muss ich meinen bisherigen Internetvertrag selbst kündigen?", "Do I have to cancel my current internet contract myself?"),
    ("Wie lange dauert der Internetanbieterwechsel?", "How long does it take to switch internet providers?")
]

for f in glob.glob("src/pages/*anbieter*.tsx"):
    with open(f, 'r') as file:
        content = file.read()
    
    for de, en in strings:
        # replace `question: "..."` with `question: i18n.language === "en" ? "..." : "..."`
        content = content.replace(f'question: "{de}"', f'question: i18n.language === "en" ? "{en}" : "{de}"')
        
    with open(f, 'w') as file:
        file.write(content)

print("FAQ strings fixed.")
