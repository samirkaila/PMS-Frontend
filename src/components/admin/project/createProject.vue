<template>
	<div class="main_wapper-inner main_wapper-inner-v2">
		<HeaderAdmin />
		<AdminSideMenu/>
		
		<div class="admin-deshboard sidebar">
			<div class="top_add_btn">
				<router-link  :to="{name:'admin.project'}" class="h-button task_modal_btnd">Back</router-link>
			</div>
			<loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
			<div class="create-user">
				<div class="task_form">
					<h3>Add New Project</h3>
					<div class="form_add_tasks">
						<form @submit.prevent="saveProject" ref="form" id="project_save_form">
							<div class="row">
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">Project Name</label>
										<input type="text" name="name" v-model="project.name" placeholder="Enter here" class="input_field" required>
									</div>
								</div>
								<div class="col-xl-8 col-md-12">
									<div class="input_wrap input_wrap_date">
										<div class="wrap_date_row">
											<div class="wrap_date_col">
												<label for="">Start Date</label>
												<datepicker v-model="project.startdate" :disabled-dates="disabledDates"></datepicker>
											</div>
											<div class="wrap_date_col">
												<label for="">End Date</label>
												<datepicker v-model="project.enddate" :disabled-dates="deadlinedateDisable" ></datepicker>
											</div>
											<div class="wrap_date_col">
												<label for="">Estimated Time</label>
												<input type="text" name="" id="" v-model="project.estimatetime"   placeholder="Enter here" class="input_field time_field" @keyup="projectTimerChange()" required>
												<span class="error">{{error.estimatetime}}</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="input_wrap">
										<label for="pipeline">Project Pipeline</label>
										<input type="checkbox" id="pipeline" name="pipeline" v-model="project.pipeline" class="" >
										
									</div>
								</div>
								<div class="col-md-12">
									<div class="input_wrap">
										<label for="">Project Details</label>
										<textarea placeholder="Enter here" class="input_field" v-model="project.description" required></textarea>
									</div>
								</div>
								<div class="col-md-12">
									<div class="input_wrap" id="project_input">
										<label for="">Attached File</label>
										<div class="input_wrap_file">
											<div id="project_file_input" class="file_input">
												<input class="file_input_tag projectFileUpload" id="projectCustomFile" type="file" multiple="multiple" name="files" />
												<label class="file_label" for="projectCustomFile">Upload File</label>
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
										<button   class="submit_button" :disabled='project.buttonDisable'>Save Project</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<style >
@import '../../../assets/css/select2.min.css';
@import '../../../assets/css/bootstrap.min.css';
@import '../../../assets/fonts/fonts.css';
@import '../../../assets/css/style.css';
@import '../../../assets/css/slick.css';

@import '../../../assets/css/responsive.css';

</style>
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
				project: {
					name: null,
					description : null,
					startdate : new Date(),
					enddate : new Date(),
					estimatetime : '00:00',
					buttonDisable : false
				},
				disabledDates :{
					to: new Date(Date.now() - 8640000),
				},
				deadlinedateDisable:{
					to: new Date(Date.now() - 8640000),
				},
				error:{}
            }
        },
        created: function()
        {
            this.auth = this.$store.state.authentication.user;
			this.pageScript()
        },
        methods: {
			onCancel(){
				this.isLoading = true
			},
            logOut(){	
				this.$store.dispatch('authentication/logout');
			},
			saveProject() {
				var data = {
					name   :    this.project.name,
					description :    this.project.description,
					startdate :    this.project.startdate,
					enddate :    this.project.enddate,
					estimatetime :    this.project.estimatetime,
				};
				this.isLoading = true
				DataService.projectCreate(data )
					.then(response => {	
						if(response.status == 201){
							this.project = {}
							this.isLoading = false
							$('.file_list').remove()
							$('#file_input_list').html('')
							this.$router.push({ name: 'admin.project' });
						}
					this.submitted = true;
					})
					.catch(e => {
						console.log(e);
					});
			},
			projectTimerChange(){
				const estimatetime = this.project.estimatetime
				var isValid = /^([0-9]?[0-9]?[0-9]):([0-5][0-9])(:[0-5][0-9])?$/.test(estimatetime);
				if (isValid) {
					this.project.buttonDisable = false;
					this.error.estimatetime = ''
				} else {
					this.project.buttonDisable = true;
					this.error.estimatetime = 'Please Enter Valid Time'
				}
				if(!estimatetime){
					this.project.estimatetime = '00:00'
					this.error.estimatetime = 'Please Enter Estimated Time'
				}
			},
			addMoreFile(){
				let id = 'project_input'
				let append = 'file_input_list'
				let itemRow = $('.project_appeded_html').length
				
				const addMoreTest = (formTarget,itemRow) => {
					let fileDefaultHtml = $('#' + formTarget).last().clone();
					fileDefaultHtml.addClass('project_appeded_html')
					fileDefaultHtml.find('.projectFileUpload').removeClass('projectFileUpload')
					fileDefaultHtml.find('.file_list').remove()
					fileDefaultHtml.find('#projectCustomFile').addClass('appededFileUpload')
					fileDefaultHtml.find('#projectCustomFile').attr('id','projectCustomFile-'+itemRow).attr('data-id',itemRow)
					fileDefaultHtml.find('#project_file_input').attr('id','project_file_input-'+itemRow)
					fileDefaultHtml.find('.file_label').attr('for','projectCustomFile-'+itemRow)
					return fileDefaultHtml
				}
				let fileHtml = addMoreTest(id,itemRow)
				$('#'+append).append(fileHtml)
			},
			pageScript(){
				$(document).ready( () => {
					$('.file_list').remove()
					$('.projectFileUpload').on('change', function (event) {
						var files = event.target.files;
						for (var i = 0; i < files.length; i++) {
							var file = files[i];
							$("<div class='file_list'><div class='file-text'>" + file.name + "</div><div class='download_files'><a href='#'></a></div><div class='file_remove' data-id='" + file.name + "' ></div></div>").insertAfter('#project_file_input');
						}
					});
					$(document).delegate('.appededFileUpload' , 'change',(event)=>{
						event.preventDefault();
						var files = event.target.files;
						let dataID = event.currentTarget.attributes['data-id'].value
						for (var i = 0; i < files.length; i++) {
							var file = files[i];
							$("<div class='file_list'><div class='file-text'>" + file.name + "</div><div class='download_files'><a href='#'></a></div><div class='file_remove' data-id='" + file.name + "' ></div></div>").insertAfter('#project_file_input-'+dataID);
						}
					});
					$('body').on('click', '.file_remove', function () {
						$(this).parent().remove();
					});
				})
			},
			
        }
  }
</script>