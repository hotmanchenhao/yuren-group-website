#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Upload large files to GitHub"""
import subprocess, json, base64, time, os
from pathlib import Path

REPO = "hotmanchenhao/yuren-group-website"
BASE_DIR = Path(r"C:\Users\Administrator\.qclaw\workspace\yuren-v2")

# Large files that failed
large_files = ["index.html", "styles.css", "main.js"]

print("Uploading large files using gh CLI...")
print()

for filename in large_files:
    filepath = BASE_DIR / filename
    if not filepath.exists():
        print(f"  {filename}: NOT FOUND")
        continue
    
    content = filepath.read_text(encoding="utf-8")
    
    # Create a temporary file with the content
    temp_file = BASE_DIR / f"temp_{filename}"
    temp_file.write_text(content, encoding="utf-8")
    
    # Use gh api to upload
    try:
        # First check if file exists
        result = subprocess.run(
            ["gh", "api", f"/repos/{REPO}/contents/{filename}"],
            capture_output=True, text=True, timeout=30
        )
        
        if result.returncode == 0:
            existing = json.loads(result.stdout)
            sha = existing.get("sha")
            print(f"  {filename}: File exists, updating...")
            
            # Update using gh api with input file
            update_result = subprocess.run(
                ["gh", "api", f"/repos/{REPO}/contents/{filename}",
                 "-X", "PUT",
                 "-f", "message=Update large file",
                 "-f", f"content={base64.b64encode(content.encode()).decode()}",
                 "-f", f"sha={sha}"],
                capture_output=True, text=True, timeout=60
            )
            
            if update_result.returncode == 0:
                print(f"  {filename}: UPDATED")
            else:
                print(f"  {filename}: UPDATE FAILED - {update_result.stderr[:100]}")
        else:
            print(f"  {filename}: Creating new file...")
            
            # Create new file
            create_result = subprocess.run(
                ["gh", "api", f"/repos/{REPO}/contents/{filename}",
                 "-X", "PUT",
                 "-f", "message=Add large file",
                 "-f", f"content={base64.b64encode(content.encode()).decode()}"],
                capture_output=True, text=True, timeout=60
            )
            
            if create_result.returncode == 0:
                print(f"  {filename}: CREATED")
            else:
                print(f"  {filename}: CREATE FAILED - {create_result.stderr[:100]}")
    
    except Exception as e:
        print(f"  {filename}: ERROR - {e}")
    
    # Clean up temp file
    if temp_file.exists():
        temp_file.unlink()
    
    time.sleep(2)

print()
print("Done!")
print(f"Website: https://hotmanchenhao.github.io/yuren-group-website/")
