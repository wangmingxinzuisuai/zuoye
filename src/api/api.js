import http from '../utils/http'
export const getBanner = () => {
    return http.get('/small4/banner/list')
}