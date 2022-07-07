export const validateName = (name, value) => {
    const nameRex =/^[a-z ,.'-]+$/i   // Valid for surnames like "O'Reilly King-Luther Jr."
    if (nameRex.test(value)) {
       return  { [name] : 'valid'}
    } else {
        return  { [name] : name + " should be alphabetic characters or contain space, comma, period, hyphen or '"}
    }
  }

export const validateCompanyProject = (name, value) => {
    console.log(name, value)
    const nameRex =/^[a-z0-9 ,.'-]+$/i   // Valid companies like 3M 
    if (nameRex.test(value)) {
    console.log(name, value)
       return  { [name] : 'valid'}
    } else {
        return  { [name] : name + " should be alphanumeric characters or contain space, comma, period, hyphen or '"}
    }
  }

export const isFormValid = (validateObj, desc) => {
    if (Object.keys(validateObj).every((k) => validateObj[k] === 'valid') ) {
        console.log(desc, " can be created as all fields valid")
        return true;
    }
    else{
        alert ( desc + " will not be created as it has invalid input fields");
        return false;
    }
}

export const isError  = (status) => {
    if ( status === 'valid' ) {
        return false
    }else if ( status === '' ) {  // status hasn't yet been set
        return false
    }else {
        return true
    }
}

export const showError = (message) => (
    isError(message) && <h6 className="error"> {message} </h6>
)