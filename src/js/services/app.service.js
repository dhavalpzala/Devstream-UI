import WebAPI from '../api/webapi'
import ACTIVITY_TYPES from '../constants/activity_types'

const AppService = {
    getActivities() {
        var promise = new Promise((resolve, reject) => {
            WebAPI.getActivities().then((res, err) => {
                if (err) {
                    reject(err)
                } else {
                    //resolve(res.body)
                    resolve(mockData)
                }
            })
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