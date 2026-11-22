const express = require('express');
const Unblocker = require('unblocker');
const path = require('path');

const app = express();
const unblocker = new Unblocker({ prefix: '/proxy/' });

app.use(unblocker);
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Proxy running on port ${port}`);
}).on('upgrade', unblocker.onUpgrade);
