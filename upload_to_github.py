#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Upload all files to GitHub using gh CLI"""
import subprocess, json, base64, time
from pathlib import Path

REPO = "hotmanchenhao/yuren-group-website"
BASE_DIR = Path(r"C:\Users\Administrator\.qclaw\workspace\yuren-v2")

# Get all files to upload
files_to_upload = []
for ext in ["*.html", "*.css", "*.js", "*.md"]:
    files_to_upload.extend(BASE_DIR.glob(ext))

print(f"Uploading {len(files_to_upload)} files to GitHub...")
print()

for filepath in files_to_upload:
    relative_path = filepath.name
    content = filepath.read_text(encoding="utf-8")
    b64_content = base64.b64encode(content.encode()).decode()
    
    # Check if file exists
    try:
        result = subprocess.run(
            ["gh", "api", f"/repos/{REPO}/contents/{relative_path}"],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0:
            existing = json.loads(result.stdout)
            sha = existing.get("sha")
            # Update file
            data = {
                "message": f"Update {relative_path}",
                "content": b64_content,
                "sha": sha
            }
        else:
            # Create new file
            data = {
                "message": f"Add {relative_path}",
                "content": b64_content
            }
    except:
        # Create new file
        data = {
            "message": f"Add {relative_path}",
            "content": b64_content
        }
    
    # Upload via API
    try:
        result = subprocess.run(
            ["gh", "api", f"/repos/{REPO}/contents/{relative_path}",
             "-X", "PUT", "-f", f"message={data['message']}",
             "-f", f"content={data['content']}"] + 
            (["-f", f"sha={data['sha']}"] if "sha" in data else []),
            capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0:
            print(f"  {relative_path}: OK")
        else:
            print(f"  {relative_path}: {result.stderr[:50]}")
    except Exception as e:
        print(f"  {relative_path}: ERROR - {e}")
    
    time.sleep(1)

print()
print(f"Website: https://hotmanchenhao.github.io/yuren-group-website/")
