const inputContainer = document.querySelector(".input-container");

const hijacks = {
    "17+33": "SIX SEVEN"
};

function clickedDigit(button) {
    const pressed = button.textContent;

    if (inputContainer.classList.contains("syntax-error")) {
        inputContainer.textContent = "";
        inputContainer.classList.remove("syntax-error");
    }

    switch (pressed) {
        case "C":
            inputContainer.textContent = "";
            return;

        case "=": {
            const expression = inputContainer.textContent.replace(/\s+/g, "");

            // Check for hijacked expressions first.
            if (expression in hijacks) {
                inputContainer.textContent = hijacks[expression];
                return;
            }

            try {
                inputContainer.textContent = eval(expression);
            } catch {
                inputContainer.textContent = "syntax error";
                inputContainer.classList.add("syntax-error");
            }

            return;
        }

        default:
            inputContainer.textContent += pressed;
    }
}