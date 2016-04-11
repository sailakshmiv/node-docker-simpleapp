#!/bin/sh
sleep 5
if curl web:8080; then
  echo "Tests passed!"
  exit 0
else
  echo "Tests failed!"
  exit 1
fi
