import React from 'react'

function Form(props) {
    const {
        values, // for values
        onInputChange, // tracks when input changes
        onCheckboxChange, // tracks checkbox state
        onSubmit, // checks if something is being submitted
        disabled, // disables an element or component
        errors, // tracks when something isn't happening a specified way
    } = props
    return (
        <form className = 'form container'>
            <h2>Onboarding Form</h2>
            <div ClassName = 'errors'>

            </div>
            <label>Username:&nbsp;
                <input 
                    // value={}
                    // onChange={}
                    name='username'
                    type='text'
                /></label>
            <label>Email:&nbsp;
                <input 
                    // value={}
                    // onChange={}
                    name='email'
                    type='text'
                /></label>
            <label>Password:&nbsp;
                <input 
                    // value={}
                    // onChange={}
                    name='password'
                    type='text'
                /></label>
            <label>Terms of service:&nbsp;
                <input 
                    // checked={}
                    // onChange={}
                    name='TOS'
                    type='checkbox'
                /></label>

            <button onClick={onSubmit} disabled={disabled}>Submit</button>
        </form>
    );
}

export default Form