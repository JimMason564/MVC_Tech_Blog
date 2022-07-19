const router = require('express').Router();
const blogRoute = require('./blogRoute')
const commentRoute= require('./commentRoute')
const userRoute = require ('./userRoute')

router.use('/blogs', blogRoute)
router.use('/comments', commentRoute)
router.use('/user',userRoute)

module.exports = router