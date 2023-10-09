import axiosClient from "./axiosClient";
class UserService {
    getAllUser() {
        return axiosClient.get('/user/hod/all');
    }
}

export default new UserService();