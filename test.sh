#!/bin/sh
if curl web | grep -q '[]'; then
  echo "Tests passed!"
  exit 0
else
  echo "Tests failed!"
  exit 1
fi
