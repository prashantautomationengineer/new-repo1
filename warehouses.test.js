test('status should be 200', async () => {
    let actualStatus;
    try {
        // Make request
        const response = await fetch('https://2cb1ff8f-6e1c-4d91-a850-85ffcecd39e3.serverhub.practicum-services.com/api/v1/warehouses');
        // Extract response code status
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    // Check code status
    expect(actualStatus).toBe(200);
});