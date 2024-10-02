
export const namePattern = (name) => {
    const pattern = new RegExp("^[A-Za-z\\s]+$");
    
    // Check if name contains only letters and spaces
    if (!pattern.test(name.trim())) {
        return {
            isValid: false,
            error:"Name should contain only letters and spaces." // Specific error message for invalid characters
        };
    }

    // Check if name has more than 2 characters
    if (name.length<= 2) {
        return {
            isValid: false,
            error:"Name must be longer than 2 characters." // Specific error message for length check
        };
    }

    // Ensure the name isn't a number
    if (!isNaN(name)) {
        return {
            isValid: false,
            error:"Invalid type: Name cannot be a number." // Specific error message for number check
        };
    }

    // If all checks pass, return valid
    return {
        isValid: true,
        error: null // No error when all checks pass
    };
};

export const companyPattern = (company) => {
    const pattern = new RegExp("^[A-Za-z0-9\\s&-]+$"); // Allows letters, numbers, spaces, &, and -
    
    const trimmedCompany = company.trim();

    // Check if company name contains only allowed characters
    if (!pattern.test(trimmedCompany)) {
        return {
            isValid: false,
            error: "Company name should contain only letters, numbers, spaces, &, or -." 
        };
    }

    // Check if company name has more than 2 characters
    if (trimmedCompany.length <= 2) {
        return {
            isValid: false,
            error: "Company name must be longer than 2 characters."
        };
    }

    return {
        isValid: true,
        error: null
    };
};