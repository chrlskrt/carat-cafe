# :gem: Carat Cafe

Welcome to **Carat Cafe**, a website dedicated to Carats (fans of SEVENTEEN) where you can purchase all things SEVENTEEN! Currently, the store features albums and photocards, with plans to expand to more SEVENTEEN-related merchandise in the future.

---

## :boom: Features
- Browse and purchase SEVENTEEN albums.
- Explore a wide range of SEVENTEEN photocards.
- Dynamic content management using a local JSON file for the product database.

---

## :computer: Technologies Used
- **HTML**: Structure of the web pages.
- **CSS**: Styling for an enhanced user experience.
- **JavaScript**: Dynamic functionality and interaction with the local JSON database.
- **JSON**: Local storage for product data, accessed by JavaScript.

---

## :hammer_and_wrench: Installation
To run the project and access the local JSON database, you will need to use a live server, as modern browsers block direct file access for JSON files.

### Steps:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/chrlskrt/carat-cafe.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd carat-cafe
   ```

3. **Install a live server**:
   - If you are using Visual Studio Code, install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

4. **Launch the live server**:
   - Open the project folder in Visual Studio Code.
   - Right-click on the `index.html` file and select **"Open with Live Server"**.

5. **Access the website**:
   - The website will open in your default browser, typically at `http://127.0.0.1:5500/` or similar.

6. **Verify JSON loading**:
   - The JavaScript file (`js/script.js`) will fetch product data from `data/product_items.json` and render it dynamically on the page.

---

## :memo: Future Plans
- Add a broader range of SEVENTEEN merchandise.
- Implement a shopping cart feature.
- Provide user authentication for a personalized experience.
- Transition to a backend database for scalability.

---

## :paperclip: Contribution
Feel free to contribute to Carat Cafe! Fork the repository, make your changes, and submit a pull request.

---

**Thank you for visiting Carat Cafe! Let’s keep supporting SEVENTEEN together!**

