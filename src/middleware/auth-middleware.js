export default (to, from, next) => {
	let auth = localStorage.getItem('user');
	if(!auth){
		next();
		return true;
		
	}else{
		next(from);
		return true;
	}
}