#!/usr/bin/env python
from flask import Flask

app = Flask(__name__)

#Members API Route

@app.route('/')
def home():
   return "hello world!!!!"

@app.route("/members")
def members():
    return{"members": ["Member1", "Member2","Member3"]}

if __name__ == "__main__":
    app.run(host='0.0.0.0')
