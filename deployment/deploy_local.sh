#!/usr/bin/bash

# ~/auPayManager
pwd

# test
npx jest

# ts -> js transpile
npx ts-node -T build.ts

source .env

CLASPJSON=$(cat <<-END
    {
        "scriptId": "$TARGET_SCRIPT_ID",
        "rootDir": "public"
    }
END
)
echo $CLASPJSON > .clasp.json

clasp push --force
clasp deploy --deploymentId $TARGET_DEPLOYMENT_ID -d Develop