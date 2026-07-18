const desktopDiv = document.querySelector(".desktop")


function spawnWindow(width, height, title, icon, content) {
    const windowDiv = document.createElement("div")
    const titleDiv = document.createElement("div")
    const titleSpan = document.createElement("span")
    const titleIcon = document.createElement("img")
    const closeButton = document.createElement("button")
    const closeButtonImg = document.createElement("img")
    const contentIframe = document.createElement("iframe")

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
    closeButtonImg.src = "public/images/close.png"
    closeButtonImg.classList.add("window-close-button-img")

    contentIframe.classList.add("content-iframe")
    contentIframe.src = content

    //join the elements
    closeButton.append(closeButtonImg)
    titleDiv.append(titleIcon)
    titleDiv.append(titleSpan)
    titleDiv.append(closeButton)
    windowDiv.append(titleDiv)
    windowDiv.append(contentIframe)

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


function spawnDesktopIcon(x, y, text, icon, action) {
    const iconDiv = document.createElement("div")
    const iconImg = document.createElement("img")
    const iconSpan = document.createElement("span")

    //attribute things to the elements

    iconDiv.classList.add("desktop-icon")
    iconDiv.style.userSelect = "none"
    iconDiv.style.left = x + "px"
    iconDiv.style.top = y + "px"

    iconImg.classList.add("desktop-icon-img")
    iconImg.classList.add("unselectable")
    iconImg.src = icon

    iconSpan.classList.add("desktop-icon-span")
    iconSpan.textContent = text

    //join the elements

    iconDiv.append(iconImg)
    iconDiv.append(iconSpan)

    //dragging functionality

    let mouseDown = false;
    let offsetX = 0;
    let offsetY = 0;

    iconDiv.addEventListener("mousedown", (e) => {
        mouseDown = true;

        const rect = iconDiv.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
    });

    iconDiv.addEventListener("mouseup", () => {
        mouseDown = false;
    });

    document.addEventListener("mousemove", (e) => {
        if (!mouseDown) return;

        iconDiv.style.left = (e.clientX - offsetX) + "px";
        iconDiv.style.top = (e.clientY - offsetY) + "px";
    });

    //clicking functionality

    iconDiv.addEventListener("dblclick", action)

    desktopDiv.append(iconDiv)

}


spawnDesktopIcon(20, 20, "leia.txt", "public/images/textfile.png", function(){
    spawnWindow(600, 500, "leia.txt", "public/images/textfile.png", "public/websites/leia.html")
})

spawnDesktopIcon(100, 20, "terminal.exe", "public/images/terminal.png", function(){
    spawnWindow(600, 500, "terminal.exe", "public/images/terminal.png", "public/websites/terminal.html")
})

spawnDesktopIcon(230, 20, "calculadora.exe", "public/images/calculator.png", function(){
    spawnWindow(300, 400, "calculadora.exe", "public/images/calculator.png", "public/websites/calculator.html")
})