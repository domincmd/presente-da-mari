const desktopDiv = document.querySelector(".desktop")


function spawnWindow(width, height, title, icon, content) {
    const windowDiv = document.createElement("div")
    const titleDiv = document.createElement("div")
    const titleSpan = document.createElement("span")
    const titleIcon = document.createElement("img")
    const closeButton = document.createElement("button")

    //attribute things to the elements

    windowDiv.classList.add("window")
    windowDiv.style.top = (10 + Math.floor(Math.random() * 60)) + "%"
    windowDiv.style.left = (10 + Math.floor(Math.random() * 60)) + "%"
    windowDiv.style.width = width + "px"
    windowDiv.style.height = height + "px"

    titleDiv.classList.add("window-title")

    titleSpan.classList.add("window-title-span")
    titleSpan.textContent = title

    titleIcon.classList.add("window-title-icon")
    titleIcon.classList.add("unselectable")
    titleIcon.src = icon

    closeButton.classList.add("window-close-button")
    //closeButton.textContent = "x"

    //join the elements
    titleDiv.append(titleIcon)
    titleDiv.append(titleSpan)
    titleDiv.append(closeButton)
    windowDiv.append(titleDiv)

    //dragging functionality
    

    let mouseDown = false;
    let offsetX = 0;
    let offsetY = 0;

    titleDiv.addEventListener("mousedown", (e) => {
        mouseDown = true;

        const rect = windowDiv.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
    });

    document.addEventListener("mouseup", () => {
        mouseDown = false;
    });

    document.addEventListener("mousemove", (e) => {
        if (!mouseDown) return;

        windowDiv.style.left = (e.clientX - offsetX) + "px";
        windowDiv.style.top = (e.clientY - offsetY) + "px";
    });

    //closing functionality

    closeButton.addEventListener("click", e => {
        windowDiv.remove()
    })

    desktopDiv.append(windowDiv)

}

spawnWindow(600, 400, "oi", "sla", "sla")

spawnWindow(400, 400, "oi", "sla", "sla")