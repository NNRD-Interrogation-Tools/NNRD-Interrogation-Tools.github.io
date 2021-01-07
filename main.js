
// Initialise the model to be the survival and length of stay model
let model_parent = document.getElementById('model_parent');
let model = document.createElement('p');
model.innerHTML = 'survival';

let current_state = 'survival';

document.getElementById(current_state + "_btn").classList.add('active_model')

// Add the model to the main body
model_parent.appendChild(model);

function clicked(modelName) {

    // Only change model if the user has clicked a button other than the one currently displayed
    if (current_state != modelName) {
        // Reset the main body
        let model_parent = document.getElementById('model_parent');
        model_parent.innerHTML = '';

        // Create the elemnt to hold the model
        let model = document.createElement('p');
        model.innerHTML = modelName;

        // Add the model to the main body
        model_parent.appendChild(model);

        // Update current state and show this in the nav bar
        document.getElementById(current_state + "_btn").classList.remove('active_model')
        current_state = modelName;
        document.getElementById(current_state + "_btn").classList.add('active_model')


    }

}