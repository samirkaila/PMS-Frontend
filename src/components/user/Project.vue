<template>
	<div class="main_wapper-inner "> 
		<div class="header-outer">
			<div class="header-outer-top">
					<div class="login-area">
						<div class="icon"><img :src="`${publicPath}images/Logo-2.svg`" alt=""></div>
						<div class="login-area-inner">
							<div class="login-as"><span>Logged as a</span></div>
							<router-link  :to="{name:'profile'}" class="nmae" >{{this.auth.user.name}}</router-link>
						</div>
					</div>
					<div class="search-header">
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
			</div>
			<div class="header-bottom-outer">
				<div class="header-nav">
					<ul>
						<li >
							<router-link  :to="{name:'home.all'}" >
								<i><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.5 5.38095H12.9286C12.2738 5.38095 11.7381 5.91667 11.7381 6.57143C11.7381 7.22619 12.2143 7.70238 12.869 7.7619H16.5C17.1548 7.7619 17.6905 7.22619 17.6905 6.57143C17.6905 5.91667 17.1548 5.38095 16.5 5.38095ZM18.881 13.119C19.5357 13.119 20.0714 13.6548 20.0714 14.3095C20.0714 14.9643 19.5357 15.5 18.881 15.5H10.5476C9.89286 15.5 9.35714 14.9643 9.35714 14.3095C9.35714 13.6548 9.89286 13.119 10.5476 13.119H18.881ZM18.881 17.881C19.5357 17.881 20.0714 18.4167 20.0714 19.0714C20.0714 19.7262 19.5357 20.2619 18.881 20.2619H10.5476C9.89286 20.2619 9.35714 19.7262 9.35714 19.0714C9.35714 18.4167 9.89286 17.881 10.5476 17.881H18.881ZM16.5 10.1429H12.9286C11.381 10.1429 10.0714 9.13095 9.53571 7.7619H7.57143C6.91667 7.7619 6.44048 8.2381 6.38095 8.89286V24.4286C6.38095 25.0833 6.85714 25.5595 7.5119 25.619H21.8571C22.5119 25.619 22.9881 25.1429 23.0476 24.4881V8.95238C23.0476 8.29762 22.5119 7.7619 21.8571 7.7619H19.8929C19.3571 9.13095 18.0476 10.1429 16.5 10.1429ZM16.5 3C18.0476 3 19.3571 4.0119 19.8929 5.38095H21.8571C23.8214 5.38095 25.4286 6.9881 25.4286 8.95238V24.4286C25.4286 26.3929 23.8214 28 21.8571 28H7.57143C5.60714 28 4 26.3929 4 24.4286V8.95238C4 6.9881 5.60714 5.38095 7.57143 5.38095H9.53571C10.0119 4.0119 11.3214 3 12.9286 3H16.5Z" fill="#858BA0"/>
									</svg></i>
									<span>My Tasks</span>
							</router-link>
						</li>
						<li class="active">
							<router-link  :to="{name:'user.project'}" >
								<i><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.36832 9.31767L15.0014 14.6985L25.6345 9.31767L15.0014 4.12432L4.36832 9.31767ZM5.8596 17.6673L3.61987 16.5537C2.87423 16.1815 2.5 15.6247 2.5 14.8832C2.5 14.1417 2.87423 13.5848 3.61987 13.2127L5.8596 12.099L3.61987 10.9854C2.68571 10.6132 2.31429 9.50235 2.68571 8.57337C2.87141 8.20121 3.24564 7.83186 3.43135 7.83186L14.0701 2.63851C14.63 2.45383 15.1899 2.45383 15.7499 2.63851L26.3829 7.83186C27.3143 8.20401 27.6885 9.31487 27.1286 10.2439C26.9429 10.616 26.5687 10.9854 26.3829 10.9854L24.1432 12.099L26.1944 13.028C27.1258 13.4002 27.5 13.9542 27.5 14.8832C27.5 15.6247 27.1258 16.3662 26.1944 16.7383L24.1432 17.6673L26.1944 18.5963C27.1258 18.9685 27.5 19.5225 27.5 20.4515C27.5 21.193 27.1258 21.9345 26.1944 22.3066L15.9328 27.3153C15.747 27.5 15.3728 27.5 14.9986 27.5C14.6244 27.5 14.4387 27.5 14.0644 27.3153L3.43416 22.1192C2.68852 21.747 2.5 21.1902 2.5 20.4487C2.5 19.7072 2.87423 19.1503 3.61987 18.7782L5.8596 17.6673ZM7.91362 18.781L4.36832 20.4515L15.0014 25.8295L25.6345 20.6362L22.0892 18.9657L15.9356 21.9345C15.7499 22.1192 15.3756 22.1192 15.0014 22.1192C14.6272 22.1192 14.4415 22.1192 14.0672 21.9345L7.91362 18.781ZM22.092 13.2155L15.9356 16.1815C15.3756 16.3662 14.8157 16.3662 14.2558 16.1815L7.91362 13.2155L4.36832 14.886L15.0014 20.264L25.6345 14.8832L22.092 13.2155Z" fill="#858BA0" stroke="#858BA0" stroke-width="0.3"/>
									</svg>
									</i>
									<span>My Projects</span>
							</router-link>
						</li>
						<li>
							<router-link  :to="{name:'user.complete.task'}" >
								<i><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M15.8333 4.88095H13.1548C12.5 4.88095 11.9643 5.41667 11.9643 6.07143C11.9643 6.72619 12.4405 7.20238 13.0952 7.2619H15.8333C16.4881 7.2619 17.0238 6.72619 17.0238 6.07143C17.0238 5.41667 16.4881 4.88095 15.8333 4.88095ZM15.6548 12.619C16.3095 12.619 16.8452 13.1548 16.8452 13.8095C16.8452 14.4643 16.3095 15 15.6548 15H10.2976C9.64286 15 9.10714 14.4643 9.10714 13.8095C9.10714 13.1548 9.64286 12.619 10.2976 12.619H15.6548ZM12.6786 17.381C13.3333 17.381 13.869 17.9167 13.869 18.5714C13.869 19.2262 13.3333 19.7619 12.6786 19.7619H10.2976C9.64286 19.7619 9.10714 19.2262 9.10714 18.5714C9.10714 17.9167 9.64286 17.381 10.2976 17.381H12.6786ZM26.6667 19.5238C27.0833 20 27.0833 20.6548 26.6667 21.131L26.6071 21.1905L20.2381 27.1429C19.8214 27.5595 19.1667 27.5595 18.6905 27.2024L18.631 27.1429L15.4762 24.1667C15 23.6905 15 22.9762 15.4167 22.5C15.8333 22.0238 16.5476 22.0238 17.0238 22.381L17.0833 22.4405L19.4643 24.6429L25 19.4643C25.4167 19.0476 26.1905 19.0476 26.6667 19.5238ZM22.7976 8.45238C22.7976 7.79762 22.2619 7.2619 21.6071 7.2619H19.6429C19.1667 8.63095 17.8571 9.64286 16.25 9.64286H12.6786C11.131 9.64286 9.82143 8.63095 9.28571 7.2619H7.32143C6.66667 7.2619 6.19048 7.7381 6.13095 8.39286V23.9286C6.13095 24.5833 6.60714 25.0595 7.2619 25.119H11.4881C12.1429 25.119 12.6786 25.6548 12.6786 26.3095C12.6786 26.9643 12.2024 27.4405 11.5476 27.5H7.32143C5.35714 27.5 3.75 25.8929 3.75 23.9286V8.45238C3.75 6.4881 5.35714 4.88095 7.32143 4.88095H9.28571C9.76191 3.5119 11.0714 2.5 12.6786 2.5H16.25C17.7976 2.5 19.1071 3.5119 19.6429 4.88095H21.6071C23.5714 4.88095 25.1786 6.4881 25.1786 8.45238V14.4048C25.1786 15.0595 24.6429 15.5952 23.9881 15.5952C23.3333 15.5952 22.8571 15.119 22.7976 14.4643V8.45238Z" fill="#858BA0"/>
									</svg>
									</i>
									<span>Completed Task</span>
							</router-link>
						</li>
						<li >
							<router-link  :to="{name:'user.review.task'}" >
								<i><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.5 5.38095H12.9286C12.2738 5.38095 11.7381 5.91667 11.7381 6.57143C11.7381 7.22619 12.2143 7.70238 12.869 7.7619H16.5C17.1548 7.7619 17.6905 7.22619 17.6905 6.57143C17.6905 5.91667 17.1548 5.38095 16.5 5.38095ZM18.881 13.119C19.5357 13.119 20.0714 13.6548 20.0714 14.3095C20.0714 14.9643 19.5357 15.5 18.881 15.5H10.5476C9.89286 15.5 9.35714 14.9643 9.35714 14.3095C9.35714 13.6548 9.89286 13.119 10.5476 13.119H18.881ZM18.881 17.881C19.5357 17.881 20.0714 18.4167 20.0714 19.0714C20.0714 19.7262 19.5357 20.2619 18.881 20.2619H10.5476C9.89286 20.2619 9.35714 19.7262 9.35714 19.0714C9.35714 18.4167 9.89286 17.881 10.5476 17.881H18.881ZM16.5 10.1429H12.9286C11.381 10.1429 10.0714 9.13095 9.53571 7.7619H7.57143C6.91667 7.7619 6.44048 8.2381 6.38095 8.89286V24.4286C6.38095 25.0833 6.85714 25.5595 7.5119 25.619H21.8571C22.5119 25.619 22.9881 25.1429 23.0476 24.4881V8.95238C23.0476 8.29762 22.5119 7.7619 21.8571 7.7619H19.8929C19.3571 9.13095 18.0476 10.1429 16.5 10.1429ZM16.5 3C18.0476 3 19.3571 4.0119 19.8929 5.38095H21.8571C23.8214 5.38095 25.4286 6.9881 25.4286 8.95238V24.4286C25.4286 26.3929 23.8214 28 21.8571 28H7.57143C5.60714 28 4 26.3929 4 24.4286V8.95238C4 6.9881 5.60714 5.38095 7.57143 5.38095H9.53571C10.0119 4.0119 11.3214 3 12.9286 3H16.5Z" fill="#858BA0"/>
									</svg></i>
									<span>Review Tasks</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="admin-deshboard">
			<div class="admin-deshboard-top">
				<div class="row">
					<div class="col-md-3">
						<div class="task-box">
							<h4>Tasks</h4>
							<div class="task-box-inner">
								<div class="task-sub-box">
									<div class="count">{{this.taskCount.curruntTaskCount}}</div>
									<p>Tasks In Progress</p>
								</div>
								<div class="task-sub-box">
									<div class="count">{{this.taskCount.orverDueTask}}</div>
									<p>Tasks Overdue</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="task-box">
							<h4>Projects</h4>
							<div class="task-box-inner">
								<div class="task-sub-box">
									<div class="count">{{this.taskCount.currentProject}}</div>
									<p>Project In Progress</p>
								</div>
								<div class="task-sub-box">
									<div class="count">{{this.taskCount.orverDueProject}}</div>
									<p>Project Overdue</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="current-box">
							<div class="current-head">
								<h4>Current Task Timer <a href="#">Change Task</a></h4>
								<div class="time-box">
									
									<span id="timer-total">00:00:00</span>
									<div class="icon" @click="timer(timerTask.id)">
										<a href="javascript:void(0)" class="active" > 
											<span><img :src="`${this.publicPath}images/Polygon.svg`" alt="" id="timer-icon"></span>
										</a>
									</div>
								
								</div>
							</div>
							<div class="comment">{{timerTask.name}}</div>
							
						</div>
					</div>
				</div>
			</div>

		<div class="project-details-listing">
				<div class="row" >
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
								<a class="attached-btn" href="javascript:void(0)" @click="userFileDownload(file.originalname , file.filename)">{{file.originalname}} <span><img :src="`${publicPath}images/folder-download-icon.svg`" alt=""></span></a>
							</div>
							
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

//for datatable
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import DataService from "@/services/DataService.js";
import $ from 'jquery'
// import timerView from './Timer.vue'
export default {
	name: 'UserHome',data(){
		return{
			publicPath: process.env.BASE_URL,
			task  : {},
			timerStart : false,
			intervalId : null,
			totalSeconds : null,
			timerCount : '00:00:00',
			timerIconSrc: '',
			timerTask : {},
			userTimer : {},
			projects : {},
			projectData : {},
			taskCount : {

			}

		}
    },
	created: function()
	{
		this.auth = this.$store.state.authentication.user;
		this.fetchAllProjects()
		this.pageScript()
		this.userTimerActivity()
		this.userTaskCount()
	},
	beforeUnmount:function() 
	{
		this.timerStart = false,
		this.intervalId = null,
		this.totalSeconds = null,
		this.timerCount = '00:00:00',
		this.timerIconSrc= '',
		this.timerTask = {},
		this.userTimer = {},
		this.timerID = null,
		this.activityID = null
	},
	methods: {
		logOut(){
			this.$store.dispatch('authentication/logout');
		},
		userTimerActivity(){
			DataService.userTimerActivity( )
			.then(response => {	
				if(response.status == 200){
					if(response.data.isrunning){
						let hour = 0;
						let minute = 0;
						let seconds = 0;
						let totalSeconds = 0
						let timerIconSrc = `${this.publicPath}images/Polygon.svg`
						this.timerStart = true
						this.timerID = response.data.task.id
						this.activityID = 	response.data.timeractivityID
						this.timerTask = response.data.task;
						if(response.data.totalSeconds){
							totalSeconds = response.data.totalSeconds
						}
						const startTimer = () => {
							++totalSeconds;
							hour = Math.floor(totalSeconds / 3600);
							minute = Math.floor((totalSeconds - hour*3600)/60);
							seconds = totalSeconds - (hour*3600 + minute*60);
							if(hour < 10)
								hour = "0"+hour;
							if(minute < 10)
								minute = "0"+minute;
							if(seconds < 10)
								seconds = "0"+seconds;
							let count = hour + ":" + minute + ":" + seconds;
							$("#timer-total").html(count)
							$("#timer-"+ this.timerID).html(count)
						}
						this.intervalId = setInterval(startTimer, 1000);
						timerIconSrc = `${this.publicPath}images/push-icon.svg`
						$('#timer-icon').attr('src',timerIconSrc);
						$('#slider_player_icon').attr('src',timerIconSrc);
						
					}
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		timer(id){
			if(id){	
				let hour = 0;
				let minute = 0;
				let seconds = 0;
				let totalSeconds = 0
				const timerState = this.timerStart
				let timerIconSrc = `${this.publicPath}images/Polygon.svg`
				let data = {}
				if(!timerState){
					// if(this.timerID == id){
					
					// }else{
					// 	alert('not any timer runnig')
					// }
					this.timerStart = true
					this.timerID = id
					data = {
						taskID : id,
						start  : true 
					}
				}else{
					this.timerStart = false
					this.timerID = null
					data = {
						taskID : id,
						end    : true ,
						activityID: this.activityID
					}
				}
				DataService.taskTimer( data )
				.then(response => {	
					if(response.status == 200){
						this.timerTask = response.data.task;
						this.userTimer = response.data.timer;
						if(!timerState){
							if(response.data.totalSeconds){
								totalSeconds = response.data.totalSeconds
							}
							if(response.data.activityID){
								this.activityID = response.data.activityID
							}else{
								this.activityID = null
							}

							this.intervalId = setInterval(startTimer, 1000);
							timerIconSrc = `${this.publicPath}images/push-icon.svg`
							$('#timer-icon').attr('src',timerIconSrc);
							$('#slider_player_icon').attr('src',timerIconSrc);
						}else{
							const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
							// Clear any timeout/interval up to that id
							for (let i = 1; i < interval_id; i++) {
								window.clearInterval(i);
							}
							clearInterval(this.intervalId);
							timerIconSrc = `${this.publicPath}images/Polygon.svg`
							$('#timer-icon').attr('src',timerIconSrc);
							$('#slider_player_icon').attr('src',timerIconSrc);
							this.fetchUserTasks()
							// $("#timer-total").html(count)
						}
						
					}
				})
				.catch(e => {
					console.log(e);
				});
				const startTimer = () => {
					++totalSeconds;
					hour = Math.floor(totalSeconds / 3600);
					minute = Math.floor((totalSeconds - hour*3600)/60);
					seconds = totalSeconds - (hour*3600 + minute*60);
					if(hour < 10)
						hour = "0"+hour;
					if(minute < 10)
						minute = "0"+minute;
					if(seconds < 10)
						seconds = "0"+seconds;
					let count = hour + ":" + minute + ":" + seconds;
					$("#timer-total").html(count)
					$("#timer-"+ this.timerID).html(count)
				}
			}	
		},
		fetchAllProjects(){
			DataService.fetchUserProjects( )
			.then(response => {	
				if(response.status == 200){
					this.projects = response.data;
				}
			})
			.catch(e => {
				console.log(e);
			});
		},
		userFileDownload( originalname , name){
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
		openProjectSidebar(project){
			const id = project.id
			DataService.fetchUserProject( id )
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
		userTaskCount(){
			DataService.getUserTaskCount( )
			.then(response => {	
				if(response.status == 200){
					this.taskCount = response.data
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
