# React-PHP-CRUD-API
This is a full-stack CRUD (Create, Read, Update, Delete) application. The project uses React (contained in the react-PHP-Crud folder) for the frontend and PHP (contained in the user.php file) for the backend. A MySQL database is used for storing and managing data.

## Features
Perform CRUD operations (Create, Read, Update, Delete)

Modern and responsive frontend built with React

Backend built with PHP for API handling

MySQL database integration for data storage.

## Technologies Used
### Frontend
React: For building the user interface.

Bootstrap: For styling and responsiveness.
### Backend
PHP: For handling API requests.

MySQL: For data management.
### Tools
Vite: For React development.

XAMPP: For running PHP and MySQL locally.

## Getting Started
Follow these steps to set up and run the project locally.

### Prerequisites
Node.js and npm installed.

PHP and MySQL installed (via XAMPP or equivalent).

Git installed for version control.

# Installation
### Clone the repository
``` bash
git clone https://github.com/SumiBa/React-PHP-CRUD-API.git
cd React-PHP-CRUD-API
```

### Frontend Setup
``` bash
cd react-PHP-Crud
npm install
npm run dev
```

### Backend Setup
1. Set up a local server using XAMPP

 Start Apache and MySQL from the XAMPP control panel.

2. Place the user.php file in the root directory of your server (e.g., htdocs in XAMPP).

3. Import the MySQL database:

 Open phpMyAdmin and create a database (e.g., reactphp).

 Add the required tables.

4. Update user.php with your database credentials:

``` php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'reactphp';
```


