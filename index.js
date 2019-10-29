const express = require('express');

const postsRouter = require('./posts/posts-router.js');

const server = express();
server.use(express.json());
const port = 4000; 


//ENDPOINTS
server.get('/', (req, res)=> {
    res.send(`<h1>Knock Knock<h1>`)
});

server.use('/api/posts', postsRouter);

server.listen(port, ()=> {
    console.log('\n...Host 4000 is infected with a blog...\n')
})
