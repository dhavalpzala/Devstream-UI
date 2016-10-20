import { APIUrl } from '../constants/urls'
import * as request from 'superagent'
import moment from 'moment'

const WebAPI = {
  login(accessToken) {
    let promise = new Promise((resolve, reject) => {
      request.post(`${APIUrl}/login?token=${accessToken}`)
        .end(function(err, res){
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
        })
    })

    return promise
  },

  getActivities({ before, after }) {
    let suffix = before ? `?before=${before}`: ''
    suffix = after ? `?after=${after}`: suffix

    let promise = new Promise((resolve, reject) => {
      request.get(APIUrl + `/events${suffix}`)
        .end(function(err, res){
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
        })
    })

    return promise
  },

  updateUserProfile(userId, data) {
    let promise = new Promise((resolve, reject) => {
    request.put(`${APIUrl}/user/${userId}`)
      .set('Content-Type', 'application/json')
      .send(data)
      .end(function(err, res){
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })

    return promise
  },

  deleteUserProfile(data) {
    let promise = new Promise((resolve, reject) => {
    request.delete(`${APIUrl}/user/${userId}`)
      .set('Content-Type', 'application/json')
      .send(data)
      .end(function(err, res){
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })

    return promise
  },

  getTrends(type) {
    const DAYS = 7
    let promise = new Promise((resolve, reject) => {
    request.get(`${APIUrl}/trends/${type}?days=${DAYS}`)
      .end(function(err, res){
        if (err) {
          reject(err)
        } else {
          resolve(res.body)
        }
      })
    })

    return promise
  },

  getPunchCard(userId) {
    let timezone = moment().format('Z'),
      promise = new Promise((resolve, reject) => {
        request.get(`${APIUrl}/user/${userId}/punchcard?timeZone=${ encodeURIComponent(timezone) }`)
          .end(function(err, res){
            if (err) {
              reject(err)
            } else {
              resolve(res.body)
            }
          })
      })

    return promise
  }
}

export default WebAPI
