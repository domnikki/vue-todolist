<template>
	<div class="container">
  <b-table :items="todos" :fields="fields" caption-top>
    <template slot="table-caption">
    	<h2>Todo List
		<router-link class="btn btn-primary float-right" v-bind:to="'/add'">TODOの追加</router-link>
		</h2>
    </template>
    <template slot="detail" slot-scope="row">
    	<router-link class="btn btn-primary" v-bind:to="'/detail/'+row.item.id">詳細ページ</router-link>
    </template>
  </b-table>
  </div>
</template>

<script>
export default {
	name: 'todolist',
	data(){
		return {
			fields: [ 'title', 'deadline', 'detail'],
			todos: []
		}
	},
	methods:{
		selectTodoList(){
			this.axios.get("http://127.0.0.1:8000/api/todoList/").then(response=>{
				console.log(response.data);
				this.todos = response.data;
			})
		}
	},
	created: function(){
		this.selectTodoList();
	}
}
</script>