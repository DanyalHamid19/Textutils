import React, { useState } from 'react';

export default function Login() {
let [mystyle, setmystyle] = useState( {
    color : "black",
    backgroundColor : "white"
}); 


let [btntext, setbtntext] = useState("Enable Dark Mode");


let darkmode = ()=>{
    if (mystyle.color === "black"){
        setmystyle({
            color : "white",
            backgroundColor : "black",
        })
        setbtntext('Enable Light Mode')
    }
    else if (mystyle.color === "white"){
        setmystyle({
            color : "black",
            backgroundColor : "white",
        })
        setbtntext('Enable Dark Mode')
    }
   
}



  return (
   <div className="container my-3" style={mystyle}>
    <div className='my-1 text-center'><h3>PLease Fill The form</h3></div>
      <form className="row g-3">
  <div className="col-md-6">
    <label className="form-label">Email</label>
    <input type="email" className="form-control" style={mystyle}/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Password</label>
    <input type="password" className="form-control"   style={mystyle}/>
  </div>
  <div className="col-12">
    <label HtmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress"  style={mystyle}/>
  </div>
  <div className="col-12">
    <label HtmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" style={mystyle}/>
  </div>
  <div className="col-md-6">
    <label HtmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" style={mystyle}/>
  </div>
  <div className="col-md-4">
    <label HtmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select"  style={mystyle}>
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label HtmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"  style={mystyle}/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" HtmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary my-3" >Sign in</button>
    <button type="button" class="btn btn-primary mx-3 my-3" onClick={darkmode}>{btntext}</button>

  </div>
</form>
    </div>
  );
}
