const Author = require("../models/author.model");

module.exports.findAllAuthors = (req, res) => {
  Author.find({}).sort({name:1})
      .then(allAuthors => res.json({ authors: allAuthors}))
      .catch(err =>{
        console.log("Get all authors failed");
        res.status(400).json(err)});
      }
module.exports.createNewAuthor = (req, res) => {
    const name = req.body;
    Author.create(req.body)
      .then(newlyCreatedAuthor => res.json(newlyCreatedAuthor))
      .catch(err => res.status(400).json(err))};
  


// module.exports.createNewAuthor = (req, res) => {
//   Author.create(req.body)
//       .then(newlyCreatedAuthor => res.json(newlyCreatedAuthor))
//       .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

module.exports.findOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id})
      .then(oneAuthor => res.json({ author: oneAuthor }))
      .catch(err => res.json({ message: "something went wrong", error: err}));
};

module.exports.updateExistingAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
  .then(updatedAuthor => res.json({ author: updatedAuthor}))
  .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteExistingAuthor = (req, res) => {
  Author.findByIdAndDelete({ _id: req.params.id })
  .then(deletedAuthor => res.json({ author: deletedAuthor }))
  .catch(err => res.json({ message: "Something went wrong", error: err }));
};