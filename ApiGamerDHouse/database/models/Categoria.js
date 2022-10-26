
module.exports = (sequelize,dataTypes)=>{

    const alias = "Categoria";

    const cols={

        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoincrement:true
            
        },
        nombre:{
            type:dataTypes.STRING
        }
       


    };

    const config={
        tableName:"categoria",
        timestamps:false
    }



    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = (models)=>{

       Categoria.hasMany(models.Producto,{
            as:"articulos",
            foreignKey:"categoria_id"
       })
    
        ;
    
    }

    return Categoria;
        

}