<template> 
	<div id="app" :class="{'hide-menu': !isMenuVisible}"> 
		<Header title="Será que Presta?" 
		:hideToggle="false"
		:hideUserDropdown="false" />
		<Menu />
		<Content />
		<Footer />
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Header from "./components/template/Header"
import Menu from "./components/template/Menu"
import Content from "./components/template/Content"
import Footer from "./components/template/Footer"
// Declaração de Componentes
export default {
	name: "App",
	components: { Header, Menu, Content, Footer}, 
	computed: mapState(['isMenuVisible'])
}
</script>

<style>
	* {
		font-family: "Lato", sans-serif;
	}
	body {
		margin: 0;
	}
	/* O estilo que vai envolver a API */
	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		/*Ele vai pegar a tela inteira da api*/
		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 300px 1fr;
		grid-template-areas:
			"header header"
			"menu content"
			"menu footer";

	}

	#app.hide-menu {
		grid-template-areas: 
			"header header"
			"content content"
			"footer footer";
	}

</style>

