
  // Call the fetchData function to execute it
  async function fetchData() {
    try {
        const response = await fetch('https://65337b68-c444-4da3-888f-757cc907bfec.serverhub.practicum-services.com/api/v1/warehouses');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // If an error occurs, log it to the console
        console.error(error);
    }
}

fetchData();