import express from 'express';
import {updateUser,deleteUser,getSingleUser,getAllUsers} from '../controllers/userController.js';
import {verifyToken ,verifyUser,verifyAdmin } from '../utils/verifyToken.js'
const router = express.Router();
//Update Existing User
router.put('/:id',verifyUser, updateUser);
//delete User
router.delete('/:id',verifyUser, deleteUser);
//getSingle User
router.get('/getSingleUser/:id',verifyUser,getSingleUser);
//getAllUser User
router.get('/getAllUser',verifyAdmin, getAllUsers);


export default router;