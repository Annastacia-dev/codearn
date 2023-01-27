# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#User
# Admin
User.create!(
    first_name: "Admin",
    last_name: "Admin",
    username: "admin",
    email: "admin@gmail.com",
    password: "@Admin11",
    password_confirmation: "@Admin11",
    seller: true,
    premium: true
)


