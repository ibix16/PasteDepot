# PasteDepot
[Visit PasteDepot](https://pastedepot.com)

![Screenshot 2024-09-29 at 10 59 02 PM](https://github.com/user-attachments/assets/564156c2-ecd7-4199-83f4-53f70cd6fa56)

## Description

**PasteDepot** is a web-based application that allows users to create, share, and store code snippets. Users can sign up, log in, and create their own pastes that are stored in the backend using Supabase. Each paste is given a unique link, allowing easy sharing with others. This project aims to simplify the sharing of code snippets across different users, offering an intuitive and fast experience.

The app features:
- User authentication (Sign up, Login, Logout).
- Secure storage of pastes linked to user accounts.
- Ability to view, share, and delete pastes.
- Syntax highlighting for code snippets using a custom CodeHighlighter.
- Responsive design with a clean and easy-to-use interface.

## Features

- **User Authentication**: Sign up and log in to create and manage pastes.
- **Create Pastes**: Store code snippets with a title, programming language, and content.
- **View Pastes**: Display pastes with syntax highlighting. Each paste is shareable via a unique URL.
- **Delete Pastes**: Delete your pastes with verification.
- **Copy Code**: Easily copy code snippets using the "Copy Code" button on the paste view page.

## Usage

### 1. Sign Up
To get started, navigate to the Sign Up page, create an account by providing your email and password, and verify your account via the confirmation email.

### 2. Login
Once verified, you can log in using your credentials.

### 3. Create a Paste
After logging in:
- Click the "Create Paste" button.
- Enter a title, select the language of your code, and paste the code in the content box.
- Click "Save Paste" to store your code snippet in your account.

### 4. View and Share Pastes
- Once created, the pastes are displayed on the homepage.
- Click on any paste title to view it, or copy the unique link to share with others.

### 5. Delete Pastes
If you want to remove a paste:
- Click on the paste you want to delete.
- Click the "Delete" button next to the "Copy Code" button and confirm the deletion.

### 6. Logout
You can log out using the "Logout" button in the top-right corner of the homepage.

## Technologies Used

- **Frontend**: React, and CSS for styling
- **Backend**: PostgreSQL database - Supabase 
- **Deployment**: Vercel for continuous deployment and hosting
