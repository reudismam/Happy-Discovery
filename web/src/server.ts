import express from 'express';
import pages from './pages';
import path from 'path';
const server = express();

server
.use(express.urlencoded({extended: true}))
.use(express.static('public'))

.set('views', path.join(__dirname, 'views'))

.set('view engine', 'hbs')

let accessCount = 0;

server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)
server.post('/save-orphanage', pages.saveOrphanage)
server.get('/novoacesso', (req, res) => {
    accessCount++;
})

server.get('/acessos', (req, res) => {
    return res.render('acessos', {accessCount});
})



server.listen(5500);