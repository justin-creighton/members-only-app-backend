import {db} from "./db";

export const getRequest = async (requestId) => {
    const connection = db.getConnection();
    const request = connection.collection('requests').findOne({id: requestId});
    return request;
}