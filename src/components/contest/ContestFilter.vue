<template>
  <div class="filter-container">
    <el-card class="card">
      <template #header> 筛选 </template>

      <el-form :model="form">
        <el-form-item label="赛制" class="filter-item">
          <el-select v-model="form.rule" placeholder="全部赛制" clearable>
            <el-option label="OI 赛制" value="OI" />
            <el-option label="ACM 赛制" value="ACM" />
            <el-option label="IOI 赛制" value="IOI" />
          </el-select>
        </el-form-item>
        <el-form-item label="难度" class="filter-item">
          <el-select v-model="form.difficulty" placeholder="全部难度" clearable>
            <el-option v-for="i in 5" :key="i" :label="`${i}星`" :value="i" />
          </el-select>
        </el-form-item>
      </el-form>

      <div class="button-container">
        <el-button type="primary" @click="clearFilter">清空</el-button>
        <el-button type="primary" @click="doFilter">筛选</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import type { ContestFilterForm } from '@/interface'
import { ref } from 'vue'

import { ElForm, ElFormItem, ElSelect, ElOption, ElButton, ElCard } from 'element-plus'

const props = defineProps<{
  initFilter: ContestFilterForm
}>()

const form = ref(props.initFilter)

const emits = defineEmits<{
  filter: [filter: ContestFilterForm, cleaned: boolean]
}>()

const doFilter = () => {
  emits('filter', form.value, false)
}

const clearFilter = () => {
  form.value = {}
  emits('filter', form.value, true)
}
</script>

<style lang="scss" scoped>
.card {
  margin: 0;
  padding: 0;

  > ::v-deep(.el-card__header) {
    padding: 8px 12px;
  }
}

.filter-container {
  > *:not(:last-child) {
    margin-bottom: 16px;
  }
}

.filter-item {
  &:not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>
