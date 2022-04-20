import {appointment} from "./model";

export function appoint(name:string,age:u32,day:u32):string{
  const a = new appointment(name,age,day);
  return a.register();
}


export function information():appointment{
  return appointment.info();
}

export function changeDay(day:u32):appointment{
  return appointment.changeDay(day);
}

export function del():string{
  return appointment.delete_account();
}

