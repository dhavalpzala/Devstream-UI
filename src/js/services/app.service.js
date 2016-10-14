import WebAPI from '../api/webapi'
import ACTIVITY_TYPES from '../constants/activity_types'
import PROVIDERS from '../constants/providers'
import activities from '../mocks/activities'

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

    return null
  },

  getProfiles() {
    if (this.isLoggedIn()) {
      const user = this.getUser()

      if (user && user.profiles) {
        const profiles = user.profiles.map((profile) => {
          let userName = '',
            url = '',
            imageUrl = ''

          switch (profile.providerName) {
            case PROVIDERS.GITHUB:
              userName = profile.payload.login
              url = profile.payload.html_url
              imageUrl = profile.payload.avatar_url
              break
            case PROVIDERS.STACKOVERFLOW:
              if(profile.payload.items.length > 0) {
                let link = profile.payload.items[0].link,
                  array = link.split('/')

                userName = array[array.length - 1]
                url = link
                imageUrl = profile.payload.items[0].profile_image
              }
              break
          }

          return {
            provider: profile.providerName,
            userName,
            url,
            imageUrl
          }
        })

        return profiles
      }
    }

    return null
  },

  getActivities({before, after}) {
    var promise = new Promise((resolve, reject) => {
      WebAPI.getActivities({before, after}).then((res, err) => {
        if (err) {
          reject(err)
        } else {
          resolve(res.body)
        }
      })
    })

    return promise
  },

  updateUserProfile(provider, accessToken) {
    let promise = new Promise((resolve, reject) => {
      let user = this.getUser()

      if (user) {
        const userId = user['employeeId'],
          data = {
            employeeId: user['employeeId'],
            profiles: [
              {
                providerName: provider,
                authToken: accessToken,
                lastSeen: '0',
                payload: {}
              }
            ]
          }

        WebAPI.updateUserProfile(userId, data).then((res, err) => {
          if (err) {
            reject(err)
          } else {
            localStorage.setItem(USER, JSON.stringify(res.body))
            resolve(res.body)
          }
        })
      } else {
        reject(new Error("User is not loggedin"))
      }
    })

    return promise
  },

  deleteUserProfile(provider) {
    let promise = new Promise((resolve, reject) => {
      let user = this.getUser()

      if (user) {
        const userId = user['employeeId'],
          data = {
            employeeId: user['employeeId'],
            profiles: [
              {
                providerName: provider,
                authToken: '',
                payLoad: {}
              }
            ]
          }

        WebAPI.deleteUserProfile(userId, data)
      } else {
        reject(new Error("User is not loggedin"))
      }
    })

    return promise
  }
}

export default AppService
