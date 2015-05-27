---
layout: page
title: Projects
permalink: /projects/
comments: false
---

Below are some of the projects I have worked on since starting my career as a web developer.  You can also check out the code on [my GitHub repos](https://github.com/knoxjeffrey).  Click on the titles to view the applications:

###[Sinatra: Blackjack Application](http://knoxjeffrey-blackjack.herokuapp.com "Blackjack World")
This is my project for the first Tealeaf Academy course.  Within the course I learnt about the basics of HTTP and the request/response life cyle.  I also handled reponses by rendering/redirecting, processed requests from forms and passed in parameters.  The application made use of Ajax to handle button presses during the game.  For the project I was building dynamic view templates in Erb, learnt to use Sinatra (a light weight web development DSL) and deployed my application to Heroku.  

###[Ruby On Rails: PostIt! Application](http://knoxjeffrey-postit.herokuapp.com "PostIt!")
This is my first project for the second Tealeaf Academy course and involved building a Reddit clone using Ruby On Rails.  This course was amazing and covered so much ground.  Below are some brief summary points about what I covered:

- Database concepts such as relational databases, data modeling and associations
- Migrations
- Active Record
- Rails associations including one-to-many, many-to-many and polymorpic associations
- Validations
- Routes, controllers and views
- DRY code with helpers, partials, application_controller.rb, helper_method and before_action
- Render vs redirect
- Rails forms and ajax in rails
- Modules and gems
- Lots of features in my application such as slugging, user authentication, ajaxified voting, admin roles, time zones and two factor authentication
- Deploying to Heroku

###[D3: Scottish Health Inequality](http://scottish-health-inequality.herokuapp.com "Scottish Health Inequality")
I wanted to gain experience with creating data visualisations based on data sets and D3 looked like a great framework to achieve this.  This came from my interest in healthcare and using data visualisation to help explain complex problems in simple, visual ways.  I started with this project about health inequality in Scotland because I found it both an interesting topic and also a way to try out lots of visualisations in D3.   In the future, I'd like to have the datasets based on the healthcare data for individual patients and to use that to help engage patients more effectively with own health so they actually stick to treatment plans.  This amazing [Ted Talk](http://vimeo.com/103501614) is where I got my inspiration from.  From my work with Ruby On Rails I feel like this is something I can achieve as I understand now how to connect a backend full of patient data to front end visualisations using D3.

###[Ruby On Rails: CPD Boost](http://cpd-boost.herokuapp.com "CPD Boost")
This is my personal project for the second Tealeaf Academy course.  For this I wanted to create an application that could be used by healthcare professionals to share blog articles about treatment techniques and at a later date I want to add more fuctionality to it so it can be used as a record for CPD.  The database structure was fairly similar to my PostIt! application but with an extra table for bookmarking posts and also more functionality.  On top of what I covered in the PostIt! application I also added the following:

- Ability to delete posts and comments from the database
- Extended the use of Ajax to reload entire blocks of code in a partial
-  Worked with gems to generate images on the fly and to style my application like Pinterest

I'm also want to implement caching for the application to help with page load times but this is something I will need to come back to.

###[Ruby On Rails: MyFLiX](http://knoxjeffrey-myflix.herokuapp.com/ "MyFLiX")
This is my project for the third Tealeaf Academy course and is basicaly a Nexflix clone.  This course covered some of the topics I was really keen to explore such as allowing payments and using Amazonm S3.  Below is a brief list of some of the features of the application:

- Search
- Sending emails
- Background jobs
- Resque and Sidekiq
- Amazon S3
- Uploading files for admins
- Collect credit card payments with Stripe
- Payment forms
- Recurring billing
- Restrict access when future payments fail
- Follow other users
- Add videos to queue
- Write video reviews

Note, when signing up do not use your real card information as this is just a test application for the Tealeaf Academy courset!  You can use the Stripe test card info with card number 4242424242424242 and any 3 digit security code.

###[Ruby On Rails: Time Off Tokens](http://www.timeofftokens.com "Time Off Tokens")
This is my personal project for the third Tealeaf Academy course and I came up with an idea that would be very useful for my wife and I.  We have 2 children and our parents live far away so we find having some time to ourselves is a bit of a challenge.  We have several friends in the same position and we have created a babysitting circle so we each babysit for one another.  Many people do the same thing and use a token system to ensure that everyone does their fair share of babysitting.  You earn tokens for every hour that you babysit and are deducted tokens for every hour that someone babysits for your children.

I wanted to make it as easy as possible to administer the tokens and have a simple way to keep track of all of the dates so came up with Time Off Tokens.  There are several features built into this application which I have listed below:

- Facebook authentication
- Avatar image upload with Cloudinary
- Background jobs with Sidekiq
- Sending emails using Mandrill
- Handling forgotten passwords
- Friend Search
- Friend Invites
- All the administration for adding and deducting tokens.

I'm releasing this as my first proper production application and with any luck I'll get lots of people signing up!