let Url = 'https://api.github.com/users/octocat'

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        throw error;
    }
}

fetchData(Url)
    .then(data => console.log('Данные получены:', data))
    .catch(error => console.error('Ошибка:', error));