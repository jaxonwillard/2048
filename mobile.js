let touchstartX = 0
let touchendX = 0
let touchStartY = 0
let touchEndY = 0
    
function checkDirection() {
  if (touchendX < touchstartX) alert('swiped left!')
  if (touchendX > touchstartX) alert('swiped right!')
  const Ydiff = touchStartY - touchEndY;
  const Xdiff = touchStartX - touchEndX;
  if (abs(Ydiff) > abs(Xdiff))
  {
    if (Ydiff > 0)
    {
        playUp()
    }
    else if (Ydiff < 0)
    {
        playDown
    }
  }
  else
  {
    if (Xdiff > 0)
    {
        playRight()
    }
    else if (Xdiff < 0)
    {
        playLeft()
    }
  }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
  touchstartY = e.changedTouches[0].screenY
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  touchendY = e.changedTouches[0].screenY
  checkDirection()
})