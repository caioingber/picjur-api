#!/bin/bash
#expediting git commits

run_git() {
    git add "$1"
    git commit -m "$2"
}

run_git $1 $2

# git add .
# read -p "Commit: " desc
# git commit -m "$desc"