// get the input field and table
let searchInput = document.getElementById("search-input");
let table = document.getElementsByTagName("table")[0];

// add event listener to the input field
searchInput.addEventListener("keyup", function() {
  let searchText = searchInput.value.toLowerCase();

  // loop through all rows of the table and hide those that don't match the search query
  for (let row of table.rows) {
    let name = row.cells[1].textContent.toLowerCase();
    let room = row.cells[2].textContent.toLowerCase();
    let place = row.cells[3].textContent.toLowerCase();

    if (name.indexOf(searchText) > -1 || room.indexOf(searchText) > -1 || place.indexOf(searchText) > -1) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});
