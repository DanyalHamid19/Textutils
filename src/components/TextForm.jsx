import React, {useState} from 'react';

export default function TextForm(props) {
let [text,setText] = useState("");
   

// -------this is for showing text in textbox--------

    let changetext =(event)=>{
        setText(event.target.value);
    }

// -------this is for converting text to uppercase--------

    let upper = () =>{
    let newtext=text.toUpperCase();
    setText(newtext);
    }

// -------this is for converting text to lowercase--------

    let lower = () =>{
    let newtext=text.toLowerCase();
    setText(newtext);
    }


// -------this is for clearing textbox--------

    let clear = () =>{
      let newtext="";
      setText(newtext);
      }


// -------this is for changing dark mode and light mode--------

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
<>
  <div className="container" style={mystyle}>

    

          <div className="form-check form-switch  my-3">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={darkmode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btntext}</label>
            </div>


        

        <h1 my-3>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="textarea" rows="10" value ={text} onChange={changetext} my-3="true" style={mystyle}></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2"  onClick={upper} >Click to Uppercase</button>
        <button className="btn btn-outline-primary mx-2"  onClick={lower}>Click to lowercase</button>
        <button className="btn btn-outline-primary mx-2"  onClick={clear}>Click to Clear</button>
 
        <h2>Total Text Summary</h2>
        <p>Words {text.split(" ").length} and Characters {text.length}</p>
        <p>It will take {0.008*text.split(" ").length} minute to read this passage</p>
        <h3>Review</h3>
        <p>{text}</p>
       
  </div>
  
  
</>
  );
}
