/** @format */

import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://api.matspar.se",
  headers: {
    "Content-Type": "application/json",
  },
})

export default apiClient
