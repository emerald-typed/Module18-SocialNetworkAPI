const { Thoughts, User } = require('../models');

const mindController = {
    getAllThoughts(req, res) {
        Thoughts.find()
        .populate({
            path: "reactions",
            select: "-__v",
          })
        .select('-__v')
        .sort({ _id: -1 })
        .then(thoughtData => res.json(thoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        }
        );

    },
    getThoughtById({ params }, res) {
        Thoughts.findOne({ _id: params.id })
        .populate({
            path: "reactions",
            select: "-__v",
          })
        .select('-__v')
        .then(thoughtData => {
            if(!thoughtData) {
                res.status(404).json({ message: `Could not find a thought with ${params.id}` });
                return;
            }
            res.json(thoughtData);
        }
        )
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        }
        );
    },
    createThought({ body }, res) {
        Thoughts.create(body)
        .then(thoughtData => {
            if(!thoughtData) {
                res.status(404).json({ message: `Could not find a thought with ${params.id}` });
                return;
            }
            res.json(thoughtData);
        }
        )
        .catch(err => res.status(400).json(err));
    },
    updateThought({ params, body }, res) {
        Thoughts.findOneAndUpdate({_id: params.id}, body , { new: true, runValidators: true })
        .then(thoughtData => {
            if(!thoughtData) {
                res.status(404).json({ message: `Could not find a thought with ${params.id}` });
                return;
            }
            res.json(thoughtData);
        }
        )
        .catch(err => res.status(400).json(err));
    },
    deleteThought({ params }, res) {
        Thoughts.findOneAndDelete({ _id: params.id })
        .then(thoughtData => {
            if(!thoughtData) {
                res.status(404).json({ message: `Could not find a thought with ${params.id}` });
                return;
            }
            res.json(thoughtData);
        }
        )
        .catch(err => res.status(400).json(err));
    },

    
    addReaction({ params, body }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thought_id },
            { $addToSet: { reactions: body } },
            { new: true, runValidators: true }
        )
        .then(thoughtData => {
            if(!thoughtData) {
                res.status(404).json({ message: `Could not find a thought with ${params.id}` });
                return;
            }
            res.json(thoughtData);
        }
        )
        .catch(err => res.status(400).json(err));
    },
    deleteReaction({ params }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thought_id },
            { $pull: { reactions: { reactionId: params.reaction_Id } } },
            { new: true }
        )
        .then(thoughtData => {
            if(!thoughtData) {
                res.status(404).json({ message: `Could not find a thought with ${params.id}` });
                return;
            }
            res.json(thoughtData);
        }
        )
        .catch(err => res.status(400).json(err));
    }
};
module.exports = mindController;