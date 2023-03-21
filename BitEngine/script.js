alert("script.js loaded");

function login() {
    // get the form data
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;
    console.log("login initiated");
    // create a new XMLHttpRequest object
    // const xhr = new XMLHttpRequest();
  
    // // set the request method and URL
    // xhr.open('POST', 'https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getAdmin');
  
    // // set the request header
    // xhr.setRequestHeader('Content-Type', 'application/json');
  
    // // handle the response
    // xhr.onload = function() {
    //   if (xhr.status === 200) {
    //     // redirect the user to the dashboard page
    //     window.location.href = '/dashboard';
    //   } else {
    //     // display an error message
    //     alert('Invalid username or password.');
    //   }
    // };
  
    // // send the request
    // xhr.send(JSON.stringify({ username: username, password: password }));

     // Send the roll no. to the server
     fetch('https://z3myg583ti.execute-api.ap-south-1.amazonaws.com/default/smartexBE?queryType=getAdmin', {
      method: 'POST',
      body: JSON.stringify({
          name : username,
          gaurdID : password,
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
      window.location.href = 'homepage.html';
  })
  .catch(error => {
      console.error(error);
      alert('Invalid Credentials');
  });
  }
