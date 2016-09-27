import AppDispatcher from '../dispatchers/app.dispatcher'
import AppService from '../services/app.service'
import ACTION_TYPES from '../constants/action-types'

const AppAction = {
    getActivities() {
        let promise = new Promise((resolve, reject) => {
            AppService.getActivities().then((res, err) => {
                if (err) {
                    reject(err)
                } else {
                    AppDispatcher.dispatch({ type: ACTION_TYPES.GET_ACTIVITIES, data: res})
                    resolve(res)
                }
            })
        })
        
        return promise
    }
}

export default AppAction