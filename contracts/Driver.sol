// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;


contract Driver {
   
   struct Access{
    address user;
    bool access;
   }
// images
   mapping (address=>string[])value;

//image  have given accress to  
   mapping (address=>mapping(address=>bool))ownership;

// list of given accesss
   mapping (address=>Access[])accessList;

// previousData
   mapping (address=>mapping(address=>bool))previousData;
   
   function add(address _user, string memory url)external {
      value[_user].push(url);             
   }
   function allow(address user)external {
       ownership[msg.sender][user]=true;
       if(previousData[msg.sender][user]){
         for(uint i=0;i<accessList[msg.sender].length;i++){
         if(accessList[msg.sender][i].user==user){
            accessList[msg.sender][i].access=true;
         }
        } 
       }
       else{
          accessList[msg.sender].push(Access(user,true));
          previousData[msg.sender][user]=true;    
       }
       
   }
   function disallow(address user)external {
       ownership[msg.sender][user]=false;
       for(uint i=0;i<accessList[msg.sender].length;i++){
         if(accessList[msg.sender][i].user==user){
            accessList[msg.sender][i].access=false;
         }
       }
      
   }
   function display(address user)external view returns( string[]memory) {
      require(user==msg.sender||ownership[user][msg.sender],"you dont have accesss");
      return value[user];
   }
   function shareAccess()public view returns (Access[] memory){
      return accessList[msg.sender];
   }
       
}