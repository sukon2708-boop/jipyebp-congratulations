const giftImg = document.getElementById("giftImg");
const giftStage = document.getElementById("giftStage");
const hintText = document.getElementById("hintText");
const result = document.getElementById("result");

let step = 0;

giftImg.addEventListener("click", async () => {

  if(step === 0){
    // คลิกครั้งที่ 1
    giftStage.classList.add("opening");
    giftImg.src = "assets/meg2.png";
    hintText.textContent = "กดอีกครั้งหนึ่ง ";
    step = 1;
  }
  else if(step === 1){
    // คลิกครั้งที่ 2
    giftStage.classList.remove("opening");
    giftImg.src = "assets/meg3.png";
    hintText.style.display = "none";
    result.style.display = "block";
    step = 2;
  }

});
