const express = require('express')
const nodeHtmlToImage = require('node-html-to-image')
const app = express()
const port = process.env.PORT || 3000

const commonStyle = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      color: #fff;
      font-family: 'Inter', sans-serif;
      font-size: 26px;
      letter-spacing: -0.02em;
      line-height: 38px;
      margin: 0;
    }

    h2 {
      font-weight: 600;
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.02em;
      margin: 0;
    }

    p {
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
    }

    .sticker {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 160px;
    }

    #chef {
      width: 80px;
      height: 80px;
      margin-bottom: 16px;
    }

    #chef img {
      border-radius: 50px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    #recipe {
      width: 480;
      height: 480;
      margin-bottom: 24px;
    }

    #recipe img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 36px;
    }
  </style>
`

app.get('/recipe', async (req, res) => {
  const {cover, picture, title, subtitle} = req.query
  const image = await nodeHtmlToImage({
    html: `
      <html>
        <head>
          ${commonStyle}
        </head>
        <body>
          <div class="sticker">
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
      args: ['--no-sandbox'],
      defaultViewport: {
        width: 480,
        height: 686,
        deviceScaleFactor: 1
      }
    }
  })
  res.writeHead(200, { 'Content-Type': 'image/png'})
  res.end(image, 'binary');
})

app.get('/chef', async (req, res) => {
  const {cover, picture, title, subtitle} = req.query
  const image = await nodeHtmlToImage({
    html: `
      <html>
        <head>
          ${commonStyle}
          <style>
            #content {
              display: flex;
              flex-direction: column;
              align-items: center;
              position: fixed;
              bottom: 180px;
              z-index: 1;
            }

            #bg {
              width: 720px;
              height: 1280px;
            }

            #bg #overlay {
              background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.9));
              position: fixed;
              width: 100%;
              height: 100%;
            }

            #bg img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 16px;
            }
          </style>
        </head>
        <body>
          <div class="sticker">
            <div id="content">
              <div id="chef">
                <img src="${picture}" />
              </div>
              <div id="text">
                <h2>${title}</h2>
                <p>${subtitle}</p>
              </div>
            </div>
            
            <div id="bg">
             <div id="overlay"></div>
              <img src="${cover}" />
            </div>
          </div>
        </body>
      </html>
    `,
    transparent: true,
    puppeteerArgs: {
      args: ['--no-sandbox'],
      defaultViewport: {
        width: 720,
        height: 1280,
        deviceScaleFactor: 1
      }
    }
  })
  res.writeHead(200, { 'Content-Type': 'image/png'})
  res.end(image, 'binary');
})

app.get('/cooked', async (req, res) => {
  const {cover, picture, pictureUser, title, user, subtitle} = req.query
  const image = await nodeHtmlToImage({
    html: `
      <html>
        <head>
          ${commonStyle}
          <style>
            #images {
              display: flex;
            }
          </style>
        </head>
        <body>
          <div class="sticker">
            <div id="recipe">
                <img src="${cover}" />
              </div>
              <div id="images">
                <div id="chef">
                  <img style="margin-right:-16px" src="${picture}" />
                </div>
                <div id="chef">
                  <img style="margin-left:-16px" src="${pictureUser}" />
                </div>
              </div>
              <div id="text">
                <h2>${title}</h2>
                <p>${subtitle} & ${user}</p>
              </div>
          </div>
        </body>
      </html>
    `,
    transparent: true,
    puppeteerArgs: {
      args: ['--no-sandbox'],
      defaultViewport: {
        width: 480,
        height: 686,
        deviceScaleFactor: 1
      }
    }
  })
  res.writeHead(200, { 'Content-Type': 'image/png'})
  res.end(image, 'binary');
})

app.get('/featured', async (req, res) => {
  const {cover1, cover2, cover3, picture, title, subtitle} = req.query
  const image = await nodeHtmlToImage({
    html: `
      <html>
        <head>
          ${commonStyle}
          <style>
            .images {
              height: 396px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 24px;
            }
            .images img#main {
              filter: drop-shadow(0px 0px 24.381px rgba(0, 0, 0, 0.1));
              position: fixed;
              top: 0;
              width: 250px;
              height: 396px;
            }
            .images .cont {
              margin: 0 75px;
              width: 164px;
              height: 236px
            }
            .images img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 24px;
            }
          </style>
        </head>
        <body>
          <div class="sticker">
            <div class="images">
              <img id="main" src="${cover1}" />
              <img class="cont" src="${cover2}" />
              <img class="cont" src="${cover3}" />
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
      args: ['--no-sandbox'],
      defaultViewport: {
        width: 480,
        height: 564,
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