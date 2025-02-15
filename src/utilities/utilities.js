export const emailValidation = (value, setValidation) => {
    const at = value.indexOf('@');
    const com = value.indexOf('.com');
    console.log(value.length);
    
    console.log(com);
    

    if (at >= 0 && com >= 0) {
        const domain = com - at;
        if (domain > 1){
            const endIndex = com + 4
            if (value.length > endIndex){
                setValidation(false)
            }
            else {
                setValidation(true)
            }
        }
        else {
            setValidation(false);
        }
    }
    else {
        setValidation(false);
    }
}

export const phoneNumberValidation = (value, setValidation) => {
    if (value.length >= 11) {
        setValidation(true)
    }
    else {
        setValidation(false)
    }
}