<template>
	<div class="main_wapper-inner main_wapper-inner-v2">
		<HeaderAdmin />
		<AdminSideMenu/>

		<div class="admin-deshboard sidebar">
			<loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
			<div class="task-listing mt-0">
				<div class="row">
					<div class="col-sm-12 col-md-6">
						<div class="tables_length">
							<label>
								Show
								<select name="DataTable_length" aria-controls="DataTable" class="custom-select custom-select-sm form-control form-control-sm" @change="changeTableLength()" v-model="this.tablePageLength">
									<option value="10">10</option>
									<option value="25">25</option>
									<option value="50">50</option>
									<option value="100">100</option>
								</select>
								entries
							</label>
						</div>
					</div>
					<div class="col-sm-12 col-md-6">
						<div id="table_filter" class="tables_filter">
							<label>
								Search:
								<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="table_data" v-model="this.search" @keyup="tableSearch()">
							</label>
						</div>
					</div>
				</div>
				<table class="table_main_data" style="width:100%">
					<thead>
						<tr>
							<th>No.</th>
							<th>Person</th>
							<th>Task</th>
							<th>Estimated Time</th>
							<th>Spent Time</th>
							<th>Remaining Time</th>
							<th>Project Deadline</th>
							<th>Next Availability</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for=" (task, index) in tasks" v-bind:index="index" v-bind:key="task.id" @click="openTaskSidebar(task._id , task.user.id)">
							<td>{{showingRecord.start + index}}.</td>
							<td data-target-sidebar="viewtask-sidebar">{{task.user.name}}</td>
							<td data-target-sidebar="viewtask-sidebar"><div class="text"><strong>{{task.project}} </strong> - {{task.name}}</div></td>
							<td data-target-sidebar="viewtask-sidebar">{{task.estimatedTime}}</td>
							<td data-target-sidebar="viewtask-sidebar" :class="(task.remainingTimeisPast) ? 'highlight' : '' ">{{task.spentTime}}</td>
							<td data-target-sidebar="viewtask-sidebar" :class="(task.remainingTimeisPast) ? 'highlight' : '' ">{{task.remainingTime}}</td>
							<td data-target-sidebar="viewtask-sidebar" :class="(task.projectPast) ? 'highlight' : '' ">{{task.deadlineDate}}</td>
							<td data-target-sidebar="viewtask-sidebar">{{task.nextavailability}}</td>
						</tr>
					</tbody>
				</table>
				<div class="row">
					<div class="col-sm-12 col-md-5">
						<div class="tables_info" role="status" aria-live="polite">Showing {{this.showingRecord.start}} to {{this.showingRecord.end}} of {{this.tableRecorsCount}} entries</div>
					</div>
					<div class="col-sm-12 col-md-7">
						<div class="pagination_mian">
							<paginate
							:page-count="this.pages"
							:click-handler="currentPage"
							:prev-text="'Prev'"
							:next-text="'Next'"
							:container-class="'pagination'"
							>
							</paginate>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--View-Task-Sidebar-->
	<div class="viewtask-sidebar-wrap" id="viewtask-sidebar">
		<div class="viewtask-sidebar-overlay" data-dismiss-sidebar="viewtask-sidebar"></div>
		<div class="viewtask-sidebar">
			<div class="viewtask-sidebar-block">
				<div class="vtsidebar-topbar">
					<div class="back-arrow">
						<a class="arrow" href="#" data-dismiss-sidebar="viewtask-sidebar"><img :src="`${publicPath}images/back-arrow.svg`" alt=""></a>
					</div>
					
				</div>
				<div class="vtsidebar-databar">
					<div class="vtsidebar-btnbox">
						<a class="vts-btn" href="javascript:void(0)">{{sliderTask.project}}</a>
						<a class="vts-btn ml-auto" href="javascript:void(0)" @click="uncompleteTask(sliderTask.id )">Uncomplate</a>
					</div>
					<div class="vtsidebar-title">
						<h3>{{sliderTask.name}}</h3>
					</div>
					<div class="vtsidebar-assigndate">Assigned Date - <span>{{sliderTask.assignedDate}}</span></div>
					<div class="vtsidebar-assigbox">
						<div class="assigbox-title">Assigned to</div>
						<div class="assigbox-wrap">
							<div class="assigbox" >
								<div class="thumb">
									<img :src="sliderTaskUser.profilesrc" alt="" v-if="sliderTaskUser.profilesrc">
									<img :src="`${publicPath}images/thumb.png`" alt="" v-else>
								</div>
								<div class="name">{{sliderTaskUser.name}}</div>
							</div>
						</div>
					</div>
					<div class="vtsidebar-deadline">Deadline Date - <span>{{sliderTask.deadlineDate}}</span></div>
					<div class="vtsidebar-estimated">Estimated Time - <span>{{sliderTask.estimatedTime}}</span></div>
					<div class="vtsidebar-categories">
						<div class="cat-title">Categories</div>
						<div class="cat-tags">{{sliderTask.categorys}}</div>
					</div>
					<div class="vtsidebar-taskdetail">
						<div class="td-title">Task Details</div>
						<div class="td-description">
							<div class="td-desclbl">Task Description</div>
							<div class="td-desc">
								<div class="descbox" v-html="sliderTask.description">
									
								</div>
							</div>
						</div>
					</div>
					<div class="vtsidebar-attached">
						<div class="attached-title">Attached Files</div>
						<div class="attached-buttons">
							<div class="ab-btnbox" v-for="file in sliderTask.files" v-bind:key="file.id">
								<a class="attached-btn" href="javascript:void(0)" @click="adminFileDownload(file.originalname , file.filename)">{{file.originalname}} <span><img :src="`${publicPath}images/folder-download-icon.svg`" alt=""></span></a>
							</div>
						</div>
					</div>
					<div class="vtsidebar-comments">
						<div class="comments-title">Comments</div>
						<div class="comments-form">
							<form @submit.prevent="saveMessage(sliderTask.id)" ref="form">
								<div class="c-thumb">
									<img :src="this.auth.user.profilesrc" alt="" v-if="this.auth.user.profilesrc">
									<img :src="`${publicPath}images/Logo-2.svg`" alt="" v-else>
								</div>
								<input class="input-text" type="text" placeholder="Write a comment...." v-model="this.message">
								<button class="sentbtn" type="submit"><img :src="`${publicPath}images/sentbtn-icon.svg`" alt=""></button>
							</form>
						</div>
						<div class="comments-list">
							<div class="combox-wrap" v-for="messages in taskMessages" v-bind:key="messages.id">
								<div class="combox" >
									<div class="com-thumb">
										<img :src="messages.profilesrc"  v-if="messages.profilesrc">
										<img :src="`${publicPath}images/Logo-2.svg`" alt="" v-else>
									</div>
									<div class="com-content">
										<div class="com-title"><a href="javascript:void(0)">{{messages.userName}}</a> <span>{{messages.date}}</span></div>
										<div class="com-desc">
											<p>{{messages.message}}</p>
										</div>
										<div class="com-replay">
											<a class="replay-link" href="javascript:void(0)" @click="openReplayBox(messages.id)"><span>
												<img :src="`${publicPath}images/replay-icon.svg`" alt="" ></span>Reply</a>
										</div>
										<div class="replay_sec" :id="`replay-box-${messages.id}`">
											<div class="comments_form_mian" >
												<form @submit.prevent="saveMessageReplay(sliderTask.id ,messages.id )" ref="form">
													<textarea class="comment-text" placeholder="Comment..." v-model="this.repalymessage"></textarea>
													<div class="button_grp">
														<input type="submit" value="Submit" class="submit form_btn">
														<input type="button" value="Cancle" class="cancle form_btn" @click="closeReplayBox(messages.id)">
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div class="combox-sub" >
									<div class="combox" v-for="replaymessage in messages.replays" v-bind:key="replaymessage.id">
										<div class="com-thumb">
											<img :src="replaymessage.profilesrc" alt="" v-if="replaymessage.profilesrc">
											<img src="images/Logo-2.svg" alt="" v-else>
										</div>
										<div class="com-content">
											<div class="com-title"><a href="javascript:void(0)">{{replaymessage.userName}}</a> <span>{{replaymessage.date}}</span></div>
											<div class="com-desc">
												<p><a href="#">@{{messages.userName}} </a> {{replaymessage.message}}</p>
											</div>
										</div>
									</div>
								</div>		
							</div>
						</div>	
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--View-Task-Sidebar-->
	
</template>
<style >
@import '../../assets/css/select2.min.css';
@import '../../assets/css/bootstrap.min.css';
@import '../../assets/fonts/fonts.css';
@import '../../assets/css/style.css';
@import '../../assets/css/slick.css';

@import '../../assets/css/responsive.css';
@import '@vueform/multiselect/themes/default.css';

</style>
<script >
import DataService from "@/services/DataService.js";
import $ from 'jquery'

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import HeaderAdmin from "@/components/admin/HeaderAdmin.vue"
import AdminSideMenu from "@/components/admin/SideMenu.vue"

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import Paginate from "vuejs-paginate-next";

export default {
	name: 'AdminHome',components: {
		HeaderAdmin,AdminSideMenu ,Loading , Paginate
  },data(){
            return{
				publicPath: process.env.BASE_URL,
				disabledDates :{
					to: new Date(Date.now() - 8640000),
					// from: new Date()
				},
				deadlinedateDisable:{
					to: new Date(Date.now() - 8640000),
				},
                project: {
					name: null,
					description : null,
					startdate : new Date(),
					enddate : new Date(),
					estimatetime : '00:00',
					buttonDisable : false
				},
				task:{
					name: null,
					projectID: null,
					assigneddate: new Date(),
					estimatetime: '00:00',
					deadlinedate: new Date(),
					detail: null,
					buttonDisable : false,
					assigned: [],
					category: null
				},
				tasks : {},
				sliderTask: {},
				sliderTaskUser : {},
				selectedFile: "",
				projectsOpts: [],
				userOpts:[
				],
				categoryOpts: [

				],
				message : null,
				taskMessages : {

				},
				repalymessage : null,
				pages : 0,
				tableCurrentPage : 1,
				isLoading : false,
				fullPage: true,
				tablePageLength : 10,
				search : '',
				tableRecorsCount : 0,
				showingRecord : {}
            }
        },	
	created: function()
	{
		this.auth = this.$store.state.authentication.user;
		this.pageScript()
		this.fetchUserCompleteTasks()
	},
	beforeUnmount: function() {
		
	},		
	methods: {
		logOut(){
			
			this.$store.dispatch('authentication/logout');
		},
		onCancel(){
			this.isLoading = true
		},
		currentPage(countnum){
			this.tableCurrentPage = countnum,
			this.fetchUserCompleteTasks()
		},
		tableSearch(){
			this.tableCurrentPage = 1
			this.fetchUserCompleteTasks()
		},
		changeTableLength(){
			this.tableCurrentPage = 1
			this.tablePageLength = parseInt(this.tablePageLength) 
			this.fetchUserCompleteTasks()
		},
		adminFileDownload( originalname , name){
			DataService.donloadAdminFile( name )
			.then(response => {	
				if(response.status == 200){
					const url = window.URL.createObjectURL(new Blob([response.data]));
					const link = document.createElement('a');
					link.href = url;
					link.setAttribute('download', originalname);
					document.body.appendChild(link);
					link.click();
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		fetchUserCompleteTasks(){
			const data = {
				length : this.tablePageLength,
				page : this.tableCurrentPage,
				search : this.search
			}
			this.isLoading = true
			DataService.adminTasksCompleteData( data )
			.then(response => {	
				if(response.status == 200){
					this.isLoading = false
					this.tasks = response.data.tasks
					let records = response.data.recordsTotal
					this.pages = Math.ceil(records / this.tablePageLength)
					this.tableRecorsCount = records
					this.showingRecord = response.data.showingRecord
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		openTaskSidebar( id ,userID){
			DataService.getTaskForUserSlider( id )
			.then(response => {	
				if(response.status == 200){
					this.getTaskMessages(id)
					this.sliderTask = response.data;
					this.sliderTask.userID = userID ;
					this.sliderTaskUser = response.data.user
					$(document).ready( () => {
							$('#viewtask-sidebar').addClass("open");
							$("body").addClass("overflow-hidden");
						$("[data-dismiss-sidebar]").click(function (event) {
							event.preventDefault();
							$('#viewtask-sidebar').removeClass("open");
							$("body").removeClass("overflow-hidden");
						});
					})
					
				}
			})
			.catch(e => {
				console.log(e);
			});
			
		},
		pageScript(){
			$(document).ready( () => {
				
			})
		},
		uncompleteTask(taskID){
			var data = {
				taskID
			};
			DataService.adminTasksUnComplete( data )
			.then(response => {	
				if(response.status == 200){
					$('#viewtask-sidebar').removeClass("open");
					$("body").removeClass("overflow-hidden");
					this.fetchUserCompleteTasks()
				}
				this.submitted = true;
			})
			.catch(e => {
				console.log(e);
			});
		},
		saveMessage(taskID){
			const data = {
				taskID,
				message : this.message
			}
			DataService.saveMessage( data )
			.then(response => {	
				if(response.status == 201){
					this.message = null
					this.getTaskMessages(taskID)
				}
			this.submitted = true;
			})
			.catch(e => {
				console.log(e);
			});
		},
		getTaskMessages(taskID){
			DataService.getTaskMessage( taskID )
			.then(response => {	
				if(response.status == 200){
					this.taskMessages = response.data
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		openReplayBox(messageID){
			$('#replay-box-' + messageID).slideToggle();
		},
		closeReplayBox(messageID){
			$('#replay-box-' + messageID).slideToggle();
		},
		saveMessageReplay(taskID ,parentID ){
			const data = {
				taskID,
				message : this.repalymessage,
				parentID  
			}
			DataService.saveReplayMessage( data )
			.then(response => {	
				if(response.status == 201){
					this.repalymessage = null
					this.getTaskMessages(taskID)
					$('#replay-box-' + parentID).slideToggle();
				}
			this.submitted = true;
			})
			.catch(e => {
				console.log(e);
			});
		}
	}
  }
</script>