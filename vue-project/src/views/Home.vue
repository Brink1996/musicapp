<template>
  <div>
    <album-list></album-list>
  </div>
  
</template>

<script>
// @ is an alias to /src
import AlbumList from "../components/AlbumList.vue";

export default {
  name: "Musicapp",
  components: {
    AlbumList,
  },
};
</script>
