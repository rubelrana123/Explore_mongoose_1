import { User } from "./user.model";

export const createUserToDb = async () =>{

    const user =  new User({
      id : "779",
      role : "boss",
      password :"54545455",
      name : {
        firstName : "Sohel",
        lastName :  "Rana"
      },
      
      gender : "male",
      email : "abc@gmail.com",
      contactNo : "01705918931",
      emergencyContactNo : "9999",
      presentAddress : "Dinajpur",
      permanentAddress : "parbatipur",
    });
    // await user.save();
    console.log(user)
  }