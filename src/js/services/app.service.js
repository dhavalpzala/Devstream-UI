import WebAPI from '../api/webapi'
import ActivityAdapter from '../adapters/activity.adapter'

const AppService = {
    getActivities() {
        var promise = new Promise((resolve, reject) => {
            WebAPI.getActivities().then((res, err) => {
                if (err) {
                    reject(err)
                } else {
                    let result = ActivityAdapter.convert(res.body)
                    resolve(result)
                }
            })
        })

        return promise
    }
}

export default AppService