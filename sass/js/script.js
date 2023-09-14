const clickBtn = document.querySelectorAll(".clickBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");


closeBtn.addEventListener('click', ()=>{
    popup.style.display = 'none';
});
popup.addEventListener('click', ()=>{
    popup.style.display = 'none';
});

for (var i = 0; i < clickBtn.length; i++) {
    clickBtn[i].addEventListener('click', ()=>{
        popup.style.display = 'block';
    });
}