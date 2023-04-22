// Cloud Instance Reclaim
// Cloud Instance Reload
// Cloud Migrate
// Cloud Provision
// Create Cloud Disk Checksum
// Export Image COS
// Import Image COS
// Juniper Reload
// MS Cloud Provision
// RH Reload
// Reclaim
// Storage Provision
// UBU Reload
// XenServer HV Reload

const validTXNTypes = ["Cloud Instance Reclaim", "Cloud Instance Reload", "Cloud Migrate",
    "Cloud Provision", "Create Cloud Disk Checksum", "Export Image COS", "Import Image COS",
    "Juniper Reload", "MS Cloud Provision", "RH Reload", "Reclaim", "Storage Provision",
    "UBU Reload", "XenServer HV Reload"];

(() =>
{
    if (window.hasRun) return;
    window.hasRun = true;

    function filterTXNs(selected)
    {
        const tableRows = document.querySelectorAll("#layoutContentBody tbody tr");

        for (let i = 0; i < tableRows.length; ++i) {
            const row = tableRows[i];

            const transactionTypeTD = row.children[5];
            if (!transactionTypeTD) continue;

            const type = transactionTypeTD.textContent.trim();
            if (!validTXNTypes.includes(type)) continue;

            if (selected.includes("Select All") || selected.includes(type))
                row.classList.remove("hidden");
            else
                row.classList.add("hidden");
        }
    }

    browser.runtime.onMessage.addListener(message =>
    {
        filterTXNs(message.selected);
    });
})();