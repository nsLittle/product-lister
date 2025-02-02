```markdown
# Product Lister - Full-Stack Next.js & Express Application

## 🚀 Overview
**Product Lister** began as a **bootcamp project**, originally built using **Redux** for state management. As part of my learning journey, I **refreshed, refactored, and downsized** the application into a **React Next.js app**, replacing Redux with **React Context API** for a simpler and more scalable architecture.

This project now serves as a **learning tool** for mastering **Next.js, API integration, state management, and backend database interactions**, while being fully **deployable on Heroku** as a monorepo.

---

## Product List
This project was created by **Mutsumi Hata**, a student at **Parsity**, an online software engineering program. The work in this repository is wholly of the student based on a sample starter project that can be accessed by looking at the repository that this project forks.

If you have any questions about this project or the program in general, visit [parsity.io](https://parsity.io/) or email **hello@parsity.io**.

### Project Description
This full-stack project was created using **Node Express** for the backend and **React Next.js** for the frontend. Using **fake data generated from Faker.js**, this project mimics an online product list.

The project initially used **Redux** for state management but has since been refactored to use **React Context API**, making it **lighter and more efficient**.

The project currently has **reviews stored in the backend for each product**. This has not been tied in with the frontend for rendering at the moment.

This can ultimately be built into an **online store** with **shopping carts, user authentication, and order histories**.

---

## 🛠 Tech Stack
- **Frontend:** Next.js (App Router), React, Server Components
- **Backend:** Node.js, Express.js, REST API
- **Database:** MongoDB, Mongoose (ODM)
- **Data Seeding:** Faker.js (Mock Data Generation)
- **State Management:** React Context API (Refactored from Redux)
- **Styling:** CSS Modules / Tailwind CSS (optional)
- **Deployment:** Heroku (Full-Stack Monorepo)
- **API Documentation:** Swagger (OpenAPI 3.0)

---

## 📌 Features
- ✅ **Product Listing** – Dynamically generated **fake products** using Faker.js.
- ✅ **Product Details Page** – View individual product details including images, category, and price.
- ✅ **Reviews System** – Users can **view and submit** product reviews (stored in MongoDB).
- ✅ **Filtering & Sorting** – Products can be filtered by **category, price range, and name**.
- ✅ **Pagination** – Supports **paginated results** for better performance.
- ✅ **RESTful API** – Fully functional API with endpoints for **products and reviews**.
- ✅ **Full-Stack Deployment** – Ready to be deployed on **Heroku** as a monorepo.
- ✅ **Modern Next.js Features** – Uses **server-side rendering (SSR)** for fast performance.

---

## 📂 Project Structure
```
product-lister/
│── server/                  # Backend
│   ├── models/              # Mongoose schemas
│   │   ├── Product.js
│   │   ├── Review.js
│   ├── routes/              # API routes
│   │   ├── productRoutes.js
│   │   ├── reviewRoutes.js
│   ├── config/              # Database connection
│   ├── utils/               # Utility scripts (faker.js seeding)
│   │   ├── seedData.js
│   ├── .env                 # Environment variables
│   ├── server.js            # Express backend setup
│
│── client/                  # Frontend (Next.js App Router)
│   ├── app/
│   │   ├── layout.js        # Global layout
│   │   ├── page.js          # Homepage (Product List)
│   │   ├── product/[id].js  # Product detail page
│   ├── components/          # Reusable UI components
│   ├── styles/              # CSS styles
│   ├── context/             # Global state management
│   ├── next.config.js       # Next.js configuration
│
│── package.json             # Project dependencies
│── Procfile                 # Heroku deployment config
│── README.md                # Documentation
│── swagger.yaml             # API Documentation (Swagger/OpenAPI)
```

---

## 🛠 How to Run the Application Locally

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/nsLittle/product-lister.git
cd product-lister
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in `server/` and add:
```env
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

### **4️⃣ Seed the Database (Optional)**
Run the Faker.js script to generate sample products:
```bash
node server/utils/seedData.js
```

### **5️⃣ Start the Backend Server**
```bash
npm run dev
```
The backend will run at **`http://localhost:8000/`**.

### **6️⃣ Start the Frontend**
```bash
cd client
npm run dev
```
The frontend will be available at **`http://localhost:3000/`**.

---

## 🛠 API Documentation
For a complete list of API endpoints, refer to `swagger.yaml`. To view it in Swagger UI:
```bash
npm install -g swagger-ui
swagger-ui server/docs/swagger.yaml
```

Key Endpoints:
- `GET /api/products` → Fetch all products (supports pagination & filtering)
- `GET /api/products/:id` → Fetch a single product
- `POST /api/reviews/:productId` → Submit a review
- `GET /api/reviews/:productId` → Get all reviews for a product

---

## 🔧 Future Enhancements
1. **User Authentication** – Enable user logins for review submission.
2. **Better Filtering** – More advanced filtering by attributes like brand, rating, etc.
3. **Styling Enhancements** – Improved UI/UX with Tailwind CSS.
4. **GraphQL API** – Convert REST API to GraphQL for optimized data fetching.
5. **Admin Dashboard** – Manage products and reviews via an admin panel.

---

## 💡 Contact Me
🔗 [GitHub](https://github.com/nsLittle)  
🔗 [LinkedIn](https://www.linkedin.com/in/mutsumihata)  

---
This **Next.js & Express Product Lister** is an ongoing project, continuously evolving to enhance functionality and user experience!
```