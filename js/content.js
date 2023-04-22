const validTXNTypes = ["Cloud Instance Reclaim", "Cloud Instance Reload", "Cloud Migrate", "Cloud Provision", "Create Cloud Disk Checksum",
                        "Export Image COS", "Import Image COS", "MS Cloud Provision", "RH Reload", "Reclaim",
                        "Storage Provision", "UBU Reload", "XenServer HV Reload"];

browser.runtime.onMessage.addListener(message =>
{
    const selected = message.selected;
    console.log(selected);

    const tableRows = document.querySelectorAll("#layoutContentBody tbody tr");

    for (let i = 0; i < tableRows.length; ++i) {
        const row = tableRows[i];

        const transactionTypeTD = row.children[5];
        if (!transactionTypeTD) continue;

        const type = transactionTypeTD.textContent.trim();
        if (!validTXNTypes.includes(type)) continue;

        if (selected.includes("Select All") || selected.includes(type))
        {
            row.classList.remove("hidden");
        }
        else
        {
            row.classList.add("hidden");
        }
    }

});

/*
<tr id="hardwaretransaction_viewtransactiondetails_314378540"
name="data[HardwareTransaction][viewTransactionDetails][314378540]"
style="height:25px;" class="oddRow">
 */

// Cloud Instance Reclaim
// Cloud Instance Reload
// Cloud Migrate
// Cloud Provision
// Create Cloud Disk Checksum
// Export Image COS
// Import Image COS
// MS Cloud Provision
// RH Reload
// Reclaim
// Storage Provision
// UBU Reload
// XenServer HV Reload