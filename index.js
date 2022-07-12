const express = require('express')
const nodeHtmlToImage = require('node-html-to-image')
const app = express()
const port = 3000


app.get('/image', async (req, res) => {
  const {cover, picture, title, subtitle} = req.query
  const image = await nodeHtmlToImage({
    html: `
      <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

            * {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }

            body {
              color: #fff;
              width: 100%;
              font-family: 'Inter', sans-serif;
              font-size: 14px;
              letter-spacing: -0.02em;
              line-height: 20px;
            }

            #recipe {
              width: 260px;
              height: 260px;
              margin-bottom: 16px;
            }

            #recipe img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 16px;
            }

            #chef {
              width: 40px;
              height: 40px;
              margin-bottom: 4px;
            }

            #chef img {
              border-radius: 50px;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            #sticker h2 {
              font-weight: 600;
              font-size: 14px;
              line-height: 20px;
              letter-spacing: -0.02em;
              margin: 0;
            }

            #sticker p {
              color: rgba(255, 255, 255, 0.7);
              margin: 0;
            }

            #sticker {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 160px;
            }
          </style>
        </head>
        <body>
          <div id="sticker">
            <div id="recipe">
                <img src="${cover}" />
              </div>
              <div id="chef">
                <img src="${picture}" />
              </div>
              <div id="text">
                <h2>${title}</h2>
                <p>${subtitle}</p>
              </div>
          </div>
        </body>
      </html>
    `,
    transparent: true,
    puppeteerArgs: {
      defaultViewport: {
        width: 260,
        height: 372,
        deviceScaleFactor: 1
      }
    }
  })
  res.writeHead(200, { 'Content-Type': 'image/png'})
  res.end(image, 'binary');
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})