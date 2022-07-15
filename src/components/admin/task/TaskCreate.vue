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
				<router-link  :to="{name:'admin.task'}" class="h-button">Back</router-link>
			</div>
			<div class="create-user">
				<div class="task_form">
					<h3>Add New Task</h3>
					<div class="form_add_tasks">
						<form @submit.prevent="saveTask" ref="form" id="task_save_form">
							<div class="row" data-select2-id="select2-data-24-2mss">
								<div class="col-xl-3 col-md-6">
								<div class="input_wrap">
									<label for="">Project</label>
									<multiSelect v-model="this.task.projectID" :options="projectsOpts"  :searchable="true" :allow-empty="fasle" @change="projectSelect()" required></multiSelect>
									<span class="error">{{error.projectID}}</span>
								</div>
							</div>
							<div class="col-xl-9 col-md-6">
								<div class="input_wrap">
									<label for="">Task Name</label>
									<input type="text" v-model="this.task.name"  placeholder="Enter here" class="input_field" required>
									<span class="error">{{error.name}}</span>
								</div>
							</div>
								<div class="col-md-12">
									<div class="input_wrap input_wrap_date">
										<div class="wrap_date_row">
											<div class="wrap_date_col">
												<label for="">Start Date</label>
												<datepicker v-model="task.assigneddate" :disabled-dates="disabledDates" locale="date-fns/locale/fr" @keyup="this.TaskStartDateChange()" required></datepicker>
												<span class="error">{{error.assigneddate}}</span>
											</div>
											<div class="wrap_date_col">
												<label for="">End Date</label>
												<datepicker v-model="task.deadlinedate" :disabled-dates="deadlinedateDisable" locale="date-fns/locale/fr" required></datepicker>
												<span class="error">{{error.deadlinedate}}</span>
											</div>
											<div class="wrap_date_col">
												<label for="">Estimated Time</label>
												<input type="text" v-model="this.task.estimatetime" id=""  placeholder="Enter here" class="input_field time_field" @keyup="taskTimeChange()" required>
												<span class="error">{{error.estimatetime}}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="input_wrap">
										<label for="">Assigned to People</label>
										<multiSelect :searchable="true" v-model="this.task.assigned" :options="userOpts"  name="assigned" required></multiSelect>
										<span class="error">{{error.assigned}}</span>
									</div>
								</div>
								<div class="col-md-6" data-select2-id="select2-data-23-w7i1">
									<div class="input_wrap" data-select2-id="select2-data-22-m42w">
										<label for="">Add Categories</label>
										<multiSelect v-model="this.task.category" :options="categoryOpts" mode="tags" name="categorys" required></multiSelect>
										<span class="error">{{error.category}}</span>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input_wrap">
										<label for="">Task Detail</label>
										<textarea placeholder="Enter here" v-model="this.task.detail" class="input_field" required></textarea>
										<span class="error">{{error.detail}}</span>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input_wrap" id="task_input">
										<label for="">Attached File</label>
										<div class="input_wrap_file">
											<div id="task_file_input" class="file_input">
												<input class="file_input_tag taskFileUpload" id="taskCustomFile" type="file" multiple="multiple" name="files" />
												<label class="file_label" for="taskCustomFile">Upload File</label>
											</div>
											
										</div>
									</div>
									<div id="file_input_list">

									</div>
									<div class="add-more-file" @click="addMoreFile()">
										+ Add More File
									</div>
								</div>
								<div class="col-md-12">
									<div class="submit_wrap">
										<button   class="submit_button" :disabled='task.buttonDisable'>Save Task</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--Error Modal Start-->
	<div class="user-modal modal fade" id="erroModal" tabindex="-1" role="dialog" aria-labelledby="erroModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="success-message" style="display:none;">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<circle cx="12" cy="12" r="9" />
							<path d="M9 12l2 2l4 -4" />
						</svg>
						<p>Your project created successfuly.</p>
					</div>
					<div class="error-message">
						<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="#FF0036" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
							<circle cx="12" cy="12" r="9" />
							<line x1="12" y1="8" x2="12.01" y2="8" />
							<polyline points="11 12 12 12 12 16 13 16" />
						</svg>
						<p>One or more fields have an error. Please check and try again.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--Error Modal End-->	
</template>
<script >
import DataService from "@/services/DataService.js";
import $ from 'jquery'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Datepicker from 'vuejs3-datepicker';

import HeaderAdmin from "@/components/admin/HeaderAdmin.vue"
import AdminSideMenu from "@/components/admin/SideMenu.vue"

export default {
	name: 'AdminProject',components: {
    Datepicker,Loading,HeaderAdmin,AdminSideMenu
       },data(){
            return{
				publicPath: process.env.BASE_URL,
				isLoading: false,
                fullPage: true,
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
				userOpts:[
				],
				categoryOpts: [

				],
				disabledDates :{
					
				},
				deadlinedateDisable:{
					
				},
				error:{}
            }
        },
        created: function()
        {
            this.auth = this.$store.state.authentication.user;
			this.pageScript()
			this.fetchTaskData()
        },
        methods: {
			onCancel(){
				this.isLoading = true
			},
            logOut(){	
				this.$store.dispatch('authentication/logout');
			},
			saveTask(){
				var data = {
					name: this.task.name,
					projectID: this.task.projectID,
					assigneddate: this.task.assigneddate,
					estimatetime: this.task.estimatetime,
					deadlinedate: this.task.deadlinedate,
					detail: this.task.detail,
					assigned: this.task.assigned,
					categorys: this.task.category,
				};
				this.isLoading = true
				DataService.taskCreate(data )
				.then(response => {	
					if(response.status == 201){
						this.task = {};
						this.isLoading = false
						$('.file_list').remove()
						$('#file_input_list').html('')
						this.$router.push({ name: 'admin.task' });
					}
				this.submitted = true;
				})
				.catch(e => {
					console.log(e);
				});
				
			},
			projectSelect(){
				this.isLoading = true
				setTimeout( () => {	
					const projectID = this.task.projectID			
					if(projectID){
						let data = {
							projectID 
						}
						DataService.getTaskProjectDate(data )
						.then(response => {	
							if(response.status == 200){
								this.isLoading = false
								this.disabledDates.to       = new Date(response.data.startDate)
								this.deadlinedateDisable.to = new Date(response.data.startDate)
								this.task.assigneddate     = new Date(response.data.startDate)
								this.task.deadlinedate     = new Date(response.data.startDate)
							}
						})
						.catch(e => {
							console.log(e);
						});
					}else{
						this.isLoading = false
					}	
				},200)
				
			},
			TaskStartDateChange(){
				setTimeout( () => {
				},200)
			},
			fetchTaskData(){
				DataService.getProjectNames().then(response => {
				this.projectsOpts = []
				this.categoryOpts = []
				this.userOpts = []
				if(response.status == 200){
					response.data.projects.map( (projectOPT) => {
						const projectoption = {
							value : projectOPT.id,
							label : projectOPT.name
						}
						this.projectsOpts.push(projectoption)
					})
					response.data.users.map( (userOPT) => {
						const useroption = {
							value : userOPT._id,
							label : userOPT.name
						}
						this.userOpts.push(useroption)
					})
					response.data.categorys.map( (categoryOtp) => {
						const categoryoption = {
							value : categoryOtp._id,
							label : categoryOtp.name
						}
						this.categoryOpts.push(categoryoption)
					})
				}
			} ).catch( e => {
				console.log('error', e)
			})
			},
			taskTimeChange(){
				const estimatetime = this.task.estimatetime
				var isValid = /^([0-9]?[0-9]?[0-9]):([0-5][0-9])(:[0-5][0-9])?$/.test(estimatetime);
				if (isValid) {
					this.task.buttonDisable = false;
					this.error.estimatetime = ''
				} else {
					this.task.buttonDisable = true;
					this.error.estimatetime = 'Please Enter Valid Time'
				}
				if(!estimatetime){
					this.task.estimatetime = '00:00'
					this.error.estimatetime = 'Please Enter Estimated Time'
				}
			},
			addMoreFile(){
				let id = 'task_input'
				let append = 'file_input_list'
				let itemRow = $('.project_appeded_html').length
				
				const addMoreTest = (formTarget,itemRow) => {
					let fileDefaultHtml = $('#' + formTarget).last().clone();
					fileDefaultHtml.addClass('project_appeded_html')
					fileDefaultHtml.find('.taskFileUpload').removeClass('taskFileUpload')
					fileDefaultHtml.find('.file_list').remove()
					fileDefaultHtml.find('#taskCustomFile').addClass('appededFileUpload')
					fileDefaultHtml.find('#taskCustomFile').attr('id','taskCustomFile-'+itemRow).attr('data-id',itemRow)
					fileDefaultHtml.find('#task_file_input').attr('id','task_file_input-'+itemRow)
					fileDefaultHtml.find('.file_label').attr('for','taskCustomFile-'+itemRow)
					return fileDefaultHtml
				}
				let fileHtml = addMoreTest(id,itemRow)
				$('#'+append).append(fileHtml)
			},
			pageScript(){
				$(document).ready( () => {
					$('.file_list').remove()
					$('#file_input_list').html('')
					// $('#erroModal').modal('show')
					$('.taskFileUpload').on('change', function (event) {
						var files = event.target.files;
						for (var i = 0; i < files.length; i++) {
							var file = files[i];
							$("<div class='file_list'><div class='file-text'>" + file.name + "</div><div class='download_files'><a href='#'></a></div><div class='file_remove' data-id='" + file.name + "' ></div></div>").insertAfter('#task_file_input');
						}
					});
					$('body').on('click', '.file_remove', function () {
						$(this).parent().remove();
					});
					$(document).delegate('.appededFileUpload' , 'change',(event)=>{
						event.preventDefault();
						var files = event.target.files;
						let dataID = event.currentTarget.attributes['data-id'].value
						for (var i = 0; i < files.length; i++) {
							var file = files[i];
							$("<div class='file_list'><div class='file-text'>" + file.name + "</div><div class='download_files'><a href='#'></a></div><div class='file_remove' data-id='" + file.name + "' ></div></div>").insertAfter('#task_file_input-'+dataID);
						}
					});
				})
			},
			
        }
  }
</script>