import {getMemberPopulatedGroup} from "./get-member-populated-group";
import {getRequestsForGroup} from "./get-request-for-group";

export const getOwnerPopulatedGroup = async (groupId) => {
    const group = await getMemberPopulatedGroup(groupId);
    const requests = await getRequestsForGroup(groupId);
    const populatedGroup = {
        ...group,
        requests
    }
    return populatedGroup;
}