const n = parseInt(prompt('Enter a number: '))

let prev = 0
let next = 1

let total
let output = ''

for (let i = 1; i <= n; i++) {
  if (i == 1) {
    output = '0'
  } else if (i == 2) {
    output = '0, 1'
  } else {
    total = prev + next
    output += `, ${total}`
    prev = next
    next = total
  }
}

console.log(output)
