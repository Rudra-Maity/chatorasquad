import express from 'express';
import checkAdmin from '../middlewares/checkAdmin';
import authMiddleware from '../middlewares/authMiddleware';
import { addCuisine, deleteCuisine, getCuisineById, getCuisines, updateCuisine } from '../controllers/orderController';

const router = express.Router();

router.get('/cuisines',authMiddleware, checkAdmin,getCuisines);     
router.get('/cuisines/:id',authMiddleware, checkAdmin,getCuisineById); // id is cuisine id
router.post('/addcuisine',authMiddleware,checkAdmin,addCuisine);
router.delete('/deletecuisine/:id',authMiddleware,checkAdmin,deleteCuisine); // id is cuisine id
router.put('/updatecuisine/:id',authMiddleware,checkAdmin,updateCuisine); // id is cuisine id


export default router;