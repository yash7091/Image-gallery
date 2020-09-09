const modal =document.querySelector('.modal')
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-image');
const imgText = document.querySelector('.caption');
previews.forEach(preview=>{
    preview.addEventListener('click',()=>{
        modal.classList.add("open");

    })
})
modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open")
        original.classList.remove("open");
    }
})