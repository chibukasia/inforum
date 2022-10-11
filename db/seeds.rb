# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

10.times do 
    User.create(username:Faker::Internet.username, email:Faker::Internet.free_email, password_digest:Faker::Internet.password, image_url:Faker::File.mime_type(media_type: 'image') )
end 

20.times do 
    Blog.create(title:Faker::Marketing.buzzwords, content:Faker::Lorem.paragraph_by_chars, minutes_to_read:rand(1..10), likes:rand(1..30), user_id:rand(1..10))
end 

30.times do 
    Comment.create(comment:Faker::Lorem.sentence, user_id:rand(1..10), blog_id: rand(1..20))
end
