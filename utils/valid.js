const valid = (name,email,password,cpassword) => {
    if (!name || !email || !password)
    return 'Please fill the required filed'

    if (!validateEmail(email))
    return 'Invalid email.'

    if (password.length < 6)
    return 'Password must at-least 6 characters';

    if (password != cpassword)
    return 'Password and confirm is not matched.'
}

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}


const loginValidate =(email,password) => {
    if (!email || !password) {
        return 'Please fill the required field'
    }

    if (!validateEmail(email)) {
        return 'Invalid Email-id'
    }
}


export {
    valid,loginValidate
}