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
 




<br/>
<br/>
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
