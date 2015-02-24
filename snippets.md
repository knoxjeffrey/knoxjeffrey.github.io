---
layout: page
title: Snippets
permalink: /snippets/
comments: false
---

I've created this page to make note of anything I come across that I've found useful for web development but isn't a big enough topic for a blog post.  In here you'll find things like code shortcuts, methods, terminal commands, etc.

###Rails

- [try(*a, &b) public](http://apidock.com/rails/Object/try)

  A handy method to use if the receiver does not always respond to the argument and you want to avoid an exception. For example you might have some code like the following:
  ```@person ? @person.name : nil```
  
  Here you have to handle the edge case but using try this can be written much more simply:
  ```@person.try(:name)```
  
  Check out the docs for more info
  
- Ensure an object's attribute can only have integer values by validating at the model level

  ```validates_numericality_of :position, { only_integer: true }```
  
- Rails Transactions: [Here's a link to a very good article](http://markdaggett.com/blog/2011/12/01/transactions-in-rails/)

  In addition you can handle an exception like so:

      begin 
        ActiveRecord::Base.transaction do
          ###your code###
        end
      rescue ActiveRecord::RecordInvalid
        ###code to run if case of error###
      end

  
###RSpec

- If you only need to run one of your tests in a file rather than all of them you can do this like so:

  ```rspec spec/controllers/my_controller_spec.rb:20```
  
  where ```20``` represents the line of the test I want to run.

###Terminal

- Ever shut your webserver down in the wrong way and when you try to restart it you get an error, 'TCPServer Error: Address already in use'?  I came across a way to fix this after some searching so hopefully this will help others.  In the terminal, type:

  ```$ lsof -wni tcp:3000```
  
  replacing 3000 with what ever port you are trying to use.  This allows you to find the PID of the process that is using your port.  For every process you want to kill type in:
  
  ```kill -9 PID```
  
  replacing PID with the PID of the process you want to kill.