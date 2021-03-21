<template>
    <AnimalsContainer :type="this.type" />
</template>
<script>
import AnimalsContainer from "@/components/AnimalsContainer.vue";

export default {
    name: "Animals",
    props: ["type"],
    components: { AnimalsContainer }
};
</script>