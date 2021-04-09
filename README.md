# Amazon Clone

## Server starting:
1. Navigate to folder
2. npm start :rocket: 

__________________________________________________________


## Technologies:

1. NodeJS
2. EJS
3. MongoDB


_______________________________________________________

## Database Info

```
    Product{
        id,
        name,
        price [range]
        time end
        discount
        Stars
        views
        category
        availability [in stock || out of stock]
        quantity
        img
        dealtype
        description
    }
```

DataBase: MonogDB
Import:
-> .\mongoimport.exe --db amazon_nodejs --file "<PATH TO JSON FOLDER>"
Example:
-> .\mongoimport.exe --db amazon_nodejs --file "<C:\......\categories.json>"

Import List:
-> .\mongoimport.exe --db amazon_nodejs --collection categories --file "<PATH TO JSON LIST>" --jsonArray
Example:
->.\mongoimport.exe --db amazon_nodejs --collection categories --file "C:\......\categories.json" --jsonArray

[^1]: All necessary data are storaged in Database folder.
[^1]: categories2.json is a list of categories.
[^1]: Inside the folder "Products" you have products for each category.

Underscores