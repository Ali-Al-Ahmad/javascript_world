function merge_intervals(intervals_array) {
  intervals_array.sort()

  const merged_array = [intervals_array[0]]

  for (let i = 1; i < intervals_array.length; i++) {
    const merged = merged_array[merged_array.length - 1]

    if (intervals_array[i][0] <= merged[1]) {
      merged[1] = Math.max(merged[1], intervals_array[i][1])
    } else {
      merged_array.push(intervals_array[i])
    }
  }
  return merged_array
}
const array_of_intervals = [[1, 3],[2, 4],[6, 8]]

console.log(merge_intervals(array_of_intervals))
