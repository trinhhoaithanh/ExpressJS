import { DataTypes, Model } from "sequelize";
import sequelize from "./index.js";

class Student extends Model{}
Student.define({
    fullName:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER
    },
    numberClass:{
        type:DataTypes.INTEGER
    }
},{
    sequelize:sequelize,
    modelName:"Student",
    tableName:"students",
    timestamps:false
})