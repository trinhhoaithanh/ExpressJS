import { Sequelize } from "sequelize";

let sequelize = new Sequelize("student_management","root","1410",{
    host:"localhost",
    dialect:"mysql",
    port:"3306"
});
try{
    await sequelize.authenticate();
    console.log("thành công")
}catch{
    console.log("thất bại")
}
export default sequelize;