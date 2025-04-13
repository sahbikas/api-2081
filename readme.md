## NODE API SERVER

 install package 
  ---> npm init
  ---> npm i express
  ---> npm i nodemon



### 
  - should be in json format
  - the json should contain: result: <any> message:<string> meta: null | object


  - API ==> Application programming Interface


  a. Request
    - method
    - endpoint
       - protocol://domainlink:portno/params?queryString
       - http ====> 80
       - ftp ====> 21
       - https ====> 443
       - sftp ====> 22
       - smtp ====> 25
    - data
      - url
         - params
         - query string
      - body
        - multipar/form-data
        - x-www-urlencoded
        - application/json
      - header
        - json key:value


- http package
  - node server enviroment
- express package
  - server program
- http package
  - express application (server side)
  - socket
  - graph
  - smtp

  PORTS ====> 0-2^16-1 => 0-65535

//  Google search => reserved ports range

### Ecommerce
   - banner
    - CRUD
     - detail by id
     - list all
     - list by home
   - user
    - CRUD
      - detail id
      - list all
      - list all based on roles
   - product
     - CRUD
       - list all
       -list all filter
       - based on seller
       - 
   - brand
     - CRUD
       - 
   - category
   - order
   - reciew
   - blogs
   - transaction
   - offer
   - chat online
   - multi user access

## Monolithic
## MicroService

## design MVC pattern
  - model
    ----> Database operation
  - view
     - Presentation
  - controller
    ----> Business Logic
e.g.
   url Login imlete
    server
      Route ===> controller <======> model <===> DB server
                ====> view / response
  colose  Route =====> Middleware ===> controller <=====> Service/Repository <======> model <===> DB server

  ### Express JS
      .use('url', callbackFunction(requrest, response))

### Middleware
  - Every function/actions mounting on express app is a middleware
  - at least 3 arguments or eles 4
    - First: always request or error object
    - Second always response or request
    - Third always next scope (cb function) or response
    - Furth: nothing or next scope(cb)

    e.g (req, res, next)
    or
    (error, req, res, next)
.a Application level middleware
b. Routing 
### Controller


###      REST API
   Representational Stateless Transfer CRUD

     - Create
       .post(url, callback)
     - Read
       .get(url, callback)
     - Update
       .put(url, callback), .patch(url, callback)
     - Delete
       .delete(url, callback)

### Project module
### Auth and Authorization
  - Register
    - post request ===> endpoint/register
  - verify Token/opt
     ===> get request ===> endpoint/verify-token/:token or opt verify
  - User Activate
     - post request ==> endpoint/activate/:token
  - Forget Password Email
    - post request ==> endpoint/forget-password
  - Reset Password
    - post request ===> endpoint/ipdate-password/:token
  - Login
    - post request ==> endpoint/login
  - Logout
    - get request ==> endpoint/logout
  - Profile access
    - get request ===> endpoint/me
  - user Update
    - put/patch request ===> endpoint /user-update/:userId