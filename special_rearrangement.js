const numbers_array = [1, 2, 5, 8, 3, 6, 9, 4, 7, 10]
//                    [2, 8, 6, 4, 10, 1, 5, 3, 9, 7]

function special_rearrangement(numbers) {
  const length_of_array = numbers.length

  for (let i = 0; i < length_of_array; i++) {
    for (let j = 0; j < length_of_array - 1; j++) {
      if (numbers[j] % 2 == 1) {
        let temp = numbers[j + 1]
        numbers[j + 1] = numbers[j]
        numbers[j] = temp
      }
    }
  }
  return numbers
}
const new_array = special_rearrangement(numbers_array)
console.log(new_array)
