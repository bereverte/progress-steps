const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")
const steps = document.querySelectorAll(".step")
const contents = document.querySelectorAll(".content")
const nameInput = document.getElementById("name")
const surnameInput = document.getElementById("surname")
const quantityInput = document.getElementById("quantity")
const dateInput = document.getElementById("date")

let currentActive = 1

nameInput.addEventListener("input", validateNameSurname)
surnameInput.addEventListener("input", validateNameSurname)
quantityInput.addEventListener("input", validateQuantity)
dateInput.addEventListener("input", validateDate)

limitDateSelection()

window.onload = function () {
  update()
}

next.addEventListener("click", () => {
  if (currentActive === circles.length) {
    finish()
  } else {
    currentActive++
    if (currentActive > circles.length) {
      currentActive = circles.length
    }
    update()
  }
})

prev.addEventListener("click", () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active")
    } else {
      circle.classList.remove("active")
    }
  })

  steps.forEach((step, idx) => {
    if (idx + 1 === currentActive) {
      step.classList.add("active")
    } else {
      step.classList.remove("active")
    }
  })

  contents.forEach((content, idx) => {
    if (idx + 1 === currentActive) {
      content.classList.add("active")
    } else {
      content.classList.remove("active")
    }
  })

  const actives = document.querySelectorAll(".circle.active")
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%"

  if (currentActive === 1) {
    prev.disabled = true
    validateNameSurname()
  } else if (currentActive === circles.length) {
    document.getElementById("next").innerHTML = "Finish"
  } else {
    prev.disabled = false
    next.disabled = false
  }
  if (currentActive === 2) {
    validateQuantity()
  }
  if (currentActive === 3) {
    validateDate()
  }
}

function validateNameSurname() {
  const name = nameInput.value.trim()
  const surname = surnameInput.value.trim()

  if (name === "" || surname === "") {
    next.disabled = true
  } else {
    next.disabled = false
  }
}

function validateQuantity() {
  const quantity = parseInt(quantityInput.value, 10)

  if (isNaN(quantity) || quantity <= 0 || quantity > 20) {
    next.disabled = true
  } else {
    next.disabled = false
  }
}

function validateDate() {
  const selectedDate = dateInput.value

  if (selectedDate === "") {
    next.disabled = true
  } else {
    next.disabled = false
  }
}

function limitDateSelection() {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1) // Establece la fecha mínima como mañana

  const maxDate = new Date(today)
  maxDate.setFullYear(today.getFullYear() + 5) // Establece la fecha máxima a 5 años desde hoy

  // Convertir las fechas a formato YYYY-MM-DD
  const minDateString = tomorrow.toISOString().split("T")[0]
  const maxDateString = maxDate.toISOString().split("T")[0]

  dateInput.setAttribute("min", minDateString)
  dateInput.setAttribute("max", maxDateString)
}

function finish() {
  prev.style.display = "none"
  next.style.display = "none"

  const finishDiv = document.getElementById("finish")
  finishDiv.classList.add("active")
  contents.forEach(content => {
    if (content.id !== "finish") {
      content.classList.remove("active")
    }
  })
}

function saveData() {
  const name = document.getElementById("name").value
  const surname = document.getElementById("surname").value
  const quantity = document.getElementById("quantity").value
  const date = document.getElementById("date").value

  document.getElementById("review-name-surname").innerHTML = name + " " + surname
  document.getElementById("review-quantity").innerHTML = quantity
  document.getElementById("review-date").innerHTML = date

  const userData = {
    name: name,
    surname: surname,
    quantity: quantity,
    date: date,
  }
}
