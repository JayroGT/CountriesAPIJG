const {Router} = require('express');
const {
    postActivity,
    getActivity,
  } = require("../controllers/activitiesControllers")
const activitiesRouter = Router();


activitiesRouter.get('/', getActivity);
activitiesRouter.post('/', postActivity);

module.exports = activitiesRouter;