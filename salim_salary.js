const salary = parseFloat(prompt("Please enter your salary: "))
const month_name = prompt('Please enter month name: ')
const savings_percentage = parseInt(prompt("Please enter percentage for savings: "))
const rent_percentage = parseInt(prompt('Please enter percentage for rent: '))
const electricity_percentage = parseInt(prompt('Please enter percentage for electricity: '))

const savings_amount = salary * savings_percentage / 100
const rent_amount = salary * rent_percentage / 100
const electricity_amount = salary * electricity_percentage / 100

const total_allocated_amount = savings_amount + rent_amount + electricity_amount

console.log(`The amount allocated for savings: ${savings_amount} and rent: ${rent_amount} and electricity: ${electricity_amount}`)
console.log(`The amount allocated for savings, rent and electricity combined: ${total_allocated_amount}`)
console.log(`The remainder of your salary is: ${salary - total_allocated_amount}`)
console.log(`The yearly cost for rent: ${rent_amount * 12} and electricity: ${electricity_amount * 12}`)
console.log(`The total salary raised to the power 2: ${salary ** 2}`)

const additional_savings_amount = parseFloat(prompt(`Please enter additional savings amount: `))
console.log(`The amount left for ${additional_savings_amount} additional savings: ${additional_savings_amount % savings_amount}`)
