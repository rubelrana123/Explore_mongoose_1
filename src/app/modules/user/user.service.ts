import { getAdminUsers } from './user.controller';
import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDb = async (payload : IUser) : Promise<IUser> => {

    const user =  new User(payload); /// User - class user - instance 
    await user.save(); // build in instance method
     console.log(user.fullName()) // custom instance method
    console.log(user)

    return user;
  }

  export const getUserFromDb = async() : Promise<IUser[]> =>{
    const users = await User.find();
    console.log('service', users)
    return users;
   }
    
 
  export const getUserByIdFromDb = async(payload : string) : Promise<IUser | null>  =>{
    const user = await User.findOne({id : payload}, {name : 1});
    console.log('userone', user)
    return user;
   }
    
  export const getAdminUserFromDb = async( )  =>{
    const admins = await User.getAdminUsers() ; 
    return admins;
   }
    
 //class => attach => method => directly call using calss
 // user => new User
 //user . instanceMethod
 //User.getAdminsUser();