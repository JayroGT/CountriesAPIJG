const { Country, Activity } = require("../db");

async function postActivity(req, res) {
  try {
    let { countryId, name, difficulty, duration, season } = req.body;
    countryId = countryId.toUpperCase();
    const country = await Country.findByPk(countryId);
    if (!country) {
      res.status(400).json("Country not found");
    } else {
      const activity = await Activity.create({
        name,
        difficulty,
        duration,
        season, 
      });
      //      id  tablaintermedia   id
      await country.addActivity(activity);
      res.status(200).json("Activity created");
    }
  } catch (error) {
    console.log(error);
    res.status(404).json(error.message);
  }
}

async function getActivity(req, res) {
  try {
    const activities = await Activity.findAll();
    res.status(200).json(activities);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

module.exports = {
  postActivity,
  getActivity,
};
