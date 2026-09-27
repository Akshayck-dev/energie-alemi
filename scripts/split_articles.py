import re
with open("src/ratgeber_batch1.txt", "r") as f:
    text = f.read()

articles = re.split(r'\n(?=\d+\.\s)', text)
# articles[0] is intro
for i, article in enumerate(articles[1:], 1):
    with open(f"src/article_{i}.txt", "w") as f:
        f.write(article)
