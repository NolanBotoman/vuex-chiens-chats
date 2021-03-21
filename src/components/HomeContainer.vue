<template>
    <div v-if="this.error" class="alert w-75 d-flex flex-row rounded-0 position-absolute alert-warning alert-dismissible fade show" role="alert">
        <strong class="me-1">Hey !</strong> {{ this.error }}
        <button type="button" @click="dismissError" class="me-2 position-absolute btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="bg-primary py-4 text-white d-flex justify-content-center">
        <div class="col-12 col-md-4 d-flex flex-column align-items-center">
            <h3>{{ animals.length }}</h3>
            <h5 class="lead mb-1">Animaux</h5>
        </div>
        <div class="col-12 col-md-4 d-flex flex-column align-items-center">
            <h3>{{ cats.length }}</h3>
            <h5 class="lead mb-1">Chats</h5>
        </div>
        <div class="col-12 col-md-4 d-flex flex-column align-items-center"> 
            <h3>{{ dogs.length }}</h3>
            <h5 class="lead mb-1">Chiens</h5>
        </div>
    </div>
    <form class="bg-success py-5 d-flex flex-column align-items-center fw-lighter text-uppercase text-white" @submit.prevent="addPet">
        <h4 class="col-8 mb-4">Formulaire d'ajout</h4>
        <div class="row col-8 gx-0">
            <div class="form-group mt-1 col-6 pe-2">
                <label for="name">Nom de l'animal*</label>
                <input type="text" class="form-control rounded-0" id="name" v-model="animal.name"/>
            </div>
            <div class="form-group col-6 mt-1 ps-2">
                <label for="birthYear">Année de naissance*</label>
                <input type="number" class="form-control rounded-0" name="birthYear" id="birthYear" v-model="animal.birthYear"/>
            </div>
        </div>
        <div class="row col-8 gx-0">
            <div class="form-group col-6 mt-1 pe-2">
                <label for="type">Espèce de l'animal*</label>
                <select class="form-control rounded-0" id="type" v-model="animal.type">
                    <option value="Dog">Chien</option>
                    <option value="Cat">Chat</option>
                </select>
            </div>
            <div class="form-group col-6 mt-1 ps-2">
                <label for="photo">URL d'image*</label>
                <input type="text" class="form-control rounded-0" name="photo" id="photo" v-model="animal.photo"/>
            </div>
        </div>
        <div class="col-8 pt-4">
            <button type="submit" class="btn btn-dark rounded-0">Envoyer et sauvegarder</button>
        </div>
    </form>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    name: "HomeContainer",
    data() {
        return {
            animal: {
                name: "",
                type: "",
                year: ""
            },
            error: ""
        }
    },
    methods: {
        addPet() {
            this.errors = [];
            if (this.animal.name == ""
                || this.animal.birthYear > new Date().getFullYear() 
                || (this.animal.type !== "Cat" && this.animal.type !== "Dog")) 
            {
                this.error = "Veuillez référencer tous les champs.";
            } else {
                this.$store.commit("addPetToList", this.animal);
                return this.$router.push({ name: "Home" });
            }
        },
        dismissError() {
            this.error = "";
        }
    },
    computed: {
        ...mapGetters({
            animals: "getAllAnimals",
            cats: "getAllCats",
            dogs: "getAllDogs"   
        }),
    },
};
</script>