/**
 * Validate a single element
 * @param element - The element that should be validated
 * @returns {boolean} - Returns true if the element input fulfill the regex
 */
function validate(element){

    regex = new RegExp(element.getAttribute("pattern"));

    //Checking if the input is matching the regex
    if(regex.test(element.value) && element.value.length !== 0)
    {
        setMarker(element, true);
        return true;
    }
    setMarker(element,false);
    return false;
}

/**
 * Changes the style of the element, depending if the input is valid or not
 * @param element - The element that should have its style changed
 * @param isValid - Bool that tells if the input in the element is true/false
 */
function setMarker(element, isValid) {
    //Sets the input field style, depending on if the input is valid or not
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

/**
 * Validates the given elements
 * @param elements - All the elements that should be validated
 * @returns {boolean} - return true if all elements fulfill their regex
 */
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