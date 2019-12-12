function validate(element){

    regex = new RegExp(element.getAttribute("pattern"));

    if(regex.test(element.value) && element.value.length !== 0)
    {
        setMarker(element, true);
        return true;
    }
    setMarker(element,false);
    return false;
}

function setMarker(element, isValid) {
    if(isValid)
    {
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
    }
    else
    {
        element.classList.add("is-invalid");
    }
}

function validateElements(elements)
{
    let isValid = false;

    elements.forEach(element => {
        if(validate(element))
        {
            isValid = true;
        }
        else
        {
            isValid = false;
        }
    });
    return isValid;
}