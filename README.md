# Project WanderLust

**WanderLust** is a travel community for users to share city-specific tips about their favorite locations around the world.

---

## On Download

**After downloading or cloning the repo, run the following to get your dev environment ready to run the app:**

1. **npm install** to use all installed dependencies
2. **npm start**




### Project structure

For this project, we clarified the user stories from our client and followed the suggested wireframes 

**This wireframe was used as a guide to design the travel community-Wanderlust:**

https://raw.git.generalassemb.ly/sf-wdi-51/project-02/master/wireframes.png



**The following user stories were taken into consideration:**


## Sprint 1: Basic Auth & Profiles

**A user should be able to:**

1. Navigate to "/" and see a basic splash page with:
  * The name of the website.
  * Links to "Log In" and "Sign Up".
2. Sign up for an account.
3. Log in to their account if they already have one.
4. Be redirected to their public profile page after logging in.
5. On their public profile page, see their name, the current city they have set in their profile, and their join date.
6. See the site-wide header on every page with:
  * A link to "Log Out" if they're logged in.
  * Links to "Log In" and "Sign Up" if they're logged out.
7. Update their profile by making changes to their name and/or current city.
8. See the titles of all the posts they've contributed (start with pre-seeded data).
9. Click on the title of one of their posts and be redirected to a "show" page for that post.
10. View post "show" pages with title, author, and content.


---

## Sprint 2: CRUD

**A user should be able to:**

1. View the "San Francisco" page (at "/cities/1") including:
  * The site-wide header.
  * The name of the city.
  * An iconic photo of the city.
2. View a list of posts on the San Francisco page:
  * Sorted by newest first.
  * With the post titles linked to the individual post "show" pages.
3. Use an "Add New Post" button on the San Francisco city page to pull up the new post form.
4. Create a new post for San Francisco<!--(**Hint:** <a href="http://guides.rubyonrails.org/routing.html#nested-resources" target="_blank">nested resources</a>)-->.
5. Click "Edit" on ANY individual post, and be redirected to the edit form.
6. Click "delete" on ANY individual post, then:
  * See a pop-up that says: "Are you sure you want to delete #{title}?"
  * If the user confirms, delete the post.

---


## Sprint 3: Validations & Authorization

**A user should be able to:**

1. View city pages for "London" and "Gibraltar".
2. Verify that a new post they create is successfully published on the correct city page.

A user CANNOT save invalid data to the database, according to the following rules:

3. A user CANNOT sign up with an email (or username) that is already in use.
4. A post's title must be between 1 and 200 characters.
5. A post's content must not be empty.

A user is authorized to perform certain actions on the site, according to the following rules:

6. A user MUST be logged in to create/update/destroy resources.
7. A user may only edit their own profile and edit/delete their own posts.


---
