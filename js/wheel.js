const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");

const modalBackdrop = document.getElementById("modalBackdrop");
const resultText = document.getElementById("resultText");

document.getElementById("closeModalBtn").addEventListener("click", () => {
  modalBackdrop.style.display = "none";
});

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) modalBackdrop.style.display = "none";
});

// 🎁 แก้ของรางวัลตรงนี้
const items = [
  "บอกรัก",
  "กอดแน่น",
  "จุ้บแก้ม",
  "เลี้ยงของอร่อย",
  "ดูหนังด้วยกัน",
  "นวดให้"
];

let angle = 0;
let spinning = false;

function draw() {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const r  = canvas.width * 0.42;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const slice = (Math.PI * 2) / items.length;

  for (let i = 0; i < items.length; i++) {
    const a0 = angle + i * slice;
    const a1 = a0 + slice;

    /* 🔶 ชิ้นวงล้อ */
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, a0, a1);
    ctx.closePath();

    ctx.fillStyle = (i % 2 === 0)
      ? "#F6E3A1"   // ทองอ่อน
      : "#FFF1C1";  // ครีม
    ctx.fill();

    /* 🔤 ข้อความ */
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(a0 + slice / 2);

    ctx.textAlign = "right";
    ctx.fillStyle = "#7A5A26";
    ctx.font = "800 22px Prompt"; // ⭐ ตัวใหญ่ขึ้น
    ctx.fillText(items[i], r - 20, 8);

    ctx.restore();
  }

  /* 🔘 ขอบวงล้อ */
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#8C6B2F";
  ctx.stroke();

  /* 🔺 ตัวชี้ */
  ctx.beginPath();
  ctx.moveTo(cx, cy - r - 14);
  ctx.lineTo(cx - 20, cy - r + 28);
  ctx.lineTo(cx + 20, cy - r + 28);
  ctx.closePath();
  ctx.fillStyle = "#6F4E1E";
  ctx.fill();
}


// 🎯 คำนวณผลลัพธ์
function pickResult(finalAngle) {
  const slice = (Math.PI * 2) / items.length;
  let a = (finalAngle - (-Math.PI / 2)) % (Math.PI * 2);
  if (a < 0) a += Math.PI * 2;
  const idx = Math.floor((Math.PI * 2 - a) / slice) % items.length;
  return items[idx];
}

// 🎡 หมุนวงล้อ
function spin() {
  if (spinning) return;
  spinning = true;
  spinBtn.disabled = true;

  const start = angle;
  const extraTurns = 5 + Math.random() * 3;
  const target = start + extraTurns * Math.PI * 2 + Math.random() * Math.PI * 2;

  const duration = 2200;
  const t0 = performance.now();

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function frame(t) {
    const p = Math.min(1, (t - t0) / duration);
    const e = easeOutCubic(p);

    angle = start + (target - start) * e;
    draw();

    if (p < 1) {
      requestAnimationFrame(frame);
    } else {
      const result = pickResult(angle);
      resultText.textContent = result;
      modalBackdrop.style.display = "flex";
      spinning = false;
      spinBtn.disabled = false;
    }
  }

  requestAnimationFrame(frame);
}

spinBtn.addEventListener("click", spin);

// เริ่มต้น
draw();
