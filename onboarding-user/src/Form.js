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
    // debugger
    return (
        <form className='form container'>
            <h2>Onboarding Form</h2>
            {/* 🔥 STEP 10 - SHOW A BUNCH OF ERRORS */}
            <div className='errors'>
                {errors.username}
                {errors.email}
                {errors.password}
            </div>
            <label>Username:&nbsp;
                <input
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text'
                /></label><br />
            <label>Email:&nbsp;
                <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                /></label><br />
            <label>Password:&nbsp;
                <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                /></label><br />
            <label>Terms of service:&nbsp;
                <input
                    checked={values.TOS}
                    onChange={onCheckboxChange}
                    name='TOS'
                    type='checkbox'
                /></label>

            <button onClick={onSubmit} disabled={disabled}>Submit</button>
        </form>
    );
}

export default Form