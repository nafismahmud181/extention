let interactions = [];

document.addEventListener("click", (e) => {
    let selector = getElementSelector(e.target);
    interactions.push({ type: "click", selector: selector });
    saveInteractions();
});

document.addEventListener("dblclick", (e) => {
    let selector = getElementSelector(e.target);
    interactions.push({ type: "doubleClick", selector: selector });
    saveInteractions();
});

document.addEventListener("contextmenu", (e) => {
    let selector = getElementSelector(e.target);
    interactions.push({ type: "contextClick", selector: selector });
    saveInteractions();
});

document.addEventListener("dragstart", (e) => {
    let selector = getElementSelector(e.target);
    interactions.push({ type: "dragStart", selector: selector });
    saveInteractions();
});

document.addEventListener("drop", (e) => {
    let selector = getElementSelector(e.target);
    interactions.push({ type: "drop", selector: selector });
    saveInteractions();
});

function getElementSelector(element) {
    if (element.id) return `#${element.id}`;
    if (element.name) return `[name="${element.name}"]`;
    
    // Ensure className is a string before trying to split
    let className = element.className;
    if (typeof className === 'string') {
        return `${element.tagName.toLowerCase()}${className ? "." + className.split(" ").join(".") : ""}`;
    }
    return `${element.tagName.toLowerCase()}`;
}

function saveInteractions() {
    chrome.storage.local.set({ testCases: interactions });
}
