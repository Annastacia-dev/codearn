# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#User

puts "Sample User..."

User.create!(
    first_name: "John",
    last_name: "Doe",
    username: "johndoe",
    email: "johndoe@gmail.com",
    password: "@Johnny32",
    password_confirmation: "@Johnny32"
)

puts "Done!"

# Templates

puts "Sample Template..."

Template.create!(
    image_url: "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro-angular.high.webp",
    live_site:"https://startbootstrap.com/previews/sb-ui-kit-pro-angular",
    title: "SB UI Kit Pro Angular",
    description: "SB UI Kit Pro Angular is a fully developed front-end UI toolkit created with Angular 13. Built for developers, by developers, this is much more than just a front-end theme. It includes a full set of components, plugins, and more to help you build your next project.",
    features: "Intricate Routing, Custom Components, Unit Tests & Functional Tests, Schematics",
    github_link:"https://github.com/evgensharyy/nglp-angular-material-landing-page",
    category: "Landing Page",
    technologies: "Angular"
)

puts "Done!"
