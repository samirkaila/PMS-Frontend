<template>
<div class="main_wapper"> 
  
 <div class="pms-login-page">
		<div class="login-outer">
			<div class="w3logo"><img :src="`${publicPath}images/w3logo.svg`" alt=""></div>
			<div class="login-title">
				<h1>Hello, Welcome Back</h1>
			</div>
			<div class="login-text">
				<p>Please login to your account</p>
			</div>
			<div class="login-form">
				<form @submit.prevent="handleSubmit" ref="form" id="blog_save_form" enctype="multipart/form-data">
					<div class="input-box">
						<input  class="input-text" placeholder="Email" type="email" name="email" v-model="email" required>
					</div>
					<div class="input-box">
						<input :type="this.passwordType" class="input-text" placeholder="Password" name="password"   id="password" v-model="password" required>
            
					</div>
					<div class="input-box forgot-row">
						<div class="cls-checkbox">
							<input type="checkbox" id="passwors_show" @change="this.passwordHideShow($event)" v-model="this.checkedPassword"> 
							<label for="passwors_show" >Show password</label>
						</div>
						<div class="forgot-links"><a href="#">Forgot password?</a></div>
					</div>
					<div class="input-box submit-btn">
						
						<button><span>{{submitbtn}}</span> <i><img :src="`${publicPath}images/button-arrow.svg`" alt=""></i></button>
					</div>
				</form>
			</div>
		</div>
 </div>
  
</div>
		
</template>
<style scoped>
@import '../assets/css/bootstrap.min.css';
@import '../assets/fonts/fonts.css';
@import '../assets/css/style.css';
@import '../assets/css/slick.css';
@import '../assets/css/responsive.css';

</style>
<script >
export default {
	name: 'loginAll',
    data () {
        return {
			publicPath: process.env.BASE_URL,
            email: '',
            password: '',
            submitbtn: 'Login',
            submitted: false,
			checkedPassword: false,
			passwordType : 'password'
        }
    },
    computed: {
        
    },
    created () {
        
    },
    methods: {
        handleSubmit () {
            this.submitted = true;
            const { email, password } = this;
            
            const { dispatch } = this.$store;
            if (email && password) {
                dispatch('authentication/login', { email, password });
            }
        },
		passwordHideShow(){
			if(this.checkedPassword){
				this.passwordType = 'text'
			}else{
				this.passwordType = 'password'
			}	
		}
    }
};
</script>