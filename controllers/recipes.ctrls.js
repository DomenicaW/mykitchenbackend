const db = require('../models');

//all recipes
const index = (req, res) => {
  db.Recipe.find({}, (err, recipes) => {
    if (err) {
      return res.status(404).json({error: err.message});
    }else {
    return res.status(200).json({
      recipes,
      requestedAt: new Date().toLocalDateString
    });
  }
  });
};

//Create
const create = (req, res) => {
  db.Recipe.create(req.body, (error, createdRecipe) => {
      if (error) {
        return res.status(404).json({error: error.message})
      }else {

      return res.status(200).json({recipes:createdRecipe});
    }
  });
};


//Update
const update = (req, res) => {
  db.Recipe.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    {new: true},
    (err, updatedRecipe) => {
      if (err) {
        return res.status(400).json({error: err.message});
      }else {
      return res.status(200).json(updatedRecipe);
    }
    }
  );
};

//Destroy
const destroy = (req, res) => {
  db.Recipe.findByIdAndDelete(req.params.id, (err, deletedRecipe) => {
    if (err) {
      return res.status(400).json({error: err.message})
    } else {
    return res.status(200).json({
      message: `Recipe ${deletedRecipe.name} has been deleted`,

    });
  }
  });
};

module.exports = {
  index,
  create,
  update,
  destroy,
};
