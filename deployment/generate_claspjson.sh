#!/bin/sh

CLASPJSON=$(cat <<-END
    {
        "scriptId": "$SCRIPT_ID",
        "rootDir": "public"
    }
END
)

echo $CLASPJSON > ~/.clasp.json