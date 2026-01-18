const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ แก้ข้อความจดหมายตรงนี้ได้เลย
const MESSAGE = `

ขอบคุณที่เดินข้างกันมาตลอด
ถึงบางวันจะไม่สมบูรณ์แบบ
แต่มีเธออยู่ตรงนี้… ทุกอย่างก็ดีพอแล้ว
รักนะ และอยากมีเธอในทุกๆ วันต่อจากนี้ 🤍
`;

function open(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}
function close(){ modalBackdrop.style.display = "none"; }

openLetter.addEventListener("click", open);
readBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop) close();
});
