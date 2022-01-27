import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDVkNmQxYzRiMGE5ZmY2NGQxODQwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzAzNDI2OCwiZXhwIjoxNjQzMTIwNjY4fQ.wWZZ9mHKLGQvVYAHLUzIDa2mSDcv9ssAES-JKP2K04Y'

export const publicReq = axios.create({
    baseURL: BASE_URL
});

export const userReq = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});