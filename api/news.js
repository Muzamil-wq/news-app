// /api/news.js
export default async function handler(req, res) {
  try {
    const apiKey = process.env.VITE_GNEWS_API_KEY; // use your GNews key in Vercel env
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?lang=en&country=us&max=10&token=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`GNews API error: ${response.status}`);
    }
    console.log("🔑 API Key:", apiKey);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Error in API route:", err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
