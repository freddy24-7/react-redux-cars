# React Redux Car List App

This is a simple React Redux application that allows you to create a car list with search functionality and calculate the total cost of the cars.
The code is taken from Stephen Grider's Udemy course [Modern React with Redux](https://www.udemy.com/course/react-redux/).
The aim of this project is to demonstrate the use of Redux toolkit in a React application. This is at a basic level, without http-requests and async code.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd react-redux-car-list-app
```

3. Install the dependencies:

```bash
npm install
```

## Usage

To start the application, run the following command:

```bash
npm start
```

This will start the development server and open the application in your default browser.

## Features

- Add cars to the list with name and cost
- Remove cars from the list
- Search for cars by name
- Calculate the total cost of the cars

## Project Structure

The project structure is as follows:

- `src`
    - `components`
        - `CarForm.js` - Component for adding cars to the list
        - `CarList.js` - Component for rendering the car list
        - `CarSearch.js` - Component for searching cars by name
        - `CarValue.js` - Component for calculating the total cost of the cars
    - `slices`
        - `carsSlice.js` - Redux slice for managing the car list state
        - `formSlice.js` - Redux slice for managing the form state
    - `store`
        - `index.js` - Redux store configuration
    - `App.js` - Main component that renders the car list app
    - `index.js` - Entry point of the application

## Technologies Used

- React - JavaScript library for building user interfaces
- Redux - State management library for JavaScript applications
- Bulma - CSS framework for styling the application

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to explore and customize the application to suit your needs. Enjoy managing your car list with React Redux!