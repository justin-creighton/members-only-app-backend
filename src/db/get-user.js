import { db } from "./db";

export const getUser = async (id) => {
    const connection = db.getConnection();
    const user = connection.collection('users').findOne({ id });
    return user;
}