
const DIC = {
  vaild: [{
    label: '否',
    value: 'false'
  }, {
    label: '是',
    value: 'true'
  }]
}
export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  viewBtn: true,
  addBtn: false,
  editBtn: false,
  delBtn: false,
  dic: [],
  column: [{
    label: '用户ID',
    prop: 'user_id',
    align: 'center'
  }, {
    label: '用户名',
    prop: 'user_name',
    align: 'center'
  }, {
    label: '令牌',
    prop: 'token_value',
    align: 'center',
    'overHidden': true
  }, {
    label: '类型',
    prop: 'token_type',
    align: 'center'
  }, {
    label: '过期时间',
    prop: 'expires_in',
    align: 'center'
  }, {
    label: '客户端',
    prop: 'client_id',
    align: 'center'
  }, {
    label: '授权类型',
    prop: 'grant_type',
    align: 'center'
  }]
}
