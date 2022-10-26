const path= require('path');
const db = require('../../database/models/index');

const indexController ={

    vista: (req, res)=>{

       db.Producto.findAll(
        { include:[
          {
            association : "categoria"},
          {
            association : "genero"    
        }],
      
        limit: 9,
        order:[
            ['id','DESC']
            
               ]
    
      },
       
       )
          .then(productos=> {
              
            return res.render(path.join(__dirname, '../views/users/index.ejs'),{ productos:productos })
          });
        
    

    
}
}

module.exports = indexController;