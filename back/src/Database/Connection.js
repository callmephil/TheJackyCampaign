import Database from 'better-sqlite3';
import Blog from './Queries/Blog';
import Users from './Queries/Users';
import Campaign from './Queries/Campaing';

let Connection;
const openConnection = () => {
    try {
        const path = require('path');
        const dbPath = path.resolve(__dirname, './db.sqlite');
        const db = new Database('./db.sqlite'); // Use dbPath : Currently using copy 
        return db;
    } catch (error) {
        console.log(`Database Connection failed : ${error}`)
    }
}

const getConnection = async () => {
    try {
        if (!Connection)
            Connection = openConnection();
        else
            console.log("Connection Already Openeded, No need to re-open");

        const campaignController = await Campaign(Connection); 
        const usersController = await Users(Connection); 
        const blogController = await Blog(Connection); 

        const controllers = {
            usersController,
            campaignController,
            blogController
        }
        
        return controllers;
    } catch (e) {
        console.log(`Failed to get database connection : ${e}`)
    }
}

export default getConnection;