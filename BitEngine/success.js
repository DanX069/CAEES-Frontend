// Define a function to handle  entry form submission
		function submitForm() {
			// Get the entry form values
            let Name = document.getElementById('nameInput').value;
            let rollNo = document.getElementById('rollnoInput').value;
            let hallNo = document.getElementById('addressInput').value;
            let placeOfVisit = document.getElementById('placeInput').value;
			let phoneNumber = document.getElementById('phoneInput').value;
			
			
			
			// Send the data to the server
			
			fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getUser', {
				method: 'POST',
				body: JSON.stringify({
					name: Name,
					rollno: rollNo,
					hallno: hallNo,
					phonenumber: phoneNumber,
					placeofvisit: placeOfVisit,
					
				}),
				/*headers: {
					'Content-Type': 'application/json'
				}*/
			})
			.then(response => response.json())
			.then(data => {
				// Handle success or error response from server
				console.log(data);
				alert('Entry data saved successfully');
			})
			.catch(error => {
				console.error(error);
                alert('Error in saving entry data');
			});
			
			// Reset the form
			document.getElementById('entryForm').reset();
		}
	
