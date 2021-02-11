
// Initialise the model to be the public survival and length of stay model
let model_parent = document.getElementById('model_parent');

let iframe = document.createElement('iframe');
iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiMDIwMzJmYTEtYWNkYi00NDI5LTg1NzAtMmQ4ODY4ZDE3MzBmIiwidCI6IjJiODk3NTA3LWVlOGMtNDU3NS04MzBiLTRmODI2N2MzZDMwNyIsImMiOjh9&pageName=ReportSection918121c1d35be0d099e4'

let current_state = 'survival_l1';

document.getElementById(current_state + "_btn").classList.add('active_model')

// Add the model to the main body
model_parent.appendChild(iframe);

function clicked(modelName, linkCode, guide) {

    // Only change model if the user has clicked a button other than the one currently displayed
    if (current_state != modelName) {
        // Reset the main body
        let model_parent = document.getElementById('model_parent');
        model_parent.innerHTML = '';

        // Create the element to hold the model
        let iframe = document.createElement('iframe');
        iframe.src = 'https://app.powerbi.com/view?r=' + linkCode  
        
        // Change the link to the user guide
        document.getElementById('guide_link').href = './' + guide + '.pdf'

        // Add the model to the main body
        model_parent.appendChild(iframe);

        // Update current state and show this in the nav bar
        console.log(current_state)
        document.getElementById(current_state + "_btn").classList.remove('active_model')
        current_state = modelName;
        document.getElementById(current_state + "_btn").classList.add('active_model')


    }

}