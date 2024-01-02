import React , {useState} from 'react'

export default function TextForm(props) {
    let toUpcase = () =>{
        let newtext1 = text.toUpperCase();
        settext(newtext1);
        props.showAlert("Converted to UpperCase!" , "success");
    }
    let tolocase = () =>{
        let newtext2 = text.toLowerCase();
        settext(newtext2);
        props.showAlert("Converted to LowerCase!" , "success");
    }
    const clearExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ');
        settext(newText);
        props.showAlert("Extra spaces removed" , "success");
    };
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard" , "success");
    };
    const clear = () => {
        settext("");
        props.showAlert("Text is cleared" , "success");
    }

    let onchangefunc = (event) => {
        settext(event.target.value);
    }

    const [text , settext] = useState("");
  return (
    <>
        <div className="mb-3 my-3 container">
            <h2>Enter the Text here </h2>
            <textarea className="form-control my-2" value={text} onChange={onchangefunc} rows="8" style={{backgroundColor:props.mode === 'dark'?'#333333':'#bfbfbf',color:props.mode === 'dark'?'white':'black'}}></textarea>
            <button className='btn btn-danger my-1 mx-2' onClick={toUpcase}>Convert to Uppercase</button>
            <button className='btn btn-danger my-1 mx-2' onClick={tolocase}>Convert to LowerCase</button>
            <button className='btn btn-danger my-1 mx-2' onClick={clearExtraSpaces}>Remove extra spaces</button>
            <button className='btn btn-danger my-1 mx-2' onClick={copyText}>Copy Text</button>
            <button className='btn btn-danger my-1 mx-2' onClick={clear}>Clear Text</button>

        </div>
        <div className="count container">
        <p>
        <b>
            {text
            .split(" ")
            .filter(word => word.trim() !== '')
            .length}
        </b> Words and <b>{text.length}</b> characters
        </p>
            <p>need <b>{0.008 * text.split(" ").filter(word => word.trim() !== '').length}</b> minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
