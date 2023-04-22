document.addEventListener("DOMContentLoaded", () =>
{
    document.querySelector("#filter-button").addEventListener("click", () =>
    {
        const select = document.querySelector("#types-select");
        const selected = Array.from(select.selectedOptions).map(({ value }) => value);

        browser.runtime.sendMessage({selected: selected});
    });
});