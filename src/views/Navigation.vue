<template>
    <div class="row row-offcanvas row-offcanvas-left vh-100 pt-4 ps-4 bg-dark">
        <div class="">
			<router-link 
				:to="{ name: 'Home' }"
				class="navbar-brand text-uppercase fw-lighter text-white">
				Gestionnaire Animaux
			</router-link>
            <div class="mt-3">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link 
                            :to="{ name: 'Home' }"
                            class="nav-link fw-lighter text-white">
                            Tous nos animaux
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link 
                            :to="{ name: 'Animals', params: { type: 'cats' } }" 
                            class="nav-link fw-lighter text-white">
                            Nos amis les chats
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link 
                            :to="{ name: 'Animals', params: { type: 'dogs' } }"
                            class="nav-link fw-lighter text-white">
                            Nos copains les chiens
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>