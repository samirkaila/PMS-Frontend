<template>
	<div class="main_wapper-inner main_wapper-inner-v2">
		<HeaderAdmin />
		<AdminSideMenu/>
		<div class="admin-deshboard sidebar">
			<loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
			<div class="top_add_btn">
				<router-link  :to="{name:'user.availability'}" class="h-button">Back</router-link>
			</div>
			<div class="create-user">
			<div class="task_form">
				<h3>Task List</h3>
				<div class="user_name_title">
					{{taskUser}}
				</div>
				<div class="">
					<ul class="task_bundal">
					<draggable class="list_task_main" :list="tasks" @change="changeOrder">
						
							<transition-group class="task_bundal">
							<li
								
								v-for="(task, index) in tasks"
								:key="index"
							>
								<h6> {{task.project}} - </h6>{{ task.name }}
							</li>
							</transition-group>
						
					</draggable>
					</ul>
				</div>
			</div>
		</div>
		</div>	
	</div>
</template>
<script >
import DataService from "@/services/DataService.js";
import $ from 'jquery'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import HeaderAdmin from "@/components/admin/HeaderAdmin.vue"
import AdminSideMenu from "@/components/admin/SideMenu.vue"

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import { VueDraggableNext } from 'vue-draggable-next'

export default {
	name: 'AdminHome',components: {
		HeaderAdmin,AdminSideMenu,draggable: VueDraggableNext,Loading
  },data(){
            return{
				publicPath: process.env.BASE_URL,
				auth : {},
				tasks: {},
				enabled: true,
				dragging: false,
				fullPage: true,
				isLoading: true,
				taskUser : null,
            }
        },	
	created: function()
	{
		this.auth = this.$store.state.authentication.user;
		this.pageScript()
		this.fatchAvailabilityList()
		this.isLoading = false
	},		
	methods: {
		onCancel(){
			this.isLoading = true
		},
		fatchAvailabilityList(){
			this.isLoading = true
			let id = this.$route.params.id;
			DataService.userfindTasks( id )
			.then(response => {	
				if(response.status == 200){
					this.tasks = response.data.task;
					this.taskUser = response.data.user;
					this.isLoading = false
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		changeOrder(){
			this.isLoading = true
			let id = this.$route.params.id;
			let data = this.tasks
			DataService.setuserTaskOrder( id ,data)
			.then(response => {	
				if(response.status == 200){
					this.isLoading = false
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		pageScript(){
			$(document).ready(() => {
				setTimeout( ()=> {
					$('#admin_user_list').DataTable()
				},250)
			})
		}
	}
  }
</script>