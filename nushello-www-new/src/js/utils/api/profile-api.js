'use strict';

import BaseAPI from './base-api';
import cookie from 'react-cookie';

let APIEndPoints = require('constants/api-end-points');

class ProfileAPI extends BaseAPI {
  constructor() {
    super();
  }

  init() {
    let facebookId = cookie.load('current_user').userID;
    return this.get(APIEndPoints.USER_PROFILE_API(facebookId));
  }

  edit() {
  }
}

export default new ProfileAPI();

