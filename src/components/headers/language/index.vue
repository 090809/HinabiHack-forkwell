<template>
  <div class="d-inline-flex ml-3">
    <img class="rounded" :src="'../assets/' + language.name + '.png'" alt="" width="40px" height="40px"/>
    <span class="d-inline-flex align-content-center justify-content-center" >
      <h3 class="px-1">(</h3>
      <img
        class="px-1"
        width="24px"
        height="24px"
        :key="index"
        v-for="(framework, index) in language.frameworks"
        :src="'../assets/' + framework + '.png'"
        alt=""
      />
      <h3 class="px-1">)</h3>
    </span>
  </div>
</template>

<script>
export default {
  name: "language",
  props: ["language"]
};
</script>
