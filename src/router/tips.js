const tip = {
  path: '/tip',
  name: '/tip',
  meta: {
    title: 'tip'
  },
  component: resolve => {
    require.ensure(
      ['@/pages/List.vue'],
      () => {
        resolve(require('@/pages/List.vue'))
      },
      'List'
    )
  }
}

const judgetime = {
  path: '/judgetime',
  name: '/judgetime',
  meta: {
    title: '时间判断'
  },
  component: resolve => {
    require.ensure(
      ['@/pages/tips/judgeTime.vue'],
      () => {
        resolve(require('@/pages/tips/judgeTime.vue'))
      },
      'judgeTime'
    )
  }
}

// 导出路由
export default [
  tip,
  judgetime
]
