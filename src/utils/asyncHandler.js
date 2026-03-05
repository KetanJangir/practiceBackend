const asyncHandler = (requestHandling) =>{
    (req,res,next)=>{
        Promise.resolve(requestHandling(req,res,next)).catch((error)=>next(error));
    }
}


// const asyncHandler = (requestHandling) = async(req,res,next) =>{
//     try{
//         await requestHandling(req,res,next);
//     }catch{
//         res.status(500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }

export default asyncHandler;