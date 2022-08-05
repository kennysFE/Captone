/**
 * trim () là hàm tích hợp trog js, được sử dụng để loại bỏ khoảng trắng của chuỗi kí tự
 */
//check rỗng

export let checkEmpty = (value, selectorError, name)=> {
    // kiểm tra giá trị 
    if (value.trim() == '' ) {
        // Nếu giá trị là rỗng thực hiện in ra man hình cảnh báo
        document.querySelector(`${selectorError}`).innerHTML = `${name} không được để trống`;   
        return false;
    } else {
        document.querySelector(selectorError).innerHTML = '';
        return true
    }
}
//kiểm tra định dạng (validation tên tiếng việt trong javascript)
/* Điều kiện validate:
    Tên có dấu hoặc không
    Không có kí tự đặc biệt
    Không có số 
*/
function removeAscent (str) {
    // Thực hiện các bước bỏ dấu trước khi check bằng regax
    if (str === null || str === undefined) return str;
     str = str.toLowerCase();
     str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
     str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
     str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
     str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
     str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
     str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");  
     str = str.replace(/đ/g, "d");
     return str;
 }
// kiểm tra tên với chuỗi đã được check bởi hàm removeAssent
export let checkName = (value, selectorError, name)=> {
    var regexLetter = /^[A-Z a-z]+$/;
    let valueNew = removeAscent(value);
    if (regexLetter.test(valueNew.trim())) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = name + ' tất cả phải là kí tự';
        return false;
    }
}

//kiểm tra tất cả chữ số 

export let checkNumber = (value, selectorError, name)=> {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value.trim())) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = name + ' tất cả phải là số';
        return false;
    }
}

//kiểm tra mail
export let checkEmail = (value, selectorError, name) =>{
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(value.trim())) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = name + ' không đúng định dạng example: abc@gmail.com';
        return false;
    }
}

//kiểm tra mật khẩu 
export let checkPassword = (value, selectorError, name) =>{
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (regexPassword.test(value.trim())) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = name + ' phải có cả số và chữ, ít nhất 1 ký tự viết hoa và 1 ký tự đặt biệt';
        return false;
    }
}

//kiểm tra độ dài
export let checkLength = (value, selectorError, name, minLength, maxLength) =>{
    if (value.trim().length > maxLength || value.trim().length < minLength) {
        document.querySelector(selectorError).innerHTML = name + ' độ dài từ ' + minLength + ' đến ' + maxLength;
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

//kiểm tra ngày tháng năm
export let checkDate = (value, selectorError, name)=>{
    // console.log(typeof (value));
    var regexDate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if (regexDate.test(value)) {
        return true;
    } else {
        document.querySelector(selectorError).inner = name + 'lỗi';
        return false;
    }
}

