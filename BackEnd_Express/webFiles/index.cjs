const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const url = "https://api.github.com/users/github"; //"https://jsonplaceholder.typicode.com/users";
const fileName = path.join(__dirname, "content.txt");

function checkError(err) {
  console.error(`Error: ${err}`);
}

async function fetchAndSave() {
  let response;
  try {
    response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
          "AppleWebKit/537.36 (KHTML, like Gecko) " +
          "Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
      responseType: "text",
    });
  } catch (err) {
    checkError(err);
  }
  // 2. Log response type + body (mirrors fmt.Printf / fmt.Println)
  console.log(`response Type: ${response.constructor.name}`);
  const content = response.data;
  console.log(content);

  // 3. Write to file (mirrors os.Create + io.WriteString)
  try {
    fs.writeFileSync(fileName, content, "utf-8");
    console.log(`file name: ${fileName}\n created`);
  } catch (err) {
    checkError(err);
  }
  // 4. Read file back (mirrors os.ReadFile)
  let fileContent;
  try {
    fileContent = fs.readFileSync(fileName, "utf-8");
    console.log(`file content: ${fileContent}`);
  } catch (err) {
    checkError(err);
  }
  return { content, fileContent };
}

// ─────────────────────────────────────────────────────────────
// Routes
// -------------------------------------------------------------

app.get("/fetch-user", async (req, res) => {
  try {
    const { content } = await fetchAndSave();
    res.json({
      success: true,
      savedTo: fileName,
      data: JSON.parse(content), // parsed for nicer API response
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/read-file", async (req, res) => {
  try {
    if (!fs.existsSync(fileName)) {
      return res.status(404).json({
        success: false,
        error: "content.txt not found — call /fetch-user first",
      });
    }
    const fileContent = fs.readFileSync(fileName, "utf-8");
    res.json({ success: true, data: JSON.parse(fileContent) });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Failed to start server: ${err}`);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
