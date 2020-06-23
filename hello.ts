import { Application, Context } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts"

const app = new Application()

app.static('/', './public')

app.get('/', async (ctx: Context) => {
    await ctx.file('./public/index.html')
})

app.post('/', async (ctx: Context) => {
    let js = {}

    js = {
        "fulfillmentMessages": [
            {
                "payload": {
                    "richContent": [
                        [
                          {
                            "type": "info",
                            "title": "情報レスポンス",
                            "subtitle": "サブタイトル\nクリックすると別のページに飛ぶよ",
                            "image": {
                              "src": {
                                "rawUrl": "https://www.i-enter.co.jp/images/favicon.ico"
                              }
                            },
                            "actionLink": "https://www.i-enter.co.jp"
                          }
                        ]
                    ]
                }
            }
        ]
    }

    await ctx.json(js)
})
app.start({port: 3000})