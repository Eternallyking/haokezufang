import request from '@/utils/request'
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}
export const favorites = (token) => {
  return request({
    url: '/user/favorites',
    method: 'get',
    props: [token]
  })
}
