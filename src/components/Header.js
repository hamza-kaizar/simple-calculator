import React from 'react'

const Header = (props) =>
    <h2
        id={props.id}
        className={props.className}
    >
        {props.value}
    </h2>

export default Header