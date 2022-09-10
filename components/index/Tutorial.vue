<!-- Please remove this file from your project -->
<template>
  <main>
    <section id="menu">
      <NuxtLink to="/">Home page</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <h1>Counter: {{$store.state.counter}}</h1>
    </section>xz
  </main>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>
