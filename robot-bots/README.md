### Bot Battlr
Bot Battlr is a React web application that lets you browse through a list of robots, view their details, and enlist them into your army. It's a great way to practice working with components, props, state, events, and data fetching in React.

## Table of Contents
> - Installation
> -Usage
> -Endpoints
> -Contributing
> -License

# Installation
To get started, clone this repository and install the required dependencies by running:

  npm install
Then, create a db.json file in the root directory of the project and use this data as your server DB.

Finally, start the server by running:


  json-server --watch db.json
Now you're ready to start the development server:


  npm start


## Usage
Once the development server is running, you can access the application at http://localhost:3000.

The main page displays a list of available bots, with their name, class, health, damage, and armor. You can click on a bot to see more details about it, and choose to enlist it into your army by clicking on the "Enlist" button. Enlisted bots are shown in a separate section below the list of available bots, and can be removed by clicking on the "Release" button.

## Endpoints
The application fetches data from a local server running JSON DB server. Here are the available endpoints:

## GET /bots
Returns a list of all bots in the database, with their id, name, class, health, damage, armor, catchphrase, avatar URL, and creation/update dates.

Example response:

  db.json

[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  }
]

## Contributing
Contributions are welcome! If you have any suggestions or find any bugs, please open an issue or submit a pull request.

## License
This project is licensed and by MIT licensed.

## CODED BY: MOHAMED.A.SALAD