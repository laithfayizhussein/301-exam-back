'use strict'

const mongoose = require("mongoose");


class Drinks {

    constructor (drinks){
        this.strDrink=drinks.strDrink ;
        this.strDrinkThumb=drinks.strDrinkThumb ;
        this.idDrink=drinks.idDrink ;
    }
    
}

const drinkSchema = new mongoose.Schema({
    strDrink: String ,
    strDrinkThumb: String ,
    idDrink: String 
  });

//   to conect schema with mongoose 
  const drinksModal = mongoose.model('Drinks', drinkSchema);



module.exports ={
    Drinks ,
    drinksModal 
}