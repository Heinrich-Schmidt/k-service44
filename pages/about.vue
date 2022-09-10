<template>
  <div>
    <Tutorial/>
    <FormDescription />
  </div>
</template>
  
  <script>
import FormDescription from "~/components/about/FormDescription.vue";
import Tutorial from "~/components/index/Tutorial.vue";

export default {
  name: "AboutPage",
  components: { FormDescription, Tutorial, Tutorial },
};
</script>
  