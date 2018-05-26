<template>
	<div class="container">
		<b-form @submit="postTodo">
			<b-form-group id="title" label="タイトル:" label-for="title" >
        		<b-form-input id="title" type="text" v-model="todo.title" required placeholder="タイトル"></b-form-input>
    		</b-form-group>
			<b-form-group id="description" label="詳細:" label-for="description" >
				<b-form-textarea id="description" type="text" v-model="todo.description" placeholder="詳細" :rows="3"></b-form-textarea>
			</b-form-group>
			<b-form-group id="deadline" label="期限:" label-for="deadline" >
				<b-form-input id="deadline" type="date" v-model="todo.deadline" placeholder="詳細"></b-form-input>
			</b-form-group>
			<b-button type="submit">Submit</b-button>
		</b-form>
	</div>
</template>

<script>
export default {
	name: 'add',
	data(){
		return {
			todo: {}
		}
	},
	methods:{
		postTodo(e){
			this.axios.post("http://127.0.0.1:8000/api/todoList/", this.todo).then(response=>{
				this.$router.push({path: '/'});
			})
			e.preventDefault();
		}
	}
}
</script>