---
layout: post
title:  "Tealeaf Academy Course Three/Week Seven - Mocks"
date:   2015-04-03 14:42:00
categories: Tealeaf Academy
banner_image: ""
featured: false
comments: true
---

This is a quick post to discuss the idea of mocks in Rails testing.  I demonstrate this using the code I ended up with at the end of my last post:

    class ProjectController < ApplicationController

      ...

      def create
        @project = Project.new(project_params)
        CreditDeduction.new(current_user).deduct_credit
      end  

      ...
    end

<!--more-->

(Click on the link to read my last post on the [Beyond MVC](../../../../2015/04/03/course-three-week-seven-beyond-mvc/)

I first quickly talk about the difference between mocks and stubs.  Mocks in tests are used to simply record and verify expectations.  In the example above I will use a mock to verify that ```CreditDeduction.new(current_user)``` does indeed receive the method ```deduct_credit``` but I don't care what actually happens after it receives the method.

For example, my controller test for the create action could look like this:

    it "delegates to CreditDeduction to deduct credit" do
      credit_deduction = double("credit deduction")
      CreditDeduction.stub(:new).with(user_object).and_return(credit_deduction)
      expect(credit_deduction).to receive(:deduct_credit)
      post: create, project: {name: "code project", description: "a test project"}
    end

Stubs, on the other hand have a different purpose: they do not record or verify expectations, but rather allow us to “replace” the behavior, state of the “fake”object in order to utilize a test scenario ...