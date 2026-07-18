const inputContainer = document.querySelector(".input-container")

function clickedDigit(digitButton) {
    const pressed = digitButton.textContent

    if (inputContainer.classList.contains("syntax-error")) {
        inputContainer.textContent = ""
        inputContainer.classList.remove("syntax-error")
    }

    switch (pressed) {
        case "C":
            inputContainer.textContent = ""
            return;
        case "=":
            try {
                inputContainer.textContent = eval(inputContainer.textContent) //really unsafe here alkshdlaskjd
            }catch (error) {
                inputContainer.textContent = "syntax error"
                inputContainer.classList.add("syntax-error")
            }
            
            return;
        default:
            inputContainer.textContent += pressed
    }
    
    
}