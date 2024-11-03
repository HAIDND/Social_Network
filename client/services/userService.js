import { API_BASE_URL } from '~/config/apiConfig';

const createUser = async (user) => {
    try {
        let response = await fetch('api/user/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};
const readUser = async (params, credentials, siganl) => {
    try {
        let response = await fetch('a[i/user/' + params.userId, {
            method: 'GET',
            signal: signal,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + credentials.t,
            },
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (params, credentials, user) => {
    try {
        let response = await fetch('api/user/' + params.userId, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer' + credentials.t,
            },
            body: JSON.stringify(user),
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};
const list = async (signal) => {
    // lấy danh sách người dùng
    try {
        let response = await fetch('/api/users/', {
            method: 'GET',
            signal: signal,
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};
const deleteUser = async (params, credentials) => {
    try {
        let response = await fetch('api/user/' + params.userId, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer' + credentials.t,
            },
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export { createUser, readUser, updateUser, deleteUser, list };
