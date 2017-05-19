'use strict';

var level = 1,
    timeToDuel = 1000,
    readyToDuel = 'false',
    time,
    score,
    fight,
    startButton = document.querySelector('.button-start-game'),
    restartButton = document.querySelector('.button-restart'),
    nextButton = document.querySelector('.button-next-level'),
    menuButton = document.querySelector('.button-menu'),
    gameMenu = document.querySelector('.game-menu'),
    wrapper = document.querySelector('.wrapper'),
    gamePanels = document.querySelector('.game-panels'),
    gameScreen = document.querySelector('.game-screen'),
    winScreen = document.querySelector('.win-screen'),
    gunman = document.querySelector('.gunman'),
    timeYou = document.querySelector('.time-panel__you'), 
    timeGunman = document.querySelector('.time-panel__gunman'), 
    showLevel = document.querySelector('.score-panel__level'), 
    message = document.querySelector('.message'),
    totalScore = document.querySelector('.win-screen__score'),
    lastScore = document.querySelector('.score-panel__score_num'),
    backMenu = document.querySelector('.back-to-menu'),
    sfxIntro = new Audio('sfx/intro.m4a'),
    sfxMenu = new Audio('sfx/menu.mp3'),
    sfxWait = new Audio('sfx/wait.m4a'),
    sfxFoul = new Audio('sfx/foul.m4a'),
    sfxFire = new Audio('sfx/fire.m4a'),
    sfxShot = new Audio('sfx/shot.m4a'),
    sfxWin = new Audio('sfx/win.m4a'),
    sfxDeath = new Audio('sfx/death.m4a');

    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', restartGame);
    nextButton.addEventListener('click', nextLevel);
    menuButton.addEventListener('click',reloadDocument);

    menuGame();

// сброс - reset
function reloadDocument() {
    return document.reload()
}

// меню
function menuGame () {
    sfxMenu.play();
    sfxMenu.currentTime = 0;
    sfxMenu.loop = true;
    gameMenu.style.display = 'block';
    winScreen.style.display = 'none';
    menuButton.style.display = 'none';
    backMenu.innerHTML = '';
}

// запуск игры
function startGame() {
    sfxMenu.pause();
    gameMenu.style.display = 'none';
    gamePanels.style.display = 'block';
    gameScreen.style.display = 'block';
    wrapper.style.display = 'block';
    timeGunman.innerHTML = (timeToDuel / 1000).toFixed(2);
    timeYou.innerHTML = '';
    score = +document.querySelector('.score-panel__score_num').innerHTML;
    showLevel.innerHTML = 'level: ' + level;
    gunman.classList.add('gunman-level-' + level);
    gunman.addEventListener('transitionend', prepareForDuel);
    setTimeout(function () {
       moveGunman();
    }, 500);
}

// рестарт игры
function restartGame() {
    sfxDeath.pause();
    restartButton.style.display = 'none';
    menuButton.style.display = 'none';
    message.innerHTML = '';
    gameScreen.classList.remove('game-screen--death');
    message.classList.remove('message--dead');
    message.classList.remove('animated');
    message.classList.remove('zoomIn');
    message.classList.remove('message--foul');
    gunman.classList = '';
    gunman.classList = 'gunman';
    setTimeout(function () {
        startGame();
    }, 1000);
}

// переход на следующий уровень
function nextLevel() {
    if (level < 5) {
        nextButton.style.display = 'none';
        message.innerHTML = '';
        message.classList.remove('message--win');
        message.classList.remove('animated');
        message.classList.remove('zoomIn');
        gunman.classList.remove('gunman-level-' + level);
        gunman.classList.remove('gunman-level-' + level + '__standing');
        gunman.classList.remove('gunman-level-' + level + '__death');
        gunman.classList.remove('gunman-level-' + level + '__ready');
        level++;
        timeToDuel = 700;
        timeToDuel = timeToDuel - (level * 100);
        startGame();

        // если 5 то выводим окно выигрыша
    } else {
        // level = Math.floor(Math.random() * 4) + 1;
        gunman.classList.remove('gunman-level-' + level);
        gunman.classList.remove('gunman-level-' + level + '__standing');
        gunman.classList.remove('gunman-level-' + level + '__death');
        gunman.classList.remove('gunman-level-' + level + '__ready');
        message.style.display = 'none';
        nextButton.style.display = 'none';
        gameScreen.style.display = 'none';
        gamePanels.style.display = 'none';
        winScreen.style.display = 'block';
        totalScore.innerHTML = lastScore.innerHTML;
        menuButton.style.display = 'block';
        backMenu.appendChild(menuButton);
    }
}

// перемещение ганмена
function moveGunman() {
    setTimeout(function () {
        gunman.classList.add('moving');
        sfxIntro.play();
        sfxIntro.loop = true;
    }, 50);
}


// подготовка к дуэли
function prepareForDuel() {
    sfxIntro.pause();
    sfxWait.play();
    sfxWait.currentTime = 0;
    sfxWait.loop = true;
    gunman.classList.remove('moving');
    gunman.classList.add('standing');
    gunman.classList.add('gunman-level-' + level + '__standing');
    gunman.addEventListener('mousedown', initFoul);
        fight = setTimeout(function () {
        sfxWait.pause();
        gunman.classList.add('gunman-level-' + level + '__ready');
        message.classList.add('message--fire');
        sfxFire.play();
        gunman.removeEventListener('mousedown',initFoul);
        gunman.addEventListener('mousedown', playerShootsGunman);
        readyToDuel = true;
        timeCounter(new Date().getTime());
        setTimeout(gunmanShootsPlayer, timeToDuel);
    }, 1000);
}

// таймер
function timeCounter(t) {
    var currTime;
    (function timeCompare() {
      currTime = new Date().getTime();
      if (readyToDuel) {
        time = ((currTime - t + 10) / 1000).toFixed(2);
        timeYou.innerHTML = time;
        setTimeout(timeCompare, 10);
      }
    })();
}

// проигрыш
function gunmanShootsPlayer() {
    if (readyToDuel) {
        readyToDuel = false;
        gunman.classList.remove('standing');
        gunman.classList.add('gunman-level-' + level + '__shooting');
        setTimeout(function () {
            sfxShot.play();
            message.classList.remove('message--fire');
            gameScreen.classList.add('game-screen--death');
            message.classList.add('message--dead');
            message.classList.add('animated');
            message.classList.add('zoomIn');
            message.innerHTML = 'You are dead!';
        }, timeToDuel / 3);
        gunman.removeEventListener('mousedown', playerShootsGunman);
        setTimeout(function () {
            scoreSubtract();
            sfxDeath.play();
            restartButton.style.display = 'block';
            menuButton.style.display = 'block';
        }, 1000);
    }
}


// - победа игрока
function playerShootsGunman() {
    if (readyToDuel) {
        readyToDuel = false;
        sfxShot.play();
        message.classList.remove('message--fire');
        gunman.classList.remove('standing');
        gunman.classList.remove('gunman-level-' + level + '__shooting');
        gunman.classList.add('gunman-level-' + level + '__death');
        gunman.removeEventListener('mousedown', playerShootsGunman);
        sfxWin.play();
        setTimeout(function () {
            message.classList.add('message--win');
            message.classList.add('animated');
            message.classList.add('zoomIn');
            message.innerHTML = 'You Win!';
            scoreCount();
            nextButton.style.display = 'block';
        }, 1000);
    }
}

// функция инициализации фола и отмена дуэли
function initFoul() {
    sfxWait.pause();
    function clear() {
        return clearTimeout(fight);
    }
    clear();
    playerFoul();
    gunman.removeEventListener('mousedown', initFoul);
}

// функция фола при ранней стрельбе
function playerFoul() {
    message.classList.add('animated');
    message.classList.add('zoomIn');
    message.classList.add('message--foul');
    message.innerHTML = 'Foul!!!';
    gunman.removeEventListener('mousedown', playerShootsGunman);
    sfxFoul.play();
    setTimeout(function () {
        restartButton.style.display = 'block';
        menuButton.style.display = 'block';
        scoreSubtract();
    }, 1000);
}

// функция прибавления очков
function scoreCount() {
    var temp = +((+(timeToDuel / 1000) * 100 - +(+timeYou.innerHTML) * 100) * 100 * level).toFixed(0);
    (function count() {
      if (+lastScore.innerHTML - score < temp) {
        lastScore.innerHTML = +lastScore.innerHTML + 100;
        console.log(lastScore.innerHTML);
        setTimeout(count, 10);
      }
    })();
}

// функция вычитания очков
function scoreSubtract() {
    var temp = +((+(timeToDuel / 1000) * 100 - +(+timeYou.innerHTML) * 100) * 100 * level).toFixed(0);
    (function count() {
        if (+lastScore.innerHTML - score > temp) {
            lastScore.innerHTML = +lastScore.innerHTML - 1000;
            console.log(lastScore.innerHTML);
            setTimeout(count, 10);
        }
        else {
            lastScore.innerHTML = +lastScore.innerHTML - 1000;
        }
    })();
}