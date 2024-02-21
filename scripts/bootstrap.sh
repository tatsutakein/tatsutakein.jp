#! /bin/bash

echo ""
echo "  ######     ##     ######    ####    ##  ##   ######     ##     ##  ##   ######             ####    ##  ## ";
echo "    ##      ####      ##     ##  ##   ##  ##     ##      ####    ## ##    ##                  ##     ### ## ";
echo "    ##     ##  ##     ##     ##       ##  ##     ##     ##  ##   ####     ##                  ##     ###### ";
echo "    ##     ######     ##      ####    ##  ##     ##     ######   ###      ####                ##     ###### ";
echo "    ##     ##  ##     ##         ##   ##  ##     ##     ##  ##   ####     ##                  ##     ## ### ";
echo "    ##     ##  ##     ##     ##  ##   ##  ##     ##     ##  ##   ## ##    ##         ##       ##     ##  ## ";
echo "    ##     ##  ##     ##      ####     ####      ##     ##  ##   ##  ##   ######     ##      ####    ##  ## ";
echo ""

# Project root directory
FILE_PATH=$(dirname "$0")
cd "$FILE_PATH/../" || exit

echo "🚀 Bootstrap start"
echo "🚀 Working directory: $(pwd)"

##############################################################################
##
##  Git commit message
##
##############################################################################
echo ""
echo "🚀 Git commit message: Start"
if type git >/dev/null 2>&1; then
  git config commit.template tools/git/message
  echo "🎉 Git commit message: git config commit.template is $(pwd)/$(git config commit.template)"
  echo "✅ Git commit message: Success"
else
  echo "⚠️ Git commit message: Skip the git command as it could not be found."
fi
echo "🚀 Git commit message: Finished"

##############################################################################
##
##  mise
##
##############################################################################
echo ""
echo "🚀 mise install: Start"
if type mise >/dev/null 2>&1; then
  if mise install; then
    echo "✅ mise install: Success"
  else
    echo "🚫 mise install: Failed"
  fi
else
  echo "⚠️ mise install: Skip mise because it could not be found."
  echo "⚠️ mise install: See https://mise.jdx.dev/getting-started.html for installation."
fi

##############################################################################
##
##  bun
##
##############################################################################
echo ""
echo "🚀 bun install: Start"
if type bun >/dev/null 2>&1; then
  if bun install; then
    echo "✅ bun install: Success"
  else
    echo "🚫 bun install: Failed"
  fi
else
  echo "⚠️ bun install: Skip bun because it could not be found."
  echo "⚠️ bun install: This may be due to the fact that the mise installation has not been completed."
fi

##############################################################################
##
##  husky
##
##############################################################################
echo ""
echo "🚀 husky install: Start"
if type bun >/dev/null 2>&1; then
  if bun husky; then
    echo "✅ husky install: Success"
  else
    echo "🚫 husky install: Failed"
  fi
else
  echo "⚠️ husky install: Skip bun because it could not be found."
  echo "⚠️ husky install: This may be due to the fact that the mise installation has not been completed."
fi

##############################################################################
##
##  Finish
##
##############################################################################
echo ""
echo "🚀 Bootstrap finished"
