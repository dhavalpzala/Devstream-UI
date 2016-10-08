import WebAPI from '../api/webapi'
import ACTIVITY_TYPES from '../constants/activity_types'

const USER = 'user'
const AUTH_TOKEN = 'auth_token'
const AppService = {
  login(accessToken) {
    var promise = new Promise((resolve, reject) => {
      WebAPI.login(accessToken).then((res, err) => {
        if (err) {
          reject(err)
        } else {
          // storing auth_token for session handling
          localStorage.setItem(AUTH_TOKEN, accessToken)
          localStorage.setItem(USER, JSON.stringify(res.body))
          resolve(res.body)
        }
      })
    })

    return promise
  },

  isLoggedIn() {
    return localStorage.getItem(AUTH_TOKEN) !== null
  },

  logout() {
    localStorage.removeItem(AUTH_TOKEN)
    localStorage.removeItem(USER)
  },

  getUser() {
    if (this.isLoggedIn()) {
      const user = localStorage.getItem(USER)
      return user ? JSON.parse(user) : null
    }
  },

  getActivities() {
    var promise = new Promise((resolve, reject) => {
      resolve(mockData)
      // WebAPI.getActivities().then((res, err) => {
      //   if (err) {
      //     reject(err)
      //   } else {
      //     resolve(res.body)
      //   }
      // })
    })

    return promise
  }
}

export default AppService

// mock data
var mockData = [{
    'id': 1,
    'type': ACTIVITY_TYPES.GIT_COMMIT,
    'data': {
        'header': 'Header 1',
        'description': 'description 1'
    }
},
{
    'id': 2,
    'type': ACTIVITY_TYPES.GIT_COMMIT,
    'data': {
        'header': 'Header 2',
        'description': 'description 2'
    }
},
{
    'id': 3,
    'type': ACTIVITY_TYPES.GIT_COMMIT,
    'data': {
        'header': 'Header 3',
        'description': 'description 3'
    }
},
{
    'id': 4,
    'type': ACTIVITY_TYPES.GIT_COMMIT,
    'data': {
        'header': 'Header 4',
        'description': 'description 4'
    }
}]
