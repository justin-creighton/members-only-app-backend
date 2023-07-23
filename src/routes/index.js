import { getAllGroupsRoute } from './get-all-groups-route';
import { getUserGroupsRoute } from './get-user-groups-route';
import { createRequestRoute } from './create-request-route';
import { createGroupRoute } from './create-group-route';

export const routes = [
  getAllGroupsRoute,
  getUserGroupsRoute,
  createRequestRoute,
  createGroupRoute,
];
