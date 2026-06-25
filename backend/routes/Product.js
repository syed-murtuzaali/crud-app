import express from 'express';
import { ProductCreate, Update, DeleteProduct, GetProduct } from '../controllers/Product.js';
const ProductRouters = express.Router();

ProductRouters.post('/create/:userId',ProductCreate)
ProductRouters.put('/update/:id',Update)
ProductRouters.delete('/delete/:id',DeleteProduct)
ProductRouters.get('/getProducts/:id',GetProduct)

export default ProductRouters;