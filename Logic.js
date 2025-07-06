let HitBack = document.getElementById("HitBackBox");
let ScoreBoard = document.getElementById("Score");
let Score = document.getElementById("Scorecntr");
let Ins = document.getElementById("instructions");
let Again = document.getElementById('playagain');
let HitSpeed = 12;
const ScreenWidth = window.innerWidth;
const ScreenHeight = window.innerHeight;
console.log(ScreenWidth);
console.log(ScreenHeight);
if(ScreenWidth<=575.98){
    ScoreBoard.style.left = (ScreenWidth / 2) - 150 + "px";
}
else{
    ScoreBoard.style.left = (ScreenWidth / 2) - 200 + "px";

}
ScoreBoard.style.top = (ScreenHeight / 2) - 200 + "px";
Again.style.left = (ScreenWidth / 2) - 100 + "px";
Again.style.top = (ScreenHeight)-100 + "px";
Again.style.zIndex = 4;

//Move HitBack Around
let LeftHitMove = (ScreenWidth / 2) - 50;
HitBack.style.left = `${LeftHitMove}px`
document.addEventListener("keydown", (e) => {
    if ((LeftHitMove >= 5) && (LeftHitMove <= ScreenWidth - 110)) {
        if (e.key === "ArrowRight") {
            LeftHitMove += HitSpeed;
        }
        else if (e.key === "ArrowLeft") {
            LeftHitMove -= HitSpeed;
        }
        HitBack.style.left = `${LeftHitMove}px`;
    }
    else {
        if (LeftHitMove < 5) {
            LeftHitMove += 20;
        }
        else if (LeftHitMove > ScreenWidth - 110) {
            LeftHitMove -= 20;
        }
    }
    if (HitSpeed >= 0 && HitSpeed <= 26) {
        if (e.key === "ArrowUp") {
            HitSpeed += 2;
        }
        if (e.key === "ArrowDown") {
            HitSpeed -= 2;
        }
    } else {
        if (HitSpeed <= 0) {
            HitSpeed = 0;
        }
        else if (HitSpeed >= 26) {
            HitSpeed = 26;
        }
    }
    if (e.code === "Space") {
        if (!Bounce) {
            Bounce = true;
            setTimeout(() => {
                AnimateBall();
            }, 500);
        }
        Ins.style.display = "none";

    }

})
//ResetAll
function Reset() {
    TheBall.style.animation = "Shake 0.4s";
    setTimeout(() => {
        TheBall.style.animation = "none";
        HitSpeed = 10;
        Ballx = 150;
        Bally = 150;
        BallxSpeed = 7;
        BallySpeed = 5;
        BallSize = 30;
        TheBall.style.left = Ballx + "px";
        TheBall.style.top = Bally + "px";
    }, 400);
}

//Moving The Ball Here and There
let Ballx = 50;
let Bally = 50;
let BallxSpeed = 7;
let BallySpeed = 5;
let BallSize = 30;
let TheBall = document.getElementById('BounceBall');
let Bounce = false;
let ScoreCntr = 0;
TheBall.addEventListener('touchstart', () => {
    if (!Bounce) {
        Bounce = true;
        setTimeout(() => {
            AnimateBall();
        }, 500);
    }
    Ins.style.display = "none";
})
TheBall.addEventListener('click', () => {
    if (!Bounce) {
        Bounce = true;
        setTimeout(() => {
            AnimateBall();
        }, 500);
    }
    Ins.style.display = "none";
})
function AnimateBall() {
    Ballx += BallxSpeed;
    Bally += BallySpeed;
    if (Bounce) {

        if (Ballx + BallSize >= (ScreenWidth - 10) || Ballx <= 0) {
            BallxSpeed = -BallxSpeed;
        }

        if (Bally <= 0) {
            BallySpeed = -BallySpeed;
        }

        if (Bally + BallSize >= (ScreenHeight - 27) &&
            (Ballx + BallSize >= LeftHitMove && Ballx + BallSize <= LeftHitMove + 110)) {
            BallySpeed = -BallySpeed;
            ScoreCntr++;
            Score.innerText = ScoreCntr;
        }

        if (Bally + BallSize >= (ScreenHeight + 10)) {
            ScoreBoard.style.zIndex = "3";
            Score.style.animation = "aageao 2s linear";
            Score.style.transform = "translateZ(200px)";
            Score.style.color = "#cc4e4e";
            Again.style.display = "flex";
            Bounce = false;
        }
        TheBall.style.left = Ballx + "px";
        TheBall.style.top = Bally + "px";

        requestAnimationFrame(AnimateBall);
    }
    else {
        Reset();
    }
}

AnimateBall();


//Adding Touch for Phones
IsDraggingPhones = false;
document.addEventListener('touchstart', (e) => {
    e.preventDefault();
    IsDraggingPhones = true;

}, { passive: false })

document.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    if ((touch.pageX - HitBack.offsetWidth / 2 >= 0) && (touch.pageX - HitBack.offsetWidth / 2 <= ScreenWidth - 100)) {
        LeftHitMove = touch.pageX - HitBack.offsetWidth / 2;
        HitBack.style.left = LeftHitMove + "px";
    }
}, { passive: false })

document.addEventListener('touchend', (e) => {
    e.preventDefault();
    IsDraggingPhones = false;
}, { passive: false })

IsDraggingLappy = false;
document.addEventListener('mousedown', (e) => {
    e.preventDefault();
    IsDraggingLappy = true;
})

document.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (IsDraggingLappy) {
        const moveL = e.pageX;
        if ((moveL - HitBack.offsetWidth / 2 >= 0) && (moveL - HitBack.offsetWidth / 2 <= ScreenWidth - 100)) {
            LeftHitMove = moveL - HitBack.offsetWidth / 2;
            HitBack.style.left = LeftHitMove + "px";
        }
    }
})

document.addEventListener('mouseup', (e) => {
    e.preventDefault();
    IsDraggingLappy = false;
})


let ShowIns1 = false;
ibutton.addEventListener('click', () => {
    if (!ShowIns1) {
        Ins.style.display = "grid";
        ShowIns1 = true;
    }
    else {
        Ins.style.display = "none";
        ShowIns1 = false;
    }
})
let ShowIns2 = false;
ibutton.addEventListener('tochstart', () => {
    if (!ShowIns2) {
        Ins.style.display = "grid";
        ShowIns2 = true;
    }
    else {
        Ins.style.display = "none";
        ShowIns2 = false;
    }
},{passive: false})

function ResetAll() {
    HitSpeed = 12;
    Ballx = 50;
    Bally = 50;
    BallxSpeed = 7;
    BallySpeed = 5;
    BallSize = 30;
    Bounce = false;
    ScoreCntr = 0;
    IsDraggingPhones = false;
    ShowIns2 = false;
    ShowIns1 = false;
    ScoreBoard.style.zIndex = "0";
    Score.style.animation = "none";
    Score.style.transform = "translateZ(0px)";
    Score.style.color = "#434331";
    Again.style.display = "none";
    Score.innerText="";
}
Again.addEventListener("click", () => {
    ResetAll();
})
Again.addEventListener("touchstart", () => {
    ResetAll();
})