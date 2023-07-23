import * as admin from 'firebase-admin';
import { createJoinRequest } from '../db';
import { getUserGroups } from '../db';

export const createRequestRoute = {
  method: 'post',
  path: '/api/groups/:id/request',
  handler: async (req, res) => {
    const token = req.headers.authtoken;
    const groupId = req.params.id;

    const authUser = await admin.auth().verifyIdToken(token);

    if (!token || !authUser) {
      return res.status(400).json({
        message: 'Must be logged in',
      });
    }

    await createJoinRequest(groupId, authUser.user_id);

    res.status(200).json({
      message: 'Success!',
    });
  },
};
