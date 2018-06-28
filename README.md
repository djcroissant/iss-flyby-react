# ISS Flyby - A project to learn the React library for JavaScript

## Purpose

I am building on my experience with JavaScript to continue toward my objective of transitioning from aeronautical engineering into Tech as a front-end web developer. This project is one of a series designed to give me exposure to common libraries and frameworks used with JavaScript.

## App Features

* Built using React.
* Interacts with an [API](http://open-notify.org/Open-Notify-API/ISS-Pass-Times/) to collect space station location information.
* Implements a form to collect user preferences.
* Renders a list of upcoming space station pass overs for the user-specified location.

## Structure

The app has the following high level structure:
```
<App>
  <Header>
  <IssApiForm>
    <FlybyTable>
      <FlybyRows>
```

State lives in `<IssApiForm>`. Output from API data is passed to `<FlybyTable>` as props (rather than state) because the output can be calculated from the inputs (via an API call). After it is calculated, it is only modified if a new API call is made. Since it does not change over time, it does not need to be state.

The app is not currently deployed, but it can be run by cloning this repo and starting your local host.
