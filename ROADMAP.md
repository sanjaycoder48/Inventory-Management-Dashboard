# Inventory Dashboard Implementation Roadmap

## 1. Backend & Database
- [ ] **Schema**: Define `products` table in `backend/schema.sql`
- [ ] **Config**: Create `.env` and setup `backend/db.js`
- [ ] **Server**: Setup Express basics in `backend/server.js`
- [ ] **API**: Create `GET /products` and `POST /products` in `backend/routes/inventoryRoutes.js`

## 2. Frontend Structure
- [ ] **Routing**: Setup `BrowserRouter`, `Routes` in `frontend/src/App.jsx`
- [ ] **Layout**: Build `Sidebar.jsx` and `Header.jsx`
- [ ] **Styles**: Verify Tailwind is working in `frontend/src/index.css`

## 3. Core Features
- [ ] **Dashboard**: Show static stats in `Dashboard.jsx`
- [ ] **Inventory List**: Fetch data from API and display in `Inventory.jsx`
- [ ] **Add Product**: Create form in `AddProduct.jsx` and handle form submission
