<template>
  <div class="container-fluid wraper">
    <h1>Vue3 组件间通信</h1>
    <hr>
    <div class="row">
      <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
        <!-- 导航区 -->
        <router-link active-class="active" class="list-group-item" to="/props">1-props</router-link>
        <router-link active-class="active" class="list-group-item" to="/event">2-events</router-link>
        <router-link active-class="active" class="list-group-item" to="/mitt">3-mitt</router-link>
        <router-link active-class="active" class="list-group-item" to="/model">4-model</router-link>
        <router-link active-class="active" class="list-group-item" to="/attrs">5-attr</router-link>
        <router-link active-class="active" class="list-group-item" to="/ref-parent">6-ref-parent</router-link>
        <router-link active-class="active" class="list-group-item" to="/provide">7-provide</router-link>
        <router-link active-class="active" class="list-group-item" to="/pinia">8-pinia</router-link>
        <router-link active-class="active" class="list-group-item" to="/slot">9-slot</router-link>
      </div>
      <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
        <div class="panel-body">
          <!-- 展示区 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>                 
</template>


<script lang="ts" setup name="App">
// import { RouterLink } from "vue-router";
</script>

<style scoped></style>