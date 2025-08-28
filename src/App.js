import React, { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);

  // Fetch top headlines from NewsAPI (BBC-like)
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f2d89489bb341509258f340031e6af3"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f4f4f4", margin: 0 }}>
      {/* BBC-style header */}
      <header style={{ background: "#bb1919", color: "white", padding: "15px 30px" }}>
        <h1 style={{ margin: 0, fontSize: "28px" }}>BBC News Clone</h1>
      </header>

      {/* News Section */}
      <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        {news.length === 0 ? (
          <p>Loading news...</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {news.map((article, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                {/* Show image if available */}
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                  />
                )}

                <div style={{ padding: "15px" }}>
                  <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
                    {article.title}
                  </h2>
                  <p style={{ fontSize: "14px", color: "#333" }}>
                    {article.description || "No description available."}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "10px",
                      color: "#bb1919",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    ➡ Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
