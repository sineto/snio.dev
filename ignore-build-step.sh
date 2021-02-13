#!/bin/bash

echo "VERCEL_GIT_COMMIT_FEF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_FEF" == "develop" || "$VERCEL_GIT_COMMIT_FEF" == "master" ]]; then
  echo "==> Build can proceed"
  exit 1;
else
  echo "==x Build cancelled"
  exit 0;
fi
