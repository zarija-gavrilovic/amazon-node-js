# Amazon Clone

## Server starting:
1. Navigate to folder :point_right:
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

### Import 

All necessary data are storaged in Database folder.
categories2.json is a list of categories.
Inside the folder "Products" you have products for each category.

DataBase: MonogDB  
  
**Import:**  
*-> .\mongoimport.exe --db amazon_nodejs --file "PATH TO JSON FOLDER"*  
Example:  
*-> .\mongoimport.exe --db amazon_nodejs --file "C:\......\categories.json"*  
  
**Import List:**  
*-> .\mongoimport.exe --db amazon_nodejs --collection categories --file "PATH TO JSON LIST" --jsonArray*  
Example:  
*->.\mongoimport.exe --db amazon_nodejs --collection categories --file "C:\......\categories.json" --jsonArray*  

 
__________________________________________________________