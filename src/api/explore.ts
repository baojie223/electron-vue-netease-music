import request from './index'

export const recommendSongs = () => {
  return request.get('/recommend/songs')
}

export const like = (params: { id: string, like: boolean, alg: string }) => {
  return request({
    url: '/like',
    method: 'GET',
    params
  })
}

export const songUrl = (id: string) => {
  return request({
    url: '/song/url',
    method: 'GET',
    params: { id }
  })
}
