import axios from 'axios'
import { ApiParams, Api } from 'interfaces/apis/publicApis'

const baseURL: string = 'https://api.publicapis.org'
const baseAPI = axios.create({ baseURL })

const apis = {
  /** List all entries currently cataloged in the project */
  entries: (params: ApiParams) => baseAPI.get<{ count: number; entries: Api[] }>(`/entries`, { params }),
  /** List a single entry selected at random */
  random: (params: ApiParams) => baseAPI.get<{ count: number; entries: Api[] }>(`/random`, { params }),
  /** List all categories */
  categories: () => baseAPI.get(`/categories`),
  /** Check health of the running service */
  health: () => baseAPI.get(`/health`),
}

export default apis
