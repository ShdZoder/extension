// content.js

let actions = [];

// Function to record clicks
document.addEventListener('click', (event) => {
    const element = event.target;
    const action = {
        type: 'click',
        selector: element.tagName.toLowerCase() + (element.id ? `#${element.id}` : ''),
        timestamp: Date.now(),
        text: element.innerText || ''
    };
    actions.push(action);
    console.log(action); // Log the action to the console
});

// Function to export recorded actions as JavaScript code
function exportActions() {
    const code = actions.map(action => {
        return `document.querySelector('${action.selector}').click();`;
    }).join('\n');
    console.log(code); // Display generated code in the console
}

// You can add a keypress event or other events to trigger export
document.addEventListener('keydown', (event) => {
    if (event.key === 'E') {  // Press 'E' to export
        exportActions();
    }
});
