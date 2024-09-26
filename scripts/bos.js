// Step 1: Declare variables to hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Step 2: Add event listener to the button to handle the addition of chapters
button.addEventListener('click', () => {
    const chapter = input.value.trim(); // get input value and remove whitespace
    
    // Step 3: Check if the input is not empty before proceeding
    if (chapter !== '') {
        // Create new list item (li) and delete button (button) elements
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        // Step 4: Populate the listItem's textContent with the input value
        listItem.textContent = chapter;

        // Step 5: Populate the delete button with '❌'
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete'); // Add class for styling
        
        // Step 6: Append the delete button to the listItem
        listItem.appendChild(deleteButton);
        
        // Step 7: Append the listItem to the unordered list (ul) in the HTML
        list.appendChild(listItem);

        // Step 8: Clear the input field for the next chapter
        input.value = '';
        input.focus(); // return focus to the input field

        // Step 9: Add functionality to the delete button to remove the chapter
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem); // remove the list item when delete button is clicked
        });
    } else {
        // If input is empty, prompt the user
        alert('Please enter a book and chapter');
    }
});
