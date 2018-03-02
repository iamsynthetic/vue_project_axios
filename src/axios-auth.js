import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vuejs-axios-ee86c.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance