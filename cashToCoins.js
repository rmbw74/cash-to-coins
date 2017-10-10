const dollarAMT = .97
const piggyBank = {}

coinQuantity = Math.trunc(dollarAMT / .25)
piggyBank.quarters = coinQuantity
subtractionAmount = coinQuantity * .25
rollingTotal = (dollarAMT - subtractionAmount).toFixed(2)

coinQuantity = Math.trunc(rollingTotal / .10)
piggyBank.dimes = coinQuantity
subtractionAmount = coinQuantity * .10
rollingTotal = (rollingTotal - subtractionAmount).toFixed(2)

coinQuantity = Math.trunc(rollingTotal / .05)
piggyBank.nickles = coinQuantity
subtractionAmount = coinQuantity * .05
rollingTotal = (rollingTotal- subtractionAmount).toFixed(2)

coinQuantity = Math.trunc(rollingTotal / .01)
piggyBank.pennies = coinQuantity




console.log(piggyBank)