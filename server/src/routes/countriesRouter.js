const {Router} = require('express');
const countriesRouter = Router();

const {getCountry, getCountryById, getCountryByName} = require("../controllers/countryController");

countriesRouter.get("/", getCountry);

countriesRouter.get("/:id",getCountryById);
countriesRouter.get("/detail/:name",getCountryByName);

module.exports = countriesRouter;

