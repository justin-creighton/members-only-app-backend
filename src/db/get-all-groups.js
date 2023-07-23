import { db } from './db';
import { getUser } from './get-user';

export const getAllGroups = async () => {
    const connection = db.getConnection();
    const groups = await connection.collection('groups').find({}).toArray();
    const groupOwners = await Promise.all(
        groups.map(group => getUser(group.ownerId))
    );
    const populatedGroups = groups.map((group, i) => {
        return {
            ...group,
            owner: groupOwners[i],
        }
    })

    return populatedGroups;
}