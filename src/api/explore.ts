import request from './index'

export const recommendSongs = () => {
  return request.get('/recommend/songs')
}

export const like = () => {
  return request.get('/like')
}