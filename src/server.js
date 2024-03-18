import express from "express";

const app = express();

// const hostname = "http://localhost";
const port = 8017;

app.listen(port, hostname, () => {
  console.log(`Hello AnhQuoc, I'm running server at port ${port}`);
});
