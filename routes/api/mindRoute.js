const router = require('express').Router();

const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/mindController');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

router.route('/:thought_id/reactions').put(addReaction)

router.route('/:thought_id/reactions/:reaction_Id').delete(deleteReaction)

module.exports = router;