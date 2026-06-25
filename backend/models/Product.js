import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    des:{
        type:String,
    },
    Image_url:{
        type:String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
}, {
    timestamps:true
})

const ProductModel = mongoose.model('Product',ProductSchema);
export default ProductModel;