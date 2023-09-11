document.addEventListener("DOMContentLoaded", function() {

    const counter = document.getElementById("visitorcounter")

    const functionURL = "https://cloud-resume.azurewebsites.net/api/cloud-resume-visitorCounter?code=lWDMW1SBB8pNpWVEVVzKHIFfDuhPmAqFIoynky-QtI8-AzFuQiFQMQ=="

    const requestData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: 'Balazs'})
    }

    fetch(functionURL, requestData)
    .then(response => {
        if (!response.ok) {
          throw new Error('HTTP error, status = ' + response.status);
        }
        return response.json(); // Parse the response body as JSON
      })
      .then(data => {
        counter.innerHTML = data // Do something with the response data
      })
      .catch(error => {
        console.error('Error:', error); // Handle any errors
      });

});