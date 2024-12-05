const x = parseInt(prompt('Enter x: '))
let output = ''

for (let i = 1; i <= x; i++) {
  for (let j = 1; j <= i; j++) {
    output += `${j} `
  }

  output += '\n'
}

console.log(output)
