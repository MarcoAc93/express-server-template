# express-server-template

## This is a simple node app with express
---

### install dependencies
`yarn install`

### Run the server
`yarn dev`

---

# TODO

## 1.  Fix the server
Something is happening with the server, the output on the terminal points that the server is up and running on port 8000, but when making request to / we aren't able to receive the health check

## 2. Send the greetings from /greetings
Cool! you just fixed the server. Wait a second... ohhh no we aren't able to send responses from /greetings route, fix the route to send the greetings

## 3. Create more endpoints
Woow you are killing it, you already fix the server and we are sending greetings. Now we need to create more endpoints.
Using the API of [Rick and Morty](https://rickandmortyapi.com/documentation/#rest) we need to create the following endpoints
- Get all the characters
- Get one character
- Search for a character
Make the name of the routes restfull following the best practices

---

## Extra points
This isn't required to be done, feel free to ignore it, but if you do it, it'll get you some extra points

- Create a middleware that SIMULATES the authentication, it doesn't need to be a fancy or robust approach, we just want to know if you are able to come up with an idea.
