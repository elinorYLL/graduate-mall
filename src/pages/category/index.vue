<template>
  <div class="category">
    <header class="g-header-container">
      <c-header></c-header>
    </header>
    <div class="g-content-container">
      <div class="sidebar">
        <c-tab></c-tab>
      </div>
      <div class="main">
        <c-content></c-content>
      </div>
    </div>
  </div>
</template>
<script>
import CContent from "./content.vue";
import CHeader from "./header.vue";
import CTab from "./tab.vue";
export default {
  name: "Category",
  components: {
    CContent,
    CHeader,
    CTab
  }
};
</script>
<style scoped>
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
.category {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.g-content-container {
  display: flex;
  height: 100%;
}

.sidebar {
  width: 80px;
  /* height: 400px; */
  height: calc(100vh - 104px);
  overflow: scroll;
  /* overflow: hidden; */
}
.main {
  flex: 1;
  height: 100%;
  overflow: scroll;
}
</style>
