<!-- Please remove this file from your project -->
<template>
  <main>
    <input placeholder="input description" v-on:input="signalChange" />
    <h1>Counter: {{$store.state.counter}}</h1>
    <button v-on:click="fetchData">click me</button>
    <h1>{{ description }}</h1>
    <button v-on:click="$store.commit('increment')">+</button>
  </main>
</template>
  
  <script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  computed: mapState['inputValue'],
  name: "FORMDESC",
  data: () => ({
    description: "",
  }),
  methods: {
    ...mapGetters(['getValue']),
    ...mapActions(['fetchData']),
    signalChange: function (evt) {
      this.$emit("change", evt);
      this.description = evt.target.value;
      console.log(this.description);
    },
    clickHandler: function () {
      console.log(this.$store.state.InputStore.inputValue)
    },
  },
};
</script>
  