const form = document.querySelector('#searchForm');
const imgs = document.querySelectorAll('img');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data);
    form.elements.query.value = '';
})

// const makeImages = (shows) =>{
//     for(let result of shows){
//         if(result.show.image){
//             const img = document.createElement('IMG');
//             img.src = result.show.image.medium;
//             document.body.append(img)
//         }
//     }
// }

const makeImages = (shows) =>{
    cleanImages();
    for(let i= 0; i < 10; i++){
        if(shows[i].show.image){
            imgs[i].src = shows[i].show.image.medium;
        }   
    }
}

const cleanImages = () => {
    for(let i= 0; i < 10; i++){
      imgs[i].src = "";  
    }
}