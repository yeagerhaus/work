# sslconvert.py
# Author: Cole Yeager
# Github: https://github.com/yeagerhaus

import os
import sys
import re

print("Initializing SSL Conversion")
dirname, filename = os.path.split(os.path.abspath(sys.argv[0]))
print()
print("THIS IS THE FILE PATH", os.path.join(dirname, "index.html"))
print()

filename = os.path.join(dirname, "index.html")
print("Opening File")
print()

with open(filename, 'r+') as f:
    print("Reading File")
    print()
    text = f.read()
    print("Replacing Strings")
    print()
    text = re.sub('http', 'https', text)
    f.seek(0)
    print("Re-Writing File")
    print()
    f.write(text)
    f.truncate()
    print(f.read())
    print("SSL Conversion Completed")