#Musicify

GraphQL for microservice

Commands list: 
1. "git clone https://github.com/elem15/Musicify.git"
2. "cd Musicify"
3. "git checkout dev"
4. "npm i"
5. run your data base and microservice 
6. rename .env.example file to .env
6. "npm start" or "npm run build"
7. open in browser the link "http://localhost:3000/graphql" 

Now you can use GraphQL service. 

You can access to bands, artists, tracks, genres, albums,
for example run command 
{
  genres{
    _id
   	name
  	year
  }
}
or 
{
  genres(limit: 3, offset: 0){
    _id
   	name
  	year
  }
}
or 
{
  genre(id: "62c573c233d48f58bf368a72"){    
   	name
  	year
  }
}

To get access to mutations you need to register and log in.

Register new user: 

{
  register(firstName: "Myname", lastName: "Mylastname" email: "mail@gmail.com", password: "word11234"){
		email
  }
}
(password more then 8 symbols)
Log in: 
{
  jwt(email: "mail@gmail.com", password: "word11234"){
		jwt
  }
}

Now you can add, update, delete items and add items to favorites.
For example:

mutation{
	createBand(name: "New name", origin: "New origin", members: ["id", "id2"]) {
    _id
    name
    origin
    members
  }
}

mutation{
	updateBand(id: "62c9fd5b5b8eba5f120c5ddb", name: "New name2", origin: "New origin2", members: ["id1", "id4"]) {
    _id
    name
    origin
    members
  }
}

mutation{
	deleteBand(id: "62c9fd5b5b8eba5f120c5ddb") {
   	acknowledged
    deletedCount
  }
}

mutation{
  addArtistsToFavorites(id: "ffaffdfdfaj") {    
    userId
    genresIds
    tracksIds
    artistsIds
    bandsIds
  }
}

mutation{
  addBandsToFavorites(id: "ffafffdfaj") {    
    userId
    genresIds
    tracksIds
    artistsIds
    bandsIds
  }
}

mutation{
  addTracksToFavorites(id: "ffdfdfaj") {    
    userId
    genresIds
    tracksIds
    artistsIds
    bandsIds
  }
}

mutation{
  addGenresToFavorites(id: "ffafdfaj") {    
    userId
    genresIds
    tracksIds
    artistsIds
    bandsIds
  }
}

Good luck with this GraphQL service!