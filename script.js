const question = document.querySelector(".question");
const gif = docunent.querySelector(".gif")
const yesBtn = docunent.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=>{
   question.innerHTML="Yayyy charot lang";
   gif.src= "https://i.pinimg.com/originals/54/af/a0/54afa0c1cf345d3b30c21802e73cf2aa.gif"
})

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerwidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randonx = Math.floor(Math. random() * maxX)
    const randony = Math. floor(Math. random() * naxY)

    noBtn.style.left = randomX+"px";
    noBtn.style.top = randomY + "px"
})