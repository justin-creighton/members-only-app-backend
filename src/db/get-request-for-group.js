import {db} from './db';
import {getUser} from "./get-user";

export const getRequestsForGroup = async (groupId) => {
    const connection = db.getConnection();
    const requests = await connection.collection('requests').find({groupId}).toArray();
    const usersForRequests = await Promise.all(
        requests.map(request => getUser(request.userId))
    );
    const populatedRequests = requests.map((group, i) => {
        return {
            ...group,
            userName: usersForRequests[i]['fullName'],
        }
    })

    return populatedRequests;
}