// Starting Point
import axios from 'axios'

let baseDomain = 'http://localhost:3001'
let baseURL = `${baseDomain}/intranet`

export default axios.create({
  baseURL
})
