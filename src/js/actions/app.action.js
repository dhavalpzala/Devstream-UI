import AppDispatcher from '../dispatchers/app.dispatcher'
import AppService from '../services/app.service'
import ACTION_TYPES from '../constants/action_types'
import TRENDS_TYPE from '../constants/trends_type'

const AppAction = {
  login(accessToken) {
    let promise = new Promise((resolve, reject) => {
      AppService.login(accessToken).then((res, err) => {
        if (err) {
          reject(err)
        } else {
          AppDispatcher.dispatch({ type: ACTION_TYPES.LOGGEDIN, data: res })          
          resolve(res)
        }
      })
    })
    
    return promise
  },

  logout() {
    AppService.logout()
    AppDispatcher.dispatch({ type: ACTION_TYPES.LOGGEDOUT, data: null })
  },

  isLoggedIn() {
    return AppService.isLoggedIn()
  },

  getUser() {
    return AppService.getUser()
  },

  getProfiles() {
    return AppService.getProfiles()
  },

  getActivities() {
    return Promise.resolve()
    /*let promise = new Promise((resolve, reject) => {
      AppService.getActivities().then((res, err) => {
        if (err) {
          reject(err)
        } else {
          AppDispatcher.dispatch({ type: ACTION_TYPES.GET_ACTIVITIES, data: res })
          resolve(res)
        }
      })
    })
    return promise */
  },

  updateUserProfile(provider, accessToken) {
    let promise = new Promise((resolve, reject) => {
      AppService.updateUserProfile(provider, accessToken).then((res, err) => {
        if (err) {
          reject(err)
        } else {
          AppDispatcher.dispatch({ type: ACTION_TYPES.UPDATE_PROFILE, data: res })          
          resolve(res)
        }
      })
    })
    
    return promise
  },

  deleteUserProfile(provider) {
    return AppService.deleteUserProfile(provider, accessToken)
  },

  getTrends(type) {
    let promise = new Promise((resolve, reject) => {
      AppService.getTrends(type).then((res, err) => {
        if (err) {
          reject(err)
        } else {
          switch (type) {
            case TRENDS_TYPE.PROJECTS:
              AppDispatcher.dispatch({ type: ACTION_TYPES.GET_TRENDING_PROJECTS, data: res })    
              break;

            case TRENDS_TYPE.USERS:
              AppDispatcher.dispatch({ type: ACTION_TYPES.GET_TRENDING_USERS, data: res })    
              break;

            case TRENDS_TYPE.USERS.TOPICS:
              AppDispatcher.dispatch({ type: ACTION_TYPES.GET_TRENDING_TOPICS, data: res })    
              break;
          }
                    
          resolve(res)
        }
      })
    })
    
    return promise
  }
}

export default AppAction
