import http from "../http-common";
import axios from "axios";
import { authHeader } from '../helpers';
// import { authHeader } from '../helpers';
class DataService {
  
  userLogin(data){
    return http.post(`/login`,data);
  }
  createUser(data){
    return http.post(`/user`,data);
  }
  createCategory(data){
    return http.post(`/category`,data);
  }
  fetchUsers(data){
    return http.post(`/users` , data);
  }
  userAvailability(data){
    return http.post(`/user-availability` , data);
  }
  fetchCategorys( data ){
    return http.post(`/categorys`,data);
  }
  fetchAdmin(data){
    return http.post(`/admin` , data);
  }
  fetchProfileData(){
    return http.get(`/profle`);
  }
  fetchUser(id){
    return http.get(`/user/${id}`);
  }
  userfindTasks(id){
    return http.get(`/users/task-list/${id}`);
  }
  setuserTaskOrder(id,data){
    return http.post(`/task/order-list/${id}`,data);
  }
  fetchCategory(id){
    return http.get(`/category/${id}`);
  }
  updateUser(id , data) {
    return http.patch(`/user/${id}`,data);
  }
  updateCategory(id , data) {
    return http.patch(`/category/${id}`,data);
  }
  deleteUser(id){
    return http.delete(`/user/${id}`);
  }
  deleteCategory(id){
    return http.delete(`/category/${id}`);
  }
  userTimerActivity(){
    return http.get(`/timer/activity`);
  }
  taskTimer(data){
    if(data.start){
      return http.post(`/timer/start`,data);
    }else{
      return http.post(`/timer/end`,data);
    }
    
  }
  adminTasksData(data){
    return http.post(`/admin/task`,data);
  }
  adminTasksCompleteData(data){
    return http.post(`/admin/taskcomplete` , data);
  }
  adminTasksComplete(data){
    return http.post(`/admin/task-complete`,data);
  }
  adminTasksReviewUnComplete(data){
    return http.post(`/admin/review-uncomplete`,data);
  }
  adminTasksUnComplete(data){
    return http.post(`/admin/task-uncomplete`,data);
  }
  userTaskReview(data){
    return http.post(`/task-review`,data);
  }
  saveMessage(data){
    return http.post(`/message`,data);
  }
  saveReplayMessage(data){
    return http.post(`/message-replay`,data);
  }
  getTaskMessage(id){
    return http.get(`/messages/${id}`);
  }
  fetchProjects( data ){
    return http.post(`/projects` ,data);
  }
  fetchProjectPipeline( data ){
    return http.post(`/projects/pipeline`,data);
  }
  amdinGetReviwTasks(data){
    return http.post(`/admin/task-review`,data);
  }
  fetchUserProjects(){
    return http.get(`/me/projects`);
  }
  fetchProject(id){
    return http.get(`/project/${id}`);
  }
  fetchUserProject(id){
    return http.get(`/project-user/${id}`);
  }
  donloadAdminFile(name){
    // return http.post(`public/project/upload/${name}`,{responseType: 'blob'});
    return axios({
      url: `http://192.168.1.103:3002/api/public/project/upload/${name}`, 
      method: 'POST',
      responseType: 'blob',
      headers: {
        "Content-type"  : "application/json",
        'Authorization' : authHeader() 
      }
    })
  }
  projectCreate(data){
    let myForm   = document.getElementById('project_save_form'); 
    let formData = new FormData(myForm);
    formData.append('description',data.description)
    formData.append('estimatetime',data.estimatetime)
    formData.append('enddate',data.enddate)
    formData.append('startdate',data.startdate)
    return http.post("/project", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      
    });
  }
  projectUpdate(id,data){
    let myForm   = document.getElementById('project_edit_form'); 
    let formData = new FormData(myForm);
    formData.append('description',data.description)
    formData.append('estimatetime',data.estimatetime)
    formData.append('enddate',data.enddate)
    formData.append('startdate',data.startdate)
    return http.patch(`/project/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      
    });
  }
  
  getProjectNames(){
    return http.get(`/project-options`);
  }
  getUserList(){
    return http.get(`/users`);
  }
  getuserTasks(data){
    return http.post(`/me/tasks`,data);
  }
  getuserCompleteTasks( data ){
    return http.post(`/me/complete-tasks` , data);
  }
  getuserReviewTasks( data ){
    return http.post(`/me/review-tasks` , data);
  }
  getTaskAdminDetails(id){
    return http.get(`/task/${id}`);
  }
  getProjectAdminDetails(id){
    return http.get(`/project/${id}`);
  }
  getProjectForEdit(id){
    return http.get(`/project-edit/${id}`);
  }
  taskFileDelete(data){
    return http.post(`/task/file/delete`,data);
  }
  projectFileDelete(data){
    return http.post(`/project/file/delete`,data);
  }
  getTaskForUserSlider(id){
    return http.get(`/user/task/${id}`);
  }
  getTaskProjectDate(data){
    return http.post(`/task-prject/date`,data);
  }
  getAdminProjectCount(){
    return http.get(`/admin/count-projects`);
  }
  getAdminCategoryCount(){
    return http.get(`/category-count`);
  }
  getAdminUserCount(){
    return http.get(`/user-count`);
  }
  getUserTaskCount(){
    return http.get(`/users/count-projects`);
  }
  taskCreate(data) {
    let myForm   = document.getElementById('task_save_form'); 
    let formData = new FormData(myForm);
    formData.append('description',data.detail)
    formData.append('estimatedTime',data.estimatetime)
    formData.append('assignedDate',data.assigneddate)
    formData.append('deadlineDate',data.deadlinedate)
    formData.append('assigned',data.assigned)
    data.categorys.forEach( (category) => {
      formData.append('category',category)
    })
    formData.append('projectID',data.projectID)
    formData.append('name',data.name)
    return http.post("/task", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      
    });
  }
  taskUpdate(id,data) {
    let myForm   = document.getElementById('task_save_form'); 
    let formData = new FormData(myForm);
    formData.append('description',data.detail)
    formData.append('estimatedTime',data.estimatetime)
    formData.append('assignedDate',data.assigneddate)
    formData.append('deadlineDate',data.deadlinedate)
    formData.append('assigned',data.assigned)
    data.categorys.forEach( (category) => {
      formData.append('category',category)
    })
    formData.append('projectID',data.projectID)
    formData.append('name',data.name)
    return http.patch(`/task/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      
    });
  }
  profileUpdate(data) {
    let myForm   = document.getElementById('profile_save_form'); 
    let formData = new FormData(myForm);
    
    formData.append('name',data.name)
    formData.append('DOB',data.DOB)
    formData.append('email',data.email)
    return http.patch("/profle", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      
    });
  }
  logout(){
    return http.post(`/logout`);
  }
}
export default new DataService();