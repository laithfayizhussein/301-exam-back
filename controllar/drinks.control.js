'use strict '

const axios = require ('axios') ;

const {Drinks , drinksModal } = require ('../modals/drinks.modal')
// to get data from the api 
const getDrink =(req , res)=>{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
    axios.get(url).then(data=>{
        const mapDrink = data.drinks.map(value =>{
            return new Drinks (value) ;
        })
        res.send(mapDrink)
    })
    console.log(mapDrink);

}

// to creat 

const addFav = (req , res) =>{
    const {strDrink ,strDrinkThumb , idDrink} = req.body
    drinksModal.find({idDrink:idDrink}) , (error , drinkData)=>{
        if (drinkData.length > 0) {
            res.send ('data is exist' )

            
        }else { const newDrink = new drinksModal ({strDrink :strDrink , strDrinkThumb :strDrinkThumb , idDrink :idDrink})
        newDrink.save();
        res.json(newDrink)
        }
    }
}


const getFav = (req , res)=>{
    drinksModal.find ({} ,(error , data )=>{
        res.json(data)
    })
}

const deleteFav = (req , res)=>{
    const idDrink = req.params.idDrink

    drinksModal.remove({idDrink:idDrink} ,(error , data )=>{
        if (error) {
            res.sned(error)
            
        }else {
            res.send(data)
        }
    })
}

const updateFav = (req , res )=>{
    const {strDrink ,strDrinkThumb }=req.body;
    const idDrink  = req.params.idDrink ;

    drinksModal.find ({idDrink:idDrink} , (error , data )=>{
        if (error) {
            res.send(error)
        }else{
            drinks[0].strDrink = strDrink;
            drinks[0].strDrinkThumb = strDrinkThumb;
            drinks[0].save();

            drinksModal.find ({} ,(error , data )=>{
                res.json(data)
            })

        }
    })
} 


module.exports ={
getDrink ,
addFav ,
getFav,
deleteFav ,
updateFav
}