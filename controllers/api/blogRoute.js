const router = require('express'). Router()
const { Blog } = require('../../models')
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req,res)=>{
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(newBlog)
    }
    catch(err){
        res.status(400).json(err);
    }
})

router.delete('/:id', withAuth, async =>{
    try{
        const blogData = await Blog.destroy({
            where: {
                id:req.parms.id,
                user_id: req.session.user_id
            }
        })
        if (!blogData){
            res.status(404).json({message: 'Blog not found'})
        }
        res.status(200).json(blogData)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router