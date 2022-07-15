<template>
	<div class="main_wapper-inner">
		<div class="header-outer header-admin">
			<div class="header-outer-top">
				<div class="login-area">
					<div class="icon"><img :src="`${publicPath}images/Logo-2.svg`" alt=""></div>
					<div class="login-area-inner">
						<div class="login-as"><span>Logged as a</span></div>
						<router-link  :to="{name:'profile'}" class="nmae" >{{this.auth.user.name}}</router-link>
					</div>
				</div>
				<div class="search-header d-none d-md-block">
					<form action="">
						<div class="search-box">
							<input type="text" placeholder="Search" class="search-input">
						</div>
					</form>
				</div>
				<div class="logout-btn">
					<a href="javascript:void(0)" @click="logOut">
						<i>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.83999 4.70873C6.23538 4.41156 6.79683 4.49119 7.094 4.88656C7.39116 5.28196 7.31154 5.84338 6.91616 6.14057C4.96252 7.60889 3.79115 9.90272 3.79115 12.3929C3.79115 16.7095 7.29047 20.2088 11.6071 20.2088C15.9237 20.2088 19.423 16.7095 19.423 12.3929C19.423 9.90002 18.2491 7.60398 16.2919 6.13593C15.8962 5.83917 15.8161 5.27781 16.1128 4.88213C16.4096 4.48644 16.971 4.40629 17.3666 4.70307C19.7701 6.50587 21.2142 9.33021 21.2142 12.3929C21.2142 17.6988 16.9129 22 11.6071 22C6.30125 22 2 17.6988 2 12.3929C2 9.3335 3.4409 6.51189 5.83999 4.70873ZM12.5027 12.185C12.5027 12.6796 12.1017 13.0805 11.6071 13.0805C11.1125 13.0805 10.7115 12.6796 10.7115 12.185V2.89558C10.7115 2.40097 11.1125 2 11.6071 2C12.1017 2 12.5027 2.40097 12.5027 2.89558V12.185Z" fill="#858BA0" stroke="#858BA0" stroke-width="0.6"/>
							</svg>	
						</i>
						<span>Log out</span>
					</a>
				</div>
				<div class="menu-toggler">
					<div class="menu-toggler-icon"></div>
				</div>
			</div>
			<div class="header-bottom-outer">
				<div class="search-header d-block d-md-none">
					<form action="">
						<div class="search-box">
							<input type="text" placeholder="Search" class="search-input">
						</div>
					</form>
				</div>
				<div class="header-nav">
					<ul>
						<li >
							<router-link  :to="{name:'home.all'}" >
								<i>
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.5 5.38095H12.9286C12.2738 5.38095 11.7381 5.91667 11.7381 6.57143C11.7381 7.22619 12.2143 7.70238 12.869 7.7619H16.5C17.1548 7.7619 17.6905 7.22619 17.6905 6.57143C17.6905 5.91667 17.1548 5.38095 16.5 5.38095ZM18.881 13.119C19.5357 13.119 20.0714 13.6548 20.0714 14.3095C20.0714 14.9643 19.5357 15.5 18.881 15.5H10.5476C9.89286 15.5 9.35714 14.9643 9.35714 14.3095C9.35714 13.6548 9.89286 13.119 10.5476 13.119H18.881ZM18.881 17.881C19.5357 17.881 20.0714 18.4167 20.0714 19.0714C20.0714 19.7262 19.5357 20.2619 18.881 20.2619H10.5476C9.89286 20.2619 9.35714 19.7262 9.35714 19.0714C9.35714 18.4167 9.89286 17.881 10.5476 17.881H18.881ZM16.5 10.1429H12.9286C11.381 10.1429 10.0714 9.13095 9.53571 7.7619H7.57143C6.91667 7.7619 6.44048 8.2381 6.38095 8.89286V24.4286C6.38095 25.0833 6.85714 25.5595 7.5119 25.619H21.8571C22.5119 25.619 22.9881 25.1429 23.0476 24.4881V8.95238C23.0476 8.29762 22.5119 7.7619 21.8571 7.7619H19.8929C19.3571 9.13095 18.0476 10.1429 16.5 10.1429ZM16.5 3C18.0476 3 19.3571 4.0119 19.8929 5.38095H21.8571C23.8214 5.38095 25.4286 6.9881 25.4286 8.95238V24.4286C25.4286 26.3929 23.8214 28 21.8571 28H7.57143C5.60714 28 4 26.3929 4 24.4286V8.95238C4 6.9881 5.60714 5.38095 7.57143 5.38095H9.53571C10.0119 4.0119 11.3214 3 12.9286 3H16.5Z" fill="#858BA0"/>
									</svg>
								</i>
								<span>Home</span>
							</router-link>
						</li>
						
					</ul>
				</div>
				
			</div>
		</div>
		<div class="admin-deshboard">
			<div class="user-profile-page">
				<div class="user-profile-block">
					<div class="user-profile-title">
						<h1>Edit Profile</h1>
					</div>
					<form @submit.prevent="saveProfile" ref="form" id="profile_save_form">
						<div class="user-profile-main">
							<div class="user-profile-left">
								<div class="profile-picture">
									<img id="pictureView" :src="this.user.profilesrc" alt="">
								</div>
								<div class="profile-action">
									<input class="d-none" id="profilePic" type="file" accept="image/*" name="file">
									<label class="button btn-uploaprofilePicd" for="profilePic">upload photo</label>
									<!-- <a id="removepic" class="button btn-remove" href="javascript:void(0);">Remove</a> -->
								</div>
							</div>
							<div class="user-profile-form">
								<div class="row">
									<div class="col-md-6">
										<div class="form-input">
											<label class="form-label">Name</label>
											<input class="input-text" type="text" placeholder="Name"  v-model="this.user.name" >
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-input">
											<label class="form-label">Email</label>
											<input class="input-text" type="email" placeholder="Email" v-model="this.user.email" >
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-input">
											<label class="form-label">Emgncy Contact</label>
											<input class="input-text" type="text" placeholder="Emgncy Contact" name="emergencyNumber" v-model="this.user.emergencyNumber">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-input">
											<label class="form-label">Contact Number</label>
											<input class="input-text" type="text" placeholder="Contact Number" name="number" v-model="this.user.number">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-input">
											<label class="form-label">Bank Acc</label>
											<input class="input-text" type="text" placeholder="Bank Acc" name="accountNumber" v-model="this.user.accountNumber">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-input">
											<label class="form-label">Infc Code</label>
											<input class="input-text" type="text" placeholder="Infc Code" name="ifscCode" v-model="this.user.ifscCode">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-input">
											<label class="form-label">DOB</label>
											<datepicker v-model="this.userDOB"  locale="date-fns/locale/fr"></datepicker>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-input">
											<label class="form-label">Pan card number</label>
											<input class="input-text" type="text" placeholder="Pan card number" name="pan" v-model="this.user.pan">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-input">
											<label class="form-label">Adhar number</label>
											<input class="input-text" type="text" placeholder="Adhar number" name="adhar" v-model="this.user.adhar">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-input">
											<label class="form-label">Home address</label>
											<textarea class="input-text" type="text" placeholder="Home address" name="homeAddress" v-model="this.user.homeAddress">
												</textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-input">
											<label class="form-label">Local address</label>
											<textarea class="input-text" type="text" placeholder="Local address" name="localAddress" v-model="this.user.localAddress">
												</textarea>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-submit">
											<input class="button" type="submit" value="save changes">
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>	
</template>
<script >
import DataService from "@/services/DataService.js";
import Datepicker from 'vuejs3-datepicker';
import $ from 'jquery'
export default {
	name: 'profileUser',components : {
		Datepicker
	},data(){
		return{
			publicPath: process.env.BASE_URL,
			userDOB : new Date(2000, 1,  1),
			user : {
			},
		}
    },
	created: function()
	{
		this.auth = this.$store.state.authentication.user;
		this.getProfileData()
		this.pageScript()
	},
	methods: {
		logOut(){
			this.$store.dispatch('authentication/logout');
		},
		
		saveProfile(){
			this.user.DOB = this.userDOB
				DataService.profileUpdate(this.user )
				.then(response => {	
					if(response.status == 200){
						this.$router.push({ name: 'home.all' });
						this.user = {}
						this.userDOB = null
						// this.$store.dispatch('authentication/logout');
					}
				this.submitted = true;
				})
				.catch(e => {
					console.log(e);
				});
		},
		getProfileData(){
			DataService.fetchProfileData( )
			.then(response => {	
				if(response.status == 200){
					this.user = response.data;
					if(this.user.DOB){
						this.userDOB = this.user.DOB
					}
					
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		pageScript(){
			$(document).ready( () => {
				$('#profilePic').change( () => {
					// const file = this.files[0] 
					// console.log(file)
				})
			})
		}
	}
  }
</script>