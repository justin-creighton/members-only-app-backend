import {db} from "./db";
import {getGroup} from "./get-group";
import {getMessagesForGroup} from './get-messages-for-group.js';

export const getMemberPopulatedGroup = async (groupId) => {
    const group = await getGroup(groupId);
    const messagesForGroup = await getMessagesForGroup(groupId);
    const populatedGroup = {
        ...group,
        messages: messagesForGroup,
    }
    return populatedGroup
}