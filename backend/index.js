import express from "express";
import dotenv from "dotenv";
import DbCon from "./libs/db.js";
import AuthRouters from "./routes/Auth.js";
import ProductRouters from "./routes/Product.js";
import cors from "cors"
dotenv.config()

const app = express();

DbCon();

const PORT = process.env.PORT || 8000;

app.use(cors("*"));
app.use(express.json());

app.use('/auth', AuthRouters)
app.use('/product', ProductRouters)

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
