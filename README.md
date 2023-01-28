# CODEARN
- Codearn is a platform for front-end developers to get ready made UI components and code snippets for their projects.
- They can also contribute to the platform by adding their own components and code snippets.


### Live Link
https://codearn.onrender.com/

## Users
- There are two types of users in the platform :  **Developers** and **Contributors**., **Developers** can view the components and code snippets and **Contributors** can add their own components and code snippets.

- **Developers** can be of two types : **Free** and **Premium**.
- **Free** developers can view the templates and code snippets, view source code for free templates but not for premium templates.
- **Premium** developers can view the templates and code snippets, view source code for free and premium templates.

## Templates
- Templates are the UI components that are ready made and can be used by developers in their projects.
- Templates can be of two types : **Free** and **Premium**.
- **Free** templates are templates uploade by **Admin** and are free to use by **Developers**.
- **Premium** templates are templates uploaded by **Contributors** and are free to use by **Premium** **Developers**.

#### Sign Up
- To sign up, a user has to enter their first name, last name, username, email, password and confirm password.
- The username should be unique and include only letters and numbers.
- The email should be unique and should be a valid email.
- The password should be at least 6 characters long and should include at least one uppercase letter, one number and one special character.
- The confirm password should match the password.

#### Log In

**Sample User Free Account**
```
email : ray@gmail.com
password: R@y63

```
- To change to premium click on the upgrade button on the home page.
- Enter your phone number and click on send prompt to receive a M-Pesa prompt.
- After confirming the payment, click on pay this will update you to a premium user and refresh the page.

**Sample User Premium Account**
```
email : jane@gmail.com
password: @Jane123

```

**Sample Contributor Account**
```
email : david@gmail.com
password: #David45

```

- A contributor can add a template by clicking on the add template button on their dashboard.

**Sample Admin Account**
```
email : superadmin@gmail.com
password: @SuperAdmin11

```

- An admin can add a template by clicking on the add template button on their dashboard.
- An admin can view all templates and edit or delete any template.

- All users can edit their profile.
- Users can delete their accounts.

#### Templates
- You can view the details of a template by clicking on the template card.
- You can view the source code of a template by clicking on the view source code button, if it's free you can view the source code but if it's premium you will be prompted to upgrade to a premium account.
- You can leave a rating and review for a template by clicking on the Add review button.

#### Set up instructions

- Ruby version 2.6.4
- Bundler version 2.3.26

- Clone the repository
- Run `bundle install`
- Run `rails db:create`
- Run `rails db:migrate`
- Run `rails db:seed`
- Run `npm install --prefix client`
- Run `foreman start -f Procfile`





