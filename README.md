# Hope_Store
https://reinhardbatubara.github.io/Hope_Store/

# README - HOPE STORE Cashier Application

# Overview
HOPE STORE is a simple cashier application designed to streamline the process of adding products to a cart, calculating the total cost, and managing payments. The application features a user-friendly interface with dropdown menus for product selection, input fields for quantity and payment, and dynamic updates for total prices and change.

# Features
1. **Product Selection**: Users can select products from a dropdown menu which automatically updates the price field.
2. **Cart Management**: Users can add items to the cart with specified quantities. Each added item is displayed in a table with the product name, price, quantity, and total cost.
3. **Total Calculation**: The application calculates the total cost of items in the cart.
4. **Payment Handling**: Users can input the amount paid, and the application calculates and displays the change.
5. **Sale Completion**: Users can complete the sale and reset the cart for a new transaction.
6. **Responsive Design**: The application is designed to be responsive and user-friendly on various devices.

# File Structure
- **index.html**: The main HTML file containing the structure of the application.
- **styles.css**: The CSS file providing styling for the application, ensuring a clean and modern look.
- **script.js**: The JavaScript file containing the functionality to update prices, add items to the cart, calculate totals, handle payments, and reset the application.

# Detailed Description
1. **HTML Structure**:
   - The HTML file contains a form for selecting products and entering quantities.
   - A table is used to display the items added to the cart.
   - Additional input fields and buttons are provided for handling payment and completing the sale.

2. **CSS Styling**:
   - The CSS file ensures a visually appealing and user-friendly interface.
   - Responsive design is achieved using media queries to adjust the layout for different screen sizes.
   - Custom styles are applied to elements such as buttons, input fields, and tables to enhance usability and aesthetics.

3. **JavaScript Functionality**:
   - **updatePrice()**: Updates the price field based on the selected product.
   - **addItem()**: Adds the selected product and quantity to the cart and updates the total cost.
   - **completeSale()**: Handles the completion of a sale, including calculating and displaying the change.
   - **reset()**: Resets the application for a new transaction by clearing the cart and input fields.

# Usage Instructions
1. Open `index.html` in a web browser.
2. Select a product from the dropdown menu. The price will automatically update.
3. Enter the desired quantity and click "Add Item" to add it to the cart.
4. The cart will display the added items with their details and the total cost.
5. Enter the amount paid in the provided field to calculate the change.
6. Click "Complete Sale" to finalize the transaction or "Reset" to clear the cart and start a new transaction.

# Conclusion
HOPE STORE is a straightforward and efficient application for managing product sales, designed with usability and responsiveness in mind. It provides essential features for a small-scale cashier system, making it a practical solution for simple sales management.