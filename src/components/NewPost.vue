<template>
    <post-writer :post="newPost" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostWriter from "./PostWriter.vue"
import {Post} from "../mocks"
import moment from "moment";

export default defineComponent({
  name: "App",
  components: {
    PostWriter,
  },

  setup(){
      const newPost: Post = {
          id: '-1',
          title: 'New post',
          created: moment(),
      }

      return {newPost}
  }
});
</script>

<style>

</style>

