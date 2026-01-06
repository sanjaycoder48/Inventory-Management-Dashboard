# 📋 Project Master Task List

This file contains every single task needed to build the full application.

## 🗄️ Database (PostgreSQL)
- [ ] **Init**: Create Database `inventory_dashboard`
- [ ] **Schema**: Create Tables in `backend/schema.sql` and run them:
    - [ ] `users` (id, name, email, password, created_at)
    - [ ] `categories` (id, name, description)
    - [ ] `products` (id, name, sku, category_id, price, stock_quantity, min_stock_level, image_url)
    - [ ] `movements` (id, product_id, type [IN/OUT], quantity, reason, date)

## 🛠️ Backend (Node.js + Express)
- [ ] **Setup**:
    - [ ] Create `.env` file with `DB_PASSWORD`, `DB_USER`, `PORT`
    - [ ] Implement `db.js` using `pg` Pool
- [ ] **API Development**:
    - [ ] **Auth**: `POST /api/login` (Mock or real JWT)
    - [ ] **Products**:
        - [ ] `GET /api/products` (List all)
        - [ ] `POST /api/products` (Create)
        - [ ] `PUT /api/products/:id` (Update stock/details)
        - [ ] `DELETE /api/products/:id` (Remove)
    - [ ] **Dashboard**:
        - [ ] `GET /api/stats` (Returns total counts, low stock alerts)

## 🎨 Frontend (React + Tailwind)
- [ ] **Foundation**:
    - [ ] verify `index.css` has Tailwind directives
    - [ ] Setup `App.jsx` with `react-router-dom` (Routes: /, /inventory, /add)
- [ ] **Components**:
    - [ ] `Sidebar.jsx`: Navigation menu with styling
    - [ ] `StatsCard.jsx`: For showing "Total Products", "Low Stock"
    - [ ] `ProductTable.jsx`: Table to display the list
- [ ] **Pages**:
    - [ ] **Dashboard.jsx**:
        - [ ] Fetch stats from backend
        - [ ] Render 3-4 StatsCards
    - [ ] **Inventory.jsx**:
        - [ ] Fetch products from backend
        - [ ] Render ProductTable
        - [ ] Add "Search" input
    - [ ] **AddProduct.jsx**:
        - [ ] Create form (Name, Price, Quantity, Category)
        - [ ] Handle `onSubmit` to POST data to backend

## 🚀 Final Polish
- [ ] **Connection**: Ensure Frontend fetches successfully from Backend
- [ ] **Error Handling**: Show "Network Error" if backend is down
- [ ] **Design**: Add hover effects and simple transitions
