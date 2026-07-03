const previousLinesDiv = document.querySelector(".previous-lines")
const currentLineInput = document.querySelector(".current-line-input")

function parseInput(input) {
    const parts = input.trim().split(/\s+/);
    const keyword = parts[0]?.toLowerCase();
    const args = parts.slice(1);

    let output = "error: unknown keyword";

    if (keyword === "echo") {
        if (args.length !== 1) {
            output = "error: echo requires exactly 1 argument";
        } else {
            output = args[0];
        }
    }

    return output;
}

currentLineInput.addEventListener("keypress", e => {
    if (e.key == "Enter") {
        const inputToParse = currentLineInput.value
        currentLineInput.value = ""

        const output = parseInput(inputToParse)
        
        //adding input to the previous lines

        const previousLineDiv = document.createElement("div")
        const previousLineSign = document.createElement("span")
        const previousLineSpan = document.createElement("span")
        const previousLineBr = document.createElement("br")

        previousLineSign.style.color = "var(--green-300)"
        previousLineSign.textContent = "$ "
        previousLineSpan.classList.add("previous-lines-span")
        previousLineSpan.textContent = inputToParse
        previousLineDiv.classList.add("previous-line-div")

        previousLineDiv.append(previousLineSign)
        previousLineDiv.append(previousLineSpan)
        previousLineDiv.append(previousLineBr)

        previousLinesDiv.append(previousLineDiv) //do not mistake previousLines with previousLine!!

        const outputSpan = document.createElement("span")
        const outputBr = document.createElement("br")
        
        outputSpan.classList.add("output-span")
        outputSpan.textContent = output
        outputSpan.append(outputBr)

        previousLinesDiv.append(outputSpan)

        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth" // optional
        });
        
    }
})