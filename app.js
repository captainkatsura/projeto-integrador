const express = require('express');
const app = express();
const PORT = 5000;

//************view engine etc **********/
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));





//**************import das rotas **********/
const homeRouter = require('./src/routes/homeRouter');
const detalhesprodutoRouter = require('./src/routes/detalhesprodutoRouter');
const listagemRouter = require('./src/routes/listagemRouter');
const loginRouter = require('./src/routes/loginRouter');
const paginausuarioRouter = require('./src/routes/paginausuarioRouter');
const editarRouter = require('./src/routes/editarRouter');
const carrinhoRouter = require('./src/routes/carrinhoRouter');
const compraconcluidaRouter = require('./src/routes/compraconcluidaRouter');



//****************uso das rotas **************/
app.use(homeRouter);
app.use(detalhesprodutoRouter);
app.use(listagemRouter);
app.use(loginRouter);
app.use(paginausuarioRouter);
app.use(editarRouter);
app.use(carrinhoRouter);
app.use(compraconcluidaRouter);


//************segunda tentativa maldita sprint roxa */

app.use(express.json())


const db = require('./src/database/models/index')

app.get('/aaa', async (req, res) => {       // **rota GET **
    try {
         const arcanas = await db.Arcana.findAll()
         res.send(arcanas)
     } catch (e) {
        console.log('e', e.message)
        res.send('vish :((')
    }
})


app.post('/aaa', async (req, res) => {       // **rota POST **
        const data = req.body;

        try {
            await db.Arcana.create({
                arcana_type: data.arcana_type
            });
            res.send("registrado com sucesso!!")
        } catch(e) {
            res.send("não foi, tsc ;/")
        }
    } 
)



app.delete('/aaa/:id', async (req, res) => {       // **rota DELETE **
    const id = req.params.id

    try {
        await db.Arcana.destroy({
            where: {
                id: id
            }
        })

        res.send("arcana deletado")
    } catch(e) {
        res.send("continua aqui. não foi dessa vez")
    }
} 
)



app.put('/aaa/:id', async (req, res) => {       // **rota PUT **
    const id = req.params.id;
    const data = req.body;

    try {
        await db.Arcana.update({
            arcana_type: data.arcana_type
        }, {
            where: {
                id: id
            }
        })

        res.send("arcana alterado")
    } catch(e) {
        res.send("continua igual. nada mudou")
    }
} 
)




//********************* meu app.listen ****************/
app.listen(PORT, () => { console.log('rodando na porta 5000!!') });