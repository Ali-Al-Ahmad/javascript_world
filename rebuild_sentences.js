const words_array = ['the', 'sky', 'is', 'blue']
const lengths_array = [3, 2, 2, 1]

function rebuild_sentence(words, lengths) {
  const length_of_array = words.length
  let output = ''

  for (let i = 0; i < length_of_array; i++) {
    for (let j = 0; j < lengths[i]; j++) {
      // handling numbers greater than length of a word
      if (j < words[i].length) output = output + words[i][j]
    }
    output = output + ' '
  }
  return output
}

console.log(rebuild_sentence(words_array, lengths_array))
