var song = Vue.component('song', {

	props:['song', 'index'],

	template:`

		<li class="list-group-item">
			<button type="button" 
			class="btn btn-danger float-right"
			@click="$emit('delete-button-clicked')"
			>X</button>
			<button type="button" 
			class="float-right mr-2"
			:class="{
				'btn btn-outline-warning': !song.favorited,
				'btn-warning': song.favorited
			}"
			@click="$emit('favorite-button-clicked')"
			>Favorite</button>
			<h3>{{ song.title }}</h3>
			<small>{{ song.artist }}</small>
		</li>

	`,
});

var playlist = Vue.component('playlist', {
	data(){

		return{
			newSong:{
				title: "",
				artist: "", 

			},
			songs:[

				{
					title: "Lose Yourself",
					artist: "Eminem",
					favorited:false
				},
				{
					title: "Tide",
					artist: "Knowamatic",
					favorited:false
				},
				{
					title: "We are the champions",
					artist: "Queen",
					favorited:false
				},

			]
		}
	},
	methods:{

		addSong(){
			var newSong = new Object({

				title:this.newSong.title,
				artist:this.newSong.artist,
				favorited: false

			});

			this.songs.push(newSong)
			this.newSong.title = "";
			this.newSong.artist = "";
		}
	},
	template:`
		<div>
			<div id="add-song mt-5 p-2 rounded border">
				<div class="form-group">
					<label for="song-title">Song Title</label>
					<input v-model="newSong.title" type="text" class="form-control" id="song-title" aria-describedby="songTitle" placeholder="Enter Song Title">

				</div>
				<div class="form-group">
					<label for="song-artist">Artist</label>
					<input v-model="newSong.artist" type="text" class="form-control" id="song-artist" placeholder="Enter Artist">
				</div>
				<div>
					<button @click="addSong" type="button" class="btn btn-primary">Add</button>
				</div>
			</div>
			<ul class="list-group mt-5">
				<song 
				v-for="(song, index) in songs"
				@delete-button-clicked="songs.splice(index, 1)"
				@favorite-button-clicked="songs[index].favorited = !songs[index].favorited"
				:key="index"
				:song="song"
				>
				</song>
			</ul>
			</div>
	    </div>   
	`,

});
new Vue ({

	el:"#app"

});