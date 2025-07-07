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
if (ScreenWidth <= 575.98) {
    ScoreBoard.style.left = (ScreenWidth / 2) - 150 + "px";
}
else {
    ScoreBoard.style.left = (ScreenWidth / 2) - 200 + "px";

}
ScoreBoard.style.top = (ScreenHeight / 2) - 200 + "px";
Again.style.left = (ScreenWidth / 2) - 100 + "px";
Again.style.top = (ScreenHeight) - 100 + "px";
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
        Ballx = 250;
        Bally = 150;
        BallxSpeed = 7;
        BallySpeed = 5;
        BallSize = 30;
        JustBouncd = false;
        TheBall.style.left = Ballx + "px";
        TheBall.style.top = Bally + "px";
    }, 400);
}

//Moving The Ball Here and There
let Ballx = 250;
let Bally = 150;
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
let JustBouncd=false;
function AnimateBall() {
    Ballx += BallxSpeed;
    Bally += BallySpeed;
    if (Bounce) {
        Ins.style.display="none";
        if (Ballx + BallSize >= (ScreenWidth - 10) || Ballx <= 0) {
            BallxSpeed = -BallxSpeed;
        }

        if (Bally <= 0) {
            BallySpeed = -BallySpeed;
            JustBouncd=false;
        }
        if ((!JustBouncd)&&
            Bally + BallSize >= (ScreenHeight - 23) &&
            (Ballx + BallSize >= LeftHitMove-5 && Ballx + BallSize <= LeftHitMove + 95)) {
            BallySpeed = -BallySpeed;
            ScoreCntr++;
            Score.innerText = ScoreCntr;
            JustBouncd=true;
        }

        if (Bally + BallSize >= (ScreenHeight)) {
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


let ShowIns = false;
ibutton.addEventListener('click', () => {
    if(!Bounce){
        if (!ShowIns) {
            Ins.style.display = "grid";
            ShowIns = true;
        }
        else {
            Ins.style.display = "none";
            ShowIns = false;
        }
    }
})

ibutton.addEventListener('touchstart', () => {
    if(!Bounce){
        if (!ShowIns) {
            Ins.style.display = "grid";
            ShowIns = true;
        }
        else {
            Ins.style.display = "none";
            ShowIns = false;
        }
    }
}, { passive: false })

function ResetAll() {
    HitSpeed = 12;
    Ballx = 250;
    Bally = 150;
    BallxSpeed = 7;
    BallySpeed = 5;
    BallSize = 30;
    JustBouncd = false;
    ScoreCntr = 0;
    IsDraggingPhones = false;
    ShowIns = false;
    ScoreBoard.style.zIndex = "0";
    Score.style.animation = "none";
    Score.style.transform = "translateZ(0px)";
    Score.style.color = "#434331";
    Again.style.display = "none";
    Score.innerText = "";
}
Again.addEventListener("click", () => {
    ResetAll();
    Bounce = true;
    setTimeout(() => {
        AnimateBall();
    }, 500);
})
Again.addEventListener("touchstart", () => {
    ResetAll();
    Bounce = true;
    setTimeout(() => {
        AnimateBall();
    }, 500);
})
