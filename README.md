🪪 Project Identity
Field	Detail
Project Title	FOSSEE Workshop Portal — UI/UX Redesign
Student Name	Nirmal Kalbande
Institution	    Pimpri Chinchwad University
Program	B.Tech — Computer Science Engineering
Fellowship	FOSSEE Fellowship — IIT Bombay
Task Type	Portal Redesign Task
Primary Stack	React (Vite) + Django 



🧠 Design Decisions & Improvements
🎯 What design principles guided your improvements?

While improving the UI, I mainly focused on keeping the design simple and easy to use. I avoided adding unnecessary elements so that users can quickly understand how to navigate the website.

I also tried to maintain consistency across all pages by using similar colors, fonts, and layouts. Another important aspect was making sure that important elements like buttons and headings are clearly visible so that users can interact with them easily.

Overall, my goal was to make the interface clean, readable, and user-friendly.

📱 How did you ensure responsiveness across devices?

To make the website work properly on different screen sizes, I used CSS features like Flexbox and media queries.

I tested the UI using browser developer tools for different screen sizes such as mobile, tablet, and desktop. Based on that, I adjusted spacing, alignment, and layout so that the content does not break on smaller screens.

I also ensured that components like the navbar and cards adjust properly and remain usable on mobile devices.

⚖️ What trade-offs did you make between design and performance?

While improving the design, I made sure not to overuse heavy styling or animations because that can affect performance.

Instead of adding complex animations or large assets, I focused more on simple and clean UI improvements. This helped in maintaining a balance between better appearance and fast loading time.

🧩 What was the most challenging part and how did you approach it?

The most challenging part was making the layout responsive, especially for smaller screens. Some elements were not aligning properly, and fixing that required multiple adjustments.

To solve this, I worked step by step by modifying CSS properties and checking the results in different screen sizes. I also restructured some components to make them more flexible.

It took some trial and error, but eventually the layout became more stable and consistent across devices.


## 🖼️ Visual Journey — Before & After

### 🔴 Before
![Before UI](screenshots/Before_Screenshot.png)

---

### 🟢 After

#### Sign-in Page
![After 1](screenshots/After_Screenshot0.png)

#### Workshops Page
![After 2](screenshots/After_Screenshot3.png)

#### Booking Page
![After 3](screenshots/After_Screenshot4.png)

#### Additional Improvements
![After 4](screenshots/After_Screenshot1.png)
![After 5](screenshots/After_Screenshot2.png)



👇

🚀 Setup Requirements
📌 Prerequisites

Make sure the following are installed on your system:

Python (>= 3.8)
Node.js (>= 16)
npm (comes with Node.js)
Git
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Nirmal-Kalbande/workshop-booking-system.git
cd workshop-booking-system
2️⃣ Backend Setup (Django)
# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start backend server
python manage.py runserver
3️⃣ Frontend Setup (React)
cd frontend

# Install dependencies
npm install

# Start frontend server
npm run dev
🌐 Running the Project
Backend runs on: http://127.0.0.1:8000
Frontend runs on: http://localhost:5173
📝 Notes
Make sure backend is running before using frontend
If any error occurs, reinstall dependencies
Use a modern browser like Chrome