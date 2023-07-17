# React Redux Playlist App

This is a simple React Redux application that allows you to create and manage playlists for movies and songs.
The code is taken from Steven Grider's [Modern React with Redux](https://www.udemy.com/course/react-redux/) course on Udemy.
The code illustrates how to use Redux with React to manage the state of the application, using React Redux Toolkit.
Beyond that, a useful search functionality is also part of this project.

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
cd react-redux-playlist-app
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

- Add movies and songs to the playlists
- Remove movies and songs from the playlists
- Reset both playlists to the initial state

## Project Structure

The project structure is as follows:

- `src`
    - `components`
        - `MoviePlaylist.js` - Component for the movie playlist
        - `SongPlaylist.js` - Component for the song playlist
    - `data`
        - `index.js` - Functions to create random movies and songs
    - `slices`
        - `MoviesSlice.js` - Redux slice for managing the movie playlist state
        - `SongsSlice.js` - Redux slice for managing the song playlist state
    - `store`
        - `index.js` - Redux store configuration
        - `actions.js` - Redux actions
    - `App.js` - Main component that renders the playlists and reset button
    - `index.js` - Entry point of the application

## Technologies Used

- React - JavaScript library for building user interfaces
- Redux - State management library for JavaScript applications
- Bulma - CSS framework for styling the application

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to explore and customize the application to suit your needs. Enjoy managing your playlists with React Redux!