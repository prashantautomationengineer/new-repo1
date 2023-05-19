test('number of warehouses should be greater than 0', async () => {
    let response;
    try {
        response = await fetch('https://a1467ba4-78d1-4278-92b7-3611fb73aaca.serverhub.practicum-services.com/api/v1/warehouses');
    
    } catch (error) {
        console.error(error);
    }
    // Convert response to JavaScript object
    const data = await response.json();
    const countStores = data.length;
    expect(countStores).toBeGreaterThan(0);
});

