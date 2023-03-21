// Get all the "Edit" buttons
const editButtons = document.querySelectorAll('.btn-primary');

// Add click event listeners to each button
editButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the row that contains the button
    const row = button.closest('tr');

    // Extract the data from the row
    const name = row.cells[1].textContent.trim();
    const room = row.cells[2].textContent.trim();
    const visit = row.cells[3].textContent.trim();
    const phone = row.cells[4].textContent.trim();
    const outTime = row.cells[5].querySelector('div:first-child').textContent.trim();
    const outGate = row.cells[5].querySelector('div:last-child').textContent.trim();
    const inTime = row.cells[6].querySelector('div:first-child').textContent.trim();
    const inGate = row.cells[6].querySelector('div:last-child').textContent.trim();

    // Send the data to the server using a fetch request
    fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=updateExit', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        room: room,
        visit: visit,
        phone: phone,
        outTime: outTime,
        outGate: outGate,
        inTime: inTime,
        inGate: inGate
      })
    })
    .then(response => response.json())
    .then(data => {
      // Display a success message to the user
      alert('Record updated successfully');
    })
    .catch(error => {
      // Display an error message to the user
      alert('An error occurred while updating the record');
    });
  });
});

// Get all the "Delete" buttons
const deleteButtons = document.querySelectorAll('.btn-danger');

// Add click event listeners to each button
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the row that contains the button
    const row = button.closest('tr');

    // Extract the data from the row
    const name = row.cells[1].textContent.trim();
    const room = row.cells[2].textContent.trim();
    const visit = row.cells[3].textContent.trim();
    const phone = row.cells[4].textContent.trim();
    const outTime = row.cells[5].querySelector('div:first-child').textContent.trim();
    const outGate = row.cells[5].querySelector('div:last-child').textContent.trim();
    const inTime = row.cells[6].querySelector('div:first-child').textContent.trim();
    const inGate = row.cells[6].querySelector('div:last-child').textContent.trim();

    // Send the data to the server using a fetch request
    fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=deleteExit', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        room: room,
        visit: visit,
        phone: phone,
        outTime: outTime,
        outGate: outGate,
        inTime: inTime,
        inGate: inGate
      })
    })
    .then(response => response.json())
    .then(data => {
      // Remove the row from the table
      row.remove();

      // Display a success message to the user
      alert('Record deleted successfully');
    })
    .catch(error => {
      // Display an error message to the user
      alert('An error occurred while deleting the record')
    });
});
});
