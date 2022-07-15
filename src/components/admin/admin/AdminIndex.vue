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
				<router-link  :to="{name:'manager.create'}" class="h-button"><span><img :src="`${publicPath}images/btn-plus-icon.svg`" alt="" ></span>Add Admin</router-link>
			</div>
			
			<div class="deshboard-userside">
				<div class="row">
					<div class="col-md-6">
						<div class="userbox">
							<h4>Manager</h4>
							<div class="count-num">{{this.userCount.manager}}</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="userbox">
							<h4>Developer</h4>
							<div class="count-num">{{this.userCount.user}}</div>
						</div>
					</div>
				</div>
			</div>

			<div class="task-listing">
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
							<th>Email</th>
							<th>Number</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for=" (user, index) in users" v-bind:index="index" v-bind:key="user.id">
							<td>{{showingRecord.start + index}}</td>
							<td>{{user.name}}</td>
							<td>{{user.email}}</td>
							<td>{{user.number}}</td>
							<td>
								<div class="action-box">
									<router-link class="action-btn edit" :to="{name:'admin.edit',params: { id: user._id }}" ><img  :src="`${publicPath}images/icon-edit.svg`" alt=""></router-link>
									<a class="action-btn remove" href="javascript:void(0)" @click="userDalete(user._id)">
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
	<!--Remove-User Modal Start-->
	<div class="user-modal modal fade" id="removeUserModal" tabindex="-1" role="dialog" aria-labelledby="removeUserModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="user-modal-alert">
						<h3>Are you sure you want to remove this user?</h3>
						<div class="btnbox">
							<a class="button btn-yes" href="javascript:void(0)" @click="deleteUser">Yes</a>
							<a class="button btn-no" href="javascript:void(0)"  @click="deleteModelHide">No</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--Remove-User Modal End-->
</template>
<style >
@import '../../../assets/css/select2.min.css';
@import '../../../assets/css/bootstrap.min.css';
@import '../../../assets/fonts/fonts.css';
@import '../../../assets/css/style.css';
@import '../../../assets/css/slick.css';

@import '../../../assets/css/responsive.css';
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
		HeaderAdmin,AdminSideMenu,Paginate,Loading
  },data(){
            return{
				publicPath: process.env.BASE_URL,
				auth : {},
				users: {},
				userID: {},
				userCount : {

				},
				submitted : false,
				isLoading: false,
                fullPage: true,
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
		this.pageScript()
		this.fatchAdminList()
		this.currentProjectCount()
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
			this.fatchAdminList()
		},
		tableSearch(){
			this.tableCurrentPage = 1
			this.fatchAdminList()
		},
		changeTableLength(){
			this.tableCurrentPage = 1
			this.tablePageLength = parseInt(this.tablePageLength) 
			this.fatchAdminList()
		},
		fatchAdminList(){
			const data = {
				length : this.tablePageLength,
				page : this.tableCurrentPage,
				search : this.search
			}
			this.isLoading = true
			DataService.fetchAdmin( data )
			.then(response => {	
				if(response.status == 200){
					this.isLoading = false
					this.users = response.data.user
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
		userDalete(id){
			if(id){
				this.userID = id
				$('#removeUserModal').modal('show')
			}
		},
		deleteUser(){
			const id = this.userID
			if(id){
				DataService.deleteUser( id )
				.then(response => {	
					if(response.status == 200){
						this.userID = '';
						this.fatchAdminList()
						this.currentProjectCount()
						$('#removeUserModal').modal('hide')
					}
				})
				.catch(e => {
					console.log(e);
				});
			}
			
		},
		deleteModelHide(){
			$('#removeUserModal').modal('hide')
		},
		currentProjectCount(){
			DataService.getAdminUserCount(  )
			.then(response => {	
				if(response.status == 200){
					this.userCount = response.data
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		pageScript(){

		}
	}
  }
</script>