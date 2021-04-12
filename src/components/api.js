export default async function sendApiReq(){
    let API_KEY = "TmhlIfwxTcggmjUKiQfJrD2mFaqIp8hwGnL5AYIF"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data){
    document.querySelector(".photo-content").innerHTML += data.explanation
    document.querySelector(".photo-content").innerHTML += `<img src="${data.url}">`
}
