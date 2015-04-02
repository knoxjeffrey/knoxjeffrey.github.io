---
layout: post
title:  "Tealeaf Academy Course Three/Week Seven - Payments With Stripe Part 2"
date:   2015-04-01 16:58:00
categories: Tealeaf Academy
banner_image: ""
featured: false
comments: true
---

In my previous post I talk about taking payments in your application with Stripe.  I've made some changes to this now which I'll go over in this post.

<!--more-->

(Click on the link to read my last post on the [Payments With Stripe](../../../../2015/03/26/course-three-week-six-payments-with-stripe/))

I decided that Stripe was too tightly coupled with my application and that could create issues down the line if I decided to change my payment provider if Stripe hiked up their rates for example.  I designed my ```UserController``` class to look as follows for the create action:

    def create
      @user = User.new(user_params)
      if @user.valid?
        attempt_card_payment = payment_processor
        if attempt_card_payment.processed
          @user.save
          flash[:success] = "Thank you for registering, please sign in."
          redirect_to sign_in_path
        else
          flash[:danger] = attempt_card_payment.error
          redirect_to register_path
        end
      else
        flash[:danger] = "Please fix the errors in this form."
        render :new
      end
    end 
    
    private
    
    def payment_processor
      ExternalPaymentProcessor.create_payment_process(
        amount: 999,
        email: @user.email_address,
        token: params[:stripeToken]
      )
    end
    
I now have a generic ```ExternalPaymentProcessor``` class that deals with all of the interaction for making payments which looks like this:

    class ExternalPaymentProcessor
      require "#{Rails.root}/lib/stripe_payment_processor.rb"

      attr_accessor :processed, :error

      def initialize(options={})
        @processed = options[:processed]
        @error = options[:error]
      end

      def self.create_payment_process(options={})
        response = payment_processor.new(options).process_card
        response == true ? new(processed: response) : new(error: response)
      end

      private

      def self.payment_processor
        StripePaymentProcessor
      end

    end
    
This way all of my code will reference this class so if I change payment provider all I will have to change is the ```payment_processor``` class method and the reference to the lib folder.  My ```StripePaymentProcessor``` is similar to before:

    class StripePaymentProcessor

      attr_reader :amount, :email, :token
      attr_accessor :error_message, :is_successful

      def initialize(options={})
        @amount = options[:amount]
        @email = options[:email]
        @token = options[:token]
      end

      def process_card
        begin
          charge = Stripe::Charge.create(
          amount: amount,
          currency: "gbp",
          source: token,
          description: "Charge for #{email}"
          )
          self.is_successful = true
        rescue Stripe::CardError => e
          self.error_message = e.message
        end 
      end

    end
    
With a new payment provider I just have to make sure that it returns true if payment goes through or an error message if it fails.