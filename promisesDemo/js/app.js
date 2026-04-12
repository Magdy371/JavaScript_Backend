//Helper function
function updateOutput(id, message, status = "") {
  const output = document.getElementById(id);
  if (!output) return;

  let html = `<strong>Status:</strong>`;
  if (status === "pending") {
    html += `<span class="status pending">Pending...</span><br><br>`;
  } else if (status === "fulfilled") {
    html += `<span class="status fulfilled">Fulfilled ✅</span><br><br>`;
  } else if (status === "rejected") {
    html += `<span class="status rejected">Rejected ❌</span><br><br>`;
  }
  output.innerHTML = html + message;
}

// Example 1: Successful Fetch
async function fetchUser() {
  const outputId = "output1";
  updateOutput(outputId, "Starting request...", "pending");
  try {
    const response = await fetch("https://dummyjson.com/users");
    if (!response.ok) throw new Error("Network response was not okay");
    const data = await response.json();
    const users = data.users;
    const result =
      `✅ Fetched ${users.length} users successfully!\n\n` +
      `First user: ${users[0].firstName} (${users[0].email})`;
    updateOutput(outputId, result, "fulfilled");
  } catch (error) {
    updateOutput(outputId, `❌ Error: ${error.message}`, "rejected");
  }
}

async function fetchInvalidUrl() {
  const outputId = "output2";
  updateOutput(outputId, "Starting request to invalid URL...", "pending");
  try {
    const response = await fetch(
      "https://invalid-url-that-does-not-exist-12345.com",
    );
    if (!response.ok) throw new Error("Failed to fetch");
    updateOutput(outputId, "This should never show", "fulfilled");
  } catch (error) {
    updateOutput(
      outputId,
      `❌ Request failed!\n` +
      `Error: ${error.message}\n\n` +
      `This is how Promises handle network errors.`,
      "rejected",
    );
  }
}

async function chainPromises() {
  const outputId = "output3";
  updateOutput(outputId, "Starting promise chain...", "pending");

  try {
    const res = await fetch("https://dummyjson.com/users/1");

    if (!res.ok) {
      throw new Error("Network response was not okay");
    }

    const user = await res.json();

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const processed = {
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`.toUpperCase(),
      email: user.email,
      company: user.company?.name,
    };

    const result =
      `Step 1: Fetched user\n` +
      `Step 2: Processed data\n\n` +
      `Final result:\n${JSON.stringify(processed, null, 2)}`;

    updateOutput(outputId, result, "fulfilled");

  } catch (error) {
    updateOutput(outputId, `Error in chain: ${error.message}`, "rejected");
  }
}

async function createPost() {
  const outputId = "output4";
  updateOutput(outputId, "Sending POST request...", "pending");

  const newPost = {
    title: "Promise Post",
    body: "This post was created using JavaScript Promises and fetch()",
    userId: 1,
  };

  try {
    const response = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    const createdPost = await response.json();

    const message =
      `✅ Post created successfully!\n\n` +
      `Response from server:\n` +
      `ID: ${createdPost.id}\n` +
      `Title: ${createdPost.title}`;

    updateOutput(outputId, message, "fulfilled");

  } catch (error) {
    updateOutput(
      outputId,
      `❌ Failed to create post: ${error.message}`,
      "rejected"
    );
  }
}

// Load the examples HTML when page loads
document.addEventListener("DOMContentLoaded", async () => {
  const examplesContainer = document.getElementById("examples");

  try {
    const response = await fetch("view/components.html");
    const html = await response.text();
    examplesContainer.innerHTML = html;
  } catch (error) {
    examplesContainer.innerHTML =
      '<p style="color:red;">Failed to load examples. Please check folder structure.</p>';
    console.error("Error loading components:", error);
  }
});
