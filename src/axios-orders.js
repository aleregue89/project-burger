import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://react-project-burger-7959c-default-rtdb.firebaseio.com/'
})

export default instance