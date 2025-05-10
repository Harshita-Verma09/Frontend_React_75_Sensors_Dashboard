# IoT Sensor Dashboard

This project is a simple React-based dashboard that visualizes sensor readings using a bar chart and calculates the longest contiguous window of readings that fall within a defined safe limit.

## Features

* **Displays Current Readings:** Shows a comma-separated list of the current sensor readings.
* **Adjustable Safe Limit:** Allows users to input and modify a "safe limit" value.
* **Add New Readings:** Provides an input field and button to add new sensor readings to the dataset.
* **Calculates Longest Safe Window:** Dynamically calculates and displays the length of the longest contiguous subarray of readings where the sum of the readings does not exceed the safe limit.
* **Interactive Bar Chart:** Visualizes the sensor readings as a bar chart using the Recharts library, providing a clear graphical representation of the data.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Recharts:** A composable charting library built on React components.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development (styles are applied inline for simplicity in this example, but a proper setup would involve importing the CSS).

## Getting Started

1.  **Clone the repository** (if you have one, otherwise just create a new React project).
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install react recharts
    # If you are using Tailwind CSS in a larger project, install its dependencies as well
    # npm install -D tailwindcss postcss autoprefixer
    # npx tailwindcss init -p
    ```

3.  **Create the `SensorDashboard.js` component:** If you don't have it already, create a file named `SensorDashboard.js` in your project's `src` directory (or components directory).

4.  **Copy the code:** Paste the provided `SensorDashboard.js` code into the newly created file.

5.  **Integrate into your application:** Import and use the `SensorDashboard` component in your main application file (e.g., `App.js`).

    ```jsx
    import React from 'react';
    import SensorDashboard from './SensorDashboard'; // Adjust the path if necessary

    function App() {
      return (
        <div className="App">
          <SensorDashboard />
        </div>
      );
    }

    export default App;
    ```

6.  **Run the application:**
    ```bash
    npm start
    ```

    This will typically start your React development server, and you can view the dashboard in your browser (usually at `http://localhost:3000`).

## Explanation of the Code

* **`useState` Hooks:**
    * `readings`: An array of numbers representing the sensor readings. Initialized with `[50, 70, 90, 40, 60, 80]`.
    * `limit`: A number representing the safe limit for the sum of readings in the "safe window". Initialized to `200`.
    * `newReading`: A string to hold the value entered in the "Add Reading" input field. Initialized as an empty string.

* **`getSafeWindowLength()` Function:**
    * This function calculates the length of the longest contiguous subarray within the `readings` array whose sum is less than or equal to the `limit`.
    * It uses a sliding window approach to efficiently find this maximum length.

* **`handleAddReading()` Function:**
    * This function is called when the "Add" button is clicked.
    * It parses the value from the `newReading` state.
    * If the value is a valid non-negative number, it adds the new reading to the `readings` array and clears the `newReading` input.

* **`chartData`:**
    * This is a derived state that transforms the `readings` array into an array of objects suitable for the Recharts `BarChart` component. Each object has a `name` (representing the index of the reading) and a `reading` (the sensor value).

* **JSX Structure:**
    * The component renders a `div` containing:
        * A heading "IoT Sensor Dashboard".
        * Display of the current `readings` and the `limit`.
        * An input field and button to add new readings.
        * The calculated "Longest Safe Window" length.
        * A `div` containing the `ResponsiveContainer` and `BarChart` from Recharts to visualize the `chartData`.

* **Recharts Components:**
    * `ResponsiveContainer`: Makes the chart adapt to the size of its parent container.
    * `BarChart`: The main chart component, taking `data` as a prop.
    * `CartesianGrid`: Adds a grid to the chart.
    * `XAxis`: Displays labels for the x-axis (reading index in this case).
    * `YAxis`: Displays labels for the y-axis (sensor reading values).
    * `Tooltip`: Displays information about each bar on hover.
    * `Bar`: Represents the bars in the chart, with `dataKey` specifying which key in the `data` array to use for the bar's height and `fill` for the bar color.

* **Tailwind CSS Classes:** Basic Tailwind CSS classes are used for styling the component (padding, max-width, centering, shadows, rounded corners, background color, text color, font weight, margin, and spacing). For a full Tailwind CSS setup, ensure you have configured it in your project.
