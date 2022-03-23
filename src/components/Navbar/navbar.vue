<template>
	<div class="bg-white">
		<nav class="container px-4 py-8 mx-auto md:flex md:justify-between md:items-center">
			<div class="flex items-center justify-between">
				<router-link
					to="/"
					class="text-xl font-bold text-gray-500 md:text-2xl hover:text-gray-500"
				>
					<img src="../../assets/LOGO.png" alt="" srcset="" class="h-10">
				</router-link>
				<!-- Mobile menu button -->
				<div @click="toggleNav" class="flex md:hidden">
					<button
						type="button"
						class="text-black hover:text-gray-500 focus:outline-none focus:text-gray-500"
					>
						<svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
							<path
								fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							/>
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<ul
				:class="showMenu ? 'flex' : 'hidden'"
				class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
			>
				<li class="font-semibold text-black hover:text-gray-500" href="#Home">¿Que es Humanited?</li>
				<li class="font-semibold text-black hover:text-gray-500" href="#Products">Temas</li>
				<li class="font-semibold text-black hover:text-gray-500" href="#Subs">Subscripción</li>
				<li class="font-semibold text-black hover:text-gray-500">Inicia Sesión</li>
				<div>
					<button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
						Registrate
					</button>
				</div>
			</ul>
		</nav>
	</div>
</template>
<script>
	import { ref } from "vue";

	export default {
		name: "NabvarComponent",
		setup() {
			let showMenu = ref(false);
			const toggleNav = () => (showMenu.value = !showMenu.value);
			return { showMenu, toggleNav };
		}
	};
</script>

<style></style>
