<template>
  <div>[1, 3, 5, 1, 7, 8, 5]数组set去重后：{{newSet}}</div>
</template>
<script>
export default {
  data() {
    return {
      oldArray: [1, 3, 5, 1, 7, 8, 5], // 去重之前的数组
      newSet: ''  // 去重后的数组
    }
  },
  created() {
    this.dedupeArray(this.oldArray)
  },
  methods: {
    // 一行代码去重
    dedupeArray(oldArray) {
      // let set = new Set(oldArray)
      // console.log(set)
      // console.log('set type --', set instanceof Array)
      this.newSet = Array.from(new Set(oldArray))
      console.log('newSet type --', this.newSet instanceof Array)
    }
  }
}
</script>
