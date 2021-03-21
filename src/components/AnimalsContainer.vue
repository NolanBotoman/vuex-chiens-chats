<template>
    <div class="row">
        <router-link 
            v-for="(animal, index) in animals" 
            :key="animal.name" 
            :to="{
                name: 'Animal',        
                params: {
                    type: this.type,
                    id: index,
                }
            }"
            class="col-4 text-decoration-none text-dark"
            exact>
            <div class="border m-2 p-3 row">
                <div class="col-6 d-flex align-items-center">
                    <h5>{{ animal.name }} <span class="lead">({{ animal.birthYear }})</span></h5>
                </div>
                <div class="col-6">
                    <img class="img-fluid" :src="animal.photo" />
                </div>    
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "AnimalsContainer",
    props: ["type"],
    data() {
        return  {
            animals: {}
        }
    },
    methods: {
        ...mapActions({
            addPetToList: "addPetToList",
        }),
        formatAnimalType(type) {
            return type.toLowerCase() + "s";
        },
        formatGetter(getter) {
            return "getAll" + getter.charAt(0).toUpperCase() + getter.slice(1).toLowerCase();
        }
    },
    watch: {
        type: {
            immediate: true,
            handler() {
                this.animals = this.$store.getters[(this.formatGetter(this.type))];
            }
        } 
    }
};
</script>
