import express from "express";
import axios from "axios";
import env from "dotenv";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;

env.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("client/dist")); // server serves react for deployment


// Database Connection
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});


// Tenants endpoints
app.get("/api/tenants", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM tenant_app.tenants");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/tenants/:id", async (req, res) => {

});

app.post("/api/tenants", async (req, res) => {

});

app.put("/api/tenants/:id", async (req, res) => {

});

app.delete("/api/tenants/:id", async (req, res) => {

});


// Properties endpoints
app.get("/api/properties", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM tenant_app.properties");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/properties", async (req, res) => {

});


// Email endpoint
app.post("/api/send-email", async (req, res) => {

});


// Document endpoint
app.post("/api/upload-document", async (req, res) => {

});


// Server listener
app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});