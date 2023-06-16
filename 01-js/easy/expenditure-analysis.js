/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const outputArray = [];
  const currentID = 0;
  
  while(transactions.length>0){
    const currentCategory = transactions[currentID].category;
    const totalCategoryAmount = transactions[currentID].price;
    for (let i = currentID + 1; i < transactions.length; i++)  {
      if (transactions[i].category === transactions[currentID].category) {
        totalCategoryAmount = totalCategoryAmount + transactions[i].price;
        transactions = transactions.filter(element=>element!==transactions[i]);
        i--;
      }
    }

    outputArray.push({category:currentCategory,totalSpent:totalCategoryAmount});
    currentID = currentID + 1;

  }
  return outputArray;
}

module.exports = calculateTotalSpentByCategory;
