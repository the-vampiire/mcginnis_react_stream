# Clone of the Tyler McGinnis React Fundamentals course project.

## Rewrite of the Popular project now that I have mucked around and learned a few things
## Trying to match Tyler's course app while adding in a few new features

# Changes

## Popular
### Added an optional language url parameter `/popular/:language?`
- adds the route language to the pool of selectable languages
- sets the route language as the default language after mounting
### Added a loading animation during repos fetch
- using (React Loading)[https://github.com/fakiolinho/react-loading]

## Battle
### Added optional user url parameters `/battle/userOne/userTwo`
- pre-populates the user(s) in the battle
- the url parameters reflect user(s) being added / removed / changed
### Battle comparison
- Simplified rendering logic
- Fetches battle users data only when [BATTLE] is pressed
- Compares number of followers for each user
