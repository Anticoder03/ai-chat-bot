To set up a secure environment with your `.env` file and replace sensitive keys in your project, follow these steps:

1. **Create the `.env` File:**

   In your project root, create a file named `.env` and paste the following variables:

   ```plaintext
   PORT=3001
   MONGO_URI="your URI"
   FRONTEND_URL="http://localhost:3000"
   ```

   > **Note:** Avoid committing this file to version control, as it contains sensitive information. Add `.env` to your `.gitignore` file if it’s not there already.

2. **Replace the Gemini API Key in `Bot.js`:**

   Go to `client/src/Components/Bot.js`, locate line 21, and replace the placeholder with your actual API key. Format it as follows:

   ```javascript
   url: process.env.GEMINI_API_KEY,
   ```

3. **Add `GEMINI_API_KEY` to `.env`:**

   In your `.env` file, add the `GEMINI_API_KEY` like this:

   ```plaintext
   GEMINI_API_KEY="your_actual_api_key_here"
   ```

4. **Configure Environment Variable Access:**

   If you're using `dotenv` (in Node.js), make sure to load environment variables at the top of your server file:

   ```javascript
   require('dotenv').config();
   ```

5. **Frontend Configuration:**

   To access environment variables in the frontend, prefix them with `REACT_APP_` in `.env`. Update `.env`:

   ```plaintext
   REACT_APP_GEMINI_API_KEY="your_actual_api_key_here"
   ```

   And then update `Bot.js`:

   ```javascript
   url: process.env.REACT_APP_GEMINI_API_KEY,
   ```

This ensures your keys are securely managed while the application runs smoothly.
