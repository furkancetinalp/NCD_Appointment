#                                                 NEAR CERTIFIED DEVELOPER PROGRAM 

## APPOINTMENT APPLICATION
Appointment application will allow people to register in May.
#### There are some conditions in order to register:
Age, a valid day selection.
Each account can only register for one day.
No accounts can be registered for same day.

The users can change their appointment days if the requested day is valid. Otherwise, program will not allow it.
The users can see details about their appointment days.
The users can delete their records.


### USAGE

##### 1) Clone
**`git clone https://github.com/furkancetinalp/NCD_Appointment.git`**

##### 2) Run 'yarn'
**`yarn`**

##### 3) Run 'yarn dev'
**`yarn dev`**

After running 'yarn dev', COPY the highlighted object(Account ID) 
![Ekran Görüntüsü (128)](https://user-images.githubusercontent.com/99509540/164363703-3596ab40-9ca5-4ce7-91b3-22e3eb6cc740.png)

#### 4) Set export 
**`export CONTRACT=<PASTE HERE>`** 

![Ekran Görüntüsü (138)](https://user-images.githubusercontent.com/99509540/164365376-95923215-a736-42f1-ac1e-af337a195212.png)


### FUNCTIONS

### appoint(name:string,age:32,day:u32)
Takes 3 parameters. 
Used for registration. 
Returns a string that validates the registration.

**`near call $CONTRACT appoint '{"name":"Your-name","Your-age":30,"day":Selected-day}' --accountId YOURtestnetAccount`**

Example usage:  near call $CONTRACT appoint '{"name":"Tom","age":30,"day":4}' --accountId fctt.testnet


### info()
Takes no parameters. 
Used for getting information about appointment details.
Returns a class with components. 

**`near call $CONTRACT information --accountId YOURtestnetAccount`**

Example usage: near call $CONTRACT information --accountId fctt.testnet


### changeDay(day:string)
Takes 1 parameter.
Used for changing the appointment date of the user. 
Returns a class with components.

**`near call $CONTRACT changeDay '{"day":New-Day}' --accountId YOURtestnetAccount`**

Example usage: near call $CONTRACT changeDay '{"day":24}' --accountId fctt.testnet


### delete()
Takes no parameters
Used for deleting the appointment info

**`near call $CONTRACT del --accountId YOURtestnetAccount`**

Example usage: near call $CONTRACT del --accountId fctt.testnet
