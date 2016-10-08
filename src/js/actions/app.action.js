import AppDispatcher from '../dispatchers/app.dispatcher'
import AppService from '../services/app.service'
import ACTION_TYPES from '../constants/action_types'

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

  getActivities() {
    let promise = new Promise((resolve, reject) => {
      AppService.getActivities().then((res, err) => {
        if (err) {
          reject(err)
        } else {
          AppDispatcher.dispatch({ type: ACTION_TYPES.GET_ACTIVITIES, data: res })
          resolve(res)
        }
      })
    })
    
    return promise
  }
}

export default AppAction
