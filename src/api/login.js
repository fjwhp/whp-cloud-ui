
import request from '@/router/axios'

export const loginByUsername = (username, password, code, randomStr) => {
  var grant_type = 'password'
  var scope = 'server'
  return request({
    url: '/auth/oauth/token',
    headers: {
      'TENANT_ID': '1',
      'Authorization': 'Basic cGlnOnBpZw=='
    },
    method: 'post',
    params: { username, password, randomStr, code, grant_type, scope }
  })
}

export const loginByMobile = (mobile, code) => {
  var grant_type = 'mobile'
  return request({
    url: '/auth/mobile/token/sms',
    headers: {
      'TENANT_ID': '1',
      'Authorization': 'Basic cGlnOnBpZw=='
    },
    method: 'post',
    params: { mobile: 'SMS@' + mobile, code: code, grant_type }
  })
}

export const loginBySocial = (state, code) => {
  var grant_type = 'mobile'
  return request({
    url: '/auth/mobile/token/social',
    headers: {
      'TENANT_ID': '1',
      'Authorization': 'Basic cGlnOnBpZw=='
    },
    method: 'post',
    params: { mobile: state + '@' + code, grant_type }
  })
}

export const getUserInfo = () => {
  return request({
    url: '/admin/user/info',
    method: 'get'
  })
}

export const logout = () => {
  return request({
    url: '/auth/token/logout',
    method: 'delete'
  })
}
