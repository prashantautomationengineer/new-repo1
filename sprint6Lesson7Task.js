async function fetchData() {
    try {
        const response = await fetch('https://09e6b4ee-db69-4b6d-bd71-01cda7763361.serverhub.practicum-services.com/api/v1/kits/7', {
                method: 'POST'
            });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData()