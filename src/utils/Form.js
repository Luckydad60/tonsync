import React from 'react'

function Form({key,value, onPaste, onInput, form_num}) {
    return (
        <div className='text-input'>
            <label htmlFor="one">{form_num}:</label>
            <input
                className='form_input'
                type="text"
                key={key}
                value={value}
                onInput={onInput}
                onPaste={onPaste}
            />
        </div>
    )
}

export default Form