import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("https://api.pushover.net/1/messages.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: "token",
          user: "user",
          title: "New Message",
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        }),
      });

      const data = await response.json();

      if (response.status === 200 && data.status === 1) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else if (response.status >= 400 && response.status < 500) {
        console.error("Client error:", data);
        alert("Invalid input. Please check your details and try again.");
      } else if (response.status >= 500 || !response.ok) {
        console.error("Server error:", data);
        alert("Temporary server issue. Please try again after 5 seconds.");
      } else {
        throw new Error("Unexpected response.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert(
        "Failed to send message. Please check your network connection and try again later."
      );
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        margin="normal"
        required
        multiline
        rows={6}
        variant="outlined"
      />
      <Button
        type="submit"
        variant="outlined"
        size="large"
        sx={{
          marginTop: "1rem",
          fontSize: "1.1rem",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            borderColor: "secondary.main",
            bgcolor: "rgba(255, 255, 255, 0.08)",
          },
        }}
      >
        Send Message
      </Button>
    </Box>
  );
}
