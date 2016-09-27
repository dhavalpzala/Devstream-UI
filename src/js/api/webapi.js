import { APIUrl } from '../constants/urls'
import * as request from 'superagent'

const WebAPI = {
    getActivities() {
        var promise = new Promise((resolve, reject) => {
        request.get(APIUrl + '/events')
            .end(function(err, res){
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })

        return promise
    }
}

export default WebAPI
