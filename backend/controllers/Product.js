import ProductModel from "../models/Product.js";

const ProductCreate=async(req,res)=>{
    try {
        const userId = req.params.userId;
        const {title,des,Image_url} = req.body;
        console.log(userId,title,des,Image_url);

        if(!title || !des || !Image_url || !userId){
            return res.status(303).json({success:false,message:"All fields are required"});
        }

        const CreateProduct = new ProductModel({
            title,
            des,
            Image_url,
            userId
        });

        await CreateProduct.save();

        return res.status(201).json({success:true,message:"Product created successfully", product:CreateProduct});

    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

const Update = async(req,res)=>{
    try {
         const ProductId = req.params.id;
          const {title,des,Image_url} = req.body;
        console.log(ProductId,title,des,Image_url);

        const FindProduct = await ProductModel.findById(ProductId);
        if(!FindProduct){
            return res.status(404).json({success:false,message:"Product not found"});
        }

        const UpdateProduct = await ProductModel.findByIdAndUpdate(
            ProductId,
            {title,des,Image_url},
            {new:true}
        );

        return res.status(200).json({success:true,message:"Product updated successfully", product:UpdateProduct});
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

const DeleteProduct = async(req,res)=>{
    try{
        const ProductId = req.params.id;

        const FindProduct = await ProductModel.findById(ProductId);
        if(!FindProduct){
            return res.status(404).json({success:false,message:"Product not found"});
        }
        const deletedProduct = await ProductModel.findByIdAndDelete(ProductId);
        return res.status(200).json({success:true,message:"Product deleted successfully", product:deletedProduct});
    }catch(error){
        console.log(error);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

const GetProduct = async(req,res)=>{
    try {
        const userId = req.params.id;
        console.log("Searching for products with userId:", userId);

        const products = await ProductModel.find({userId});
        console.log("Found products:", products.length);
        return res.status(200).json({success:true, products});
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

export {ProductCreate,Update,DeleteProduct,GetProduct}