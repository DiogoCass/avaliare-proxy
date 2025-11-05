export default async function handler(req, res) {
  const allowedOrigin = "https://avaliare.github.io/saas.html";
  const scriptURL = "https://script.google.com/macros/s/AKfycbwZ3fYbX16JHRgElCEMIQ4WAgJHua1J4lr0Qs3XX3l2qt2vzjmHkQlFE4TjbFjWaZZlhQ/exec"; // ⚠️ troque pelo seu link Apps Script

  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  const response = await fetch(scriptURL, {
    method: req.method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });

  const data = await response.text();
  res.status(200).send(data);
}
