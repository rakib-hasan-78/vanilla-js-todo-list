// regex for name validation 

export const namePattern = (name) => {
    const nameText = new RegExp("^[A-Za-z\\s]+$");
    const trimmedName = name.trim();

    // check if name is an empty string
    if (trimmedName === '') {
        return{
            isValid: false,
            error: `Name can not be empty!`
        }
    }
    // check if name only contains letters and spaces 

    if (!nameText.test(trimmedName)) {
        return{
            isValid: false,
            error: `Name should contain only letters and spaces.`
        }
    }
    // if name contains more than 3 words--->
    if (name.length<=3) {
        return{
            isValid: false,
            error: `Name must be longer than 2 characters.`
        }
    }
    // if name is not a number or nan 
    if(!isNaN(name)){
        return {
            isValid: false,
            error:`Invalid type: Name cannot be a number.`
        }
    }
    // if all are correct 
    return{
        isValid : true,
        error: null
    }
}

export const companyPattern = (company) => {
    const companyName = new RegExp("^[A-Za-z\\s]+$");
    const trimmedCompany = company.trim();
    // check company name is EMPTY 
    if (trimmedCompany === '') {
        return {
            isValid : false,
            error : `Company / ORG Name Can not be empty!`
        }
    }
    // if company name has only letters & spaces 
    if (!companyName.test(trimmedCompany)) {
        return {
            isValid: false,
            error: `Company name should contain only letters & spaces.`
        }
    }
    // if company name contains more than 3 letters
    if (trimmedCompany.length<=3) {
        return{
            isValid:false,
            error: `Company name must be longer than 3 characters.`
        }
    }
    // check if company name is not a number 
    if (!isNaN(trimmedCompany)) {
        return{
            isValid: false,
            error: `Invalid type: Company Name cannot be a number.`
        }
    }
    // if all are correct
    return{
        isValid : true,
        error: null
    }
}


