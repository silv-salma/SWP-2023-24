function changeBackground()
 {
    const bodyElement = document.body

    bodyElement.classList.toggle('green')
}

function changeColor() {
    // check if an interval has already been set up
      setInterval(changeBackground, 1000);
    }
  
