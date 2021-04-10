import request from '../../axios'
export default{
    getTodoList(){
        return request({
            url : `/todo`,
            method : 'get',
        })
    }
}