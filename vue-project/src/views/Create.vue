<template>
  <div class="create">
    <h1>Create new Album</h1>
    <form>
      <input type="text" v-model="album.name" placeholder="Name of album" required>
      <input type="text" v-model="album.image" placeholder="Cover url" required>
      <button type="button" v-on:click="createAlbum">Add Album</button>
    </form>
  </div>
</template>

<script>

import { albumRef } from '../firebase-db'
export default {
  name: 'Create',
  data () {
    return {
      album: {
        description: '',
        image: null
      }
    }
  },
  methods: {
    triggerChooseImg () {
      this.$refs.fileInput.click()
    },
    createAlbum () {
      albumRef.add(this.album)
      this.$router.push('/')
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-container{
    display: flex;
  }

  .album{
    width: 15%;
  }

  .album img{
    width: 100%;
  }

</style>
