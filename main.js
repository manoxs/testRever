
var HeroComponent = Vue.component('hero-component', {
	template: `
	<section class="hero">
			  <div class="hero-body">
				<div class="container">
				  <h1 class="title">
					Cat Gallery
				  </h1>
				</div>
			  </div>
	</section>`
});
/* 	<li v-for="post in posts">{{ post.name}}</li> */

var TileComponent = Vue.component('tile-component', {
	template:`
		  <div class="tile is-parent">
			<article class="tile is-child box">
				<p class="title">
					<slot name="header-title"></slot>
				</p>
				<p class="content">
					<slot name="content-photo"></slot>
				</p>
					<slot name="button-modal"></slot>
			</article>	
		  </div>
		</div>`,
	
});


var ModalComponent = Vue.component('modal', {
	template: `
<div>
		<div class="modal is-active">
		<div class="modal-background"></div>

			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">
						<slot :name="modal-photo"></slot>
					</p>

					<button class="modal-close" @click="$emit('close')" ></button>
				</header>

				<section class="modal-card-body">
					<div class="modal-content">
						<p class="image is-4by3">
							<img src="http://thecatapi.com/api/images/get?format=src&type=gif"/>
					</p>
					</div>
				</section>

				<footer class="modal-card-foot">
					<slot name="footer"></slot>
				</footer>
			</div>
		</div>
</div>	`,
});

Vue.component('modal-component', ModalComponent);

new Vue({	
	el: '#root',
	data: {
		showModal: false,
		posts: [],
		errors: []
	},
	component: {
		'hero-component': HeroComponent,
		'modal-component': ModalComponent,
		'tile-component': TileComponent
	},
	created() {
		axios.get('http://localhost:3000/Cat/')
		.then(response => this.posts = response.data)
		.catch(e => this.error.push(e));
	}
});