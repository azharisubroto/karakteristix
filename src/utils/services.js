import Api from './API'
import AuthApi from './AuthApi'

export default {
  userLogin(params) {
    return Api().post(`/api/login`, params)
  },
  userProfile() {
    return AuthApi().get(`/api/userDetail`)
  }
}
