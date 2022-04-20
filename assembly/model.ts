import { PersistentUnorderedMap, storage } from "near-sdk-as";
import {PersistentVector, Context } from "near-sdk-as";

//PersistentUnorderedMap values will record information about the appointment application.

//string =>class
export const final = new PersistentUnorderedMap<string,appointment>("fl");

//string =>string
export const registers = new PersistentUnorderedMap<string,string>("fk");

//int =>string
export const registered_days = new PersistentUnorderedMap<u32,string>("fj");


//Each person will have different classes.
@nearBindgen
export class appointment{
    
    name:string;
    day:u32;
    age:u32;
    contract_name:string;

    //Constructor will set the values from the user input
    constructor(name:string,age:u32,day:u32){
        this.name=name;
        this.age=age;
        this.day=day;
        this.contract_name=Context.sender;
    }

    //Function that accounts can register. No account is allowed to register more than once(If appointment is deleted, accounts can 
    //gister again)
    register():string{

      // Person object is created. If requirements are met, this will be added to the PersistentUnorderedMap values.
      const person = new appointment(this.name,this.age,this.day);
      
      //Checking if person is over 18
      assert(this.age >18,"Age must be 18 or older!!!");

      //In May, there are 31 days. Requestor cannot select a invalid day
      assert(this.day>0 && this.day<32,"Invalid Day Selection!!  Fifth month of the year(May) has 31 days (1 to 31)");

      //Checks if the person has made a register before. If yes, The program will not allow to register one more time.
      assert(!registers.contains(this.contract_name),"That account already registered before!!!!");

      //If selected day has been registered before, program will warn and tell the requester which account made appointment for that day.
      if(registered_days.contains(this.day)){
        //when if statement works, only the line below will be executed and rest of the lines will become invalid. 
        return `May ${this.day} is registered by ${registered_days.getSome(this.day)}!! Please choose another day!!`;
      }

      registered_days.set(this.day,this.contract_name);

      //If assert methods don't give an alert, appointment will be made. 
      registers.set(this.contract_name,this.name);
      
      final.set(this.contract_name,person);



      //Informs the user about registeration.
      return `${this.contract_name} is registered successfully as ${registers.getSome(this.contract_name)}. Appointment Date: May ${this.day}`;

    }
    //Function that returns information about the person and appointment details.
    static info():appointment{
      const msgsender = Context.sender;
      
      //if the account is not found, program alerts! 
      assert(registers.contains(msgsender),"This account has not made an appointment before");

      //Returns appointment information for the account.
      return final.getSome(msgsender);
    }

    //Function that allows registered users to change their appointment date.
    static changeDay(new_day:u32):appointment{
      //Smart contract gets the acccount that calls the function.
      const msgsender = Context.sender;

      //If no data found, there will be a warning
      assert(registers.contains(msgsender),"No registry found!!!");

      //The user has to choose a valid day.
      assert(new_day<32 && new_day>0,"Invalid day!!!!!!!");
      
      //If 'day' has been registered before, program will not allow to register on the same day.
      assert(!registered_days.contains(new_day),"The day is registered before!!! Please choose another day!!");

      const old_day = final.getSome(msgsender).day;

      const name = final.getSome(msgsender).name;
      const age = final.getSome(msgsender).age;
      const person = new appointment(name,age,new_day);

      final.delete(msgsender)
      final.set(msgsender,person);

      registered_days.delete(old_day);

      //'New day' value is set to unorderedmap.
      registered_days.set(new_day,msgsender);

      return final.getSome(msgsender);

    }

    //Function that allows registered users to delete their appointment date.
    static delete_account():string{
      const msgsender = Context.sender;
      const old_day = final.getSome(msgsender).day;

      //If there is no record for the account, there will be a warning.
      assert(final.contains(msgsender),"No registry found!!");

      registers.delete(msgsender);
      registered_days.delete(old_day);
      final.delete(msgsender);

      //Returns a message after deleting the appointment.
      return `Registry for ${msgsender} has been removed successfully!!!`;
    }
   

}