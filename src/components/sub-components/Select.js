import React from 'react'

function Select(prop){
    return(
        <div className="control-container">
            <label>{prop.label}: </label>
            <option value={prop.details.name}>{prop.name}</option>
        </div>
    )
}

export default Select