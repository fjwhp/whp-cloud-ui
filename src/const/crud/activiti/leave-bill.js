

export const tableOption = {
  border: true,
  index: true,
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuBtn: true,
  editBtn: false,
  delBtn: false,
  addBtn: false,
  menuType: 'menu',
  dicUrl: '/admin/dict/type/leave_status',
  column: [
    {
      label: 'ID',
      prop: 'leaveId',
      editDisabled: true,
      addVisdiplay: false
    },
    {
      label: '申请人',
      prop: 'username',
      editDisabled: true,
      addVisdiplay: false
    },
    {
      label: '天数',
      prop: 'days',
      type: 'number'
    },
    {
      label: '请假时间',
      prop: 'leaveTime',
      type: 'datetime',
      overHidden: true,
      format: 'yyyy-MM-dd HH:mm',
      valueFormat: 'yyyy-MM-dd hh:mm:ss'
    },
    {
      label: '提交时间',
      prop: 'createTime',
      type: 'datetime',
      overHidden: true,
      format: 'yyyy-MM-dd HH:mm',
      editDisabled: true,
      addVisdiplay: false,
      hide: true
    },
    {
      label: '状态',
      prop: 'state',
      type: 'select',
      dicData: 'leave_status',
      search: true,
      addVisdiplay: false
    },
    {
      label: '备注',
      prop: 'content',
      type: 'textarea',
      overHidden: true,
      minRows: 2,
      row: true,
      span: 24
    }
  ]
}
