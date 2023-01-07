import express from 'express'
import { getUser, getUsers, updateUser, deleteUser } from '../controllers/users.js'
import { verifyToken } from '../middleware/auth.js';


const router = express.Router();

router.get('/', verifyToken, getUsers)
router.get('/id', verifyToken, getUser)
router.get('/id', verifyToken, updateUser)
router.get('/id', verifyToken, deleteUser)

export default router