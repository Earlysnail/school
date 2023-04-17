import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/ftp/list',
    method: 'get',
    params: query
  })
}

export function createFtp(data) {
  return request({
    url: '/vue-element-admin/ftp/create',
    method: 'post',
    data
  })
}

export function updateFtp(data) {
  return request({
    url: '/vue-element-admin/ftp/update',
    method: 'post',
    data
  })
}
