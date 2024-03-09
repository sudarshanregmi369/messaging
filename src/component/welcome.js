import React from 'react'
const Welcome =()=>{
    return(
    <div className="form-container ">
    <div className ="wrap-container">
     <span>
       <h1> Company Name and with logo</h1>
       <input  type='Email' placeholder='Email Address'></input>
       <input type='Password' placeholder='Password'></input>
       <p> Remember Me</p>
       <h5>Sign with
         <button>
           <ul>Google</ul> 
           </button> 
           </h5>
     </span>
     </div>
     </div>
)
}