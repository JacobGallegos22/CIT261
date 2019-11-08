/**
 * This function uses onClick which handles a click event
 */
function showNewItem() {
    document.getElementById("helloWorld").innerHTML = "Hello There!";

}

/**
 * This handles a on focus event which is an event that gets triggered when a html DOM gets
 * the focus
 */
function changeOutlineColor() {
    const input = document.getElementById("food");
    input.style.border = "2px solid blue";
}

/**
 * This event gets triggered when you change the input value
 *
 * @param value
 */
function changing(value) {
    newText += value;
    console.log(value);
    document.getElementById("text").innerText = value;

}
