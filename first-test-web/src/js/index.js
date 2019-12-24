function show() {
    let img = document.getElementsByClassName('smile')[0];
    let btn = document.getElementsByClassName('button')[0];
    if (img.style.visibility === 'hidden') {
        img.style.visibility = 'visible';
        btn.innerHTML = 'hidden';
    } else {
        img.style.visibility = 'hidden';
        btn.innerHTML = 'show';
    }
}