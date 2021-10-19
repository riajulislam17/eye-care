import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container my-3 shadow p-3">
                <h1>Contact With Us</h1>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control" placeholder="enter email" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label fw-bold">Message</label>
                    <input type="text" className="form-control" placeholder="message" />
                </div>
                <div className="md-3">
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;