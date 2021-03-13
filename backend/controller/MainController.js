const router = require('express').Router();


router.route('/').get((req,res)=>{
    res.send("dummy data");
})

module.exports = router;