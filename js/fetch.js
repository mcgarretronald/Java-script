// {
//     async function getData() {
//         let img = document.getElementById("dogimg")
//         let response = await fetch(" https://dog.ceo/api/breeds/image/random")
//         let data = await response.json()
//         console.log(data)
//         img.src = data.message
//     }
//     getData()
//     const button = document.getElementById("button")
//     button.addEventListener('click', getData)

const posts = document.getElementById('demo');
const link = 'https://jsonplaceholder.typicode.com/posts';
const postdiv = document.getElementById("demo")
async function Posts() {
    try {
        const response = await fetch(link);
        const responseData = await response.json();
        responseData.forEach(post => {
            const titleElement = document.createElement('h2');
            const bodyElement = document.createElement('p');
            titleElement.textContent = post.title;
            bodyElement.textContent = post.body;


            postdiv.appendChild(titleElement)
            postdiv.appendChild(bodyElement)
        });



    } catch (error) {
        console.error('Error fetching posts:', error.message);
    }
}
Posts();









