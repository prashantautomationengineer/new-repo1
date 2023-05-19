async function getRequest() {
    try {
        const response = await fetch('https://09e6b4ee-db69-4b6d-bd71-01cda7763361.serverhub.practicum-services.com/api/v1/warehouses');
        const data = await response.json();
        console.log(data);
        console.log("This is Get Request");
    } catch (error) {
        console.error(error);
    }
}

getRequest();

async function postRequest(){
    // Prepare POST body
    const requestBody = {
        "products": [
            {
                "id": 5,
                "quantity": 1
            },
            {
                "id": 4,
                "quantity": 5
            }
        ]
    }
    try {
        // Use the fetch method to send a POST request to the specified URL and wait for the response
        const response = await fetch('https://09e6b4ee-db69-4b6d-bd71-01cda7763361.serverhub.practicum-services.com/api/v1/warehouses/check', {
            method: 'POST',
            // Set headers
            headers: {
            'Content-Type': 'application/json'
            },
            // Set request body and convert the data object into a JSON string
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        console.log(data);
        console.log("This is POST Request");
    } catch (error) {
        console.error(error);
    }
}

postRequest()

async function putRequest() {
    const requestBody = {
            "price": 175
        }
    try {
        const response = await fetch('https://09e6b4ee-db69-4b6d-bd71-01cda7763361.serverhub.practicum-services.com/api/v1/products/7', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        console.log(data);
        console.log("This is PUT Request");
    } catch (error) {
        console.error(error);
    }
}

putRequest()

async function deleteRequest() {
    try {
        const response = await fetch('https://09e6b4ee-db69-4b6d-bd71-01cda7763361.serverhub.practicum-services.com/api/v1/kits/7', {
                method: 'DELETE'
            });
        const data = await response.json();
        console.log(data);
        console.log("This is DELETE Request");
    } catch (error) {
        console.error(error);
    }
}

deleteRequest()

