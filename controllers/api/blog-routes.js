const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
// const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Blog.findAll({
        include: [
            {
                model: Comment,
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbBlogData => res.json(dbBlogData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Blog.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Comment,
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbBlogData => {
        if (!dbBlogData) {
            res.status(404).json({ message: 'Aint got your blog here' });
            return;
        }
        res.json(dbBlogData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Blog.create({
        title: req.body.title,
        blog_text: req.body.blog_text,
        user_id: req.session.user_id
    })
    .then(dbBlogData => res.json(dbBlogData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Blog.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
    })
    .then(dbBlogData => {
        if (!dbBlogData) {
            res.status(404).json({ message: 'No blog found here homedog' });
            return;
        }
        res.json(dbBlogData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Blog.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbBlogData => {
        if (!dbBlogData) {
            res.status(404).json({ message: 'There is no blog at this id!' });
            return;
        }
        res.json(dbBlogData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;