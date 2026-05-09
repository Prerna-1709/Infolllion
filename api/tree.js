/**
 * api/tree.js
 * Vercel Serverless Function – GET /api/tree
 * Returns the full node + edge dataset for the Interactive Tree Visualizer.
 */

const data = {
  nodes: [
    { id: "root", data: { label: "Root"  }, position: { x: 0, y: 0 } },
    { id: "a",    data: { label: "A"     }, position: { x: 0, y: 0 } },
    { id: "b",    data: { label: "B"     }, position: { x: 0, y: 0 } },
    { id: "a1",   data: { label: "A1"    }, position: { x: 0, y: 0 } },
    { id: "a2",   data: { label: "A2"    }, position: { x: 0, y: 0 } },
    { id: "b1",   data: { label: "B1"    }, position: { x: 0, y: 0 } },
    { id: "b2",   data: { label: "B2"    }, position: { x: 0, y: 0 } },
  ],
  edges: [
    { id: "root-a", source: "root", target: "a"  },
    { id: "root-b", source: "root", target: "b"  },
    { id: "a-a1",   source: "a",    target: "a1" },
    { id: "a-a2",   source: "a",    target: "a2" },
    { id: "b-b1",   source: "b",    target: "b1" },
    { id: "b-b2",   source: "b",    target: "b2" },
  ],
};

export default function handler(req, res) {
  // Allow CORS for local dev if needed
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  res.status(200).json(data);
}
