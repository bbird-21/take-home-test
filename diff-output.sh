#!/bin/sh

FILE1="output.txt"
FILE2="valid-output.txt"

if [ ! -f "$FILE1" ] || [ ! -f "$FILE2" ]; then
  echo "❌ One or both files do not exist."
  exit 1
fi

if cmp -s "$FILE1" "$FILE2"; then
  echo "✅ Files are identical."
else
  echo "❌ Files are different."
  echo "--- Diff ---"
  diff "$FILE1" "$FILE2"
fi
