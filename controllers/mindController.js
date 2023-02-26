const { Thoughts, User } = require('../models');

const mindController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thoughts.find()
        .select('-__v')
        .sort({ _id: -1 })
        .then(thoughtData => res.json(thoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        }
        );

    },
    // get one thought by id
    getThoughtById({ params }, res) {
        Thoughts.findOne({ _id: params.id })
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
    // create thought
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
    // update thought by id
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
    // delete thought
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
    // add reaction
    addReaction({ params, body }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
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
    // delete reaction
    deleteReaction({ params }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
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