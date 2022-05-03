import axios from '../axios';
//axios cos chuc nang la gui req len server
const handleLoginApi = (userEmail, userPassword) => {
    //userEmail va userPassword là những giá trị tuyền vào
    return axios.post('/api/login', {
        email: userEmail,
        password: userPassword,
    });
};

export { handleLoginApi };
