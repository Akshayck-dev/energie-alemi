import os
import json

draft_file = 'src/eschweiler_draft.txt'
with open(draft_file, 'r', encoding='utf-8') as f:
    text = f.read()

# I will just write a generator that replaces Stolberg text with Eschweiler text since the structures are 1:1.
# Wait, let me manually check if I can just replace Stolberg -> Eschweiler for the entire file.
# No, the German copy is DIFFERENT. I have to read the exact texts from the docx.
