export async function register(username, password) {
    let data = await fetch('http://localhost:2000/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    return data;
}