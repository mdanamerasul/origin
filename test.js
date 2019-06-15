@@ -15,6 +15,16 @@ tape('should respond hello', (t) => {
  })


tape('should respond user-agent', (t) => {
  const opts = { headers: { 'User-Agent': 'tape' } }
  jsonist.get(`${urlBase}/user-agent`, opts, (err, body) => {
    if (err) t.error(err)

    t.equal(body.ua, 'tape')
    t.end()
  })
})

tape('cleanup', function (t) {
  server.close()
  t.end()