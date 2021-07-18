import React from 'react'

function Checkbox(prop){
    return(
        <div className="control-container">
            <label>{prop.label}: </label>
            <input type="checkbox" value={prop.name}></input>
        </div>
    )
}

export default Checkbox