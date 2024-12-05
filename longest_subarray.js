const array = [0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]

const length_of_array = array.length
let longest_starting_index = 0
let longest_ending_index = 0
let maximum_counter = 0

for (let i = 0; i < length_of_array; i++) {
  let zeroes_counter = 0
  let ones_counter = 0

  for (let j = i; j < length_of_array; j++) {
    if (array[j] == 0) {
      zeroes_counter += 1
    }

    if (array[j] == 1) {
      ones_counter += 1
    }
    // # reassign the starting and ending indices when length of subarray greater than previous
    if (zeroes_counter == ones_counter && zeroes_counter > maximum_counter) {
      longest_starting_index = i
      longest_ending_index = j
      maximum_counter = zeroes_counter
    }
  }
}
console.log(`starting index: ${longest_starting_index}
ending index: ${longest_ending_index}`)
console.log(`length of the subbarray is: ${longest_ending_index - longest_starting_index + 1}`)
