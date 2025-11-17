const items = require("../Data/lijst")
const alleItems = require("../Data/lijst")
const { all } = require("../Routes/items")


const getAll = (req,res)=>{
    res.json({gelukt:"ok", data:alleItems})
}

const getOne = (req,res)=>{
    const idItem = req.body.id
    res.json(alleItems.filter((item)=>item.id ==idItem))
}

const deleteOne = (req,res)=>{
    // req.query --> querystring
    // req.params --> routes methode 
    // req.body --> post methode 
    const idItem = req.body.id

    //hoe wis ik een element uit een array
    const itemToDel = items.find((item) => item.id == idItem)
   
    
    const idexItemToDel = items.indexOf(itemToDel)

    items.splice(idexItemToDel,1)
    


    res.json({status:"ok"})
}

const addLeerling = (req, res) => {
  // id , naam , voornaam , email
  
  let itemId = 0
  //op zoek gaan naar max id uit mijn array
  items.forEach(item =>{
    if (itemId<item.id) itemId = item.id
  })
  itemId++

  items.push({
    id: itemId,
    naam: req.body.naam,
    voornaam: req.body.voornaam,
    email: req.body.email,
  });
  res.json({status: "gelukt"})
};

module.exports={
    getAll,
    getOne,
    deleteOne,
    addLeerling,
}