<template>
  <div>
    <p v-if="showTip">2019.4.4之前显示</p>
    <p v-else>2019.4.4之后显示</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showTip: ''
    }
  },
  created() {
    this.judgeTime('2019-04-03 23:59:59')
  },
  methods: {
    // 某个时间之前就会返回true
    // 使用的格式 示例：judgeTime('2019-02-12 23:59:59')
    judgeTime(endTime) {
      let now = Date.parse(new Date())
      let end = Date.parse(new Date(endTime.replace(/-/g, '/')))
      if (now < end) {
        this.showTip = true
      } else {
        this.showTip = false
      }
    }
  }
}
</script>
