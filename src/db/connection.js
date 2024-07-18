import { Sequelize } from "sequelize";
import { DB_NAME } from "../constants.js";


const connectdb = async () => {
    const sequelize = new Sequelize(`${process.env.CONNECTION_URL}${process.env.PORT}/${DB_NAME}`);
    // const sequelize = new Sequelize('mysql://root:@localhost:3306/practice');

    try {
        await sequelize.authenticate();
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1);
    }
}

export{
    connectdb
}