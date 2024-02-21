
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

	// Function to filter fruits based on user input
function search(str) {
    return fruit.filter(fruitName => fruitName.toLowerCase().includes(str.toLowerCase()));
}

	// Event handler for input changes, triggers the search and displays suggestions
function searchHandler() {
    const inputValue = input.value.trim();
    
    if (inputValue === '') {  // If input is empty, hide suggestions
        suggestions.style.display = 'none';
    } else {
        const results = search(inputValue);
        showSuggestions(results, inputValue);
    }
}

	// Function to display limited suggestions and handle visibility
function showSuggestions(results, inputVal) {
    suggestions.innerHTML = ''; // Clear previous suggestions

	const limitedResults = results.slice(0,10); // Limits the number of suggestions to <=10
    limitedResults.forEach(result => {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = result;
		suggestionItem.classList.add('suggestion');
        suggestions.appendChild(suggestionItem);
    });

    // Show the dropdown only if there are suggestions
    suggestions.style.display = results.length > 0 ? 'block' : 'none';
}

	//Function to handle using a suggestion
function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
        suggestions.style.display = 'none'; // Hide suggestions after using one
    }
}

	// Function to highlight suggestion below the user's cursor
function highlightSuggestion(e) {
    if (e.target.classList.contains('suggestion')) {
        const allSuggestions = suggestions.querySelectorAll('.suggestion');
        allSuggestions.forEach(suggestion => suggestion.classList.remove('highlight'));
        e.target.classList.add('highlight');
    }
}

	//Event listeners for input changes, suggestion clicks, and mouseover
input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', highlightSuggestion);
