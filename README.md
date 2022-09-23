Create an Application in React JS with typescript where the  application will:

Signup in https://api.nasa.gov/ to get an API key.

When the user opens the application, the user sees a form that contains one text input and a submit button. Use “Enter Asteroid ID” as a placeholder text in the text input form field. The user also sees another  button called  “Random Asteroid”.

The Submit button is disabled id the text input is empty.

When the user enters an asteroid id in the input field and presses submit, make a call to
                      https://api.nasa.gov/neo/rest/v1/neo/{{ENTER_ASTEROID_ID_HERE}}?api_key={{YOUR_API_KEY}}

The user is taken to the screen that now displays the information about the asteroid. Display the following information:

name
nasa_jpl_url
is_potentially_hazardous_asteroid
When the user clicks the “Random Asteroid” button, make a call to 
https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY
           Select RANDOM asteroid id. Pass ID to 
https://api.nasa.gov/neo/rest/v1/neo/{{ENTER_ASTEROID_ID_HERE}}?api_key={{YOUR_API_KEY}}



The user is taken to the screen that now displays the information about the asteroid. Display the following information:
name
nasa_jpl_url
Is_potentially_hazardous_asteroid









1.I had created a reactjs application with two pages by using react-router
2.I had created a form with the Asteroid id and a submit button with functionality
3.When we  given the id and submit it will show the details of the user id that we entered
4.And also i created the Random Asteroid when i enter it will generator the random id and show the details of the id
5.I displayed the name,url,hazardous asteroid details when we click on submit button