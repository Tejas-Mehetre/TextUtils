import React , {useState} from 'react'
import PropTypes from 'prop-types';

export default function About(props) {
    const myStyle = {backgroundColor:props.mode === 'dark'?'#333333':'#bfbfbf',         color:props.mode === 'dark'?'white':'black'}

  return (
    <>
    <div className="accordion container my-3" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Introduction
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                <strong>Welcome to TextUtils!</strong> TextUtils is a versatile text-manipulation tool that allows you to perform various operations on your text, such as converting case, copying, and more. Feel free to explore the features and enhance your text editing experience.
                </div>
            </div>
            </div>

            <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                Features
                </button>
            </h2>
            <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>TextUtils Features:</strong> Explore a variety of features, including converting text to uppercase or lowercase, copying text to the clipboard, and obtaining word and character counts. These features aim to simplify your text editing tasks.
                </div>
            </div>
            </div>

            <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                Usage
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>How to Use TextUtils:</strong> Simply enter your text in the input area and use the provided buttons to perform various operations. The user-friendly interface ensures a seamless experience for both novice and experienced users.
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
