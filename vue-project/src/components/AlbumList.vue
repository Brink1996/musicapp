<template>
  <div class="flex-container">
    <article class="album" v-for="album in albums" :key="album.id">
      <img :src="album.image" alt />
      <h3>{{album.name}}</h3>
      <button type="button" v-on:click="deleteAlbum(album.id)">Delete Album</button>
      <button type="button" v-on:click="selectAlbum(album.id, album.name, album.image)">Update</button>
    </article>
    <div class="update">
      <h1>Update</h1>
      <form>
        <input id="name-update" type="text" placeholder="Name of album" required />
        <input id="url-update" type="text" placeholder="Cover url" required />
        <button type="button" v-on:click="updateAlbum()">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
let selectedAlbumId = "";
import { albumRef } from "../firebase-db";
export default {
  data() {
    return {
      albums: []
    };
  },
  firestore: {
    albums: albumRef
  },
  methods: {
    deleteAlbum(id) {
      albumRef.doc(id).delete();
    },
    selectAlbum(id, name, url) {
      let nameInput = document.querySelector("#name-update");
      let urlInput = document.querySelector("#url-update");
      nameInput.value = name;
      urlInput.value = url;
      selectedAlbumId = id;
    },
    updateAlbum() {
      let nameInput = document.querySelector("#name-update");
      let urlInput = document.querySelector("#url-update");

      let albumToUpdate = {
        name: nameInput.value,
        image: urlInput.value
      };
      albumRef.doc(selectedAlbumId).set(albumToUpdate);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-container {
  display: flex;
}

.album {
  width: 15%;
}

.album img {
  width: 100%;
}
</style>
