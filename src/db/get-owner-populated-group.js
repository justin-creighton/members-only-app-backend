import {getMemberPopulatedGroup} from "./get-member-populated-group";
import {getRequestForGroup} from "./get-request-for-group";

export const getOwnerPopulatedGroup = async (groupId) => {
    const group = await getMemberPopulatedGroup(groupId);
    const requests = await getRequestForGroup(groupId);
    const populatedGroup = {
        ...group,
        requests
    }
    return populatedGroup
}