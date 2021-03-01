# Andrey Shamrey

## This repo was created for use backend in react-game task

### To work on a local server, clone this repo and follow the instructions below.

## NPM commands

#### Initialization
`> npm install`

#### Server start
`> npm run dev` to start with dev-mode 

or

`> npm run start`

--- 

### Also you can start the server by following [this](https://andrews-react-game.herokuapp.com/) link 

```
READ list of gamers -> /api/gamers
READ all games statistics by its own name -> /api/gamers/:name
CREATE new gamer to data -> send POST request to address /api/gamers 
UPDATE an existing gamer by its own id -> send PUT request to address /api/gamers/:id
DELETE an existing gamer by its own id -> send DELETE request to address /api/gamers/:id
```

_The `name` field is mandatory and should be 'String'_

_The `id` field is filled in automatically_
