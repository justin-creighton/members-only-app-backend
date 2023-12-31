import { getAllGroupsRoute } from './get-all-groups-route';
import { getUserGroupsRoute } from './get-user-groups-route';
import { createRequestRoute } from './create-request-route';
import { createGroupRoute } from './create-group-route';
import { acceptRequestRoute } from './accept-request-route';
import { rejectRequestRoute } from './reject-request-route';
import { getGroupRoute } from "./get-group-route";
import {createMessageRoute} from "./create-message-route";

export const routes = [
  getAllGroupsRoute,
  getUserGroupsRoute,
  createRequestRoute,
  createGroupRoute,
  createMessageRoute,
  acceptRequestRoute,
  rejectRequestRoute,
  getGroupRoute,
];
