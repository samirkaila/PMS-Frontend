<template>
	<div class="main_wapper-inner main_wapper-inner-v2">
		<HeaderAdmin />
		<AdminSideMenu/>
		<div class="admin-deshboard sidebar">
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
							<div class="count-num">{{this.currentCount.orverDueproject}}</div>
						</div>
					</div>
					<div class="deshboard-col">
						<div class="deshboard-box">
							<h4>In Pipeline Projects</h4>
							<div class="count-num">{{this.currentCount.PipeleProjectcount}}</div>
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
@import '@vueform/multiselect/themes/default.css';

</style>
<script >
import DataService from "@/services/DataService.js";
// import $ from 'jquery'

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import HeaderAdmin from "@/components/admin/HeaderAdmin.vue"
import AdminSideMenu from "@/components/admin/SideMenu.vue"

export default {
	name: 'AdminHome',components: {
		HeaderAdmin,AdminSideMenu
  },data(){
            return{
				publicPath: process.env.BASE_URL,
				
				currentCount : {

				}
            }
        },	
	created: function()
	{
		this.auth = this.$store.state.authentication.user;
		this.pageScript()
		this.currentProjectCount()
	},	
	methods: {
		logOut(){	
			this.$store.dispatch('authentication/logout');
		},
		pageScript(){
			
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
			
		}
	}
  }
</script>