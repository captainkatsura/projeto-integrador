const express = require('express');
const app = express();
const PORT = 5000;

const db = require('./src/database/models/index');
const methodOverride = require('method-override');
const fs = require('fs');
const multer = require('multer');
const createError = require('http-errors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieMiddleware = require('./src/middlewares/cookieLogin');



//********** middlewares     ## adicionando *********/
app.use(session( {
    secret: "Mensagem secreta aqui",
    resave: true,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(cookieMiddleware);






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




//************abaixo daqui é para ignorar até a linha 204 aprox */



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


//*************** acompanhando aula CRUD sequelize abaixo */


app.get('/aaa', async (req, res) => {       // ** arcanas com produtos funfando **
    try {
         const arcanas = await db.Arcana.findAll({
        include: "persona"
         })
         res.send(arcanas)
     } catch (e) {
        console.log('e', e.message)
        res.send('vish :((')
    }
})



app.get('/produtosss', async (req, res) => {       // UNICA Q FUNFA MOSTRANDO INCLUDE
    try {
         const produtos = await db.Product.findAll({
            include: "arcana"
         })
         res.send(produtos)
     } catch (e) {
        console.log('e', e.message)
        res.send('vish kk')
    }
})






app.get('/produtosss/:id', async (req, res) => {       // GET pra ver um só
    try {
         const produtos = await db.Product.findAll({
            include: "arcana"
         })
         res.send(produtos)
     } catch (e) {
        console.log('e', e.message)
        res.send('vish kk')
    }
})



// teste cadastro abaixo

app.get('/cadastroteste', async (req, res) => {
    try {
         const usuarios = await db.User.findAll({
            include: "endereço"
         })
         res.send(usuarios)
     } catch (e) {
        console.log('e', e.message)
        res.send('vish kk')
    }
})




// o que está entre esta linha e a 66 é lixo





//********************* meu app.listen ****************/
app.listen(PORT, () => { console.log('rodando na porta 5000!!') });
