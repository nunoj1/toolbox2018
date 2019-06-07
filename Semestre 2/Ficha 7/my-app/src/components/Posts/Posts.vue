<template>
    <v-container>
        <h1>Posts</h1>
        <input type="text" style="background: white;  border-style: solid; border-width: 1px;">
        <v-btn @click="auth()">Add Post</v-btn>
    </v-container>
</template>

<script>
export default {
    name: 'Posts',
    auth: false,
    methods: {
      auth(){
        alert("Please Signin");
      }
    }
}
</script>