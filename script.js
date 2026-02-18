// 櫃子旋轉
const locker = document.getElementById("locker");
let isDragging=false, prevX=0, rotateY=0;

locker.addEventListener("mousedown", e=>{
  isDragging=true; prevX=e.clientX;
});
document.addEventListener("mouseup", ()=>{isDragging=false;});
document.addEventListener("mousemove", e=>{
  if(!isDragging) return;
  const delta = e.clientX - prevX;
  rotateY += delta * 0.5;
  locker.style.transform = `rotateY(${rotateY}deg)`;
  prevX = e.clientX;
});

// 點擊門打開 + 顯示密碼
const lockerFront = document.getElementById("lockerFront");
const pwModal = document.getElementById("pwModal");
lockerFront.addEventListener("click", ()=>{
  lockerFront.classList.add("open");
  pwModal.classList.add("show");
});

// 密碼驗證
const correct="0219";
const pwInput=document.getElementById("pwInput");
const pwBtn=document.getElementById("pwBtn");
const pwMsg=document.getElementById("pwMsg");

function checkPw(){
  if(pwInput.value===correct){
    location.href="lockerScreen.html";
  }else{
    pwMsg.textContent="密碼錯誤，再想一下～";
    pwInput.value="";
  }
}

pwBtn.addEventListener("click", checkPw);
pwInput.addEventListener("keydown", e=>{if(e.key==="Enter") checkPw();});
