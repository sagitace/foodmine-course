## lessons
1. Install to the course
2. Install development tools
3. Create Angular App
    1. Create project's folder
    2. Install @angular/cli
    3. Create App as frontend
4. Add Header
    1. Generate Component
    2. Add HTML
    3. Add Css
5. List foods
    1. Create food model
    2. Create data.ts
        1. add sample foods
    3. Add images to assets
    4. Create Food Service
    5. Create Home component
        1. Add ts
        2. Add html
        3. Add css
6. Search
    1. Add method to Food service
    2. Add search route
    3. Show search result in Home component
    4. Generate search component
        1. Add to home component
        2. add ts
        3. add html
        4. add css
7. Tags Bar
    1. Create tag Model
    2. Add sample tags to data.ts
    3. Food Service
        1. Add get all tags method
        2. Add get all foods by using tag method
    4. Add tags route
    5. Show tag results in Home component
    6. Generate Tags component
        1. Add to home component
        2. Add ts
        3. Add html
        4. add css
8. Food Page
    1. Add method to food service
    2. Generate Food Page component
        1. Add Route
        2. Add ts
        3. Add html
        4. Add css
9. Cart Page
    1. Create cartItem Model
    2. Create Cart Model
    3. Generate Cart Service
    4. Add to Cart Butoon in Food Page
    5. Generate Cart Page Component
        1. Add Route
        2. Add ts
        3. Add html
        4. Add css
11. Connect To Backend
    1. Create backend folder
    2. npm init
    3. npm install typescript
    4. Create tsconfig.json
    5. create .gitignore
    6. Copy data.ts to backend/src
    7. npm install express cors
    8. Create server.ts
        1. install @types
        2. add apis
    9. npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update food service,,
12. Login Page
    1. Generate Component
        1. Add to router
        2. add ts
        3. add html
            1. Import Reactive Forms Module
        4. Add Css
    2. Add Login Api
        1. Use json
        2. add jsonwebtoken
        3. Test Using postman
    3. Generate User service
        1. Generate User model
        2. Add user subject
        3. Add login method
            1. Add User Urls
            2. Generate IUserLogin interface
            3. Add ngx-toastr
                1. Import Module
                2. Import BrowserAnimationsModule
                3. Add Styles in angular.json
            4. Add to header
                1. Add Local storage methods
                2. add logout method
                    1. Add to header
13. Make Components for login page
    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button
14. Connect Login API to MongoDB atlas
    1. Moving Apis into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
        1. mongoose
        2. dotenv
        3. bcryptjs
        4. jsonwebtoken
        5. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis
15. Register User
    1. Add Register api
    2. Add register service method
    3. Add register link
    4. add register component
16. Loading
    1. Add image
    2. add component
    3. Add service
    4. Add Interceptor
17. Checkout Page
    1. Create order model
    2. Create checkout page component
        1. Add to router
    3. Add user to user service
    4. Add cart to cart service
    5. Create Order Items List component
    6. Adding Map to the checkout page
        1. Add leaflet npm package
            1. Add leaflet npm package
            2. Add Css to angular.json
        2. Add adressLatLng to order model
        3. Create Map component
            1. Add to checkout page
            2. add ts
                1. Change app-map selector to map
            3. Add Html
            4. Add css
        4. Add auth Guard