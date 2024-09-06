function insert_Row() {
    //Write your code here
	 // select the table
    var table = document.getElementById("sampleTable");

    // create a new row
    var row = table.insertRow(0);

    // create two cells
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // set the text of the cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
  
}