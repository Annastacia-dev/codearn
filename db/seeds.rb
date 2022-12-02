# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#User

puts "Sample Users..."

User.create!(
    first_name: "Admin",
    last_name: "Admin",
    username: "admin",
    email: "admin@gmail.com",
    password: "@Dmin321",
    password_confirmation: "@Dmin321"
)

User.create!(
    first_name: "John",
    last_name: "Doe",
    username: "johndoe",
    email: "johndoe@gmail.com",
    password: "@Johnny32",
    password_confirmation: "@Johnny32",
    premium: false,
    seller: true
)

User.create!(
    first_name: "Jane",
    last_name: "Smith",
    username: "janesmith",
    email: "jane@gmail.com",
    password: "@Jane123",
    password_confirmation: "@Jane123",
    premium: true,
    seller: false
)

puts "Done!"

# Templates

puts "Sample Templates..."

Template.create!(
    image_url: "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro-angular.high.webp",
    live_site:"https://startbootstrap.com/previews/sb-ui-kit-pro-angular",
    title: "SB UI Kit Pro Angular",
    description: "SB UI Kit Pro Angular is a fully developed front-end UI toolkit created with Angular 13. Built for developers, by developers, this is much more than just a front-end theme. It includes a full set of components, plugins, and more to help you build your next project.",
    features: "Intricate Routing, Custom Components, Unit Tests & Functional Tests, Schematics",
    github_link:"https://github.com/evgensharyy/nglp-angular-material-landing-page",
    category: "Landing Page",
    technologies: "Angular, Bootstrap",
    premium: true,
    price: 100

)

Template.create!(
    image_url: "https://assets.startbootstrap.com/img/screenshots/premium/material-admin-pro.high.webp",
    live_site:"https://startbootstrap.com/previews/material-admin-pro",
    title: "Material Admin Pro",
    description: "Material Admin Pro is the most intuitive union of the Material Design language and the new Bootstrap 5 framework. This product is a complete UI toolkit that includes all of the functionality and flexibility that Bootstrap has to offer redesigned based on the specifications set by Material Design, developed by Google. We also have followed in Bootstrap 5 footsteps to make this product fully functional without jQuery, meaning it is the best admin interface toolkit for integrating with any front-end framework.",
    features: "Intricate Routing, Custom Components, Unit Tests & Functional Tests, Schematics",
    github_link:"https://github.com/flatlogic/angular-material-dashboard",
    category: "Dashboard",
    technologies: "Material UI, Bootstrap, Vue",
    premium: true,
    price: 20
)

Template.create!(
    image_url: "https://freefrontend.com/assets/img/bootstrap-cards/bootstrap-cards-collections.jpg",
    live_site:"https://jsfiddle.net/bootstrapious/y03fmjw7/",
    title: "Minimal Bootstrap Card",
    description: "Bootstrap cards are a great way to display content in a flexible and extensible way. The wide variety of content that can be put into cards makes them the perfect choice for almost any type of web application. Here are some examples of what you can do with cards.",
    features: "True Material Design Interface, Web Components , Powerful, Lightweight Plugins & Functional Tests",
    category: "Card",
    technologies: "HTML, CSS, JavaScript",
    premium: false
)

puts "Done!"
