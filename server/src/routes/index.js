const { Router } = require("express");
const router = Router();
const countriesRouter = require("./countriesRouter");
const activitiesRouter = require("./activitiesRouter");

router.use('/countries', countriesRouter)
router.use('/activity', activitiesRouter)

module.exports = router;




