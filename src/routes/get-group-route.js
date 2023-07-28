import * as admin from 'firebase-admin';
import {
    getGroup, getMemberPopulatedGroup, getOwnerPopulatedGroup
} from '../db';

export const getGroupRoute = {
    method: 'get',
    path: '/api/groups/:id',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const {id} = req.params;

        const userAuth = await admin.auth().verifyIdToken(token);

        if(!userAuth || !token) {
            return res.status(400).json('Must be logged in');
        }

        const group = await getGroup(id);

        if(group.ownerId === userAuth.user_id) {
            const ownerPopulatedGroup = await getOwnerPopulatedGroup(id);
            return res.status(200).json(ownerPopulatedGroup);
        }

        if(group.members.includes(userAuth.user_id)) {
            const memberPopulatedGroup = await getMemberPopulatedGroup(id);
            return res.status(200).json(memberPopulatedGroup);
        }

        res.status(200).json(group);
    }
}