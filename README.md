## JavaScript React Project

I am learning JavaScript to continue toward my objective as an entry-level front end web developer. I think a cool service to provide would be a site allowing users to have a simple login and receive notifications for when the international space station will be visible in their location.

I will be building the skills needed to make this app through a series of smaller projects. Then I will bring the pieces together into the final product. My first step was to get familiar with React. To do this, I built a simple app with the following features:

1. Interact with an [API](http://open-notify.org/Open-Notify-API/ISS-Pass-Times/) to collect space station location information.
2. Using a form, allow users to enter a lat/long location and the number of upcoming pass overs they would like information for.
3. Render a list of upcoming space station pass overs for the location after a valid form is submitted by the user


The app has the following high level structure:
* header
* ApiInputForm
  * ResultsTable
    * TableRows

State lives in ApiInputForm. Output from API data is passed to ResultsTable as props (rather than state) because the output can be calculated from the inputs (via an API call). After it is calculated, it is only modified if a new API call is made. Since it does not change over time, it does not need to be state.

The app is not currently deployed, but it can be run by cloning this repo and starting your local host.
