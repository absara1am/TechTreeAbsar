// Function to handle copying text to the clipboard
async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute("link");
  console.log(link);
  try {
    await navigator.clipboard.writeText(link);
    alert("Copied the text: " + link);
  } catch (err) {
    console.error(err);
  }
}

// Select all elements with the class ".tile-share-button" and add event listeners
const tileShareButtons = document.querySelectorAll(".tile-share-button");
tileShareButtons.forEach((tileShareButton) =>
  tileShareButton.addEventListener("click", copyText)
);

// Assuming you have a share button in the header with the class ".share-button"
const headerShareButton = document.querySelector(".share-button");

// Check if the headerShareButton is present on the page
if (headerShareButton) {
  headerShareButton.addEventListener("click", copyText);
}
