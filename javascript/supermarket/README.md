# SupermarketHQ

Hi and welcome dear candidate, before anything, we value your time and we don't want you to spend a lot of time working on this. We prepared an small exercise that is divided in stages. Book only a couple of hours of your time and complete all the stages you can. Don't worry if you can't complete everything, this won't be taken in consideration. During the interview we'll discuss, and refactor this kata.

This exercise is inspired by [Dave Thomas's supermarket kata](http://codekata.com/kata/kata01-supermarket-pricing/).

## General instructions
Download this folder or clone the repo **without creating a fork**. Solve the stages in a way we can go through the solutions (usually separated commits in a public repository). When you finish the exercise send us back the solution with the link to the repository or with a zipped file via email. We hope you have fun!

## Setup
This repo has been bootstrapped using [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. Please have a look at the [documentation](https://docs.nestjs.com/) and make yourself familiar with the framework.

Run `npm install`, then run `npm run start:dev` to start the application,  `npm test:watch` to run the tests and `npm run test:e2e` to run e2e tests.

## What's in the app?
In our supermarket we have defined [the following items](http://localhost:3000/products):
- *Soda can*: 1.23€ per unit (sku: product-1)
- *Crisp bag*: 0.75€ per unit (sku: product-2)
- *Sauce bucket*: 0.50€ per unit (sku: product-3)

We can calculate [basket totals](http://localhost:3000/basket) by `PUT`ing an array representing the basket:
```javascript
{
  basket: [
    {sku: 'product-1', quantity: 3},
    {sku: 'product-2', quantity: 1},
    {sku: 'product-3', quantity: 7},
  ]
}
```
This will return the totals for the basket:
```javascript
{
  totalBeforeDiscounts: 794,
  discounts: 0,
  grandTotal: 794
}
```

## Stage 1

As you can see in this response, we would like to have the ability of having discounts. We are thinking of:
- *Soda can*: Buy 2 get 1 free
- *Sauce bucket*: 10% off if you buy more than 5

So the above basket will return the following totals:
```javascript
{
  totalBeforeDiscounts: 794,
  discounts: 158,
  grandTotal: 636
}
```

## Stage 2

Also, we would like to start selling oranges, but those are priced by weight, not by unit.

Please implement items priced by weight.

- Do not allow negative or zero quantities
- Validate that products added to a basket are defined
- Meal deal: Buy a Crisp Bag and a Soda Can for 1.50€
