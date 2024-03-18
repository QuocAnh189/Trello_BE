import express from 'express'

const app = express()

const PORT = 8017

app.listen(PORT, () => {
  console.log(`Hello AnhQuoc, I'm running server at port ${PORT}`)
})
