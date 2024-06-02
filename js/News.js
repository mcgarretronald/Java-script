const link = 'https://newsdata.io/api/1/news?apikey=pub_45347608daadcf7601587ab23c2fd80648228&q=war';

async function fetchNews() {
    try {
        const response = await fetch(link);
        const data = await response.json();
        displayNews(data.results);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function displayNews(news) {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = ''; 
    news.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const img = document.createElement('img');
        img.src = article.image_url || 'default-image.jpg';
        img.alt = article.title;

        const title = document.createElement('h2');
        title.textContent = article.title;

        const content = document.createElement('p');
        content.textContent = article.content || article.description || 'No content available';

        newsItem.appendChild(img);
        newsItem.appendChild(title);
        newsItem.appendChild(content);

        newsContainer.appendChild(newsItem);
    });
}

fetchNews();
