import { db } from '../db';
import { v4 as uuid } from 'uuid';

export const createGroup = async (groupName, userId) => {
  const newGroupId = uuid();
  const connection = db.getConnection();
  connection.collection('groups').insertOne({
    id: newGroupId,
    name: groupName,
    ownerId: userId,
    members: [userId],
  });
  return newGroupId;
};
