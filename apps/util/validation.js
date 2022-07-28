/*
     ---------- Validation register page ----------------------------
 */

// Hàm check chuỗi rỗng 
export let checkEmpty =  (value, selectorError, name) => {
    if (value.trim() == '') {
        document.querySelector(`${selectorError}`).innerHTML = `{${name}} + " Không được để giá trị trống !"`;
        return false;
    } else {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
}

// Ham check số 
export let checkNumber = (value, selectorError, name)=> {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value.trim())) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    } else {
        document.querySelector(selectorError).innerHTML = name + ' tat ca phai la so';
        return false;
    }
}
