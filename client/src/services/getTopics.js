export async function getTopics() {
    let data = await fetch('http://localhost:2000/topics');

    return data;
}