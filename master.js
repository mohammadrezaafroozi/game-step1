const mario = document.getElementById('mario')
window.addEventListener('keyup', (e)=>{
    console.log(e.keyCode);
    let move =e.keyCode
    if( move===37|| move===39){
        ///left move///
        let leftMove = mario.computedStyleMap().get('left').value
        console.log(leftMove);
        if(move==37){
            leftMove -= 1
        }else if(move==39){
            leftMove += 1
        }
        mario.style.left = leftMove + '%'

    }else if( move==38 || move==40){
        ///top move////
        let topMove = mario.computedStyleMap().get('top').value
        if(move==38){
            topMove -= 1
        }else if( move==40){
            topMove+= 1
        }
        mario.style.top = topMove + '%'
    }
})