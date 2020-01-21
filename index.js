const express = require('express');
const { getRecepts, getRecept, postRecept, putRecept, deleteRecept } = require('./hello')
const app = express();

const LISTEN_PORT = 5000;

app.get('/recepts', getRecepts);
app.get('/recept', getRecept);
app.post('/recept', postRecept);
app.put('/recept', putRecept);
app.delete('/recept', deleteRecept);

app.listen(LISTEN_PORT, () => {
    console.log(Example app listening on port ${LISTEN_PORT}!);
});