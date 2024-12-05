const array_of_numbers1 = [3, 4, -1, 1]
const array_of_numbers2 = [0, 1, 2]

function first_missing_positive(numbers) {
  const length_of_array = numbers.length
  numbers.sort()
  for (let i = 0; i < length_of_array; i++) {
    if (numbers[i] > 0 && numbers[i + 1] != numbers[i] + 1) {
      return 'missing number is ' + (numbers[i] + 1)
    }
  }

  return ''
}
console.log(first_missing_positive(array_of_numbers1))
