# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'Seeding ...'
#User
# Admin
admin = User.create!(
    first_name: "Super Admin",
    last_name: "Super Admin",
    username: "superadmin",
    email: "superadmin@gmail.com",
    password: "@SuperAdmin11",
    password_confirmation: "@SuperAdmin11",
    seller: true,
    premium: true,
    role: 'admin'
)

# User

user = User.create!(
    first_name: "Amina",
    last_name: "Abdi",
    username: "amina",
    email: "amina@gmail.com",
    password: "@Amina12",
    password_confirmation: "@Amina12",
    seller: false,
    premium: true
)


# Template
template = Template.create!(
    title: "CTA Buttons",
    description: "Stylish buttons for call to action for your website.",
    technologies:"HTML,CSS",
    image_url:"https://img.freepik.com/free-vector/flat-design-cta-button-collection_23-2148947704.jpg?auto=format&h=200",
    live_site:"https://www.freepik.com/free-vector/flat-design-cta-button-collection_13818838.htm#query=button&position=4&from_view=search&track=sph",
    github_link:"https://github.com/TheKodingKrab/cta-button",
    category:"Button",
    user_id: admin.id,
    features:"beautiful, easy to use, responsive",
    premium: false
)

# Review
review = Review.create!(
    user_id: user.id,
    template_id:template.id,
    comment: "superb",
    rating: 4
)

puts "Done!"


