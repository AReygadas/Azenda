const express = require('express');
// import express from 'express'
// const MailService = require('./../Services/MailService');
// const resend = require('resend');

const router = express.Router();
// const service = new MailService();
// const Resend = require("resend");
// const resend = new Resend("re_123456789"); 
router.get("/", async (req, res) => {
  // try {
  //   const { data } = await resend.emails.send({
  //     from: "Acme <onboarding@resend.dev>",
  //     to: ["delivered@resend.dev"],
  //     subject: "hello world",
  //     html: "<strong>it works!</strong>",
  //   });
  //   res.status(200).json({ data });
  // } catch (error) {
  //   console.error(error); // Log the error for debugging
  //   res.status(500).json({ error: "Internal server error" }); // Send generic error to client
  // }
});

module.exports = router;