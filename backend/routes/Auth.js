import express from 'express';
import { Register, Login } from '../controllers/Auth.js';
const AuthRouters = express.Router();

AuthRouters.post('/register',Register)
AuthRouters.post('/login',Login)

export default AuthRouters;