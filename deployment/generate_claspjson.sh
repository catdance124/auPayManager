#!/bin/sh

CONFIG_FILE=./.clasp.json

# ファイルが存在しない場合のみ作成する
if [ ! -f "$CONFIG_FILE" ]; then
    source .env
    CLASPJSON=$(cat <<-END
        {
            "scriptId": "$SCRIPT_ID",
            "rootDir": "public"
        }
END
    )

    echo $CLASPJSON > "$CONFIG_FILE"
fi