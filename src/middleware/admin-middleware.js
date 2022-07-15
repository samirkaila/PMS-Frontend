export default (to, from, next) => {
	let auth = localStorage.getItem('user');
	if(auth){
		let user = JSON.parse(auth);
		if(user.user.role == 'admin' || user.user.role == 'super admin'){
			next();
			return true;
			
		}else{
			next(from);
			return true;
		}
	}
	
}