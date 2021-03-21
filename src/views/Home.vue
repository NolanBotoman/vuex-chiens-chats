<template>
	<HomeContainer />
	<AnimalsContainer type="animals" />
</template>
<script>
import AnimalsContainer from "@/components/AnimalsContainer.vue";
import HomeContainer from "@/components/HomeContainer.vue";

export default {
	name: "Home",
	components: {
		AnimalsContainer,
		HomeContainer,
	},
};
</script>
