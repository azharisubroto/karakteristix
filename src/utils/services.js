import Api from './API'

export default {
  userLogin(params) {
    return Api().post(`/api/login`, params)
  }
}
