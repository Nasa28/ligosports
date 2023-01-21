# LIGOSPORT

## The is to simple with three endpoints to create game stats for a player, get all the game stats and get the totals of the players stats for the season.


## Built With

- Node
- Express
- mysql
- Sequelize



## API DOCUMENTATION

### [Documentation](http://localhost:5000/api-docs)

## Getting Started

To get a local copy up and running follow these simple example steps.
On your terminal, run

```
 git clone git@github.com:Nasa28/ligosports-.git

```

### Setup

Install dependencies with:

```
npm install
```

### Usage


#####  Create development and test Databases on your machine


#####  Start server with:


```
    npm start
```


#### Seed Data for testing with

```
    npm run seed-data
```

##### Get Stats By PlayerId

```
    http://localhost:5000/api/gamestats/:playerId`
```


##### Get the total season Stats for a Player


```
    http://localhost:5000/api/total/:playerId`

```



#### Create stats for a player 

```
    http://localhost:5000/api/total/:playerId`

```

## TEST

### Run test with 

```
    npm test
```


## Run the app using docker-compose*



#####  Start the app

```bash
docker-compose up --build
```

#####  Seed data

```bash
docker exec -it ligos_app npm run seed-data      
```

 
### Deployment

## Authors

👨‍💻 **Kalu Chinasa Agu**

- Github: [@Nasa28](https://github.com/Nasa28)
- Twitter: [@Ultimate_Nasa](https://twitter.com/Ultimate_Nasa)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/kalu-chinasa-agu-a15080103/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Nasa28/ligosport/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgements

## 📝 License

This project is [MIT](https://github.com/stevenvachon/broken-link-checker/blob/main/license) licensed.
