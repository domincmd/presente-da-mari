const pages = {
    "qu3c0m3cem0sjo6os.com": "1.html",
    "3spert1nh0.com": "2.html",
    "3n1gmas.com": "3.html",
    "m0rt3br0x4.com": "4.html"
};

const iframe = document.querySelector(".iframe");
const urlInput = document.querySelector(".url-input");

const history = [];
let page = -1;

function loadPage(input, addToHistory = true) {
    const file = pages[input] ?? "notfound.html";

    iframe.src = `pages/${file}`;
    urlInput.value = input;

    if (addToHistory && file !== "notfound.html") {
        // Remove forward history if we're not at the end
        history.splice(page + 1);

        history.push(input);
        page = history.length - 1;
    }
}

urlInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        loadPage(urlInput.value);
    }
});

function back() {
    if (page <= 0) return;

    page--;
    loadPage(history[page], false);
}

function front() {
    if (page >= history.length - 1) return;

    page++;
    loadPage(history[page], false);
}