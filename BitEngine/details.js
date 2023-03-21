console.log("details.js loaded");
let rollNo = 0;

function manualEntry(){
    // Add event listener for manual entry
    console.log("Manual Entry called");
    // document.querySelector("manual-entry").addEventListener("submit", function(event) {
        // Prevent the default form submission
        //event.preventDefault();
        
        // Get the value of the roll number input field
         rollNo = document.getElementById("rollNoInput").value;
        console.log(rollNo);
        // Perform validation on the input
        if (rollNo === "") {
          alert("Please enter a roll number.");
          return;
        }
        callNext();
        
        // Send the roll no. to the server
        fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=addExit', {
            method: 'POST',
            body: JSON.stringify({
                rollno : Number(rollNo),

            }),
            headers: {
                // 'Content-Type': 'application/json'
                // "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle success or error response from server
            console.log(data);
            alert('Welcome to the success page');
        })
        .catch(error => {
            console.error(error);
            alert('Incorrect Roll No.');
        });
        
        // Clear the input field
        document.getElementById("rollNoInput").value = "";
    //   });
    }
      // Add barcode scanner functionality here
    function callNext(){
      console.log(rollNo);
    }
