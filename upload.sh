#!/bin/bash
# Upload to GitHub
cd "C:\Users\Administrator\.qclaw\workspace\yuren-v2"
git init
git add .
git commit -m "Initial commit: Yuren Group V2 professional website"
git branch -M main
git remote add origin https://github.com/hotmanchenhao/yuren-group-website.git
git push -u origin main --force
