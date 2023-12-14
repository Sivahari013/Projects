const accessKey = "t8VpajXwC9UA97loEp1gjQq8PdnTJ9F8OIfi1vrVj7U"

const formE1 = document.querySelector("form")
const inputE1 = document.getElementById("search-input")
const searchResults = document.querySelector("#search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""   //To store the keywords typed by user
let page = 1;        //starting page 

async function searchImages(){
    inputData = inputE1.value  //Gets the keyword from input box
    const url = `https://api.unsplash.com/search/photos?pages=${page}&query=${inputData}&client_id=${accessKey}` //This is a dynamic url for getting pictures from the api

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if(page === 1){
        searchResults.innerHTML = ""

    }

    results.map((result) => {
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("search-result")
        const image = document.createElement("img")
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResults.appendChild(imageWrapper)

    });
    
    page++
    if(page > 1){
        showMore.style.display = "block"
    }

    
}

formE1.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1
    searchImages()
})

showMore.addEventListener("click", () => {
    searchImages()
})


