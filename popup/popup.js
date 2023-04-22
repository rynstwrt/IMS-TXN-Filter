const filterButton = document.getElementById("filter-button");
const typeSelect = document.getElementById("types-select");

// Listen for clicks of the buttons and send a message to the content scripts.
function listenForClicks()
{
    document.addEventListener("click", e =>
    {
        console.log(e);
    });
}

// when popup loads, inject a content script into the
// active tab and add a click handler.
browser.tabs.executeScript({})
    .then(listenForClicks)
    .catch(err =>
    {
        console.error(err);
    });