# Scavenger Hunt 2019 App

If you gotten this far then feel free to continue onwards and use this app for any scavenger hunts you might be organising.

Basic idea was to use this Expo app as app on the teams phones guiding them between locations around Dorset. I'll either be using Location Services or QR codes to check where people are.

Even though I'm making this app for a specific hunt, feel free to fork and use howver you'd like to.

## Using
Since this app uses Expo you can see the details [here](https://docs.expo.io/)

Just use the following from within the project to get up and running:

```
npm i
npm start
```

## DB

### Structure
For keeping scores and team details, firebase has been chosen for its free tier (that's all we need). Here's the data structure:

TEAMS
<TEAM-ID>
- teamName: String
- score: String
- progress: Integer
- picture: String
- individualScores: Array(Integer)
- totalScore: Integer

### Functions
#### Add Score
There is a cloud function in place, when a individual score array is update the function will add up the scores and update the total field. There no need to update the total score manually 🤯.
