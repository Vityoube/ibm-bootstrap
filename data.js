let expenseData = {
    "totalExpenses": 1147,
    "expenses": [
        {
            "_id": "6614df9c9b1af2b777d14da8",
            "description": "Medicines",
            "amount": 25,
            "date": "2020-01-25T00:00:00.000Z",
            "categoryName": "Healthcare"
        },
        {
            "_id": "6614df9c9b1af2b777d14da5",
            "description": "Doctor Visit",
            "amount": 40,
            "date": "2020-01-24T00:00:00.000Z",
            "categoryName": "Healthcare"
        },
        {
            "_id": "6614df9c9b1af2b777d14da7",
            "description": "Car Maintenance",
            "amount": 90,
            "date": "2020-01-24T00:00:00.000Z",
            "categoryName": "Transportation"
        },
        {
            "_id": "6614df9c9b1af2b777d14da4",
            "description": "Retirement Account",
            "amount": 47,
            "date": "2020-01-23T00:00:00.000Z",
            "categoryName": "Savings and Investments"
        },
        {
            "_id": "6614df9c9b1af2b777d14d96",
            "description": "Groceries",
            "amount": 44,
            "date": "2020-01-22T00:00:00.000Z",
            "categoryName": "Food"
        },
        {
            "_id": "6614df9c9b1af2b777d14da1",
            "description": "Mutual Funds",
            "amount": 20,
            "date": "2020-01-17T00:00:00.000Z",
            "categoryName": "Savings and Investments"
        },
        {
            "_id": "6614df9c9b1af2b777d14d95",
            "description": "Groceries",
            "amount": 28,
            "date": "2020-01-15T00:00:00.000Z",
            "categoryName": "Food"
        },
        {
            "_id": "6614df9c9b1af2b777d14da6",
            "description": "Fuel",
            "amount": 21,
            "date": "2020-01-13T00:00:00.000Z",
            "categoryName": "Transportation"
        },
        {
            "_id": "6614df9c9b1af2b777d14da0",
            "description": "Haircut",
            "amount": 22,
            "date": "2020-01-12T00:00:00.000Z",
            "categoryName": "Personal Care"
        },
        {
            "_id": "6614df9c9b1af2b777d14d9e",
            "description": "Water Bill",
            "amount": 28,
            "date": "2020-01-11T00:00:00.000Z",
            "categoryName": "Utilities"
        },
        {
            "_id": "6614df9c9b1af2b777d14d9d",
            "description": "Outing",
            "amount": 83,
            "date": "2020-01-10T00:00:00.000Z",
            "categoryName": "Entertainment"
        },
        {
            "_id": "6614df9c9b1af2b777d14d9c",
            "description": "Tution Fee",
            "amount": 44,
            "date": "2020-01-09T00:00:00.000Z",
            "categoryName": "Education"
        },
        {
            "_id": "6614df9c9b1af2b777d14da3",
            "description": "Stocks",
            "amount": 11,
            "date": "2020-01-07T00:00:00.000Z",
            "categoryName": "Savings and Investments"
        },
        {
            "_id": "6614df9c9b1af2b777d14d99",
            "description": "Life Insurance",
            "amount": 80,
            "date": "2020-01-05T00:00:00.000Z",
            "categoryName": "Insurance"
        },
        {
            "_id": "6614df9c9b1af2b777d14d9a",
            "description": "Internet Bill",
            "amount": 17,
            "date": "2020-01-05T00:00:00.000Z",
            "categoryName": "Utilities"
        },
        {
            "_id": "6614df9c9b1af2b777d14d98",
            "description": "School Fees",
            "amount": 110,
            "date": "2020-01-04T00:00:00.000Z",
            "categoryName": "Education"
        },
        {
            "_id": "6614df9c9b1af2b777d14d9f",
            "description": "Rent",
            "amount": 280,
            "date": "2020-01-04T00:00:00.000Z",
            "categoryName": "Housing"
        },
        {
            "_id": "6614df9c9b1af2b777d14d94",
            "description": "Groceries",
            "amount": 54,
            "date": "2020-01-03T00:00:00.000Z",
            "categoryName": "Food"
        },
        {
            "_id": "6614df9c9b1af2b777d14d97",
            "description": "Haircut",
            "amount": 33,
            "date": "2020-01-03T00:00:00.000Z",
            "categoryName": "Personal Care"
        },
        {
            "_id": "6614df9c9b1af2b777d14d93",
            "description": "Electricity Bill",
            "amount": 37,
            "date": "2020-01-02T00:00:00.000Z",
            "categoryName": "Utilities"
        },
        {
            "_id": "6614df9c9b1af2b777d14d9b",
            "description": "Gym Membership",
            "amount": 33,
            "date": "2020-01-02T00:00:00.000Z",
            "categoryName": "Personal Care"
        }
    ]
};

let expenseSummaryData = [
  {
    categoryName: "Education",
    percentage: "13.43%",
  },
  {
    categoryName: "Entertainment",
    percentage: "7.24%",
  },
  {
    categoryName: "Food",
    percentage: "10.99%",
  },
  {
    categoryName: "Healthcare",
    percentage: "5.67%",
  },
  {
    categoryName: "Housing",
    percentage: "24.41%",
  },
  {
    categoryName: "Insurance",
    percentage: "6.97%",
  },
  {
    categoryName: "Personal Care",
    percentage: "7.67%",
  },
  {
    categoryName: "Savings and Investments",
    percentage: "6.80%",
  },
  {
    categoryName: "Transportation",
    percentage: "9.68%",
  },
  {
    categoryName: "Utilities",
    percentage: "7.15%",
  },
];

let user = {
  userid: "USER_1",
  income: 1400,
};

let expenseCategories = {
  categories: [
    "Education",
    "Entertainment",
    "Food",
    "Healthcare",
    "Housing",
    "Insurance",
    "Miscellaneous",
    "Personal Care",
    "Savings and Investments",
    "Taxes",
    "Transportation",
    "Utilities",
  ],
};
