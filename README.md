# 🤖 AI-Powered Reddit User Persona Generator

This script analyzes a Reddit user's public activity to automatically generate a detailed, data-driven user persona. It uses the Google Gemini LLM for analysis and outputs a self-contained, visual HTML report that requires no server to view.

![Project Screenshot](screenshot.png)
_This is an example of the final HTML output._

---

## 📋 Table of Contents

-   [Project Overview](#-project-overview)
-   [Features](#-features)
-   [File Structure](#-file-structure)
-   [Technologies Used](#-technologies-used)
-   [Setup Guide](#-setup-guide)
-   [How to Run](#-how-to-run)
-   [How It Works: The "No-Server" Method](#-how-it-works-the-no-server-method)

---

## 📝 Project Overview

This tool was developed to fulfill an internship assignment requiring the automated creation of user personas from social media data. It takes a Reddit user's profile URL as input, scrapes their recent comments and posts, and leverages a Large Language Model to synthesize this information into a structured persona.

The final output is a clean `.txt` report and a portable `.html` file that presents the persona in a professional, easy-to-read format, complete with citations for every data point.

---

## ✨ Features

-   **URL Input:** Accepts any standard Reddit user profile URL.
-   **Automated Scraping:** Efficiently gathers public comments and posts using the PRAW library.
-   **AI-Powered Analysis:** Employs the Google Gemini LLM for nuanced analysis of the user's language, interests, and motivations.
-   **Data-Driven Citations:** The AI is specifically prompted to provide a citation for every insight, grounding the analysis in real data.
-   **Self-Contained Visual Output:** Generates a single `.html` file with all data and scripts embedded, eliminating the need for local servers or complex setup for viewing.

---

## 📂 File Structure

The project is organized with the following key files:

```.
├── 📜 persona_generator.ipynb     # The main Jupyter Notebook with all Python code.
├── 📄 README.md                   # This instruction file.
├── 🎨 style.css                   # The CSS for the visual persona.
├── 📄 template.html              # The HTML template used by the Python script.
├── 🖼️ screenshot.png              # A sample screenshot of the output for the README.
└── 👤 [username]_persona.html     # The generated self-contained persona file (e.g., kojied_persona.html).
```

---

## 🛠️ Technologies Used

-   **Language:** Python 3
-   **Core Libraries:**
    -   `praw`: For Reddit API interaction.
    -   `google-generativeai`: For Google Gemini API interaction.
    -   `json`, `re`: For data handling and parsing.
-   **Frontend:** HTML5, CSS3, and vanilla JavaScript.

---

## 🚀 Setup Guide

Before running the script, please complete the following one-time setup.

### 1. Prerequisites

-   Ensure you have **Python 3** installed on your system.
-   A modern web browser (Chrome, Firefox, etc.).

### 2. Install Python Libraries

The required libraries can be installed by running this command in your terminal:

```bash
pip install praw google-generativeai
```

### 3. Obtain API Credentials

The script needs API keys from both Reddit and Google.

-   **Reddit API Key:**
    1.  Log into your Reddit account and go to [App Preferences](https://www.reddit.com/prefs/apps).
    2.  Click "**create another app...**" at the bottom.
    3.  Fill out the form:
        -   Name: `Persona Generator` (or any name)
        -   Type: Select **`script`**.
        -   Redirect URI: Enter `http://localhost:8080` (this is just a placeholder).
    4.  Click "create app". You will now have your **`client ID`** and your **`client secret`**.
    5.  You also need a **`user agent`** string, which you create yourself. A good format is `windows:PersonaGenerator:v1.0 (by /u/YourRedditUsername)`.

-   **Google AI API Key:**
    1.  Go to [Google AI Studio](https://aistudio.google.com/).
    2.  Log in and click "**Get API key**" > "**Create API key**".
    3.  Copy the generated key.
    4.  **Important:** For the key to work reliably, you may need to [enable billing on your Google Cloud project](https://cloud.google.com/billing/docs/how-to/enable-billing). The cost for this project is negligible.

### 4. Ensure `template.html` Exists

This project requires a `template.html` file in the same folder as your notebook. This file provides the basic layout for the final output. Please ensure you have created it as specified in the project development.

---

## 💡 How to Run

1.  **Run the Jupyter Notebook:** Open and execute `persona_generator.ipynb`.
2.  **Enter Credentials:** The script will securely prompt you to enter your four API credentials.
3.  **Enter Reddit URL:** Next, paste the full profile URL of the Reddit user you wish to analyze (e.g., `https://www.reddit.com/user/kojied/`).
4.  **Process Complete:** The script will print its progress and confirm when it's done.
5.  **View the Persona:**
    -   Navigate to your project folder.
    -   Find the newly created file named **`[username]_persona.html`** (e.g., `kojied_persona.html`).
    -   **Double-click this file.** It will open directly in your web browser, fully rendered.

---

## ⚙️ How It Works: The "No-Server" Method

This project uses a self-contained architecture to avoid the common hassle of running a local server to view the output.

1.  The Python script reads the static `template.html` file.
2.  After the AI generates the persona, the Python script parses this text into a structured JSON format in memory.
3.  This JSON data is then converted into a string and injected directly into a `<script>` tag within the HTML template.
4.  Finally, this complete HTML string—containing the layout, styles, and all its required data—is saved as a new `[username]_persona.html` file.

When you open this file, the JavaScript reads the data from the embedded `<script>` tag instead of fetching an external file, thus bypassing all browser security restrictions.