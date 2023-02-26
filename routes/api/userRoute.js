const router = require('express').Router();
const {getAllUsers , getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend} = require('../../controllers/userController');


router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:user_Id/friends/:friend_Id').post(addFriend);

router.route('/:user_Id/friends/:friend_Id').delete(deleteFriend);

module.exports = router;
