/**
 * api/health.js
 * Vercel Serverless Function – GET /api/health
 * Simple health-check endpoint.
 */

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
}
