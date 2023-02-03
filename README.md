# Sentisis Front-End Challenge by Héctor Matías González

## 🚀 Project initialization
To initialize the project, follow these steps:
 
```
1. Clone the repository
2. Install the dependencies with **npm install**
3. Run the project with **npm run dev**
```

## 📦 Project structure

The project is divided into the following folders:
- **pages**: Contains the Home Page of the application.
- **components**: Contains the components of the application.
- **redux**: Contains the redux configuration of the application.
- **interfaces**: Contains the interfaces of the application.
- **cypress**: Contains the cypress e2e tests of the application.
- **common**: Contains the common functions of the application.

## 📝 Notes
To create the project I have decided to use **vite** instead of **create-react-app** since it is faster and lighter.

Regarding development, the first thing I have done has been to configure the linter. I have used eslint for this project to keep the code clean and tidy.
You can run the linter with the following command
```
npm run lint
```
For the visual part of the project, I used the MaterialUI library and modified some styles to use the colors from your [website] (https://www.sentisis.com/).
- Primary color: <p style="color:#FDA47B"> #FDA47B </p>
- SecondaryColor: <p style="color:#D9B5F6"> #D9B5F6 </p>

To store the quantities, I decided to use Redux with persistor, even though lighter solutions such as context or even localStorage could have been used, I chose Redux since it was one of the requirements in the job offer.

When loading the data, we check if saved data exists, and if it does, we load it. Otherwise, we load the data from the API.

As for testing, I used the react-testing library along with vitest (since vitest is faster than jest) for unit testing, and cypress for end-to-end testing.
There is only one end-to-end test, which tests the general interface shown in the Home component. For unit tests, I created a test for each component and each element in Redux.
Here are the test results:


## 🧪 Coverage summary
```
- Statements   : 96.66% ( 116/120 )
- Branches     : 88.23% ( 44/50 )
- Functions    : 96.15% ( 46/48 )
- Lines        : 96.22% ( 113/117 )
```

```
File                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------------|---------|----------|---------|---------|-------------------
All files                       |   96.66 |    88.23 |   96.15 |   96.22 |                   
 common                         |     100 |      100 |     100 |     100 |                   
  capitalize.ts                 |     100 |      100 |     100 |     100 |                   
  dateParser.ts                 |     100 |      100 |     100 |     100 |                   
  getCurrencyFormat.ts          |     100 |      100 |     100 |     100 |                   
  moneyParser.ts                |     100 |      100 |     100 |     100 |                   
 components/CartButton          |     100 |      100 |     100 |     100 |                   
  CartButton.tsx                |     100 |      100 |     100 |     100 |                   
 components/Loading             |     100 |      100 |     100 |     100 |                   
  SpinnerComponent.tsx          |     100 |      100 |     100 |     100 |                   
 components/Modal               |     100 |      100 |     100 |     100 |                   
  ProductDataModalComponent.tsx |     100 |      100 |     100 |     100 |                   
  SummaryModalComponent.tsx     |     100 |      100 |     100 |     100 |                   
 components/Table               |   93.33 |      100 |   88.88 |   91.66 |                   
  TableComponent.tsx            |    87.5 |      100 |      80 |   83.33 | 86                
  UnitSelector.tsx              |     100 |      100 |     100 |     100 |                   
 redux/actions                  |     100 |      100 |     100 |     100 |                   
  data.actions.ts               |     100 |      100 |     100 |     100 |                   
 redux/reducers                 |      80 |    33.33 |     100 |      80 |                   
  data.reducer.ts               |      80 |    33.33 |     100 |      80 | 16                
 redux/types                    |     100 |      100 |     100 |     100 |                   
  index.ts                      |     100 |      100 |     100 |     100 |                   
```