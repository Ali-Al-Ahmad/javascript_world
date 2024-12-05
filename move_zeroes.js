const numbers_array = [0, 0, 5, 8, 0, 1, 0, 4, 12, 0]
//                    [5, 8, 1, 4, 12, 0, 0, 0, 0, 0]

function move_zeros(numbers) {
  const length_of_array = numbers.length

  for (let i = 0; i < length_of_array; i++) {
    for (let j = 0; j < length_of_array - 1; j++) {
      if (numbers[j] == 0) {
        let temp = numbers[j + 1]
        numbers[j + 1] = numbers[j]
        numbers[j] = temp
      }
    }
  }
  return numbers
}
const new_array = move_zeros(numbers_array)
console.log(new_array)
