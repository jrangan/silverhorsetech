# silverhorsetech

To run the tests follow the below steps
    Install nodejs

    npm install cypress --save-dev   

    npm install -D cypress-xpath  
        Add this line in e2e.js to use the xpath in tests 
        require('cypress-xpath')

Set baseUrl in cypress.config.js so that in future if we want to test in any other environment we can just change in the config

To run all the tests
    npm cypress run
