import React from 'react'

function Form({name, value, onChange, form_num}) {
    return (
        <div className='text-input'>
            <label htmlFor="one">{form_num}:</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    )
}

export default Form