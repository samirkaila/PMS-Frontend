<template>
	<div >
		<div v-if="this.auth.user.role == 'admin' || this.auth.user.role == 'super admin'">
			<AdminHome />
		</div>
		<div v-if="this.auth.user.role == 'user'">
			<UserHome /> 
		</div>
	</div>
</template>
<script>
import UserHome from './user/UserHome.vue'
import AdminHome from './admin/AdminHome.vue'
export default {
  name: 'homeAll',
  data(){
		
    },
	components: {
		UserHome,AdminHome
	},
	created: function()
	{
		this.auth = this.$store.state.authentication.user;
	},
}
</script>