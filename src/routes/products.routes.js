import {Router} from 'express'
const router = Router()
import * as productsCtrl from '../controllers/products.controller';
import { authJWT } from '../middlewares';
router.get('/', productsCtrl.getProducts)
router.post('/',[authJWT.verifyToken,authJWT.isModerator], productsCtrl.createProduct)
router.get('/:productId',productsCtrl.getProductById)
router.put('/:productId',[authJWT.verifyToken,authJWT.isModerator],productsCtrl.updateProductById)
router.delete('/:productId',[authJWT.verifyToken,authJWT.isModerator],productsCtrl.deleteProductById)


export default router;