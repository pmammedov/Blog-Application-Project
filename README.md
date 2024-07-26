<body>
    <h1>Blog-Application-Project</h1>
    <p>The Blog Application Project is a full-stack web application with a backend developed using Django and a frontend developed using React. The application allows users to manage blog posts, comments, and likes. This project is designed to be used as a complete application with both frontend and backend components.</p>
     <p>Project <a href="https://github.com/users/pmammedov/projects/2">Kanban</a></p>
     <p>Live <a href="https://blog-application-project.vercel.app">Link</a></p>
    
![Screenshot 2024-07-26 173244](https://github.com/user-attachments/assets/9295a898-ecee-4bdf-834e-81e3b699975c)
    <h2>Features</h2>
    <ul>
        <li>CRUD operations for blog posts (Create, Read, Update, Delete)</li>
        <li>CRUD operations for comments on blog posts</li>
        <li>User authentication and authorization</li>
    </ul>
    <h2>Installation</h2>
    <p>To get a local copy up and running, follow these simple steps:</p>
    <h3>Backend Setup (Django)</h3>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/pmammedov/Blog-Application-Project.git</code></pre>
        </li>
        <li><strong>Navigate to the backend directory:</strong>
            <pre><code>cd Blog-Application-Project/backend</code></pre>
        </li>
        <li><strong>Create a virtual environment:</strong>
            <pre><code>python -m venv env</code></pre>
        </li>
        <li><strong>Activate the virtual environment:</strong>
            <pre><code>source env/bin/activate</code></pre>
            <p>On Windows, use:</p>
            <pre><code>env\Scripts\activate</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>pip install -r requirements.txt</code></pre>
        </li>
        <li><strong>Make Migrations:</strong>
            <pre><code>python manage.py migrate</code></pre>
        </li>
        <li><strong>Create a superuser:</strong>
            <pre><code>python manage.py createsuperuser</code></pre>
        </li>
        <li><strong>Create a .env file and add your secret key:</strong>
            <pre><code>SECRET_KEY=your_secret_key</code></pre>
        </li>
        <li><strong>Run the server:</strong>
            <pre><code>python manage.py runserver</code></pre>
        </li>
    </ol>
    <h3>Frontend Setup (React)</h3>
    <ol>
        <li><strong>Navigate to the frontend directory:</strong>
            <pre><code>cd ../frontend</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Start the React development server:</strong>
            <pre><code>npm start</code></pre>
        </li>
    </ol>
    <h3>Running the Full-Stack Application</h3>
    <p>With both the backend and frontend servers running, you can access the application by navigating to <code>http://localhost:3000</code> in your web browser.</p>
    <h2>Contact</h2>
    <p>If you have any questions or feedback, please contact me at <a href="mailto:pmammedov@gmail.com">pmammedov@gmail.com</a>.</p>
    <p>Thank you for visiting! If you find this project helpful, please give it a star 🌟.</p>
</body>
