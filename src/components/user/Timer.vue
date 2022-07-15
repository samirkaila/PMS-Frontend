<template>
    <div class="current-box">
		<div class="current-head">
			<h4>Current Task Timer <a href="#">Change Task</a></h4>
			<div class="time-box">
				
				<span id="timer-total">00:00:00</span>
				<div class="icon" @click="timer">
					<a href="javascript:void(0)" class="active" > 
						<span><img :src="`${this.publicPath}images/Polygon.svg`" alt="" id="timer-icon"></span>
					</a>
				</div>
			
			</div>
		</div>
		<div class="comment">Show Builder Website Design and Development (HTML & CSS, JS, PHP)</div>
		
	</div>
</template>
<script >
// import DataService from "@/services/DataService.js";
import $ from 'jquery'
export default {
	name: 'UserTimer',data(){
		return{
			publicPath: process.env.BASE_URL,
			timerStart : false,
			intervalId : null,
			totalSeconds : 0,
			timerCount : '00:00:00',
			timerIconSrc: ''
		}
    },
	created: function()
	{
		this.auth = this.$store.state.authentication.user;
		this.timerIconSrc = `${this.publicPath}images/Polygon.svg`
	},
	beforeUnmount:function() 
	{
		
	},
	methods: {
		timer(){
			let hour = 0;
			let minute = 0;
			let seconds = 0;
			let totalSeconds = this.totalSeconds
			const timerState = this.timerStart
			function startTimer() {
				++totalSeconds;
				this.totalSeconds = totalSeconds
				hour = Math.floor(totalSeconds /3600);
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
				
			}
			let timerIconSrc = `${this.publicPath}images/push-icon.svg`
			if(!timerState){
				this.timerStart = true
				this.intervalId = setInterval(startTimer, 1000);
				timerIconSrc = `${this.publicPath}images/push-icon.svg`
				$('#timer-icon').attr('src',timerIconSrc);
			}else{
				this.timerStart = false
				clearInterval(this.intervalId);
				timerIconSrc = `${this.publicPath}images/Polygon.svg`

				$('#timer-icon').attr('src',timerIconSrc);
			}
		}
	}
  }
</script>