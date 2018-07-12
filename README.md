# Crossroads
## CSCI S-71 Agile Software Development Group Project
## Team: **A-Team**
## Project Description: 
A web application for the future/potential/returning summer students at Harvard with usefull information, tips, suggestions from the past/current Harvard summer students.

<br/>You can find our project here:
<br/>http://harvard.crossroads.guru

##Project Part4
1. **Sprint Forecast**
<br/>Sprint Goal: Implementing edit, delete and formatting features

<br/>Based on a Yesterday’s Weather forecast, we have forecasted 34 story points for Sprint 2. We had 34 story points done in Sprint 2. Therefore, the Development Team and the Product Owner decided to forecast 34 story points, which is the same forecast as previous sprint.

2. **Sprint Backlog**
<br/>We pulled stories into our sprint backlog. Only Development Team members participated in this activity.
<br/>We decided on the following sprint backlog:
* Edit a Blog Post - estimated to 13 story points
* Delete a Blog Post - estimated to 8 story points
* Format Blog Post into Multi Paragraphs - estimated to 13 story points

<br/>In total a sprint backlog estimated to 34 story points.

3. **Our stories were not larger than half the size of the forecast.** 
<br/>Please, refer to #2.


4. **Task Backlog**
<br/>In Trello, we added a checklist to all Product Backlog items called tasks, where tasks are tracked.
https://trello.com/b/RdosOtmY/a-team-kanban-board 


5. Please, see URL in #4.


6. **Burndown Chart**
<br/><br/>![Burndown Chart Sprint 3](https://github.com/cscis71ateam/crossroads/blob/master/media/Crossroads%20Burndown%20for%20Sprint%203.png)

<br/>In Sprint 3, only 18 story points were done and the PBI ‘Format Blog Post in Multiple Paragraphs’ was not done - a story estimated to 13 story points. We had impediments from last sprint in getting CI/CD running. Furthermore, we implemented a BDD test, which was an impediment to reaching our sprint goal, since it consumed more focus than expected dragging us away from the formatting story. 

7. **Daily Scrum**

**July 11, 2018** 
We held a physical Daily Scrum at 10 am time-boxed to 15 minutes, facilitated by our Scrum Master, Simon.
<br/><br/>![Daily Scrum pic 1](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%203%20Daily%20Scrum.jpg)


**The whole Scrum Team**
* *What did we do yesterday?*
Yesterday we did Sprint Planning and Backlog refinement so that we could have our PBIs meeting our Definition of Ready. 

**General**
* *How do we remove impediments?*
Doing group brainstorming about possible solutions for CI/CD and watch training videos - if one finds a good training video, it should be shared in our Slack channel.

**Mo** 
* *What did you do yesterday?*
Finished the view/delete function of the blog, researched CI/CD. Deployed the code to GitHub.

* *What are you gonna do today?*
Look into the rest of the Sprint PBIs.

* *Impediment*
CI/CD part.

**Anna** 
* *What did you do yesterday?*
Research some documentation about blog formatting.

* *What are you gonna do today?*
Find solutions on Stackoverflow to improve our blog formatting.

* *Impediment*
Find the correct documentation which really helps.

**Chun**
* *What did you do yesterday?*
Finished the first draft of the slides for Sprint Review.

* *What are you gonna do today?*
Perform the first rehearsal.

* *Impediment*
The basic layout of the pages is simple, but the CI/CD will be important, need to come up with a basic layout and work with back-end. Chun will be pair programming with Mo to ensure that the front-end and back-end is integrated.

**Simon**
* *What did you do yesterday?*
Did more test and finished the CI/CD part.

* *What are you gonna do today?*
Look into the CI/CD, write BDD/TDD tests.

* *Impediment*
Look into mod programming and BDD part.


8. **Update your sprint backlog task board and burndown chart.**
<br/>Please, refer to #4.

9. **Pair programming.**
<br/>Attached a photo of our team working together on both pair programming.

<br/><br/>![Pair Programming](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%203%20Pair%20Programming.png)
<br/><br/>![Pair Programming](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%203%20Mob%20Programming.jpg)

10. **BDD/TDD and unit tests**
<br/>We conducted 32 unit tests which can be found in the test folder in the GitHub Repo for Crossroads. All tests passed. We also added one BDD test - the test passed which can be seen from the screenshot.

<br/><br/>![BDD test](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%203%20CI%20CD%20Screenshot%204.png)

11. **Continuous Integration**
You have a Continuous Integration system running. The CI system automatically builds your code every time you merge to master. The CI system executes your tests every time it builds the code. You have provided evidence that your CI system exists and behaves properly.

<br/>We use Semaphore to build our code and execute tests everytime code is published in GitHub. If build is succesfully passed, Semaphore will automatically deploy our new source application to production.

<br/><br/>![CI](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%203%20CI%20CD%20Screenshot%204.png)

12. **Continuous Deployment**
You have a Continuous Deployment system running. The CD system deploys your software to a production-like environment. The CD system executes additional tests of your software in the production-like environment. The CD system deploys your software to a live production environment. Your live production environment works properly. You have provided evidence that your CD system exists and behaves properly.

<br/>We use Cloud66 for Continuous Deployment which automatically deploys changes to our DigitalOcean Webserver when the tests has passed in Semaphore. 


<br/><br/>![CD](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%203%20BDD%20Screenshot.png)
<br/><br/>![CD timeline](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%203%20CI-CD%20Deployment%20Screenshot%203.png)

13. **Your team conducts an in-class Sprint Review.**
<br/>Will be done in-class July 12, 2018. 
<br/>Our Product Increment is working software, which can be accessed at: http://harvard.crossroads.guru/ 


14. **We rehearsed the presentation before the class.**
Added is some photos of our rehearsal session.
<br/><br/>![Presentation rehearsal](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%203%20Review%20Preparation.jpg)


**Updates since previous parts:**
<br/>Based on the feedback received after the last sprint, we adapted the following parts: 
* Updated Trello board with new columns for previous sprint to make it easy to distinguish the historical records
* Updated burndown chart to show “Forecast” rather than “estimated”


## Project Part3:
1. **Forecast**
<br/>**Sprint Goal:** Implementing blog features and information page on Crossroads.

</br>Based on a Yesterday’s Weather forecast, we have forecasted 34 story points for Sprint 2. We had 32 story points done in Sprint 1, however we had to change framework after one day which set the progress way behind. Therefore, the Development Team and the Product Owner decided to forecast 34 story points, which is a slight increase.

2. **Sprint Backlog**
<br/>We pulled stories into our sprint backlog. Only Development Team members participated in this activity.
<br/>We decided on the following sprint backlog:
* Information Page with Links - estimated to 8 story points
* Write Blog Post - estimated to 13 story points
* Viewing a Blog Post - estimated to 13 story points

<br/>In total a sprint backlog estimated to 34 story points.


3. **Our stories were not larger than half the size of the forecast.** 
<br/>Please, refer to #2.

4. In Trello, we added a checklist to all Product Backlog items called tasks, where tasks are tracked.
<br/>https://trello.com/b/RdosOtmY/a-team-kanban-board 

5. Please, see URL in #4.

6. **Sprint Burndown Chart**
<br/>![Sprint review](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%202%20Burndown%20Picture.png)
<br/>In Sprint 2, our actual burndown is close to the ideal burndown. After Sprint 1, we adapted our refinement process by breaking down the PBIs into smaller and easily shippable items. Furthermore, we had an extra day in the sprint and the basic infrastructure were already in place, which gave the Development Team more time to focus on delivering actual value to the users.

7. **Daily Scrum**
**July 7, 2018**
We held a physical Daily Scrum at 10 am time-boxed to 15 minutes, facilitated by our Scrum Master, Simon.
<br/><br/>![Daily Scrum pic 1](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%202%20Daily%20Scrum%20Pic%201.png)

<br/><br/>**The whole Scrum Team**
* *What did we do yesterday?*
Yesterday we did Sprint Planning and Backlog refinement so that we could have our PBIs meeting our Definition of Ready. 

**General**
* *How do we remove impediments?*
Doing group brainstorming about possible solutions for CI/CD and watch training videos - if one finds a good training video, it should be shared in our Slack channel.

**Mo** 
* *What did you do yesterday?*
Research CI/CD, integrate CI into GitHub. Look into some unit tests. Research on Node.js.

* *What are you gonna do today?*
Decide some unit tests. Research Quixote, and find the appropriate documentation then implement the tests. Integrate the site.

* *Impediment*
Not able to find appropriate documentation for CI/CD suiting our dev and prod environment - Github, DigitalOcean, MongoDB, AWS. Mo needs to find more appropriate documentation and implement in the code.

**Anna** 
* *What did you do yesterday?*
Find the information for a list of basic information links.

* *What are you gonna do today?*
Implement the information as much as possible, and construct the layout of the information page.

* *Impediment*
Have limited knowledge about HTML/Bootstrap, need to look into some documentations for the details.

**Chun**
* *What did you do yesterday?*
Searched some appropriate template for the blog, and plan the layout of the information page.

* *What are you gonna do today?*
Finish the layout of the blog page and information page. Fix bugs in the landing page.

* *Impediment*
The basic layout of the pages is simple, but the CI/CD will be important, need to come up with a basic layout and work with back-end. Chun will be pair programming with Mo to ensure that the front-end and back-end is integrated.

**Simon**
* *What did you do yesterday?*
Researched into unit tests. Wrote a blog post. 

* *What are you gonna do today?*
Finish the burndown chart and implement the unit tests.

* *Impediment*
Has some troubles with the unit tests. Simon needs to do more research about the code and the mocha/chai unit testing framework.

**July 8, 2018**
We held a physical Daily Scrum at 10 am time-boxed to 15 minutes, facilitated by our Scrum Master, Simon.

**The whole Scrum Team**
* *What did we do yesterday?*
Finished the html pages, and confirmed all the pages working independently.

**General**
* *How do we remove impediments?*
Doing group brainstorming about possible solutions for CI/CD and watch training videos - if one finds a good training video, it should be shared in our Slack channel.

**Mo** 
* *What did you do yesterday?*
Created infrastructure to support view and create blog post. 

Researched CI/CD, integrated CI into GitHub. Looked into some unit tests. Researched on Node.js.

* *What are you gonna do today?*
Incorporate design. Fixing CI/CD.

* *Impediment*
How to do the CI/CD and unit testing. Will be pair programming with Simon to incorporate the unit test as well as the CI/CD.

**Anna** 
* *What did you do yesterday?*
Created the information page for a list of basic information links.

* *What are you gonna do today?*
Looking for links and making sure links work as expected.

* *Impediment*
Needs to leave at 2 pm. Anna will remove this impedent by making sure she is able to work after her impediment.

**Chun**
* *What did you do yesterday?*
Created layout for blog post view and create. Did more research on unit testing.

* *What are you gonna do today?*
Integrate the visual layout with the database. Implement CI/CD in HTML part.

* *Impediment*
Little knowledge about how to implement CI/CD in the HTML/Bootstrap framework. Needs to check more details about CI/CD.

**Simon**
* *What did you do yesterday?*
Finished the sprint burndown chart. Researched on CI/CD.

* *What are you gonna do today?*
Implement unit tests for node.js and test CI/CD.

* *Impediment*
Have some troubles with the unit tests, need to do more research about the code. Will be pair programming with Mo to incorporate the unit test as well as the CI/CD.

7. Please, refer to #4.

8. **Pair programming**
<br/>Attached few photos of our team working together on both pair programming.
<br/>![Pair Programming](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%202%20Pair%20Programming%20Pic%201.png)

9. **Unit testing**
<br/>We conducted 22 unit tests which can be found in the test folder in the GitHub Repo for Crossroads. All tests passed. 	
<br/>![Unit tests](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%202%20Unit%20Test.png)

10. **Sprint Review**
<br/>Our Product Increment is working software, which can be accessed at: http://harvard.crossroads.guru/ 

**Sprint review 9/7/2018:**
<br/>**Inspect:**
<br/>We conducted our sprint review for Sprint 2 with Linh, our real-life stakeholder, participating. A photo is attached. Attached is a photo of Linh and the Scrum Team conducting the Sprint Review in person.
<br/>![Sprint review](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%202%20Sprint%20Review.png)
<br/>![Sprint review](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%202%20Sprint%20Review%20Pic%201.png)

**Feedbacks from stakeholder Linh**
* Search Function, search for keyword
* Search is more important than cover photo in blog posts
* Board Plus information
* The blog is still very important because it’s real opinion
* Users need more information rather than only positive words
* Refer to mitadmission.org

**Adapt:**
<br/>As an output of the Sprint Review, our Product Owner, Chun, reordered the backlog to have “Searching for a Keyword” and “Edit a Blog Post” to the top of the backlog. 

<br/>We also created two new PBIs that need to be refined:
* View User Persona on the Author
* Add a Photo to Blog Post

11. **You have a Continuous Integration**
<br/>We have set up the Continuous Integration by utilizing CircleCI, however we have issues in executing the tests. This is a impediment towards reaching our sprint goal.
<br/>![CI error](https://github.com/cscis71ateam/crossroads/blob/master/media/Sprint%202%20Circle%20CI%20Status%20Pic%201.png)


12. **Continuous Deployment** 
<br/>This is one of our impediments. We are having some challenges in settng it up for our current deployment environment<br/>


**Update to previous parts:**
<br/>Based on the feedback received after the last sprint, we adapted the following parts: 
* Updated user stories to focus on a specific stakeholder type - see Trello board for more detail
* Updated far vision to: “Our far vision is to build a community that answers all questions a prospective student might have before arriving at the campus; no matter which university, nationality or current residency.”
* Adapted ordering criteria to:
    * Dependency
    * Most valuable to the user
    * Complexity
* Grouped unit tests into larger test files
* Ensuring that we have working software


## Project Part2:

1. **Forecast**
<br/>We forecasted to have 33 story points done by the first sprint. 
Sprint Goal: To have a landing page where the users can see what content is available on the site.

2. **The rationale for our forecast.** 
<br/>Since this our first sprint we did not have any data to follow a forecasting pattern like “Yesterday’s Weather”, so we made our estimation based on the task involved and our experience about the product and development tools & technologies we are using to develop the functionalities and how much time it can take.
	
3. **Sprint Planning**
<br/>We pulled stories into our sprint backlog. Only Development Team members participated in this activity.
	Initially, the Development Team members agreed to pull the following two items into the Sprint:
* Landing page - estimated to 20 story points
* Menu Items - estimated to 13 story point

Since the “Landings Page” story was too large with an estimate of 20 story points. We decided to refine “Landing page” by breaking it into these smaller stories and re-estimated the smaller stories using Planning Poker and ended with the following final Sprint Backlog:
* Landing Page Layout - estimated to 13 story points
* Landing Page Background - estimated to 3 story points
* Landing Page Welcome Message - estimated to 3 story points
* Menu Items - estimated to 13 story points

4. **Our stories were not larger than half the size of the forecast.**
<br/>Refer to #3

5. **You decomposed stories into tasks. The tasks are clearly listed in your sprint backlog.**
<br/>In Trello, we added a checklist to all Product Backlog items called tasks, where tasks are tracked.
<br/>https://trello.com/b/RdosOtmY/a-team-kanban-board 

6. **Please, see URL in #5.**

7. **Sprint burndown chart.**
<br/>![Sprint Burndown Chart](https://github.com/cscis71ateam/crossroads/blob/master/media/Crossroads%20Burndown%20for%20Sprint%201.png)

8. **Daily Scrum**

**July 4, 2018**
<br/>We held a physical Daily Scrum at 10 am time-boxed to 15 minutes, facilitated by our Scrum Master, Simon.
<br/>![Daily Scrum Picture](https://github.com/cscis71ateam/crossroads/blob/master/media/Daily%20Scrum%20at%20COOP.png)


**The whole Scrum Team**
* *What did we do yesterday?*
Yesterday we did Sprint Planning and Backlog refinement so that we could have our PBIs meeting our Definition of Ready.

After talking to Richard, we decided to change framework from Drupal to node.js/express as the main framework.

**Mo** 
* *What did you do yesterday?*
Did some research and installed the node.js and express framework. Prepared the development and deployed environment for both local development and remote production servers. Put some additional details and tasks on the Landing Page PBI.

* *What are you gonna do today?*
Build infrastructure and start implementing the user story landing page.

* *What are your impediments?*
Since we decided to change the framework, we all have to install new components. Mo’s removal plan is to make some readjustment to our Sprint Backlog together with the rest of the Development Team and Product Owner after the Daily Scrum. 

**Anna** 
* *What did you do yesterday?*
Helped with organizing the Sprint Backlog. Looked for images for the landing page. 

* *What are you gonna do today?*
Install new software and learn about the Node.js framework. Sit together with Mo to understand the infrastructure. 

* *Impediment*
Doesn’t know node.js, so she has to learn the new framework.  To remove this impediment, Anna will be doing mob programming with the Development Team.

**Chun**
* *What did you do yesterday?*
Did research about node.js

* *What are you gonna do today?*
Install new software and learn about the Node.js framework. Sit together with Mo to understand the infrastructure. 

* *Impediments*
Doesn’t know node.js, so he has to learn the new framework. However, he has experience with Django and know how to research more. To remove this impediment, Chun will be doing mob programming with the Development Team.

**Simon**
* *What did you do yesterday?*
Researched on the node.js framework and set up the framework on his machine

* *What are you gonna do today?*
Install new software and learn about the Node.js framework. Sit together with Mo to understand the infrastructure. 

* *Impediment*
Doesn’t know node.js, so he has to learn the new framework. To remove this impediment, Simon will research on the framework and do mob programming with the Development Team.

**General**
* *How do we remove impediments?*
The Development Team decided together with the Product Owner to break down the user stories into smaller items in order to lower the complexity and follow the INVEST principle.


9. **Please, see diagram in #7.**

10. **Mob Programming**
<br/>Attached few photos of our team working together on both pair and mob programming.
<br/>![Pair Programming](https://github.com/cscis71ateam/crossroads/blob/master/media/Pair%20Programming.png)
<br/>![Mob Programming](https://github.com/cscis71ateam/crossroads/blob/master/media/Mob%20Programming.png)

11. **There is evidence that you are building your product test-first. There are at least 10 unit tests in your test suite, and they all pass.**
<br/>We conducted 10 unit tests which can be found in the test folder in the GitHub Repo for Crossroads. All tests passed.  
<br/>![Unit Tests](https://github.com/cscis71ateam/crossroads/blob/master/media/Unit%20Test%20Screenshot.png)

12. **Your team conducts a Sprint Review.**
<br/>We conducted our sprint review having Linh, our real-life stakeholders participating. A photo is attached.

Our product increment is working software which can be viewed at: http://165.227.45.199:8989/

Our primary stakeholder Ms. Linh attended our Sprint Review. Attached is a photo of Linh and the Scrum Team conducting the Sprint Review in person.
<br/>![Sprint Review Picture](https://github.com/cscis71ateam/crossroads/blob/master/media/First%20Sprint%20Review%20at%20the%20Science%20Center.png)
<br/>![Sprint Review Picture](https://github.com/cscis71ateam/crossroads/blob/master/media/First%20Sprint%20Review%20-%20After%20the%20Review%20with%20Our%20StakeHolder.png)

**Feedback from Linh about functionality**
<br/>We demoed the Product Increment to Lihn and received the following feedback on the Product Increment:
* Knowing how to take the T 
* Recommendations for dinner
* Getting around campus - inside the buildings, how to find classrooms
* What time gates close
* Information about Harvard yard
* Different Harvard dorms
* Searching for a keyword in a blog
* Up- and downvoting (Quora) - make people feeling awarded
* “Currency”
* Number of views
* Technique for assessing reliability
* Academics, social life and other stuff divided
* Current students’ review of events
* Layout of the dorm, so that I know how much stuff to bring
* Update user persona with favorite platforms, i.e. Facebook, Quora
* Information on events featuring different university
* MIT Admissions has a blog - look into this model
* Social life is very important - social events
* User login is important to ensure reliability
	* use Harvard.edu domain if you want to edit/comment
	* Find a way to ensure reliability

**Inspect and Adapt**
<br/>After inspecting the Product Increment with our stakeholder, Linh, we adapted and refined the Product Backlog. We did the following changes:
* Refined User Story “Register User” by adding additional detail that for a user to be able to add blog posts one has to be a Harvard alumni.
* Adding a new PBI “Social Event Subsection” and estimated it to 13 story points
* Adding additional details to “Rating on Blog Posts”


## Project Part1:
1. Our "Scrum Teams" group name in Canvas: **a-team**
2. Our team name: **A-Team**. Our Slack channel in the course Slack team: **a-team**
3. Public git repository for our team: Repo Name: "summer-harvard" and Repo URL (this repo): https://github.com/cscis71ateam/crossroads 
4.  
    * Team Name: **A-Team**
    * Team Roster:
    
        | Name                  |  Role                                        |
        | :---------------------|  :-------------------------------------------|
        | Simon Soerensen       |  Scrum Master and Development Team Member    |
        | Chun Chao Tseng       |  Product Owner and Development Team Member   |
        | Anna Levin            |  Development Team Member                     |
        | MD Mohiuddin Faruqe   |  Development Team Member                     |

5. Open source product: **Crossroads**
6. Far vision: Each university on earth has their own version of Crossroads with augmented/virtual reality available for prospective/future students to use prior to arrival so that they can improve their on campus experience.
7. Near vision: Future/prospective Harvard summer students be able to receive advice and guidance from current and past students via an online platform.
8. Some stakeholder types: 
    * Past/current students 
    * Future students 
    * Parents  
    * Local businesses
9. A real stake holder: **Linh Nam**
10. Detailed user persona (URL): https://app.xtensio.com/edit/clceg25k. Also put a "User Persona" screenshot in the main repo folder.
11. Initial product backlog URL: https://trello.com/b/RdosOtmY/a-team-kanban-board 
12. We have 10 or more product backlog items in our product backlog (pls, see #11 above for URL).
13. All product backlog items are expressed as excellent user stories (pls, see #11 above for URL).
14. Our product backlog is ordered; and it's based primarily on "Depedency", and then on "Business Values" (where there is no dependency or they are at the same level in terms of "Dependency"). 
15. Our Definition of Ready for product backlog items includes: 
    * User story has a title 
    * User story is completed - it has an opening sentence and all/additional details are added.
    * All development team members have shared understading of the story
    * Estimated in story points 
    * Infrastructure and dev tools are ready
    * Meets the INVEST (Independent, Negotiable, Valuable, Estimable, Small & Testable) criteria
16. Estimate of our PBIs is stored in our online tool Trello (please, see in the bracket beside each PBI title): https://trello.com/b/RdosOtmY/a-team-kanban-board
17. Our estimatation of PBIs is in story points.
18. We did a whole team relative size estimating activity. The name of the activity: **Planning Poker**
18. Only our Development Team members participated in creating the estimates. 
20. In addition to the above, we also created our initial **Definition of Done**:
    * Meets all acceptance criteria
    * Design reviewed
    * Individual components are successfully tested and all bugs are fixed
    * Integration test is successfully completed
    * Feature can be demoed
    * Pushed to GitHub repo
    * Deployed in prodution

# Crossroads
## CSCI S-71 Agile Software Development Group Project
## Team: **A-Team**
## Project Description: 
An web application for the future/potential/returning summer students at Harvard with usefull information, tips, suggestions from the past/current Harvard summer students.

## Project Part2:

1. **Forecast**
<br/>We forecasted to have 33 story points done by the first sprint. 
Sprint Goal: To have a landing page where the users can see what content is available on the site.

2. **The rationale for our forecast.** 
<br/>Since this our first sprint we did not have any data to follow a forecasting pattern like “Yesterday’s Weather”, so we made our estimation based on the task involved and our experience about the product and development tools & technologies we are using to develop the functionalities and how much time it can take.
	
3. **Sprint Planning**
<br/>We pulled stories into our sprint backlog. Only Development Team members participated in this activity.
	Initially, the Development Team members agreed to pull the following two items into the Sprint:
* Landing page - estimated to 20 story points
* Menu Items - estimated to 13 story point

Since the “Landings Page” story was too large with an estimate of 20 story points. We decided to refine “Landing page” by breaking it into these smaller stories and re-estimated the smaller stories using Planning Poker and ended with the following final Sprint Backlog:
* Landing Page Layout - estimated to 13 story points
* Landing Page Background - estimated to 3 story points
* Landing Page Welcome Message - estimated to 3 story points
* Menu Items - estimated to 13 story points

4. **Our stories were not larger than half the size of the forecast.**
<br/>Refer to #3

5. **You decomposed stories into tasks. The tasks are clearly listed in your sprint backlog.**
<br/>In Trello, we added a checklist to all Product Backlog items called tasks, where tasks are tracked.
<br/>https://trello.com/b/RdosOtmY/a-team-kanban-board 

6. **Please, see URL in #5.**

7. **Sprint burndown chart.**
<br/>![Sprint Burndown Chart](https://github.com/cscis71ateam/crossroads/blob/master/media/Crossroads%20Burndown%20for%20Sprint%201.png)

8. **Daily Scrum**

**July 4, 2018**
<br/>We held a physical Daily Scrum at 10 am time-boxed to 15 minutes, facilitated by our Scrum Master, Simon.
<br/>![Daily Scrum Picture](https://github.com/cscis71ateam/crossroads/blob/master/media/Daily%20Scrum%20at%20COOP.png)


**The whole Scrum Team**
* *What did we do yesterday?*
Yesterday we did Sprint Planning and Backlog refinement so that we could have our PBIs meeting our Definition of Ready.

After talking to Richard, we decided to change framework from Drupal to node.js/express as the main framework.

**Mo** 
* *What did you do yesterday?*
Did some research and installed the node.js and express framework. Prepared the development and deployed environment for both local development and remote production servers. Put some additional details and tasks on the Landing Page PBI.

* *What are you gonna do today?*
Build infrastructure and start implementing the user story landing page.

* *What are your impediments?*
Since we decided to change the framework, we all have to install new components. Mo’s removal plan is to make some readjustment to our Sprint Backlog together with the rest of the Development Team and Product Owner after the Daily Scrum. 

**Anna** 
* *What did you do yesterday?*
Helped with organizing the Sprint Backlog. Looked for images for the landing page. 

* *What are you gonna do today?*
Install new software and learn about the Node.js framework. Sit together with Mo to understand the infrastructure. 

* *Impediment*
Doesn’t know node.js, so she has to learn the new framework.  To remove this impediment, Anna will be doing mob programming with the Development Team.

**Chun**
* *What did you do yesterday?*
Did research about node.js

* *What are you gonna do today?*
Install new software and learn about the Node.js framework. Sit together with Mo to understand the infrastructure. 

* *Impediments*
Doesn’t know node.js, so he has to learn the new framework. However, he has experience with Django and know how to research more. To remove this impediment, Chun will be doing mob programming with the Development Team.

**Simon**
* *What did you do yesterday?*
Researched on the node.js framework and set up the framework on his machine

* *What are you gonna do today?*
Install new software and learn about the Node.js framework. Sit together with Mo to understand the infrastructure. 

* *Impediment*
Doesn’t know node.js, so he has to learn the new framework. To remove this impediment, Simon will research on the framework and do mob programming with the Development Team.

**General**
* *How do we remove impediments?*
The Development Team decided together with the Product Owner to break down the user stories into smaller items in order to lower the complexity and follow the INVEST principle.


9. **Please, see diagram in #7.**

10. **Mob Programming**
<br/>Attached few photos of our team working together on both pair and mob programming.
<br/>![Pair Programming](https://github.com/cscis71ateam/crossroads/blob/master/media/Pair%20Programming.png)
<br/>![Mob Programming](https://github.com/cscis71ateam/crossroads/blob/master/media/Mob%20Programming.png)

11. **There is evidence that you are building your product test-first. There are at least 10 unit tests in your test suite, and they all pass.**
<br/>We conducted 10 unit tests which can be found in the test folder in the GitHub Repo for Crossroads. All tests passed.  
<br/>![Unit Tests](https://github.com/cscis71ateam/crossroads/blob/master/media/Unit%20Test%20Screenshot.png)

12. **Your team conducts a Sprint Review.**
<br/>We conducted our sprint review having Linh, our real-life stakeholders participating. A photo is attached.

Our product increment is working software which can be viewed at: http://165.227.45.199:8989/

Our primary stakeholder Ms. Linh attended our Sprint Review. Attached is a photo of Linh and the Scrum Team conducting the Sprint Review in person.
<br/>![Sprint Review Picture](https://github.com/cscis71ateam/crossroads/blob/master/media/First%20Sprint%20Review%20at%20the%20Science%20Center.png)
<br/>![Sprint Review Picture](https://github.com/cscis71ateam/crossroads/blob/master/media/First%20Sprint%20Review%20-%20After%20the%20Review%20with%20Our%20StakeHolder.png)

**Feedback from Linh about functionality**
<br/>We demoed the Product Increment to Lihn and received the following feedback on the Product Increment:
* Knowing how to take the T 
* Recommendations for dinner
* Getting around campus - inside the buildings, how to find classrooms
* What time gates close
* Information about Harvard yard
* Different Harvard dorms
* Searching for a keyword in a blog
* Up- and downvoting (Quora) - make people feeling awarded
* “Currency”
* Number of views
* Technique for assessing reliability
* Academics, social life and other stuff divided
* Current students’ review of events
* Layout of the dorm, so that I know how much stuff to bring
* Update user persona with favorite platforms, i.e. Facebook, Quora
* Information on events featuring different university
* MIT Admissions has a blog - look into this model
* Social life is very important - social events
* User login is important to ensure reliability
	* use Harvard.edu domain if you want to edit/comment
	* Find a way to ensure reliability

**Inspect and Adapt**
<br/>After inspecting the Product Increment with our stakeholder, Linh, we adapted and refined the Product Backlog. We did the following changes:
* Refined User Story “Register User” by adding additional detail that for a user to be able to add blog posts one has to be a Harvard alumni.
* Adding a new PBI “Social Event Subsection” and estimated it to 13 story points
* Adding additional details to “Rating on Blog Posts”
 





## Project Part1:
1. Our "Scrum Teams" group name in Canvas: **a-team**
2. Our team name: **A-Team**. Our Slack channel in the course Slack team: **a-team**
3. Public git repository for our team: Repo Name: "summer-harvard" and Repo URL (this repo): https://github.com/cscis71ateam/crossroads 
4.  
    * Team Name: **A-Team**
    * Team Roster:
    
        | Name                  |  Role                                        |
        | :---------------------|  :-------------------------------------------|
        | Simon Soerensen       |  Scrum Master and Development Team Member    |
        | Chun Chao Tseng       |  Product Owner and Development Team Member   |
        | Anna Levin            |  Development Team Member                     |
        | MD Mohiuddin Faruqe   |  Development Team Member                     |

5. Open source product: **Crossroads**
6. Far vision: Each university on earth has their own version of Crossroads with augmented/virtual reality available for prospective/future students to use prior to arrival so that they can improve their on campus experience.
7. Near vision: Future/prospective Harvard summer students be able to receive advice and guidance from current and past students via an online platform.
8. Some stakeholder types: 
    * Past/current students 
    * Future students 
    * Parents  
    * Local businesses
9. A real stake holder: **Linh Nam**
10. Detailed user persona (URL): https://app.xtensio.com/edit/clceg25k. Also put a "User Persona" screenshot in the main repo folder.
11. Initial product backlog URL: https://trello.com/b/RdosOtmY/a-team-kanban-board 
12. We have 10 or more product backlog items in our product backlog (pls, see #11 above for URL).
13. All product backlog items are expressed as excellent user stories (pls, see #11 above for URL).
14. Our product backlog is ordered; and it's based primarily on "Depedency", and then on "Business Values" (where there is no dependency or they are at the same level in terms of "Dependency"). 
15. Our Definition of Ready for product backlog items includes: 
    * User story has a title 
    * User story is completed - it has an opening sentence and all/additional details are added.
    * All development team members have shared understading of the story
    * Estimated in story points 
    * Infrastructure and dev tools are ready
    * Meets the INVEST (Independent, Negotiable, Valuable, Estimable, Small & Testable) criteria
16. Estimate of our PBIs is stored in our online tool Trello (please, see in the bracket beside each PBI title): https://trello.com/b/RdosOtmY/a-team-kanban-board
17. Our estimatation of PBIs is in story points.
18. We did a whole team relative size estimating activity. The name of the activity: **Planning Poker**
18. Only our Development Team members participated in creating the estimates. 
20. In addition to the above, we also created our initial **Definition of Done**:
    * Meets all acceptance criteria
    * Design reviewed
    * Individual components are successfully tested and all bugs are fixed
    * Integration test is successfully completed
    * Feature can be demoed
    * Pushed to GitHub repo
    * Deployed in prodution
