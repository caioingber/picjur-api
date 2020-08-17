#!/bin/bash
#expediting git commits

git add .
read -p "Commit: " desc
git commit -m "$desc"