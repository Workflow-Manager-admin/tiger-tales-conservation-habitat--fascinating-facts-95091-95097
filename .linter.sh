#!/bin/bash
cd /home/kavia/workspace/code-generation/tiger-tales-conservation-habitat--fascinating-facts-95091-95097/main_container
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

