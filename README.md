# MERN Noteworthy 📝

This project is a full-scale import application. It was developed as a modern web application where users can create, edit and delete (CRUD operations).

[Canlı Demo'yu Görüntüle](https://mern-noteworthy.onrender.com)

## ✨ Features

- **Full CRUD Operations:** Add, read, update and delete notes.
- **Responsive Design:** Modern interface compatible with mobile and desktop.
- **Rate Limiting:** Request limiting for API security (with Upstash/Redis).
- **RESTful API:** Optimized API structure that communicates with the Backend.
- **Fast and Modern UI:** Interface developed with React and Tailwind CSS.
---
*Main Menu*
![Notes](project_images\Notes_page.png)
*Create New Note*
![Create Page](project_images\Create_Page.png)
*Update a Note*
![Update Page](project_images\Note_Detail_Page.png)

---

## 🛠️ Technologies Used.

**Frontend:**
- React.js
- Tailwind CSS
- Vite (Build aracı)

**Backend:**
- Node.js
- Express.js
- MongoDB (Veritabanı)
- Mongoose (ODM)

**Diğer:**
- Upstash (Redis for Rate Limiting)
- Render (Deployment)


### .env Setup
```env
MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```

### Build and Start
```bash
npm run build
npm run start
```