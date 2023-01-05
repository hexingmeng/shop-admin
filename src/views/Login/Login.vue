<template>
  <!-- layout布局 -->
  <el-row class="bg-indigo-500 min-h-screen">
    <!-- 左 -->
    <el-col :lg="16" :md="12" class="flex items-center justify-center">
      <div>
        <p class="text-light-50 font-bold text-3xl mb-4">欢迎光临</p>
        <p class="text-gray-200 text-sm">《vue3 + vite》实战项目演示网站</p>
      </div>
    </el-col>
    <!-- 右 -->
    <el-col
      :lg="8"
      :md="12"
      class="bg-light-50 flex items-center justify-center flex-col"
    >
      <!-- 登录字样 -->
      <h1 class="font-bold text-3xl text-gray-800">欢迎回来</h1>
      <!-- 登录信息字样 -->
      <div class="my-5 text-gray-300 flex items-center justify-center space-x-2">
        <p class="h-[1px] w-16 bg-gray-200"></p>
        <p>账号密码登录</p>
        <p class="h-[1px] w-16 bg-gray-200"></p>
      </div>
      <!-- 表单 -->
      <el-form :model="form" class="w-[250px]">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码" />
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            round
            color="#626aef"
            class="w-[250px]"
            >登 录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  username: "",
  password: "",
});

const onSubmit = () => {
  console.log("submit!");
  console.log("form=>", form);
};
</script>
