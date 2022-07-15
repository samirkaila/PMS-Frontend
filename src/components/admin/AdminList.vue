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
					<a href="#" @click="logOut">
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
								<span>Tasks</span>
							</router-link>
						</li>
						<li>
							<router-link  :to="{name:'admin.project'}" >
								<i>
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M4.36832 9.31767L15.0014 14.6985L25.6345 9.31767L15.0014 4.12432L4.36832 9.31767ZM5.8596 17.6673L3.61987 16.5537C2.87423 16.1815 2.5 15.6247 2.5 14.8832C2.5 14.1417 2.87423 13.5848 3.61987 13.2127L5.8596 12.099L3.61987 10.9854C2.68571 10.6132 2.31429 9.50235 2.68571 8.57337C2.87141 8.20121 3.24564 7.83186 3.43135 7.83186L14.0701 2.63851C14.63 2.45383 15.1899 2.45383 15.7499 2.63851L26.3829 7.83186C27.3143 8.20401 27.6885 9.31487 27.1286 10.2439C26.9429 10.616 26.5687 10.9854 26.3829 10.9854L24.1432 12.099L26.1944 13.028C27.1258 13.4002 27.5 13.9542 27.5 14.8832C27.5 15.6247 27.1258 16.3662 26.1944 16.7383L24.1432 17.6673L26.1944 18.5963C27.1258 18.9685 27.5 19.5225 27.5 20.4515C27.5 21.193 27.1258 21.9345 26.1944 22.3066L15.9328 27.3153C15.747 27.5 15.3728 27.5 14.9986 27.5C14.6244 27.5 14.4387 27.5 14.0644 27.3153L3.43416 22.1192C2.68852 21.747 2.5 21.1902 2.5 20.4487C2.5 19.7072 2.87423 19.1503 3.61987 18.7782L5.8596 17.6673ZM7.91362 18.781L4.36832 20.4515L15.0014 25.8295L25.6345 20.6362L22.0892 18.9657L15.9356 21.9345C15.7499 22.1192 15.3756 22.1192 15.0014 22.1192C14.6272 22.1192 14.4415 22.1192 14.0672 21.9345L7.91362 18.781ZM22.092 13.2155L15.9356 16.1815C15.3756 16.3662 14.8157 16.3662 14.2558 16.1815L7.91362 13.2155L4.36832 14.886L15.0014 20.264L25.6345 14.8832L22.092 13.2155Z" fill="#858BA0" stroke="#858BA0" stroke-width="0.3"/>
									</svg>
								</i>
								<span>Projects</span>
							</router-link>
						</li>
						<li>
							<router-link  :to="{name:'admin.complete.task'}" >
								<i>
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.8333 4.88095H13.1548C12.5 4.88095 11.9643 5.41667 11.9643 6.07143C11.9643 6.72619 12.4405 7.20238 13.0952 7.2619H15.8333C16.4881 7.2619 17.0238 6.72619 17.0238 6.07143C17.0238 5.41667 16.4881 4.88095 15.8333 4.88095ZM15.6548 12.619C16.3095 12.619 16.8452 13.1548 16.8452 13.8095C16.8452 14.4643 16.3095 15 15.6548 15H10.2976C9.64286 15 9.10714 14.4643 9.10714 13.8095C9.10714 13.1548 9.64286 12.619 10.2976 12.619H15.6548ZM12.6786 17.381C13.3333 17.381 13.869 17.9167 13.869 18.5714C13.869 19.2262 13.3333 19.7619 12.6786 19.7619H10.2976C9.64286 19.7619 9.10714 19.2262 9.10714 18.5714C9.10714 17.9167 9.64286 17.381 10.2976 17.381H12.6786ZM26.6667 19.5238C27.0833 20 27.0833 20.6548 26.6667 21.131L26.6071 21.1905L20.2381 27.1429C19.8214 27.5595 19.1667 27.5595 18.6905 27.2024L18.631 27.1429L15.4762 24.1667C15 23.6905 15 22.9762 15.4167 22.5C15.8333 22.0238 16.5476 22.0238 17.0238 22.381L17.0833 22.4405L19.4643 24.6429L25 19.4643C25.4167 19.0476 26.1905 19.0476 26.6667 19.5238ZM22.7976 8.45238C22.7976 7.79762 22.2619 7.2619 21.6071 7.2619H19.6429C19.1667 8.63095 17.8571 9.64286 16.25 9.64286H12.6786C11.131 9.64286 9.82143 8.63095 9.28571 7.2619H7.32143C6.66667 7.2619 6.19048 7.7381 6.13095 8.39286V23.9286C6.13095 24.5833 6.60714 25.0595 7.2619 25.119H11.4881C12.1429 25.119 12.6786 25.6548 12.6786 26.3095C12.6786 26.9643 12.2024 27.4405 11.5476 27.5H7.32143C5.35714 27.5 3.75 25.8929 3.75 23.9286V8.45238C3.75 6.4881 5.35714 4.88095 7.32143 4.88095H9.28571C9.76191 3.5119 11.0714 2.5 12.6786 2.5H16.25C17.7976 2.5 19.1071 3.5119 19.6429 4.88095H21.6071C23.5714 4.88095 25.1786 6.4881 25.1786 8.45238V14.4048C25.1786 15.0595 24.6429 15.5952 23.9881 15.5952C23.3333 15.5952 22.8571 15.119 22.7976 14.4643V8.45238Z" fill="#858BA0"/>
									</svg>
								</i>
								<span>Completed Task</span>
							</router-link>
						</li>
						<li >
							<router-link  :to="{name:'admin.category'}" >
								<i>
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.8333 4.88095H13.1548C12.5 4.88095 11.9643 5.41667 11.9643 6.07143C11.9643 6.72619 12.4405 7.20238 13.0952 7.2619H15.8333C16.4881 7.2619 17.0238 6.72619 17.0238 6.07143C17.0238 5.41667 16.4881 4.88095 15.8333 4.88095ZM15.6548 12.619C16.3095 12.619 16.8452 13.1548 16.8452 13.8095C16.8452 14.4643 16.3095 15 15.6548 15H10.2976C9.64286 15 9.10714 14.4643 9.10714 13.8095C9.10714 13.1548 9.64286 12.619 10.2976 12.619H15.6548ZM12.6786 17.381C13.3333 17.381 13.869 17.9167 13.869 18.5714C13.869 19.2262 13.3333 19.7619 12.6786 19.7619H10.2976C9.64286 19.7619 9.10714 19.2262 9.10714 18.5714C9.10714 17.9167 9.64286 17.381 10.2976 17.381H12.6786ZM26.6667 19.5238C27.0833 20 27.0833 20.6548 26.6667 21.131L26.6071 21.1905L20.2381 27.1429C19.8214 27.5595 19.1667 27.5595 18.6905 27.2024L18.631 27.1429L15.4762 24.1667C15 23.6905 15 22.9762 15.4167 22.5C15.8333 22.0238 16.5476 22.0238 17.0238 22.381L17.0833 22.4405L19.4643 24.6429L25 19.4643C25.4167 19.0476 26.1905 19.0476 26.6667 19.5238ZM22.7976 8.45238C22.7976 7.79762 22.2619 7.2619 21.6071 7.2619H19.6429C19.1667 8.63095 17.8571 9.64286 16.25 9.64286H12.6786C11.131 9.64286 9.82143 8.63095 9.28571 7.2619H7.32143C6.66667 7.2619 6.19048 7.7381 6.13095 8.39286V23.9286C6.13095 24.5833 6.60714 25.0595 7.2619 25.119H11.4881C12.1429 25.119 12.6786 25.6548 12.6786 26.3095C12.6786 26.9643 12.2024 27.4405 11.5476 27.5H7.32143C5.35714 27.5 3.75 25.8929 3.75 23.9286V8.45238C3.75 6.4881 5.35714 4.88095 7.32143 4.88095H9.28571C9.76191 3.5119 11.0714 2.5 12.6786 2.5H16.25C17.7976 2.5 19.1071 3.5119 19.6429 4.88095H21.6071C23.5714 4.88095 25.1786 6.4881 25.1786 8.45238V14.4048C25.1786 15.0595 24.6429 15.5952 23.9881 15.5952C23.3333 15.5952 22.8571 15.119 22.7976 14.4643V8.45238Z" fill="#858BA0"/>
									</svg>
								</i>
								<span>Category</span>
							</router-link>
						</li>
						<li >
							<router-link  :to="{name:'admin.users'}" >
								<i>
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15,16.1c4.4,0,8-3.6,8-8s-3.6-8-8-8S7,3.6,7,8S10.5,16.1,15,16.1z M15,2.1c3.3,0,5.9,2.6,5.9,5.9s-2.6,5.9-5.9,5.9 S9.1,11.3,9.1,8S11.7,2.1,15,2.1z M1.1,28.6h27.9c0.6,0,1.1-0.5,1.1-1.1c0-5.5-4.5-10.1-10.1-10.1h-9.9C4.5,17.5,0,22,0,27.5 C0,28.1,0.5,28.6,1.1,28.6z M10.1,19.6h9.9c4,0,7.3,3,7.9,6.9H2.2C2.7,22.6,6,19.6,10.1,19.6z" fill="#858BA0"/>
									</svg>
								</i>
								<span>Users</span>
							</router-link>
						</li>
						<li class="active">
							<router-link  :to="{name:'admin.admins'}" >
								<i>
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15,16.1c4.4,0,8-3.6,8-8s-3.6-8-8-8S7,3.6,7,8S10.5,16.1,15,16.1z M15,2.1c3.3,0,5.9,2.6,5.9,5.9s-2.6,5.9-5.9,5.9 S9.1,11.3,9.1,8S11.7,2.1,15,2.1z M1.1,28.6h27.9c0.6,0,1.1-0.5,1.1-1.1c0-5.5-4.5-10.1-10.1-10.1h-9.9C4.5,17.5,0,22,0,27.5 C0,28.1,0.5,28.6,1.1,28.6z M10.1,19.6h9.9c4,0,7.3,3,7.9,6.9H2.2C2.7,22.6,6,19.6,10.1,19.6z" fill="#858BA0"/>
									</svg>
								</i>
								<span>Admins</span>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="header-btnbox">
					<a class="h-button " href="javascript:void(0)" @click="openCreatUsers"><span><img :src="`${publicPath}images/btn-plus-icon.svg`" alt="" ></span>Add New</a>
				</div>
			</div>
		</div>
		<div class="admin-deshboard">
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
				<table id="admin_user_list" class="table dt-responsive nowrap" style="width:100%">
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
							<td>{{++index}}</td>
							<td>{{user.name}}</td>
							<td>{{user.email}}</td>
							<td>{{user.number}}</td>
							<td>
								<div class="action-box">
									<a class="action-btn edit" href="javascript:void(0)" @click="userEdit(user._id)">
										<img  :src="`${publicPath}images/icon-edit.svg`" alt="">
									</a>
									<a class="action-btn remove" href="javascript:void(0)" @click="userDalete(user._id)">
										<img :src="`${publicPath}images/icon-remove.svg`" alt="">
									</a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<!--Add-User Modal Start-->
	<div class="user-modal modal fade" id="addUserModal" tabindex="-1" role="dialog" aria-labelledby="addUserModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="user-modal-title">
						<h3>Add New User</h3>
					</div>
					<div class="user-modal-form">
						<form @submit.prevent="saveUser" ref="form" id="users_save_form">
							<div class="row">
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Name</label>
										<input class="input-text" type="text" placeholder="Name" v-model="this.user.name" required>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Email</label>
										<input class="input-text" type="email" placeholder="Email" v-model="this.user.email" required>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Password</label>
										<input class="input-text" type="password" placeholder="Password" v-model="this.user.password" required>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Emgncy Contact</label>
										<input class="input-text" type="text" placeholder="Emgncy Contact" v-model="this.user.emergencyNumber">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Contact Number</label>
										<input class="input-text" type="text" placeholder="Contact Number" v-model="this.user.number">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Bank Acc</label>
										<input class="input-text" type="text" placeholder="Bank Acc" v-model="this.user.accnumber">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">ifsc Code</label>
										<input class="input-text" type="text" placeholder="ifsc Code" v-model="this.user.ifsc">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">DOB</label>
										<datepicker v-model="this.user.dob" :disabled-dates="disabledDates" locale="date-fns/locale/fr"></datepicker>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Pan card number</label>
										<input class="input-text" type="text" placeholder="Pan card number" v-model="this.user.pan">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Adhar number</label>
										<input class="input-text" type="text" placeholder="Adhar number" v-model="this.user.adhar">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Home address</label>
										<textarea class="input-text" type="text" placeholder="Home address" v-model="this.user.homeAdress">
											</textarea>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Local address</label>
										<textarea class="input-text" type="text" placeholder="Local address" v-model="this.user.localAddress">
											</textarea>
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
	<div class="user-modal modal fade" id="editUserModal" tabindex="-1" role="dialog" aria-labelledby="editUserModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="user-modal-title">
						<h3>Edit User</h3>
					</div>
					<div class="user-modal-form">
						<form @submit.prevent="editUser" ref="form" id="users_edit_form">
							<div class="row">
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Name</label>
										<input class="input-text" type="text" placeholder="Name" v-model="this.edituser.name" required>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Email</label>
										<input class="input-text" type="email" placeholder="Email" v-model="this.edituser.email" required>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-input">
										<label class="form-label">Password</label>
										<input class="input-text" type="password" placeholder="Password" v-model="this.edituser.password" >
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
import Datepicker from 'vuejs3-datepicker';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

export default {
	name: 'AdminHome',components : {
		Datepicker
	},data(){
            return{
				publicPath: process.env.BASE_URL,
				auth : {},
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
				},
				users: {},
				edituser : {},
				userID: {},
				userCount : {},
				submitted : false
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
		openCreatUsers(){
			this.user = {}
			$(document).ready((jQuery) => {
				jQuery('#addUserModal').modal('show')
				setTimeout(function(){
					jQuery('body').addClass('modal-open');
				},500);
			
			})
		},
		saveUser(){
			var data = {
				name: this.user.name,
				email: this.user.email,
				password: this.user.password,
				number: this.user.number,
				emergencyNumber: this.user.emergencyNumber,
				accnumber: this.user.accnumber,
				ifsc: this.user.ifsc,
				dob: this.user.dob,
				pan: this.user.pan,
				adhar: this.user.adhar,
				homeAdress: this.user.homeAdress,
				localAddress: this.user.localAddress,
				role: 'admin'
			};
			DataService.createUser(data )
			.then(response => {	
				if(response.status == 201){
					this.user = {};
					$('#addUserModal').modal('hide')
					this.fatchAdminList()
					this.currentProjectCount()
				}
			this.submitted = true;
			})
			.catch(e => {
				console.log(e);
			});
		},
		userEdit( id ){
			DataService.fetchUser( id )
			.then(response => {	
				if(response.status == 200){
					this.edituser = response.data;
					$('#editUserModal').modal('show')
					setTimeout(function(){
						$('body').addClass('modal-open');
					},500);
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		editUser(){
			let data = {}
			if(this.edituser.password){
				data = {
					name: this.edituser.name,
					email: this.edituser.email,
					password: this.edituser.password
				};
			}else{
				data = {
					name: this.edituser.name,
					email: this.edituser.email
				};
			}
			
			const id = this.edituser._id
			DataService.updateUser( id , data )
			.then(response => {	
				if(response.status == 200){
					this.edituser = {};
					$('#editUserModal').modal('hide')
					this.fatchAdminList()
					this.currentProjectCount()
				}
			this.submitted = true;
			})
			.catch(e => {
				console.log(e);
			});
		},
		fatchAdminList(){
			DataService.fetchAdmin( )
			.then(response => {	
				if(response.status == 200){
					
					this.users = response.data;
					
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
			$(document).ready(() => {
				setTimeout( () => {
					$('#admin_user_list').DataTable()
				} ,250)
				
			})
		}
	}
  }
</script>