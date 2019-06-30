<template>
  <b-container class="user-card pt-3 my-3">
    <b-row>
      <b-col class="col-4"> </b-col>
      <b-col class="py-3">
        <h4 class="mx-2">{{ user.name }}</h4>
        <div class="d-inline-flex">
          <div :key="index" v-for="(tag, index) in user.tags" class="tag p-2 mx-2">
            {{ tag }}
          </div>
        </div>
        <div class="mx-2 py-1">
          <span style="color: #C4C4C4">Contract type:</span>
          {{ user.contract }}
          {{ user.spec }}
          {{ user.location }}
        </div>
        <div class="mx-2 py-1">
          <span style="color: #C4C4C4">Annual income:</span>
          {{ user.cash }}
        </div>
        <div class="mx-2 py-1">
          <span style="color: #C4C4C4">Other:</span>
          {{ user.other }}
        </div>
      </b-col>
    </b-row>
    <b-row style="border-top: 1px solid #C4C4C4;" class="py-3">
      <b-col>{{ user.time }}</b-col>
      <b-col class="d-flex justify-content-end">
        <b-button variant="outline-secondary" @click="addToBookmark"
          >Add to Bookmark</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "user",
  props: ["user"],
  methods: {
    addToBookmark() {}
  }
};
</script>

<style scoped>
.user-card {
  border: 1px solid #c4c4c4;
    text-align: left;
}
    .tag {
        color: #AA00FF;
        border: 1px solid #AA00FF;
    }
</style>
