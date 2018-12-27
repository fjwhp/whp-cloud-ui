
export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  menuWidth: 150,
  menuBtn: true,
  align: 'center',
  editBtn: false,
  delBtn: false,
  menuType: 'menu',
  searchShow: false,
  labelWidth: 120,
  column: [{
    fixed: true,
    label: '模型ID',
    prop: 'id',
    editDisabled: true,
    addVisdiplay: false
  }, {
    fixed: true,
    label: '模型标识',
    prop: 'key',
    editDisabled: true
  }, {
    label: '流程分类',
    prop: 'category',
    search: true
  }, {
    label: '模型名称',
    prop: 'name'
  },
  {
    label: '描述',
    prop: 'desc',
    hide: true,
    editDisabled: false,
    addVisdiplay: true
  }, {
    label: '版本号',
    prop: 'version',
    editDisabled: true,
    addVisdiplay: false
  }, {
    width: 150,
    label: '创建时间',
    prop: 'createTime',
    type: 'datetime',
    format: 'yyyy-MM-dd HH:mm',
    valueFormat: 'timestamp',
    editDisabled: true,
    addVisdiplay: false
  }, {
    width: 150,
    label: '最后更新时间',
    prop: 'lastUpdateTime',
    type: 'datetime',
    format: 'yyyy-MM-dd HH:mm',
    valueFormat: 'timestamp',
    editDisabled: true,
    addVisdiplay: false
  }]
}
