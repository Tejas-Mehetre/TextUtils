import React , {useState} from 'react'

export default function TextForm() {
    let toUpcase = () =>{
        let newtext1 = text.toUpperCase();
        settext(newtext1);
    }
    let tolocase = () =>{
        let newtext2 = text.toLowerCase();
        settext(newtext2);
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
    };
    const clear = () => {
        settext("");
    }


    let onchangefunc = (event) => {
        settext(event.target.value);
    }

    const [text , settext] = useState("");
  return (
    <>
        <div className="mb-3 my-3 container">
            <h2>Enter the Text here </h2>
            <textarea className="form-control" value={text} onChange={onchangefunc} rows="8"></textarea>
            <button className='btn btn-danger my-3 mx-2' onClick={toUpcase}>Convert to Uppercase</button>
            <button className='btn btn-danger my-3 mx-2' onClick={tolocase}>Convert to LowerCase</button>
            <button className='btn btn-danger my-3 mx-2' onClick={copyText}>Copy Text</button>
            <button className='btn btn-danger my-3 mx-2' onClick={clear}>Clear Text</button>

        </div>
        <div className="count container">
            <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> characters</p>
            <p>need <b>{0.008 * text.split(" ").length}</b> minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
