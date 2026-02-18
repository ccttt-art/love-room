const buttons = document.querySelectorAll('.options button');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    alert(`你點擊了：${btn.textContent}`);
    // TODO: 可以換成打開新的 modal / 播放音樂 / 顯示影片等
  });
});
