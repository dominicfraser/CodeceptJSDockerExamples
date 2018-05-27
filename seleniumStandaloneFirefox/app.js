const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

const server = app.listen(3000, () => {
    const port = server.address().port
    console.log(`Example app listening on port ${port}`)
  })
