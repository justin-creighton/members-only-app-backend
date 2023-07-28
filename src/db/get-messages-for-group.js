import {db} from "./db";
import {getUser} from "./get-user";

export const getMessagesForGroup = async (groupId) => {
    const connection = db.getConnection();
    const messages = await connection.collection('messages').find({
        groupId,
    }).toArray();

    const usersForMessages = await Promise.all(messages.map(message => getUser(message.userId)));
    const populatedMessages = messages.map((message, i) => {
        return {
            ...message,
            userName: usersForMessages[i].fullName,
        }
    });
    return populatedMessages
}