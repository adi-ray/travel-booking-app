import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({ success: true, message: "Successfully created", data:savedTour });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Failed to Create. Try again!" });
  }
};

export const updateTour = async(req,res,next)=>{
    const id = req.params.id;
    try {
      const updatedTour = await Tour.findByIdAndUpdate(id,{
        $set:req.body
      },{new:true}); 
      res.status(200).json({ success: true, message: "Successfully Updated!!", data:updatedTour }); 
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To Update!!" });
    }
}

export const deleteTour = async (req,res,next)=>{
    const id = req.params.id;
    try {
       await Tour.findByIdAndDelete(id); 
      res.status(200).json({ success: true, message: "Successfully deleted!!"}); 
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed To delete!!" });
    }
}

export const getSingleTour = async (req,res,next)=>{
    const id = req.params.id;
    try {
      const SingleTour =  await Tour.findById(id).populate('reviews'); 
      res.status(200).json({ success: true, message: "Successfully Fetched Single Tour!!",data:SingleTour}); 
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Failed To Fetch!!" });
    }
}

export const getAllTours = async (req,res,next)=>{
    const page = parseInt(req.query.page);
    try {
      const AllTours =  await Tour.find().populate('reviews')
      .skip(page*8).limit(8); 
      res.status(200).json({ success: true,count:AllTours.length, message: "Successfully Fetched All Tours!!",data:AllTours}); 
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, message: "Tours Not Found" });
    }
}

export const getTourBySearch  = async (req,res,next)=>{
    const city = new RegExp(req.query.city,'i') // here 'i' is case sensitive
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const tours = await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}}).populate('reviews');

        res.status(200).json({success:true,message:'Successfull',data:tours});
    } catch (err) {
        res.status(404).json({ success: false, message: "Tours Not Found" });
    }
}

export const getFeaturedTour = async (req,res,next)=>{
    try {
      const AllTours =  await Tour.find({featured:true}).populate('reviews').limit(8); 
      res.status(200).json({ success: true, message: "Successfully Fetched All Tours!!",data:AllTours}); 
    } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, message: "Tours Not Found" });
    }
}

export const getTourCount= async(req,res,next)=>{

    try {
        const toursCount = await Tour.estimatedDocumentCount();
        res.status(200).json({success:true,message:'Tour Count Fetched Successfully',data:toursCount});
    } catch (err) {
         res.status(500).json({success:false,message:'Failed to fetch the count'});
    }
    
}