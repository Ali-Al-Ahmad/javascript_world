const x = parseInt(prompt('Enter x: '))
let output = ''

for (let i = 1; i <= x; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    output += `${i} `
  }
}
console.log(output)
