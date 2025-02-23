import express, { Request, Response } from "express";
import { rateLimit } from "express-rate-limit";
import cors from "cors";
import dotenv from "dotenv";
import winston from "winston";

dotenv.config();

const app = express();
const port = 3001;

const limiter = rateLimit({
  windowMs: 5 * 1000,
  max: 1,
  message: "Too many requests. Please try again after 5 seconds.",
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "backend/logs/messages.log" }),
  ],
});

const corsOptions = {
  origin: [
    "https://www.villanuevauniverse.com",
    "https://villanuevauniverse.com",
  ],
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "X-Requested-With"],
  credentials: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.set("trust proxy", 1);

const PUSHOVER_API_URL = "https://api.pushover.net/1/messages.json";
const PUSHOVER_APP_API_TOKEN = process.env.PUSHOVER_APP_API_TOKEN;
const PUSHOVER_USER_KEY = process.env.PUSHOVER_USER_KEY;

app.post("/api/send-message", limiter, async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name) {
    res.status(400).json({ error: "Name is required" });
  } else if (!email) {
    res.status(400).json({ error: "Email is required" });
  } else if (!message) {
    res.status(400).json({ error: "Message is required" });
  } else if (name.length > 250) {
    res.status(400).json({ error: "Name limited to 250 characters" });
  } else if (email.length > 100) {
    res.status(400).json({ error: "Email limited to 100 characters" });
  } else if (message.length > 1024) {
    res.status(400).json({ error: "Message limited to 1024 characters" });
  }

  logger.info({ name, email, message, timestamp: new Date().toLocaleString() });

  try {
    const response = await fetch(PUSHOVER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: PUSHOVER_APP_API_TOKEN,
        user: PUSHOVER_USER_KEY,
        title: name,
        message: message,
        url: `mailto:${email}`,
        url_title: "Reply by email",
      }),
    });

    const data = await response.json();

    res.status(response.status).json({ status: data.status });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
