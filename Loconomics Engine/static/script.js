document.addEventListener("DOMContentLoaded", function() {
    const recommendationForm = document.getElementById('recommendation-form');
    if (recommendationForm) {
        recommendationForm.onsubmit = async function(event) {
            event.preventDefault();
            
            const regionElement = document.getElementById('region');
            const fileElement = document.getElementById('json_file');
            const recommendationList = document.getElementById('recommendation-list');

            // Ensure elements are found
            if (!regionElement || !fileElement || !recommendationList) {
                console.error('One or more elements not found.');
                return;
            }

            const regionValue = regionElement.value;
            const fileValue = fileElement.files[0];
            
            // Check if required inputs are provided
            if (!regionValue || !fileValue) {
                recommendationList.innerHTML = '<li>Please provide both region and file inputs.</li>';
                return;
            }

            console.log('Region:', regionValue);
            console.log('File:', fileValue);

            const formData = new FormData();
            formData.append('region', regionValue);
            formData.append('json_file', fileValue);
            
            try {
                const response = await fetch('/recommend', {
                    method: 'POST',
                    body: formData
                });

                // Check for HTTP errors
                if (!response.ok) {
                    throw new Error(`Server Error: ${response.status}`);
                }

                const result = await response.json();
                recommendationList.innerHTML = '';

                if (Array.isArray(result) && result.length > 0) {
                    result.forEach(rec => {
                        const li = document.createElement('li');
                        li.textContent = `User ID: ${rec.user_id}, Preference: ${rec.preferences}`;
                        recommendationList.appendChild(li);
                    });
                } else {
                    recommendationList.innerHTML = '<li>No recommendations found.</li>';
                }
            } catch (error) {
                console.error('Fetch error:', error);
                recommendationList.innerHTML = `<li>Error: ${error.message}</li>`;
            }
        };
    } else {
        console.error("Form with ID 'recommendation-form' was not found.");
    }
});
