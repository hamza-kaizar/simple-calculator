import React from 'react'

const TextField = (props) => {
    function resetFormatting() {
        document.getElementById(props.id).style.borderColor='floralwhite'
        document.getElementById("output").innerHTML='0'
    }

    return (
        <input 
            id={props.id}
            className={props.className}
            type="number"
            placeholder={props.placeholder}
            required
            onChange={resetFormatting}
        />
    )
}

export default TextField