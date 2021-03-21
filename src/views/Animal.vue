<template>
  <AnimalContainer :id="this.id" :type="this.type" />
</template>
<script>
import AnimalContainer from "@/components/AnimalContainer";

export default {
	name: "Animal",
	props: ["type", "id"],
	components: { AnimalContainer }
};
</script>