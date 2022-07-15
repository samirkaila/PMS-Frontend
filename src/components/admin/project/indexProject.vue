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
				<router-link  :to="{name:'project.create'}" class="h-button task_modal_btnd"> <span><img :src="`${publicPath}images/btn-plus-icon.svg`" alt="" ></span>Add Project </router-link>
			</div>
			<div class="project-details-listing">
				<div class="task-listing  mt-0">
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
								<th>name</th>
								<th>Estimated Time</th>
								<th>startDate</th>
								<th>endDate</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for=" (project, index) in projects" v-bind:index="index" v-bind:key="project.id" >
								<td>{{showingRecord.start + index}}.</td>
								<td data-target-sidebar="viewtask-sidebar" @click="openProjectSidebar(project)">{{project.name}}</td>
								<td data-target-sidebar="viewtask-sidebar" @click="openProjectSidebar(project)">{{project.estimatetime}}</td>
								<td data-target-sidebar="viewtask-sidebar" @click="openProjectSidebar(project)">{{project.startDate}}</td>
								<td data-target-sidebar="viewtask-sidebar" @click="openProjectSidebar(project)">{{project.endDate}}</td>
								<td>
									<div class="action-box">
										<router-link class="action-btn edit" :to="{name:'project.edit',params: { id: project.id }}" ><img  :src="`${publicPath}images/icon-edit.svg`" alt=""></router-link>
										<a class="action-btn remove" href="javascript:void(0)" >
											<img :src="`${publicPath}images/icon-remove.svg`" alt="">
										</a>
									</div>
								</td>
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
	</div>
    <div class="viewtask-sidebar-wrap" id="viewproject-sidebar">
		<div class="viewtask-sidebar-overlay" data-dismiss-sidebar="viewproject-sidebar"></div>
		<div class="viewtask-sidebar">
			<div class="viewtask-sidebar-block">
				<div class="vtsidebar-topbar">
					<div class="back-arrow">
						<a class="arrow" href="#" data-dismiss-sidebar="viewproject-sidebar"><img :src="`${publicPath}images/back-arrow.svg`" alt=""></a>
					</div>
				</div>
				<div class="vtsidebar-databar">
					<div class="vtsidebar-title">
						<h3>{{this.projectData.name}}</h3>
					</div>
					<div class="vtsidebar-assigndate">Start Date - <span>{{this.projectData.startDate}}</span></div>
					<div class="vtsidebar-deadline">Deadline Date - <span>{{this.projectData.endDate}}</span></div>
					<div class="vtsidebar-estimated">Estimated Time - <span>{{this.projectData.estimatetime}}</span></div>
					<div class="vtsidebar-categories">
						<div class="cat-title">Categories</div>
						<!-- <div class="cat-tags">Design, Development, Frontend, UI/UX</div> -->
					</div>
					<div class="vtsidebar-taskdetail">
						<div class="td-title">Project Details</div>
						<div class="td-description">
							
							{{this.projectData.description}}
						</div>
					</div>
					<div class="vtsidebar-attached">
						<div class="attached-title">Attached Files</div>
						<div class="attached-buttons">
							<div class="ab-btnbox" v-for="file in projectData.files" v-bind:key="file.id">
								<a class="attached-btn" href="javascript:void(0)" @click="adminFileDownload(file.originalname , file.filename)">{{file.originalname}} <span><img :src="`${publicPath}images/folder-download-icon.svg`" alt=""></span></a>
							</div>
							
						</div>
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
import HeaderAdmin from "@/components/admin/HeaderAdmin.vue"
import AdminSideMenu from "@/components/admin/SideMenu.vue"
import Paginate from "vuejs-paginate-next";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import $ from 'jquery'
  export default {
	name: 'AdminProject',components: {
		HeaderAdmin , AdminSideMenu , Paginate ,Loading
    },data(){
            return{
				publicPath: process.env.BASE_URL,
				isLoading: false,
                fullPage: true,
				projects: [],
				projectData : {
					name: null,
					description: null,
					estimatetime: null,
					endDate: null,
					startDate: null,
					createdBy: null,
					createdAt: null,
					files: null,
					id: null
				},
				pages : 0,
				tableCurrentPage : 1,
				tablePageLength : 10,
				search : '',
				tableRecorsCount : 0,
				showingRecord : {}
            }
        },
        created: function()
        {
            this.auth = this.$store.state.authentication.user;
			this.fetchAllProjects()
			this.pageScript()
        },
        methods: {
			onCancel(){
				this.isLoading = true
			},
			currentPage(countnum){
				this.tableCurrentPage = countnum,
				this.fetchAllProjects()
			},
			tableSearch(){
				this.tableCurrentPage = 1
				this.fetchAllProjects()
			},
			changeTableLength(){
				this.tableCurrentPage = 1
				this.tablePageLength = parseInt(this.tablePageLength) 
				this.fetchAllProjects()
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
			fetchAllProjects(){
				const data = {
					length : this.tablePageLength,
					page : this.tableCurrentPage,
					search : this.search
				}
				this.isLoading = true
				DataService.fetchProjects( data )
				.then(response => {	
					if(response.status == 200){
						this.isLoading = false
						this.projects = response.data.projects
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
			openProjectSidebar(project){
				const id = project.id
				DataService.fetchProject( id )
				.then(response => {	
					if(response.status == 200){
						this.projectData = response.data;
						$('#viewproject-sidebar').addClass("open");
						$("body").addClass("overflow-hidden");
						$("[data-dismiss-sidebar]").click(function (event) {
							event.preventDefault();
							var dataId = $(this).attr("data-dismiss-sidebar");
							$('#' + dataId).removeClass("open");
							$("body").removeClass("overflow-hidden");
						});
					}
				})
				.catch(e => {
					console.log(e);
				});
			},
			pageScript(){
				$(document).ready( () => {
					$('#taskCustomFile').on('change', function (event) {
						var files = event.target.files;
						for (var i = 0; i < files.length; i++) {
							var file = files[i];
							
							$("<div class='file_list'><div class='file-text'>" + file.name + "</div><div class='download_files'><a href='#'></a></div><div class='file_remove' data-id='" + file.name + "' ></div></div>").insertAfter('#task_file_input');
						}
					});
					$('#projectCustomFile').on('change', function (event) {
						var files = event.target.files;
						for (var i = 0; i < files.length; i++) {
							var file = files[i];
							
							$("<div class='file_list'><div class='file-text'>" + file.name + "</div><div class='download_files'><a href='#'></a></div><div class='file_remove' data-id='" + file.name + "' ></div></div>").insertAfter('#project_file_input');
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