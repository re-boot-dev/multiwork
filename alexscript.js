let button = document.getElementById("randomArt")
let danbooru = document.getElementById("danbooru")
let url = "https://danbooru.donmai.us/posts.json?tags=kita_ikuyo+rating:safe&limit=1&random=true"
button.addEventListener('mouseover', function(){
    button.style.cursor = 'pointer'
})
button.addEventListener('click', function (){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let variants = data[0].media_asset.variants
        let newurl = variants[1].url
        danbooru.src = newurl
    })


})