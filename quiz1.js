function fetchData() {
    try {
        const response = fetch('https://65337b68-c444-4da3-888f-757cc907bfec.serverhub.practicum-services.com/api/v1/warehouses');
        const data = response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData()