import React from 'react';

const Form = () => {
    return (
        <>
            <div>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message" rows="10" cols="30"></textarea>
            </div>
        </>
    );
}

export default Form;
