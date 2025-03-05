import Booking from '../models/Booking.js'

export const createBooking = async(req,res,next)=>{
    const newBooking = new Booking(req.body);
    // try {
    //     const savedBooking = await newBooking.save();
    //     res.status(200).json({success:true,message:'Booking Saved Successfully!!',data:savedBooking});
    // } catch (err) {
    //     console.log(err);
    //     res.status(500).json({
    //         success:false,
    //         message:'Booking not saved successfully!!'
    //     });
    // }
    try {
      const savedBooking = await newBooking.save()
      res
        .status(200)
        .json({
          success: true,
          message: 'Booking Saved Successfully!!',
          data: savedBooking,
        })
    } catch (err) {
      console.error(err) // This will log the error in more detail
      res.status(500).json({
        success: false,
        message: `Error: ${err.message}`, // Return the error message to help with debugging
      })
    }
}

export const getBookingDetails= async(req,res,next)=>{
   const id=req.params.id;
   try {
      const Book = await Booking.findById(id);
      res.status(200).json({success:true,message:'Booking Fetched Successfully!!',data:Book});
   } catch (err) {
    res.status(404).json({
        success:false,
        message:'Booking not Found!'
    });
   }
}

export const getAllBookingDetails= async(req,res,next)=>{
//    const id=req.params.id;
   try {
      const books = await Booking.find( );
      res.status(200).json({success:true,message:'All Booking Fetched Successfully!!',data:books});
   } catch (err) {
    res.status(500).json({
        success:false,
        message:'Internal Server Error!'
    });
   }
}