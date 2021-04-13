export default async function sendApiReq(){
    let API_KEY = "TmhlIfwxTcggmjUKiQfJrD2mFaqIp8hwGnL5AYIF"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    return data
}

// function useApiData(data){
//     console.log(data)
//     document.querySelector(".photo-title").innerHTML += data.title
//     document.querySelector(".photo-date").innerHTML += data.date
//     document.querySelector(".photo-content").innerHTML += data.explanation
//     document.querySelector(".photo-content").innerHTML += `<img src="${data.url}">`
// }
