<template>
<div class="container">
<h1>詳細ページ</h1>
  <b-table stacked :items="todo"></b-table>
	<span>
<router-link class="btn btn-primary" v-bind:to="'/'">戻る</router-link>

<button class="btn btn-danger" v-on:click="deleteTodo(todo[0].id)">削除</button>
</span>
</div>
</template>

<script>
export default {
	name: 'detail',
	data(){
		return {
			todo: []
		}
	},
	methods:{
		selectTodo(id){
			this.axios.get("http://127.0.0.1:8000/api/todoList/" + id + "/").then(response=>{
				console.log(response.data);
				this.todo.push(response.data);
			})
		},
		deleteTodo(id){
				this.axios.delete("http://127.0.0.1:8000/api/todoList/" + id + "/")
					.then(response => {
				this.$router.push({path: '/'});
			});
		}
	},
	created: function(){
		console.log(this.$route.params.id);
		this.selectTodo(this.$route.params.id);
	}
}
</script>