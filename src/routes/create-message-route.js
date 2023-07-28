import {
    getGroup, addMessageToGroup, getMessagesForGroup
} from "../db";
import * as admin from 'firebase-admin';

export const createMessageRoute = {
    method: 'post',
    path: '/api/groups/:id/messages',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const {id} = req.params;
        const {text} = req.body;

        const userAuth = await admin.auth().verifyIdToken(token);
        const group = await getGroup(id);

        if(!userAuth || !group.members.includes(userAuth.user_id)) {
            return res.status(400).json({
                message: 'User cannot post to this group',
            });
        }

        const updatedGroup = await addMessageToGroup(id, userAuth.user_id, text);
        res.status(200).json(updatedGroup);
    }
}