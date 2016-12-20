[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Time Capsule Front-End

The Time Capsule app is a collection of user uploaded documents.  The purpose of the app is to give users a place to upload documents that they deem important to the current day.  Each document is tied to one of the below categories:
- Business
- Entertainment
- Health
- History
- Lifestyle
- Politics
- Science
- Sports
- Technology
- Cats
- Other

Files are uploaded to AWS and metadata is stored in a Mongo back-end.  Users can download the files from all users, but only have the ability to update and delete the files they've uploaded.

---

## Links

The front-end is deployed here:<br>
https://awesome-dream-org.github.io/TimeCapsule-Frontend

The back-end is deployed here:<br>
https://sheltered-taiga-22202.herokuapp.com

The front-end repo can be found here:<br>
https://github.com/awesome-dream-org/TimeCapsule-Frontend

The back-end deployed repo can be found here:<br>
https://github.com/awesome-dream-org/TimeCapsule-Backend

---

## Technologies Used
**UI -** HTML, SCSS, Handlebars <br>
**Front-end Functionality -** JavaScript, jQuery, Ajax <br>
**Back-end -** Express, MongoDB <br>
**Document Storage -** AWS <br>
**Version Control -** git <br>
**Deployments -** gh-pages (front-end) and Heroku (back-end)

### Dependencies / Install Instructions
The below node modules were used when developing the back-end.  They will all be installed when running ```npm install``` after forking/cloning our back-end repo.
- aws-sdk
- mime
- multer

On the frontend, the jQuery filtertable plug-in was used. To install this we placed the jquery.filtertable.min.js file into our repo and required it within index.js.

---

## Approach
The first day of the project we spent on planning.  We worked together on all of the following tasks to ensure the whole team was on the same page:
- writing user stories
- designing wireframes
- developing ERD
- discussing git strategy
- developing roles and responsibilities
- defining our work processes

### User Stories
We developed our user stories within Trello:<br>
https://trello.com/b/ofciPisR/group-board

### Wireframes and ERD
Wireframes - http://imgur.com/a/QH5uc <br>
ERD - http://imgur.com/a/EwX5j

### GIT Strategy
We created a dev branch and a series of feature branches.  We tried to ensure that only one person was working on a feature branch at a time to avoid conflicts.  We worked together as a group to run through all merges, resolve merge conflicts and do initial testing/bug fixes after each.  We followed the strategy of merging features into dev as they were completed, the rebasing our feature branches with the new dev branch.

### Roles and Responsibilities
We shared coding responsiblities, but each had a specific role to play as well.
- **Brandon -** Front-End Lead - Has the final say regarding front-end decisions.
- **Caleb -** Back-End Lead - Has the final say regarding back-end decisions.
- **Kosta -** Scrum Master/QA - Leads scrum meetings and performs QA for git related activities.  Responsible for gh-pages and heroku deployment.
- **Kara -** Team Lead - Big picture/oversight.  Coordinate across leads.  Organize team activities, take notes during meetings.

---

## Major Hurdles
The team had to overcome the following challenges:
- Complex merge conflicts.
- Heroku / mlab deployments.

---

## Future Enhancements
- Collaboration feature to grant users access.
- Additional styling / polish to UI.
- Expanded meta-data / attributes for documents.

---

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
