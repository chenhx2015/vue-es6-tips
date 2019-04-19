const my = {
  path: '/my',
  name: '/my',
  meta: {
    title: 'my'
  },
  component: resolve => {
    require.ensure(
      ['@/pages/my/set.vue'],
      () => {
        resolve(require('@/pages/my/set.vue'))
      },
      'my'
    )
  }
}

export default [
  my
]
