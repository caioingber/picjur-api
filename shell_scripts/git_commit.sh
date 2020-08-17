#!/bin/bash
#expediting git commits

run_git() {
    git add "$1"
    read -p "Commit: " desc
    git commit -m "$desc"
}

run_git $1