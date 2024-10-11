export async function login(username, password) {
    let data = await fetch('http://localhost:2000/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })

    return data;
};

