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
				<a class="h-button " href="javascript:void(0)" @click="openCreatCategory"><span><img :src="`${publicPath}images/btn-plus-icon.svg`" alt="" ></span>Add Category</a>
			</div>
			<div class="deshboard-userside">
				<div class="row">
					<div class="col-md-6">
						<div class="userbox">
							<h4>Active</h4>
							<div class="count-num">{{this.categoryCount.activeCategory}}</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="userbox">
							<h4>Deactive</h4>
							<div class="count-num">{{this.categoryCount.deactiveCategory}}</div>
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
							<th>Category</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for=" (category, index) in categorys" v-bind:index="index" v-bind:key="category.id">
							<td>{{showingRecord.start + index}}.</td>
							<td>{{category.name}}</td>
							<td>{{ (category.status) ? 'Active' : 'Deactive' }}</td>
							<td>
								<div class="action-box">
									<a class="action-btn edit" href="javascript:void(0)" @click="categoryEdit(category._id)">
										<img  :src="`${publicPath}images/icon-edit.svg`" alt="">
									</a>
									<a class="action-btn remove" href="javascript:void(0)" @click="categoryDalete(category._id)">
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
	<!--Add-User Modal Start-->
	<div class="user-modal modal fade" id="addCategoryModal" tabindex="-1" role="dialog" aria-labelledby="addUserModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="user-modal-title">
						<h3>Add New Category</h3>
					</div>
					<div class="user-modal-form">
						<form @submit.prevent="saveCategory" ref="form" id="users_save_form">
							<div class="row">
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Name</label>
										<input class="input-text" type="text" placeholder="Name" v-model="this.category.name" required>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Status</label>
										<multiSelect v-model="this.category.status" :options="categoryOPT"  required></multiSelect>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-submit">
										<input class="button" type="submit" value="Submit">
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--Add-User Modal End-->

	<!--Edit-User Modal Start-->
	<div class="user-modal modal fade" id="editCategoryModal" tabindex="-1" role="dialog" aria-labelledby="editCategoryModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="user-modal-title">
						<h3>Edit Category</h3>
					</div>
					<div class="user-modal-form">
						<form @submit.prevent="editCategory" ref="form" id="category_edit_form">
							<div class="row">
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Name</label>
										<input class="input-text" type="text" placeholder="Name" v-model="this.editcategory.name" required>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Status</label>
										<multiSelect v-model="this.editcategory.status" :options="categoryOPT"  required></multiSelect>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-submit">
										<input class="button" type="submit" value="Save">
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--Edit-User Modal End-->

	<!--Remove-User Modal Start-->
	<div class="user-modal modal fade" id="removeCategoryModal" tabindex="-1" role="dialog" aria-labelledby="removeCategoryModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="user-modal-alert">
						<h3>Are you sure you want to remove this Category?</h3>
						<div class="btnbox">
							<a class="button btn-yes" href="javascript:void(0)" @click="deleteCategory">Yes</a>
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
import { required } from 'vuelidate/lib/validators'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import HeaderAdmin from "@/components/admin/HeaderAdmin.vue"
import AdminSideMenu from "@/components/admin/SideMenu.vue"
import Paginate from "vuejs-paginate-next";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
	name: 'AdminHome',components: {
		HeaderAdmin,AdminSideMenu , Paginate ,Loading
  },data(){
            return{
				publicPath: process.env.BASE_URL,
				auth : {},
				categoryName : null,
				category :{

				},
				categorys : {

				},
				categoryOPT: [
					{
						value : true,
						label : 'Active'
					},
					{
						value : false,
						label : 'Deactive'
					}
				],
				isLoading: false,
                fullPage: true,
				editcategory : {},
				categoryID: {},
				categoryCount : {},
				submitted : false,
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
		this.fatchCategoryList()
		this.currentCategoryCount()
	},
	beforeUnmount: function() {
		
	},	
	validations :{
		name:{
			required
		}
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
			this.fatchCategoryList()
		},
		tableSearch(){
			this.tableCurrentPage = 1
			this.fatchCategoryList()
		},
		changeTableLength(){
			this.tableCurrentPage = 1
			this.tablePageLength = parseInt(this.tablePageLength) 
			this.fatchCategoryList()
		},
		openCreatCategory(){
			this.category = {};
			$(document).ready((jQuery) => {
				jQuery('#addCategoryModal').modal('show')
				setTimeout(function(){
					jQuery('body').addClass('modal-open');
				},500);
			
			})
		},
		saveCategory(){
			var data = {
				name: this.category.name,
				status: this.category.status,
			};
			DataService.createCategory(data )
			.then(response => {
				if(response.status == 201){
					this.category = {};
					$('#addCategoryModal').modal('hide')
					this.fatchCategoryList()
					this.currentCategoryCount()
				}
			this.submitted = true;
			})
			.catch(e => {
				console.log(e);
			});
		},
		categoryEdit( id ){
			DataService.fetchCategory( id )
			.then(response => {	
				if(response.status == 200){
					this.editcategory = response.data;
					$('#editCategoryModal').modal('show')
					setTimeout(function(){
						$('body').addClass('modal-open');
					},500);
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		editCategory(){
			const data = {
				name: this.editcategory.name,
				status: this.editcategory.status,
			}
			
			
			const id = this.editcategory._id
			DataService.updateCategory( id , data )
			.then(response => {	
				if(response.status == 200){
					this.edituser = {};
					$('#editCategoryModal').modal('hide')
					this.fatchCategoryList()
					this.currentCategoryCount()
				}
			this.submitted = true;
			})
			.catch(e => {
				console.log(e);
			});
		},
		fatchCategoryList(){
			const data = {
				length : this.tablePageLength,
				page : this.tableCurrentPage,
				search : this.search
			}
			this.isLoading = true
			DataService.fetchCategorys( data )
			.then(response => {	
				if(response.status == 200){
					this.isLoading = false
					this.categorys = response.data.category
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
		categoryDalete(id){
			if(id){
				this.categoryID = id
				$('#removeCategoryModal').modal('show')
			}
		},
		deleteCategory(){
			const id = this.categoryID
			if(id){
				DataService.deleteCategory( id )
				.then(response => {	
					if(response.status == 200){
						this.categoryID = '';
						this.fatchCategoryList()
						this.currentCategoryCount()
						$('#removeCategoryModal').modal('hide')
					}
				})
				.catch(e => {
					console.log(e);
				});
			}
			
		},
		currentCategoryCount(){
			DataService.getAdminCategoryCount(  )
			.then(response => {	
				if(response.status == 200){
					this.categoryCount = response.data
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		deleteModelHide(){
			$('#removeCategoryModal').modal('hide')
		},
		pageScript(){
			$(document).ready(() => {
				setTimeout(()=>{
					$('#admin_user_list').DataTable()
				},250)
			})
		}
	}
  }
</script>