import React from 'react'

export default function Login() {
    const database = [
        {
          username: "himanshu",
          password: "jain"
        },
        {
          username: "user2",
          password: "pass2"
        }
      ];
    const handleSubmit=(event)=>{
        var { uname, pass } = document.forms[0];
        const userData = database.find((user) => user.username === uname.value);
        if (userData) {
            if (userData.password !== pass.value) {
              // Invalid password
             alert("NOT ABLE TO COMPLETE THE TRANSACTION! PASSWORD INVALID");
            } else {
              alert("YOUR TRANSACTION IS SUCCESSFULL, YOUR ORDER WILL BE ARRIVING SOON");
            }
          } else {
            // Username not found
            alert("NOT ABLE TO COMPLETE THE TRANSACTION! USERNAME INVALID");
          }
        };
    
 return (
    <div className="form"> 
    <form onSubmit={handleSubmit}>    
    <div>
    USERNAME
    <input type='text' name='uname'></input>
     </div>
    <div>
    PASSWORD
    <input type='password' name='pass'></input>
    </div>
    <div >
    <input type="submit" />
    </div>
    </form>
    </div> 
 

  )
}
