const express = require('express');
const server = express();
server.use(express.json());
const router = require('express').Router();

const db = require('../data/db.js')


//POST
router.post('/', (req, res)=> {
    const newPost = req.body;
    console.log('New Post:', newPost);
    if('title' === null || 'contents' === null){
        res.status(400).json({error: 'Title and Content cannont be null.'})
    } else {
        db.insert(newPost)
        .then(posts=> {
            res.status(201).json(posts);
        })
        .catch(err=> {
            console.log('Error', err);
            res.status(500).json({error:'Error adding post.'})
        });
    }
});

router.post('/:id/comments', (req, res)=> {
    db.insertComment(req.body)
    .then(data=> {
        res.status(201).json(data)
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({message:'Error adding post comment.'})
    });
});


//GET
router.get('/', (req, res)=> {
    db.find()
    .then(data=> {
        res.status(200).json(data);
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({message:'Error retrieving data.'})
    });
});

router.get('/:id', (req, res)=> {
    db.findById(req.params.id)
    .then(data=> {
        res.status(200).json(data);
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({message:'Error retrieving data.'})
    });
});

router.get('/:id/comments', (req, res)=> {
    db.findPostComments(req.params.id)
    .then(comment=> {
        res.status(200).json(comment);
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({message:'Error retrieving comment.'})
    });
});


//DELETE
router.delete('/:id', (req, res)=> {
    const id = req.params.id;
    db.remove(id)
    .then(count=> {
        if(count > 0){
            res.status(200).json({message: `Post ID:${id} Terminated`});
        } else {
            res.status(404).json({message: 'Post Not Found'});
        }
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({message: 'Error Deleting Post'})
    });
});


//PUT
router.put('/:id', (req, res)=> {
    db.update(req.params.id, req.body)
    .then(data=> {
        if(data) {
            res.status(200).json(data);
        } else {
            res.status(404).json({message: 'Post not found.'});
        }
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({message: 'Error updating post.'})
    });
});

module.exports = router;