import axios from "axios";


export const sendEmail = async (email: string, phone: string, message: string, firstName: string, lastName: string) => {
    let bodyFormData: FormData = new FormData();

    bodyFormData.append('from_mail', email);
    bodyFormData.append('from_phone', phone);
    bodyFormData.append('message', message);
    bodyFormData.append('first_name', firstName);
    bodyFormData.append('last_name', lastName);

    return axios({
        method: 'post',
        url: 'http://localhost:8000/send-email',
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data'}
    });
}
