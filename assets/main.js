const calc = document.querySelector('.calc')
const input = calc.querySelector('input')

calc.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const char = button.getAttribute('data-char')
  
    if (char === 'C') {
      input.value = ''
    } else if (char === '=') {
      input.value = eval(input.value.replace('÷', '/').replace('×', '*').replace('−', '-').replace(',', '.')) 
    } else if (char === '←') {
      input.value = input.value.slice(0, -1)
    } else {
      input.value += char
    }

    calc.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        input.value = eval(input.value.replace('÷', '/').replace('×', '*').replace('−', '-').replace(',', '.'))
      }
    })
    
    calc.addEventListener('keydown', (event) => {
      if (event.key === 'Backspace') {
        event.preventDefault()
        input.value = input.value.slice(0, -1)
      }
    })
  })
})