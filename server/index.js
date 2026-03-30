import express from "express";
import env from "dotenv";
import cors from "cors";
import pkg from "pg";
import pg from "pg";

const { Pool } = pkg;

env.config();

const app = express();
const port = 5000;

// Prevent backend date timezone shifts
pg.types.setTypeParser(1082, (val) => val);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("client/dist")); // server serves react for deployment


// Database Connection
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});


// Tenants endpoints

// get all tenants details
app.get("/api/tenants", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM tenant_app.tenants");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get a single tenant details
app.get("/api/tenants/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await db.query(
            `SELECT * FROM tenant_app.tenants 
            LEFT JOIN tenant_app.properties
            ON tenant_app.tenants.property_id = tenant_app.properties.id
            WHERE tenant_app.tenants.id = $1`, 
        [id]);

        // If tenant doesn't exist
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Tenant not found!" });
        }

        res.json(result.rows[0]); // return single tenant
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

// register a new tenant
app.post("/api/tenants", async (req, res) => {
    try {
        const { 
            full_name, 
            email, 
            phone,
            property,
            room,
            currency,
            rent,
            move_in,
            lease_end
        } = req.body;

        const result = await db.query(
            `INSERT INTO tenant_app.tenants 
                (full_name, email, phone, property_id, room_number, rent_amount, move_in_date, lease_end, currency)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
             RETURNING *`,
            [full_name, email, phone, property, room, rent, move_in, lease_end, currency]
        );

        res.status(201).json(result.rows[0]); // return created tenant
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// edit a new tenant
app.put("/api/tenants/edit/:id", async (req, res) => {

});

// delete a tenant
app.delete("/api/tenants/:id", async (req, res) => {

});


// Properties endpoints

// get all properties
app.get("/api/properties", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM tenant_app.properties");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// add properties
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