require('dotenv').config();

const express = require('express');
const cors = require('cors');
const supertokens = require('supertokens-node');
const middleware = require('supertokens-node/framework/express');
const st = require('./services/supertoken')

const app = express();

// MIDDLEWARES
app.use(express.json());

app.use(
   cors({
      origin: 'http://localhost:3000',
      allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
      credentials: true,
   })
);

app.use(middleware.middleware());
app.use(middleware.errorHandler());

app.use((err, req, res, next) => {
   console.log(err);
   res.status(500).send('Internal Server Error');
});


const port = process.env.PORT || 5000;

app.listen(port, async () => {
   console.log(`✅ Server listening on port ${port}`);
});
