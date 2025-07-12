
const express = require('express');
const router = express.Router();

const {findResources} = require("../routes/resourceRoutes")
const {findTherapist} = require("../routes/therapistRoutes")
const {findForums} = require("../routes/forumRoutes")

router.get('/resources' ,findResources )
router.get('/forum' , findForums)
router.get('/therapist' ,findTherapist )

module.exports = router
