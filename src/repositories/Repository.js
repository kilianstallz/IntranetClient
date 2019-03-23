// Starting Point
import axios from 'axios'

let baseDomain = 'http://10.0.0.18:3001'
let baseURL = `${baseDomain}/intranet`

export default axios.create({
  baseURL
})
