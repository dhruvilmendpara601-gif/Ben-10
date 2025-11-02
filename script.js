let image = document.getElementById('img');
let box = document.getElementById('box');
box.onmouseenter=()=>{
    image.style.opacity=1;
}
box.onmouseout=()=>{
    image.style.opacity=0;

}