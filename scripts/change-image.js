// This aplication is selecting the html document that calls this script and allowing access to nodes within the document. There are many different selectors for these node. We are using the document method to retrieve an element whose id property matches the one in the brackets following and saving it to the myImage variable.

// Then we are creating a function that is activated when the element that is saved as myImage is clicked, which calls an annonymous function. The annonymous function creates a variable called mySrc which retrieves the myImage element and returns the attribute "src" if there is one. Then two conditional statements follow, one which checks the src attribute of myImage is equal to a certain image url. If it is it changes it to another preselected image using .setAttribute. The next conditional changes the src attribute if the image is anything other than the initial image.

const myImage = document.getElementById("cover-photo");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "../images/sign-youve-been-looking-for.jpg") {
    myImage.setAttribute("src", "../images/passion-led-us-here.jpg");
  } else {
    myImage.setAttribute("src", "../images/sign-youve-been-looking-for.jpg");
  }
}

// myButton is a variable that has the first button element selected and saved to it. myHeading is a variable that has the element with the "company-logo" id selected and saved to it. 

const myButton = document.querySelector("button");
const myHeading = document.getElementById("company-logo")

// a function has been created here with the name setUserName. Within the function a variable myName is created which calls the prompt function and creates a dialogue box with the value "Please enter your name.", which saves the value of that input to the myName variable. The following block of code calls on the local storage API which saves data to a web browser. The setItem function is then used to create and store a data item "name" which has the value of the information entered into the myName prompt. The last line of the function uses the .textContent function to select the text content of the node and assigns it the value of "mozilla is cool, ${myName}" myName being the value of the prompt that was saved earlier and ${} being a method for converting a value to a string. 

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName ();
  } else {
    localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome to Tribe to be Social, ${myName}`;
  }
}

  // The following conditional block checks localStorage using the getItem function, for a name and if the name does not exist then the setUserName function is called again until some input has been entered into the prompt. If there is some value that has been entered into the prompt the .setitem function and then changes the text content of myHeading accordingly. If a name is already stored then the value of the key/name pair is retrieved and saved to the storedName variable. myHeading.textContent is then made equal to the string, the storedName variable being converted to the "mozilla is cool, ${storedName}"

myButton.onclick = () => {
  setUserName();
};

