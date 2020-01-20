import request from './index'
import store from '@/store'

export const login = (params: any) => {
  return request({
    url: '/login',
    method: 'get',
    params: params
  })
}

export const logout = () => {
  return request.get('/logout')
}

export const loginStatus = () => {
  return request.get('/login/status')
}