function max_profit(prices) {
  let total_profit = 0
  let buy_price = 0
  let sell_price = 0
  let length_of_prices = prices.length
  let i = 0

  while (i < length_of_prices - 1) {
    buy_price = prices[i]
    // find the best price to buy
    while (i < length_of_prices - 1 && prices[i + 1] < prices[i]) {
      buy_price = prices[i + 1]
      i += 1
    }
    sell_price = prices[i]
    // find the best price to sell
    while (i < length_of_prices - 1 && prices[i + 1] > prices[i]) {
      sell_price = prices[i + 1]
      i += 1
    }
    // after selling sum the profit
    total_profit += sell_price - buy_price
    i += 1

    // print best but/sell prices with the profit
    console.log(`buy(${buy_price}) : sell(${sell_price}) = ${sell_price - buy_price}`)
  }
  console.log(`maximum profit: ${total_profit}`)
}
const prices_list = [12, 9, 6, 7, 10, 8, 3, 18, 14, 19, 1]
max_profit(prices_list)
