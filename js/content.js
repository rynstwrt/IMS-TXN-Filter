const tableRows = document.querySelectorAll("#hardwaretransaction_currenttransactionslist_50698 tbody tr");

for (let i = 0; i < tableRows.length; ++i)
{
    const row = tableRows[i];

    const transactionTypeTD = row.children[5];
    if (!transactionTypeTD) continue;

    const type = transactionTypeTD.textContent.trim();

    // if (type === "Cloud Instance Reclaim")
}


/*
Cloud Instance Reclaim
Cloud Instance Reload
Cloud Migrate
Cloud Provision
Create Cloud Disk Checksum
Export Image COS
Import Image COS
MS Cloud Provision
RH Reload
Reclaim
UBU Reload
XenServer HV Reload
 */