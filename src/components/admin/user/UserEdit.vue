<template>
	<div class="main_wapper-inner main_wapper-inner-v2">
		<HeaderAdmin />
		<AdminSideMenu/>
		
		<div class="admin-deshboard sidebar">
			<div class="top_add_btn">
				<router-link  :to="{name:'admin.users'}" class="h-button task_modal_btnd">Back</router-link>
			</div>
			<loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
			<div class="create-user">
				<div class="task_form">
					<h3>Edit User</h3>
					<div class="form_add_tasks">
						<form @submit.prevent="editUser()" ref="form" id="users_save_form">
							<div class="row">
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">Name</label>
										<input class="input_field" type="text" placeholder="Name" v-model="this.user.name" required />
									</div>
								</div>
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">Email</label>
										<input class="input_field" type="email" placeholder="Email" v-model="this.user.email" required>
									</div>
								</div>
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">Password</label>
										<input class="input_field" type="password" placeholder="Password" v-model="this.user.password" >
									</div>
								</div>
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">Emgncy Contact</label>
										<input class="input_field" type="text" placeholder="Emgncy Contact" v-model="this.user.emergencyNumber">
									</div>
								</div>
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">Contact Number</label>
										<input class="input_field" type="text" placeholder="Contact Number" v-model="this.user.number">
									</div>
								</div>
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">Bank Acc</label>
										<input class="input_field" type="text" placeholder="Bank Acc" v-model="this.user.accnumber">
									</div>
								</div>
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">Ifsc Code</label>
										<input class="input_field" type="text" placeholder="ifsc Code" v-model="this.user.ifsc">
									</div>
								</div>
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">DOB</label>
										<datepicker v-model="this.user.dob" :disabled-dates="disabledDates" locale="date-fns/locale/fr" ></datepicker>
									</div>
								</div>
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">Pan card number</label>
										<input class="input_field" type="text" placeholder="Pan card number" v-model="this.user.pan">
									</div>
								</div>
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">Adhar number</label>
										<input class="input_field" type="text" placeholder="Adhar number" v-model="this.user.adhar">
									</div>
								</div>
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">Home address</label>
										<textarea class="input_field" type="text" placeholder="Home address" v-model="this.user.homeAdress">
											</textarea>
									</div>
								</div>
								<div class="col-xl-4 col-md-6">
									<div class="input_wrap">
										<label for="">Local address</label>
										<textarea class="input_field" type="text" placeholder="Local address" v-model="this.user.localAddress">
											</textarea>
									</div>
								</div>
								<div class="col-md-12">
									<div class="submit_wrap">
										<input type="submit" value="Submit Task" class="submit_button">
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
@import '@vueform/multiselect/themes/default.css';

</style>
<script >
import DataService from "@/services/DataService.js";
// import $ from 'jquery'
import Datepicker from 'vuejs3-datepicker';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import HeaderAdmin from "@/components/admin/HeaderAdmin.vue"
import AdminSideMenu from "@/components/admin/SideMenu.vue"

export default {
	name: 'AdminHome',components : {
		Datepicker,Loading,HeaderAdmin,AdminSideMenu
	},data(){
            return{
				publicPath: process.env.BASE_URL,
				auth : {},
				isLoading: false,
                fullPage: true,
				user : {
					name: null,
					email: null,
					password: null,
					number: null,
					ifsc: null,
					accnumber: null,
					emergencyNumber : null,
					dob: new Date(),
					pan: null,
					adhar: null,
					homeAdress: null,
					localAddress: null,
					id : null,
				},
				submitted : false
            }
        },	
	created: function()
	{
		this.auth = this.$store.state.authentication.user;
		this.pageScript()
		this.userEdit()
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
		userEdit(  ){
			this.isLoading = true
			let id = this.$route.params.id;
			DataService.fetchUser( id )
			.then(response => {	
				if(response.status == 200){
					this.isLoading = false
					this.user = response.data;
					let userDOB = new Date( )
					if(response.data.DOB){
						userDOB = new Date(response.data.DOB)
					}
					this.user = {
						id : response.data._id,
						name: response.data.name,
						email: response.data.email,
						number: response.data.number,
						ifsc: response.data.ifscCode,
						accnumber: response.data.accountNumber,
						emergencyNumber : response.data.emergencyNumber,
						dob: userDOB,
						pan: response.data.pan,
						adhar: response.data.adhar,
						homeAdress: response.data.homeAddress,
						localAddress: response.data.homeAddress,
					}
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		editUser(){
			let data = {}
			if(this.user.password){
				data = {
					name: this.user.name,
					email: this.user.email,
					password: this.user.password
				};
				data = {
					name: this.user.name,
					email: this.user.email,
					number: this.user.number,
					emergencyNumber: this.user.emergencyNumber,
					accnumber: this.user.accnumber,
					ifsc: this.user.ifsc,
					DOB: this.user.dob,
					pan: this.user.pan,
					adhar: this.user.adhar,
					homeAdress: this.user.homeAdress,
					localAddress: this.user.localAddress,
					password: this.user.password
				};
			}else{
				data = {
					name: this.user.name,
					email: this.user.email
				};
				data = {
					name: this.user.name,
					email: this.user.email,
					number: this.user.number,
					emergencyNumber: this.user.emergencyNumber,
					accountNumber: this.user.accnumber,
					ifscCode: this.user.ifsc,
					DOB: this.user.dob,
					pan: this.user.pan,
					adhar: this.user.adhar,
					homeAddress: this.user.homeAdress,
					localAddress: this.user.localAddress,
				};
			}
			
			const id = this.user.id
			this.isLoading = true
			DataService.updateUser( id , data )
			.then(response => {	
				if(response.status == 200){
					this.isLoading = false
					this.user = {};
					this.$router.push({ name: 'admin.users' });	
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