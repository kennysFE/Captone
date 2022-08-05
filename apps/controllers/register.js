import { Customers } from '../models/customers.js';
import { checkEmail, checkEmpty, checkPassword, checkNumber, checkName, checkLength } from '../util/validation.js';
// tạo biến lây các giá trị 
let inputMale = document.querySelector('#male');
let inputFemale = document.querySelector('#female');
// Sử dụng kĩ thuật đặt cờ hiệu gán giá trị mặc định đúng cho gender
let gender = 'male';
//Lấy các giá trị từ gender
inputMale.onclick = function (e) {
    gender = inputMale.id;
}
inputFemale.onclick = function (e) {
    gender = inputFemale.id;
}

let user = new Customers();
//Kiểm tra gender
document.querySelector('#submit').onclick = (e) => {
    e.preventDefault();
    let arrInput = document.querySelectorAll('.form-group input');
    for (let input of arrInput) {
        let { id, value } = input;
        user[id] = value;
    }
    if (gender == 'male') {
        user.gender = true;
    } else if (gender == 'female') {
        user.gender = false;
    }
    validationError(user);
}
//validation 
let validationError = (user) => {
    let arrOutputValidation = document.querySelectorAll('.form-group div');
    let validation = true;
    let arrValidation = [];
    for (let input of arrOutputValidation) {
        let classTag = input.className;
        validation = checkEmpty(user[classTag], `.${classTag}`, classTag);
        if (validation) {
            if (classTag == 'name') {
                validation = checkName(user[classTag], `.${classTag}`, classTag);
                if (validation) {
                    checkLength(user[classTag], `.${classTag}`, classTag, 5, 30);
                } else {
                    arrValidation.push(validation);
                }
            }
            if (classTag == 'email') {
                validation = checkEmail(user[classTag], `.${classTag}`, classTag);
                if (!validation) {
                    arrValidation.push(validation);
                }
            }
            if (classTag == 'password') {
                validation = checkPassword(user[classTag], `.${classTag}`, classTag);
                if (!validation) {
                    arrValidation.push(validation);
                }
            }
            if (classTag == 'passwordConfirm') {
                if (user[classTag] != user.password) {
                    validation = false;
                    document.querySelector(`.${classTag}`).innerHTML = `nhập lại ${classTag}`;
                    arrValidation.push(validation);
                }
            }
            if (classTag == 'phone') {
                validation = checkNumber(user[classTag], `.${classTag}`, classTag);
                if (!validation) {
                    arrValidation.push(validation);
                }
            }
        } else {
            arrValidation.push(validation);
        }
    }
    let check = true;
    check = arrValidation.every(item => item == true);
    if (check) {
        let userSignUP = {
            email: user.email,
            password: user.password,
            name: user.name,
            phone: user.phone,
            gender: user.gender
        }
        singUp(userSignUP);
         setTimeout(() => location.assign("../../index.html"), 1000);
    } else {
        handleTagDiv();
    }
}

//sumit user
let singUp = (user) => {
    let promises = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user
    })
    promises.then((res) => {
        let success = res.data.message;
        alert(success);
    })
    promises.catch((err) => {
        alert(err.response.data);
    })
}

let handleTagDiv = () => {
    let arrDisplayValidation = document.querySelectorAll('.form-group div');
    for (let dp of arrDisplayValidation) {
        dp.style.position = 'relative';
        dp.style.top = 0;
    }
}



