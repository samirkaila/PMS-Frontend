import $ from 'jquery'
class DataTableService { 
	TaskIndexTable(){
		$("#admin_task_list_table").DataTable({
			processing: true,
			serverSide: true,
			destroy: true,
			pageLength: 10,
			searching: false,
			autoWidth: false,
			aaSorting: [],
			ajax :{
				url: 'http://192.168.1.103:3002/api/admin/task',
				method: 'GET',
				success: function (data) {
					self.items = JSON.parse(data);
				},
				error: function (error) {
					console.log(error);
				}
			}	
		});
		
	}
}

export default new DataTableService();