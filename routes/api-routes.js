const db = require("../models");

module.exports = function(app) {

app.post("/api/add-exercise", function(req, res) {
    db.Workout.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
})
}