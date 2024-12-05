const n = parseInt(prompt('Enter a number n:'))

let total = 0
for (let i = 1; i <= n; i++) {
  if (i % 2 != 0) {
    total += i
  }
}

console.log(`Sum of all odd numbers up to ${n} is ${total} `)
