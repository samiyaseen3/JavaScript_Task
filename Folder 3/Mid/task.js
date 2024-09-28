function highlightLongWords() {
    const paragraphText = document.getElementById("paragraph").textContent; 
  
    const words = paragraphText.split(/\s+/); 
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 8) {

        const span = document.createElement("span");
        span.style.backgroundColor = "yellow";
        span.textContent = words[i];
  

        words[i] = span.outerHTML;
      }
    }
  

    const highlightedText = words.join(" ");
    document.getElementById("paragraph").innerHTML = highlightedText;
  }
  highlightLongWords();
  function addSourceLink() {
    const paragraphElement = document.getElementById("paragraph"); // Replace "paragraph" with the actual ID of your paragraph element
  
    // Create the anchor element for the source link
    const link = document.createElement("a");
    link.href = "https://google.com/"; // Replace with the actual source URL
    link.textContent = "Source"; // Text displayed for the link
  
    // Create a new paragraph element for the link
    const linkParagraph = document.createElement("p");
    linkParagraph.appendChild(link); // Add the link to the new paragraph
  
    // Insert the new paragraph with the link after the existing paragraph
    paragraphElement.parentNode.insertBefore(linkParagraph, paragraphElement.nextSibling);
  }
  
  // Call the function to add the source link
  addSourceLink();
  function splitSentences() {
    const paragraphText = document.getElementById("paragraph").textContent; // Replace "paragraph" with the actual ID of your paragraph element
  
    const sentences = paragraphText.split(/\.\s+/); // Split the text into sentences based on periods followed by whitespace
  
    // Join the sentences with line breaks
    const formattedText = sentences.join("<br>");
  
    // Update the paragraph content
    document.getElementById("paragraph").innerHTML = formattedText;
  }
  
  // Call the function to split sentences
  splitSentences();
  function countWords() {
    const paragraphText = document.getElementById("paragraph").textContent; // Replace "paragraph" with the actual ID of your paragraph element
  
    const words = paragraphText.trim().split(/\s+/); // Split the text into words, excluding leading/trailing whitespace
  
    const wordCount = words.length;
  
    // Create a new element to display the word count
    const countElement = document.createElement("p");
    countElement.textContent = "Word count: " + wordCount;
  
    // Insert the count element after the heading
    const heading = document.querySelector("h1"); // Assuming the heading has the tag <h1>
    heading.parentNode.insertBefore(countElement, heading.nextSibling);
  }
  
  // Call the function to count words
  countWords();