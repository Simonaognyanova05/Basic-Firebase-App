export async function create(title, description, img) {
    let data = await fetch('http://localhost:2000/createTopic', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, description, img })
    });

    return data;
}