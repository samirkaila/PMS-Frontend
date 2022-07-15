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
						<li class="">
							<router-link  :to="{name:'home.all'}" >
								<i>
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.5 5.38095H12.9286C12.2738 5.38095 11.7381 5.91667 11.7381 6.57143C11.7381 7.22619 12.2143 7.70238 12.869 7.7619H16.5C17.1548 7.7619 17.6905 7.22619 17.6905 6.57143C17.6905 5.91667 17.1548 5.38095 16.5 5.38095ZM18.881 13.119C19.5357 13.119 20.0714 13.6548 20.0714 14.3095C20.0714 14.9643 19.5357 15.5 18.881 15.5H10.5476C9.89286 15.5 9.35714 14.9643 9.35714 14.3095C9.35714 13.6548 9.89286 13.119 10.5476 13.119H18.881ZM18.881 17.881C19.5357 17.881 20.0714 18.4167 20.0714 19.0714C20.0714 19.7262 19.5357 20.2619 18.881 20.2619H10.5476C9.89286 20.2619 9.35714 19.7262 9.35714 19.0714C9.35714 18.4167 9.89286 17.881 10.5476 17.881H18.881ZM16.5 10.1429H12.9286C11.381 10.1429 10.0714 9.13095 9.53571 7.7619H7.57143C6.91667 7.7619 6.44048 8.2381 6.38095 8.89286V24.4286C6.38095 25.0833 6.85714 25.5595 7.5119 25.619H21.8571C22.5119 25.619 22.9881 25.1429 23.0476 24.4881V8.95238C23.0476 8.29762 22.5119 7.7619 21.8571 7.7619H19.8929C19.3571 9.13095 18.0476 10.1429 16.5 10.1429ZM16.5 3C18.0476 3 19.3571 4.0119 19.8929 5.38095H21.8571C23.8214 5.38095 25.4286 6.9881 25.4286 8.95238V24.4286C25.4286 26.3929 23.8214 28 21.8571 28H7.57143C5.60714 28 4 26.3929 4 24.4286V8.95238C4 6.9881 5.60714 5.38095 7.57143 5.38095H9.53571C10.0119 4.0119 11.3214 3 12.9286 3H16.5Z" fill="#858BA0"/>
									</svg>
								</i>
								<span>Tasks</span>
							</router-link>
						</li>
						<li class="active">
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
						<li>
							<router-link  :to="{name:'admin.users'}" >
								<i>
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15,16.1c4.4,0,8-3.6,8-8s-3.6-8-8-8S7,3.6,7,8S10.5,16.1,15,16.1z M15,2.1c3.3,0,5.9,2.6,5.9,5.9s-2.6,5.9-5.9,5.9 S9.1,11.3,9.1,8S11.7,2.1,15,2.1z M1.1,28.6h27.9c0.6,0,1.1-0.5,1.1-1.1c0-5.5-4.5-10.1-10.1-10.1h-9.9C4.5,17.5,0,22,0,27.5 C0,28.1,0.5,28.6,1.1,28.6z M10.1,19.6h9.9c4,0,7.3,3,7.9,6.9H2.2C2.7,22.6,6,19.6,10.1,19.6z" fill="#858BA0"/>
									</svg>
								</i>
								<span>Users</span>
							</router-link>
						</li>
						<li v-if="this.auth.user.role == 'super admin'">
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
					<a class="h-button task_modal_btnd" href="javascript:void(0)" @click="openCreatModel"><span><img :src="`${publicPath}images/btn-plus-icon.svg`" alt="" ></span>Add New</a>
				</div>
			</div>
		</div>

		<div class="admin-deshboard">
			<div class="deshboard-adminside">
				<div class="deshboard-row">
					<div class="deshboard-col">
						<div class="deshboard-box">
							<h4>Current Tasks</h4>
							<div class="count-num">{{this.currentCount.curruntTaskCount}}</div>
						</div>
					</div>
					<div class="deshboard-col">
						<div class="deshboard-box">
							<h4>Over Due Task</h4>
							<div class="count-num">{{this.currentCount.orverDueTask}}</div>
						</div>
					</div>
					<div class="deshboard-col">
						<div class="deshboard-box">
							<h4>Current Projects</h4>
							<div class="count-num">{{this.currentCount.projectcount}}</div>
						</div>
					</div>
					<div class="deshboard-col">
						<div class="deshboard-box">
							<h4>Over Due Projects</h4>
							<div class="count-num">10</div>
						</div>
					</div>
					<div class="deshboard-col">
						<div class="deshboard-box">
							<h4>In Pipeline Projects</h4>
							<div class="count-num">06</div>
						</div>
					</div>
				</div>
			</div>

			<div class="project-details-listing">
				<div class="row" >
					<loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>
					<div class="col-md-6" v-for=" (project, index) in projects" v-bind:index="index" v-bind:key="project.id">
						<a class="project-box" href="javascript:void(0)" data-target-sidebar="viewproject-sidebar" @click="openProjectSidebar(project)" >
							<div class="project-name"><h3>{{project.name}}</h3></div>
							<div class="text">
								<p>{{project.description}}</p>
							</div>
							<div class="project-meta">
								<div class="project-meta-sub">
									<h6>Start Date</h6>
									<p>{{project.startDate}}</p>
								</div>
								<div class="project-meta-sub">
									<h6>End Date</h6>
									<p>{{project.endDate}}</p>
								</div>
								<div class="project-meta-sub">
									<h6>Estimated Time</h6>
									<p>{{project.estimatetime}}</p>
								</div>
							</div>
						</a>
					</div>
					
				</div>
			</div>
		</div>
	</div>

	<!--View-Task-Sidebar-->
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
						<div class="cat-tags">Design, Development, Frontend, UI/UX</div>
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
	<!--View-Task-Sidebar-->
	<div class="modal fade task_modal" id="task_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<div class="choice_task_main">
						<div class="choice_task_blk">
							<a href="javascript:void(0)" class="add_new_task_moddal_btn" @click="openTaskModel">
								<i>
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14.9998 1.66699V28.3337M28.3332 15.0003L1.6665 15.0003" stroke="#0057FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</i>
								Add New Task
							</a>
						</div>
						<div class="choice_task_blk">
							<a href="javascript:void(0)" class="add_new_project_moddal_btn" @click="openProjectModel">
								<i>
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14.9998 1.66699V28.3337M28.3332 15.0003L1.6665 15.0003" stroke="#0057FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</i>
								Add New Project
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade add_task_modal" id="add_new_task_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<div class="task_form">
						<h3>Add New Task</h3>
						<div class="form_add_tasks">
							<form @submit.prevent="saveTask" ref="form" id="task_save_form">
								<div class="row">
									<div class="col-xl-3 col-md-6">
										<div class="input_wrap">
											<label for="">Project Name</label>
											<multiSelect v-model="this.task.projectID" :options="projectsOpts" required ></multiSelect>
										</div>
									</div>
									<div class="col-xl-9 col-md-6">
										<div class="input_wrap">
											<label for="">Task Name</label>
											<input type="text" v-model="this.task.name"  placeholder="Enter here" class="input_field">
										</div>
									</div>
									<div class="col-md-12">
										<div class="input_wrap input_wrap_date">
											<div class="wrap_date_row">
												<div class="wrap_date_col">
													<label for="">Assigned Date</label>
													<datepicker v-model="task.assigneddate" :disabled-dates="disabledDates"></datepicker>
												</div>
												<div class="wrap_date_col">
													<label for="">Deadline Date</label>
													<datepicker v-model="task.deadlinedate" :disabled-dates="deadlinedateDisable" ></datepicker>
												</div>
												<div class="wrap_date_col">
													<label for="">Estimated Time</label>
													<input type="text" v-model="this.task.estimatetime" id=""  placeholder="Enter here" class="input_field time_field"  @keyup="taskTimeChange()">
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-6">
										<div class="input_wrap">
											<label for="">Assigned to People</label>
											<multiSelect v-model="this.task.assigned" :options="userOpts" mode="tags" name="assigned" required></multiSelect>
										</div>
									</div>
									<div class="col-md-6">
										<div class="input_wrap">
											<label for="">Add Categories</label>
											<multiSelect v-model="this.task.category" :options="categoryOpts" mode="tags" required></multiSelect>
										</div>
									</div>
									<div class="col-md-12">
										<div class="input_wrap">
											<label for="">Task Detail</label>
											<textarea placeholder="Enter here" v-model="this.task.detail" class="input_field" required></textarea>
										</div>
									</div>
									<div class="col-md-12">
										<div class="input_wrap">
											<label for="">Attached File</label>
											<div class="input_wrap_file">
												<div id="task_file_input" class="file_input">
													<input class="file_input_tag" id="taskCustomFile" type="file" multiple="multiple" name="files"/>
													<label class="file_label" for="taskCustomFile">Upload File</label>
												</div>
												
											</div>
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
	</div>

	<div class="modal fade add_task_modal" id="add_new_project_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body">
					<div class="task_form">
						<h3>Add New Project</h3>
						<div class="form_add_tasks">
							<form @submit.prevent="saveProject" ref="form" id="project_save_form">
								<div class="row">
									<div class="col-xl-3 col-md-6">
										<div class="input_wrap">
											<label for="">Project Name</label>
											<input type="text" name="name" v-model="project.name"  placeholder="Enter here" class="input_field" required>
										</div>
									</div>
									<div class="col-md-12">
										<div class="input_wrap input_wrap_date">
											<div class="wrap_date_row">
												<div class="wrap_date_col">
													<label for="">Assigned Date</label>
													<datepicker v-model="project.startdate" :disabled-dates="disabledDates"></datepicker>
												</div>
												<div class="wrap_date_col">
													<label for="">Deadline Date</label>
													<datepicker v-model="project.enddate" :disabled-dates="deadlinedateDisable" ></datepicker>
												</div>
												<div class="wrap_date_col">
													<label for="">Estimated Time</label>
													<input type="text" name="" id="" v-model="project.estimatetime"   placeholder="Enter here" class="input_field time_field" @keyup="projectTimerChange()" required>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="input_wrap">
											<label for="">Project Details</label>
											<textarea placeholder="Enter here" class="input_field" v-model="project.description" required></textarea>
										</div>
									</div>
									<div class="col-md-12">
										<div class="input_wrap">
											<label for="">Attached File</label>
											<div class="input_wrap_file">
												<div id="project_file_input" class="file_input">
													<input class="file_input_tag" id="projectCustomFile" type="file" multiple="multiple" name="files"/>
													<label class="file_label" for="projectCustomFile">Upload File</label>
												</div>
												
											</div>
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
	</div>
</template>
<style >
@import '../../assets/css/select2.min.css';
@import '../../assets/css/bootstrap.min.css';
@import '../../assets/fonts/fonts.css';
@import '../../assets/css/style.css';
@import '../../assets/css/slick.css';

@import '../../assets/css/responsive.css';

</style>
<script >
import DataService from "@/services/DataService.js";
import $ from 'jquery'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Datepicker from 'vuejs3-datepicker';
  export default {
	name: 'AdminProject',components: {
    Datepicker,Loading
  },data(){
            return{
				publicPath: process.env.BASE_URL,
				isLoading: false,
                fullPage: true,
                disabledDates :{
					to: new Date(Date.now() - 8640000),
					// from: new Date()
				},
				deadlinedateDisable:{
					to: new Date(Date.now() - 8640000),
				},
				submitted: false,
				submitbtn:'Submit',
				projects: [],
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
				selectedFile: "",
				projectsOpts: [],
				assingedUser: [
					
				],
				userOpts:[
					
				],
				categoryOpts: [
					
				],
				currentCount : {

				}
            }
        },
        created: function()
        {
            this.auth = this.$store.state.authentication.user;
			this.fetchAllProjects()
			this.currentProjectCount()
			this.pageScript()
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
					assigned: this.task.assigned
				};
				DataService.taskCreate(data )
				.then(response => {	
					if(response.status == 201){
						// this.$router.push({ name: 'slug' });
						this.task = {}
						$('#add_new_task_modal').modal('hide')
					}
				this.submitted = true;
				})
				.catch(e => {
					console.log(e);
				});
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
			saveProject() {
				var data = {
					name   :    this.project.name,
					description :    this.project.description,
					startdate :    this.project.startdate,
					enddate :    this.project.enddate,
					estimatetime :    this.project.estimatetime,
				};
				DataService.projectCreate(data )
					.then(response => {	
						if(response.status == 201){
							this.project = {}
							$('#add_new_project_modal').modal('hide')
							this.fetchAllProjects()
							this.currentProjectCount()
						}
					this.submitted = true;
					})
					.catch(e => {
						console.log(e);
					});
			},
			openCreatModel(){
				$(document).ready((jQuery) => {
					jQuery('#task_modal').modal('show')
				})	
			},
			openTaskModel(){
				DataService.getProjectNames().then(response => {
					this.projectsOpts = []
					this.categoryOpts = []
					this.userOpts = []
					this.task = {
						name: null,
						projectID: null,
						assigneddate: new Date(),
						estimatetime: '00:00',
						deadlinedate: new Date(),
						detail: null,
						buttonDisable : false,
						assigned: [],
						category: null
					}
				if(response.status == 200){
					// this.projectsOpts = response.data.projects
					// this.userOpts = response.data.users
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
			$(document).ready((jQuery) => {
				jQuery('#add_new_task_modal').modal('show')
				jQuery('#task_modal').modal('hide')
				setTimeout(function(){
					jQuery('body').addClass('modal-open');
				},500);
			})
			},
			openProjectModel(){
				this.project = {
					name: null,
					description : null,
					startdate : new Date(),
					enddate : new Date(),
					estimatetime : '00:00',
					buttonDisable : false
				}
				$(document).ready((jQuery) => {
					jQuery('#add_new_project_modal').modal('show')
					jQuery('#task_modal').modal('hide')
					setTimeout(function(){
						jQuery('body').addClass('modal-open');
					},500);
				
				})
			},
			fetchAllProjects(){
				DataService.fetchProjects( )
				.then(response => {	
					if(response.status == 200){
						this.projects = response.data;
					}
				})
				.catch(e => {
					console.log(e);
				});
			},
			currentProjectCount(){
			DataService.getAdminProjectCount(  )
			.then(response => {	
				if(response.status == 200){
					this.currentCount = response.data
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
					$('#project_selecte').select2({
						dropdownCssClass:'increasezindex'
					});
					
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
			projectTimerChange(){
				const estimatetime = this.project.estimatetime
				var isValid = /^([0-9]?[0-9]?[0-9]):([0-5][0-9])(:[0-5][0-9])?$/.test(estimatetime);
				if (isValid) {
					this.project.buttonDisable = false;
				} else {
					this.project.buttonDisable = true;
				}
				if(!estimatetime){
					this.project.estimatetime = '00:00'
				}
			},
			taskTimeChange(){
				const estimatetime = this.task.estimatetime
				var isValid = /^([0-9]?[0-9]?[0-9]):([0-5][0-9])(:[0-5][0-9])?$/.test(estimatetime);
				if (isValid) {
					this.task.buttonDisable = false;
				} else {
					this.task.buttonDisable = true;
				}
				if(!estimatetime){
					this.task.estimatetime = '00:00'
				}
			}
			
        }
  }
</script>