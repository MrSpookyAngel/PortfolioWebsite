import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const MAX_NAME_LENGTH = 250;
const MAX_EMAIL_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 1024;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:3001/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200 && data.status === 1) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else if (response.status >= 400 && response.status < 500) {
        setErrorMessage(
          "Invalid input. Please check your details and try again."
        );
        setStatus("error");
      } else if (response.status >= 500 || !response.ok) {
        setErrorMessage(
          "Temporary server issue. Please try again after 5 seconds."
        );
        setStatus("error");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage(
        "Failed to send message. Please try again after 5 seconds."
      );
      setStatus("error");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status !== "idle") {
      setStatus("idle");
    }
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
        disabled={status === "sending"}
        helperText={`${formData.name.length}/${MAX_NAME_LENGTH}`}
        slotProps={{ htmlInput: { maxLength: MAX_NAME_LENGTH } }}
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
        disabled={status === "sending"}
        helperText={`${formData.email.length}/${MAX_EMAIL_LENGTH}`}
        slotProps={{ htmlInput: { maxLength: MAX_EMAIL_LENGTH } }}
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
        disabled={status === "sending"}
        helperText={`${formData.message.length}/${MAX_MESSAGE_LENGTH}`}
        slotProps={{ htmlInput: { maxLength: MAX_MESSAGE_LENGTH } }}
      />
      <Button
        type="submit"
        variant="outlined"
        size="large"
        disabled={status === "sending"}
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
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <Box sx={{ color: "success.main", mt: 2 }}>
          Message sent successfully!
        </Box>
      )}

      {status === "error" && (
        <Box sx={{ color: "error.main", mt: 2 }}>{errorMessage}</Box>
      )}
    </Box>
  );
}
