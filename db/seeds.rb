# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Example:
#
#   Person.create(first_name: 'Eric', last_name: 'Kelly')
puts "Important, Urgent"
Task.create(text: "Learn Ajax", important: true, urgent: true)
Task.create(text: "Putting out a fire", important: true, urgent: true)

puts "Important, Not Urgent"
Task.create(text: "Feeding Rovaira's dog", important: true, urgent: false)
Task.create(text: "Getting a job", important: true, urgent: false)

puts "Not Important, Urgent"
Task.create(text: "Getting a deal on groupon", important: false, urgent: true)
Task.create(text: "Getting a deal on LivingSocial", important: false, urgent: true)

puts "Not Important, Not Urgent"
Task.create(text: "Checking facebook", important: false, urgent: false)
Task.create(text: "Shaving my beard", important: false, urgent: false)
