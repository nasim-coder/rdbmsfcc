const express = require('express');
const userRouter = express.Router();
const controller = require('../controller/userController');

//route to register
userRouter.post('/signUp', controller.register);
//route for login
userRouter.post('/login', controller.login);
//route to create a store
userRouter.post('/createStore', controller.createStore);
//route to add stock of books in a store
userRouter.post('/addStock', controller.addStock);
//add more book in a stock
userRouter.put('/addbookinStock', controller.updateStock);
//delete a book from the stock
userRouter.delete('/deleteBook/:isbn', controller.deleteBookfromStock);
//see all the stores
userRouter.get('/seeStores', controller.viewStores);
//see all the stock of books in a single store
userRouter.get('/seeStocks', controller.viewStock);

module.exports = userRouter;