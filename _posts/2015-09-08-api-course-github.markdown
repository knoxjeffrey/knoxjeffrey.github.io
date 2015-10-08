---
layout: post
title:  "Tealeaf Academy - Working with GitHub API"
date:   2015-09-08 14:11:00
categories: Tealeaf Academy
banner_image: ""
featured: false
comments: true
---

I'm using this post to make notes from the Working with Web APIs course taught by Tealeaf Academy.  The examples I'm using will be from working with the GitHub API.

<!--more-->

## API requests in irb session:

    require 'faraday'
    require 'json'

    response = Faraday.get 'https://api.github.com/users/knoxjeffrey'
    json = JSON.parse(response.body)

    json['name']
    json['location]
    
Read this article for great info on how to use Faraday: http://www.intridea.com/blog/2012/3/12/faraday-one-http-client-to-rule-them-all

## Create an access token for command line user
Read this article to show you how to do this so you can up your api request limit from 60 per hour to 5000.  https://help.github.com/articles/creating-an-access-token-for-command-line-use/

## Store authentication credentials with dotenv

GitHub will provide you with a personal access token which needs to be stored safely

Add gem "dotenv" to Gemfile and run bundle install.

Next, add a new file called .env to the project, and add the token you just created to it:

    GITHUB_TOKEN=thetokenyoujustcreated

Ensure you have ```.env``` included in your ```.gitignore``` file so it isn't freely available to the public if you push to a GitHub repository.

Then, as early in the application bootstrap process, load ```.env```:

    require 'dotenv'
    Dotenv.load
    
Check the access token is properly loaded into the environment hash.  In the console:

    ENV["GITHUB_TOKEN"]

## Increasing Application Performance with HTTP Cache Headers
https://devcenter.heroku.com/articles/increasing-application-performance-with-http-cache-headers