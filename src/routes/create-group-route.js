import * as admin from 'firebase-admin';
import { createGroup } from '../db/create-group';

export const createGroupRoute = {
  method: 'post',
  path: '/api/groups',
  handler: async (req, res) => {
    const token = req.headers.authtoken;
    const { name } = req.body;

    const authUser = await admin.auth().verifyIdToken(token);
    const newGroupId = await createGroup(name, authUser.user_id);
    console.log('newGroupId', newGroupId);

    res.status(200).json(newGroupId);
  },
};
