const express = require("express")
const app = express()
const port = 3000

const content = ` <h1> Hello world!</h1>
<p> This is a simple application made with express </p>
`
app.get("/", (req, res) => {
  res.send(content)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
