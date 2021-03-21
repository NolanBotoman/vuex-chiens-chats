    <template>
<div class="border m-2 p-3 row">
    <div class="col-6 d-flex justify-content-center flex-column">
        <div>
            <h5>{{ animal.name }} <span class="lead">({{ animal.birthYear }})</span></h5>
        </div>
        <div v-if="animal.favFoods" class="d-flex flex-column mt-3">
            <h5 class="lead">Ses plats préférés</h5>
            <div class="mt-1">
                <span class="me-3 border p-1" v-for="food in animal.favFoods" :key="food" v-html="food"></span>
            </div>  
        </div>
    </div>
    <div class="col-6">
        <img class="img-fluid" :src="animal.photo" />
    </div>    
</div>
</template>
<script>
export default {
    name: "AnimalContainer",
    props: ["type", "id"],
    data() {
        return  {
            animal: {}
        }
    },
    methods: {
        formatGetter(getter) {
            return "getAll" + getter.charAt(0).toUpperCase() + getter.slice(1).toLowerCase();
        }
    },
    watch: {
        id: {
            immediate: true,
            handler() {
                console.log(this.$store.getters[(this.formatGetter(this.type))]);
                this.$store.getters[(this.formatGetter(this.type))].forEach((animal, index) => {
                    if (index == this.id) this.animal = animal;
                });
            }
        } 
    }
};
</script>