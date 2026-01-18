const gallery = document.getElementById("gallery");
const modalBackdrop = document.getElementById("modalBackdrop");
const bigImg = document.getElementById("bigImg");

const photos = [
  "assets/memoriesm1.png",
  "assets/memoriesm2.png",
  "assets/memoriesm3.png",
  "assets/memoriesm4.png",
  "assets/memoriesm5.png",
  "assets/memoriesm6.png",
  "assets/memoriesm7.png",
  "assets/memoriesm8.png",
  "assets/memoriesm9.png",
];

photos.forEach(src=>{
  const img = document.createElement("img");
  img.className = "photo";
  img.src = src;
  img.alt = "memory";
  img.addEventListener("click", ()=>{
    bigImg.src = src;
    modalBackdrop.style.display = "flex";
  });
  gallery.appendChild(img);
});

document.getElementById("closeModalBtn").addEventListener("click", ()=>{
  modalBackdrop.style.display = "none";
});
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop) modalBackdrop.style.display = "none";
});
