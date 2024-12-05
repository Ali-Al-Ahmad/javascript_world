const numbers_array = [1, 3, 2, 5, 4, 6, 5]
const list_of_indices = []

function find_peaks(array) {
  const length_of_array = array.length

  for (let i = 1; i < length_of_array - 1; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      list_of_indices.push(i)
    }
  }
}

// # printing the index not the value
console.log('indices: ', list_of_indices)

find_peaks(numbers_array)
