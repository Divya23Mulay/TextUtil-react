import React, { useState } from 'react';

export default function About() {
    const [mystyle, setMystyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    });

    const [btnText, setBtnText] = useState("Enable Light Mode");

    const toggleStyle = () => {
        if (mystyle.color === "white") {
            setMystyle({
                color: 'black',
                backgroundColor: 'white',
            });
            setBtnText("Enable Dark Mode");
        } else {
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
            });
            setBtnText("Enable Light Mode");
        }
    };

    return (
        <>
            <div className="container" style={mystyle}>
                <h1 className="my-3">About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the first item's accordion body.</strong> You can modify any of this with custom CSS or overriding our default variables.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the second item's accordion body.</strong> You can modify any of this with custom CSS or overriding our default variables.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the third item's accordion body.</strong> You can modify any of this with custom CSS or overriding our default variables.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fixing the class name from 'conatiner' to 'container' */}
                <div className="container my-3">
                    <button onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
                </div>
            </div>
        </>
    );
}
