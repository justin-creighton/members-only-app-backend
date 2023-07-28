import {db} from "./db";
import {getGroup} from "./get-group";
import {getOwnerPopulatedGroup} from "./get-owner-populated-group";
import {getMemberPopulatedGroup} from "./get-member-populated-group";

export const addMessageToGroup = async (groupId, userId, text) => {
    const connection = db.getConnection();
    await connection.collection('messages').insertOne({groupId, userId, text});

    const group = await getGroup(groupId);

    if(group.ownerId === userId) {
        return await getOwnerPopulatedGroup(groupId);
    }

    return await getMemberPopulatedGroup(groupId);
}