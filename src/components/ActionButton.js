import React from 'react'

const ActionButton = (props) => {
    function areInputsEmpty(inputone, inputtwo) {
        var isEmpty = false;
        if(inputone.value === "") {
            inputone.style.borderColor='firebrick'
            isEmpty = true;
        }
        if(inputtwo.value === "") {
            inputtwo.style.borderColor='firebrick'
            isEmpty = true;
        }
        return isEmpty;
    }

    function calculate() {
        var inputone = document.getElementById("input_one");
        var inputtwo = document.getElementById("input_two");

        var val1 = inputone.value;
        var val2 = inputtwo.value;
        var result = 0;
        var operation = props.id;

        if(operation !== "clear")
            if(areInputsEmpty(inputone, inputtwo)) 
                operation = ""

        switch(operation) {
            case "add":
                result = Number(val1) + Number(val2);
                break;
            case "subtract":
                result = Number(val1) - Number(val2);
                break;
            case "multiply":
                result = Number(val1) * Number(val2);
                break;
            case "divide":
                result = Number(val1) / Number(val2);
                break;
            case "clear":
                inputone.style.borderColor="floralwhite"
                inputone.value = "";
                inputtwo.style.borderColor="floralwhite"
                inputtwo.value = "";
                break;
            default:
                result = "ERR: EMPTY INPUT";
        }
        document.getElementById("output").innerHTML = result;
    }

    return(
        <button 
            id={props.id} 
            className={props.className}
            style={
                {
                    background:props.background,
                    color:props.color
                }
            }
            onClick={calculate}
        >
            {props.value}
        </button>
    )
}

export default ActionButton