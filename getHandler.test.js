test('Response body should contain Fresh Food', async () => {
    let actualResponseBody;
    try {
        const response = await fetch('https://ad77dbb2-5ebb-4550-b7c5-9e3951557aa1.serverhub.practicum-services.com/api/v1/warehouses');
        // Assigning the actual response body to the actualRseponseBody variable
        actualResponseBody = await response.json();
        console.log(actualResponseBody);
    } catch (error) {
        console.error(error);
    }
    // Checking that the Fresh Food warehouse is found
    expect(actualResponseBody[1]["name"]).toBe("Fresh Food");
});