const tableRows = document.querySelectorAll("#hardwaretransaction_currenttransactionslist_50698 tbody tr");

for (let i = 0; i < tableRows.length; ++i)
{
    const row = tableRows[i];

    for (let j = 0; j < row.children.length; ++j)
    {
        console.log(row.children[j]);
    }
    console.log("------")
}