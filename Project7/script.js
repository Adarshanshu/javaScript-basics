let para = document.querySelector('.para');
document.querySelector('button').addEventListener('click', function() {
    // Get current count from para text, default to 0 if empty
    let currentCount = parseInt(para.innerText.replace('count : ', '')) || 0;
    para.innerHTML = `count : ${currentCount + 1}`;
});
