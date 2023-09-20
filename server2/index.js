const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hola contenedor 2')
})


app.listen(PORT, () => {
    console.log(`Servidor 2 corriendo en el puerto ${PORT}`);
});
