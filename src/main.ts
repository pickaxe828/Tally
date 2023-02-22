let incrementBtn: HTMLButtonElement
let resetBtn: HTMLButtonElement
let counterTxt: HTMLSpanElement
let counter: number = 0

incrementBtn = document.getElementsByClassName("increment")[0] as HTMLButtonElement
resetBtn = document.getElementsByClassName("reset")[0] as HTMLButtonElement
counterTxt = document.getElementsByClassName("counter")[0] as HTMLSpanElement

function renderNumber(counterTxt: HTMLSpanElement, num: number) {
  counterTxt.innerHTML = num.toString()
}

function store() {
  window.localStorage.setItem("counter", JSON.stringify({"number": counter}))
}

window.addEventListener("load", () => {
  let storedCounter = window.localStorage.getItem("counter")
  if (storedCounter) {
    counter = JSON.parse(storedCounter)["number"] as number
  }
  renderNumber(counterTxt, counter)
})

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  console.log(event.key)
  switch (event.key) {
    case " ": 
      incrementBtn?.blur()
      counter++
      store()
      renderNumber(counterTxt, counter)
      break
    case "Enter": 
      incrementBtn?.blur()
      counter++
      store()
      renderNumber(counterTxt, counter)
      break
  }
})

incrementBtn.onclick = () => {
  counter++
  store()
  renderNumber(counterTxt, counter)
}

resetBtn.onclick = () => {
  counter = 0
  store()
  renderNumber(counterTxt, counter)
}