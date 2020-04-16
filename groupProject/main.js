// JS Form Validation -- blank input fields

// let submitButton = document.getElementById("submitButton").addEventListener("click", () => {
//     let firstName = document.getElementById("firstName").value;
//     if (firstName == "") {
//         alert ("First name must be filled out");
//         return false;
//     }

//     let lastName = document.getElementById("lastName").value;
//     if (lastName == "") {
//         alert ("Last name must be filled out");
//         return false;
//     }

//     let areaCode = document.getElementById("areaCode").value;
//     if (areaCode == "") {
//         alert ("Area code must be filled out");
//     }

//     let firstThree = document.getElementById("firstThree").value;
//     if (firstThree == "") {
//         alert ("Complete phone number must be filled out");
//     }

//     let lastFour = document.getElementById("lastFour").value;
//     if (lastFour == "") {
//         alert ("Complete phone number must be filled out");
//     }else{
//         alert ("Your contact information has been submitted");
//     }
// });

// JS Form Validation

let submitButton = document.getElementById("submitButton").addEventListener("click", () => {

    let fName = document.getElementById("firstName").value;
    // Name regexes broken down:  
    // The / starting and ending the regular expression signals that it's a regular expression.
    // ^ is the start of a string.
    // ([a-zA-Z] means a user can input their first and last names using characters a-z or A-Z.
    // {0,30} means the first set of characters a user can input for the first part of their first and last names (if their names contain spaces, apostrophes, or dashes) can be between 0 and 30 characters in length.
    // ?) means the 0-30 character letters are optional; again, this is so people with names containing spaces, apostrophes, or dashes can input their names correctly
    // [ '-]? allows for a space, an apostrophe, or a dash to be optional after the first 0-30 character letters are input; Ex. just in case someone's first name is D'Angelo and their last name is Richard-Johnson; however, it doesn't allow for repeat spaces, apostrophes or dashes.
    // [a-zA-Z]{2,30}$/ allows for a user to input more letters if a space, an apostrophe, or a dash is used; this is also so users with names that do not contain apostrophes, hyphens, or spaces can input 2-30 character letters; note: a first or last name cannot end with an apostrophe, a dash, or a space.
    let regExpF = /^([a-zA-Z]{0,30}?)[ '-]?[a-zA-Z]{2,30}$/
        if(!regExpF.test(fName)) {
            alert(`Note: First name input can be between 2-30 characters, can contain letters A-Z, and can contain 2 types of special characters: an apostrophe or a dash.`);
            return false;
            }
    let lName = document.getElementById("lastName").value;
    let regExpL = /^([a-zA-Z]{0,30}?)[ '-]?[a-zA-Z]{2,30}$/
        if(!regExpL.test(lName)) {
            alert(`Note: Last name input can be between 2-30 characters, can contain letters A-Z, and can contain 2 types of special characters: an apostrophe or a dash.`);
            return false;
            }
    let pNumber = document.getElementById("phoneNumber").value;
    // Phone number regex broken down:
    // /^([0-9]{3}) means a phone # must start with 3 numerical digits; ex. 762
    // [-] means a phone # must have a hyphen ("-") after the first 3 digits -- ex. 762-
    // ([0-9]{3}) means there must be 3 more digits -- ex. 762-231
    // [-] means that after the second set of 3 digits, the phone # must have a hypen -- ex. 762-231-
    // ([0-9]{4})$/ means a phone number must end with four digits.

    let regExpN = /^([0-9]{3})[-]{1}([0-9]{3})[-]{1}([0-9]{4})$/
        if(!regExpN.test(pNumber)) {
            alert("Note: Phone number should be 10-digits long with dashes: Ex. XXX-XXX-XXXX.");
            return false;
        } else {
    // This is normally where an SMS alert (containing the tips to reduce COVID-19 Anxiety) would be sent to a user's mobile device; since this is a school project, we opted not to pay to enable that service.
        alert("Thank you for signing up to receive tips on how to reduce COVID-19 Anxiety. We are cheering you on. You are more than a conqueror!");
        // Clear input field after each order submission.
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("phoneNumber").value = "";
        return true;
    }
})
