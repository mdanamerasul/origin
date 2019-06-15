@@ -4,6 +4,7 @@ const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
  if (req.url === '/user-agent') return respondUserAgent(req, res)

  res.end()
})
@@ -12,6 +13,11 @@ function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

function respondUserAgent (req, res) {
  const ua = req.headers['user-agent']
  res.end(JSON.stringify({ ua }))
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)
