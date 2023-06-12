import sequelize from "./models/index.js";

sequelize.sync({
    alter:true
})