import Axios from 'axios'

console.log(process.env)

const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:3001'

export default Axios.create({
  baseURL
})
