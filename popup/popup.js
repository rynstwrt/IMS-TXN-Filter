document.addEventListener("DOMContentLoaded", () =>
{
    const select = document.querySelector("#types-select");

    browser.storage.sync.get("selected").then(res =>
    {
        const selected = res.selected;
        const options = select.querySelectorAll("option");

        if (selected)
        {
            for (let i = 0; i < options.length; ++i)
            {
                const optionText = options[i].textContent;
                if (selected.includes(optionText))
                    options[i].setAttribute("selected", "");
            }
        }
        else
        {
            options[0].setAttribute("selected", "");
        }
    });

    document.querySelector("#filter-button").addEventListener("click", () =>
    {
        const selected = Array.from(select.selectedOptions).map(({ value }) => value);

        browser.storage.sync.set({selected: selected}).then(() =>
        {
            browser.runtime.sendMessage({selected: selected});
        });
    });
});