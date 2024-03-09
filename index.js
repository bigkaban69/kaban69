// Define a function to change the text content
function changeText() {
    // Get the paragraph element by its ID
    var paragraph = document.getElementById("demo");
  
    // Change the text content
    paragraph.textContent = "Text changed!";
  }
  
  // Create a button element
  var button = document.createElement("button");
  button.textContent = "Click me";
  button.onclick = changeText;
  
  // Create a paragraph element with an ID
  var paragraph = document.createElement("p");
  paragraph.id = "demo";
  paragraph.textContent = "Original text";
  
  // Append the button and paragraph to the body of the document
  document.body.appendChild(button);
  document.body.appendChild(paragraph);
  