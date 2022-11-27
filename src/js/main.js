/* eslint-disable no-unused-vars */
(function () {

  const doc = document
  const rootEl = doc.documentElement
  const body = doc.body
  const lightSwitch = doc.getElementById('lights-toggle')
  /* global ScrollReveal */
  const sr = window.sr = ScrollReveal()

  rootEl.classList.remove('no-js')
  rootEl.classList.add('js')

  window.addEventListener('load', function () {
    body.classList.add('is-loaded')
  })

  // Reveal animations
  function revealAnimations () {
    sr.reveal('.feature', {
      duration: 600,
      distance: '20px',
      easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      origin: 'right',
      viewFactor: 0.2
    })
  }

  if (body.classList.contains('has-animations')) {
    window.addEventListener('load', revealAnimations)
  }

  // Light switcher
  if (lightSwitch) {
    window.addEventListener('load', checkLights)
    lightSwitch.addEventListener('change', checkLights)
  }

  function checkLights () {
    let labelText = lightSwitch.parentNode.querySelector('.label-text')
    let tLabelText = lightSwitch.parentNode.querySelector('.text-xs')
    if (lightSwitch.checked) {
      body.classList.remove('lights-off')
      tLabelText.classList.remove('is-dark')
      if (labelText) {
        labelText.innerHTML = 'off'
      }
    } else {
      body.classList.add('lights-off')
      tLabelText.classList.add('is-dark')

      if (labelText) {
        labelText.innerHTML = 'on'
      }
    }
  }
}())


function openForm() {
  if (emailValidation()){
      document.getElementById("myForm").style.display = "flex"
      document.getElementById("overlay").style.display = "block"

    }
}

function closeForm() {
  document.getElementById("myForm").style.display = "none"
  document.getElementById("overlay").style.display = "none"
}

// stop 'enter' button from submitting form
addEventListener("submit",function(e){e. preventDefault(); return false;});

function emailValidation(){
  let emailField = document.getElementById('email')
  let emailString = ''
  emailString = emailField.value
  // eslint-disable-next-line no-useless-escape
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailString))
  { // valid email so lets clear box and show form
    if (parseFloat(window.getComputedStyle(emailField, null).getPropertyValue('margin-bottom')) == 0 ){
      emailField.style.marginBottom = 15;
    }
    let errorMessage = document.getElementById("email-error")
    errorMessage.style.display = "none"
    emailField.value = ''
    return true
  }
  // invalid email so lets do some stuff
  let errorMessage = document.getElementById("email-error")
  errorMessage.style.display = "block"
  return false;
}


// Scroll to top

function goTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}