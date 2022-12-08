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
    password_confirmation: "@Dmin321",
    seller: true,
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

