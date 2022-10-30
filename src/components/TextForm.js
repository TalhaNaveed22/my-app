import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        //console.log("Uppercase was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick= ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleclearClick= ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }
    const handleCopy= ()=>{
        var text = document.getElementById("myBox");
        text.select(); 
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success");
    }

    const handleExtraSpaces = ()=> {
        
        let txt=text;
        let newText =txt.split(/[ ]+/);
        newText=newText.join(" ");
        setText(newText);
        props.showAlert("Extra Spaces Removed!","success");
    }

    // const handleemailClick=()=>{
    //     let txt =text;
    //     let newText =txt.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    //     setText(newText);
    //     console.log(text);
    //     // props.showAlert("Emails Detected!","success");
    // }

    const handleOnChange= (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText]=useState("");
     //text = "new text"; //wrong way to change the state
     //setText("new text");//correct way to change the state
     
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={(e)=>handleOnChange(e)} 
                style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            {/* <button className="btn btn-primary mx-1" onClick={handleemailClick}>Extract Email</button> */}
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            {console.log(text.split(" ").length)}
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something In The TextBox Above To Preview Here"}</p>
            </div>
        </>
    )
}
