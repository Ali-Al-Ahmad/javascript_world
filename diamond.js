const rows = parseInt(prompt('Enter number of rows: '))

let output = ''

for (let i = 1; i <= rows * 2; i++) {
  for (let j = 1; j <= rows * 2; j++) {
    if (j >= rows - i + 1 && j <= rows + i - 1 && i <= rows) {
      output += '*'
    } else if (j >= i - rows + 1 && j <= rows * 2 - 1 - (i - rows) && i > rows)
      output += '*'
    else {
      output += ' '
    }
  }

  output += '\n'
}

console.log(output)
