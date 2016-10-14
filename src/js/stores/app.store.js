import AppDispatcher from '../dispatchers/app.dispatcher'
import AppAction from '../actions/app.action'
import EventEmitter from 'events'
import ACTION_TYPES from '../constants/action_types'
import PROVIDERS from '../constants/providers'

const CHANGE_EVENT = 'change'
const PROFILE_CHANGE_EVENT = 'profile_change'

export class AppStore extends EventEmitter {
    constructor() {
        super()

        this.activities = null
        this.isLoggedIn = AppAction.isLoggedIn()

        // get user
        if (this.isLoggedIn) {
          this.afterLoggedIn()    
        }
    }

    afterLoggedIn() {
      this.user = AppAction.getUser()
      this.profiles = this.getProfiles()
      this.isLoggedIn = true
    }

    afterLoggedOut() {
      this.user = null
      this.profiles = null
      this.profileImageUrl = null

      this.isLoggedIn = false
    }

    getProfiles() {
      const userProfiles = AppAction.getProfiles(),
        profiles = {}

      if (userProfiles) {
        userProfiles.forEach((profile) => {
          profiles[profile.provider] =  {
            userName: profile.userName,
            url: profile.url,
            imageUrl: profile.imageUrl
          }
        })
      }
      
      // set profile image url
      this.profileImageUrl = (profiles[PROVIDERS.GITHUB] && profiles[PROVIDERS.GITHUB].imageUrl ) || ( profiles[PROVIDERS.STACKOVERFLOW] && profiles[PROVIDERS.STACKOVERFLOW].imageUrl)

      return profiles
    }
    
    emitChange() {
      this.emit(CHANGE_EVENT)
    }

    addChangeListener(callback) {
      this.on(CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }

    emitProfileChange() {
      this.emit(PROFILE_CHANGE_EVENT)
    }

    addProfileChangeListener(callback) {
      this.on(PROFILE_CHANGE_EVENT, callback)
    }

    removeProfileChangeListener(callback) {
      this.removeListener(PROFILE_CHANGE_EVENT, callback);
    }
}

let appStoreInstance = new AppStore()

appStoreInstance.dispatchToken = AppDispatcher.register(action => {
  switch(action.type) {
    case ACTION_TYPES.LOGGEDIN:
      appStoreInstance.afterLoggedIn()
      appStoreInstance.emitChange()
      break

    case ACTION_TYPES.LOGGEDOUT:
      appStoreInstance.afterLoggedOut()
      appStoreInstance.emitChange()
      break

    case ACTION_TYPES.GET_ACTIVITIES:
      appStoreInstance.activities = action.data
      appStoreInstance.emitChange()
      break

    case ACTION_TYPES.UPDATE_PROFILE:
      appStoreInstance.profiles = appStoreInstance.getProfiles()
      appStoreInstance.emitProfileChange()
      break

    default:
      return
  }
})

export default appStoreInstance
