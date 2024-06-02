const postdata = document.getElementById("data");

async function Unis() {
    const input = document.getElementById("input").value;
    const link = `http://universities.hipolabs.com/search?country=${encodeURIComponent(input)}`;

    try {
        const response = await fetch(link);
        const responseData = await response.json();
        postdata.innerHTML = '';

        responseData.forEach(Data => {
            const titleElement = document.createElement('h4');
            const bodyElement = document.createElement('section');
            const bodyElement1 =document.createElement('section')
            const linkElement = document.createElement('a');
        
            titleElement.textContent = Data.name;
            bodyElement.textContent = Data.country;
            bodyElement1.textContent =Data["state-province"]
            linkElement.href = Data.web_pages[0];
            linkElement.textContent = Data.web_pages[0];
            linkElement.target = "_blank"; 



           
            postdata.appendChild(titleElement);
            postdata.appendChild(bodyElement);
            postdata.appendChild(bodyElement1);
            postdata.appendChild(linkElement);
           
        });
    } catch (error) {
        console.log('Error fetching Universities:', error);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('searchButton');
    button.addEventListener('click', Unis);
});

// https://newsdata.io/api/1/latest?apikey=pub_45347608daadcf7601587ab23c2fd80648228&language=en


























