<template>
    <div class="fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mr-5" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">E-Commerce</a>
        <div class="mr-5">
          <button @click="logout" class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },
  }
}
</script>

<style>

</style>