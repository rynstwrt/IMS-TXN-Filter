browser.runtime.onMessage.addListener((msg, sender, sendRes) =>
{
    browser.tabs.query({currentWindow: true, active: true})
        .then(tabInfo =>
        {
            const [{id: tabID}] = tabInfo;
            browser.tabs.insertCSS(tabID, {code: ".hidden {display: none;}"}).then(() =>
            {
                browser.tabs.sendMessage(tabID, {selected: msg.selected})
            });
        });
});