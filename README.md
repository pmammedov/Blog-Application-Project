<body>
    <h1>Blog-Application-Project</h1>
    <p>The Blog App Backend is a RESTful API developed using Python to manage blog posts, comments and likes. This backend service provides endpoints for creating, reading, updating, and deleting blog posts and comments. It is designed to be used with a frontend application or as a standalone API.</p>
    <h2>Features</h2>
    <ul>
        <li>CRUD operations for blog posts (Create, Read, Update, Delete)</li>
        <li>CRUD operations for comments on blog posts</li>
        <li>User authentication and authorization</li>
    </ul>
    <h2>Installation</h2>
    <p>To get a local copy up and running follow these simple steps:</p>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/pmammedov/Blog-Application-Project.git</code></pre>
        </li>
        <li><strong>Navigate to the project directory:</strong>
            <pre><code>cd Blog-App-Project</code></pre>
        </li>
        <li><strong>Create a virtual environment:</strong>
            <pre><code>python -m venv env</code></pre>
        </li>
        <li><strong>Activate the virtual environment:</strong>
            <pre><code>source .\env\Scripts\activate</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>pip install -r requirements.txt</code></pre>
        </li>
        <li><strong>Make Migrations</strong>
            <pre><code>python manage.py migrate</code></pre>
        </li>
        <li><strong>Create a superuser:</strong>
            <pre><code>python manage.py createsuperuser</code></pre>
        </li>
         <li><strong>Create a .env file and write your secret key:</strong>
            <pre><code>SECRET_KEY=35jsdafjk37azfsajh378rfasbjek52378fhdfsgwe3453</code></pre>
        </li>
        <li><strong>Run the server:</strong>
            <pre><code>python manage.py runserver</code></pre>
        </li>
    </ol>
    <h2>Contact</h2>
    <p><a href="mailto:pmammedov@gmail.com">MailToMe</a></p>
    <p>Thank you for visiting! If you find this project helpful, please give it a star 🌟.</p>
</body>
