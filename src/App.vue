<template>
    <div class="row">
        <section class="col-12 col-sm-3 gx-0"><Navigation /></section>
        <section class="col-12 col-sm-9"><router-view /></section>
    </div>
</template>
<script>
import Navigation from "@/views/Navigation.vue";

export default {
    components: { Navigation },
};
</script>
