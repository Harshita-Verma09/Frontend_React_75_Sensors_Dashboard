import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const SensorDashboard = () => {
    const [readings, setReadings] = useState([50, 70, 90, 40, 60, 80]);
    const [limit, setLimit] = useState(200);
    const [newReading, setNewReading] = useState("");

    const getSafeWindowLength = () => {
        let left = 0, sum = 0, maxLength = 0;
        for (let right = 0; right < readings.length; right++) {
            sum += readings[right];
            while (sum > limit) {
                sum -= readings[left];
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    };

    const handleAddReading = () => {
        const value = Number(newReading);
        if (!isNaN(value) && value >= 0) {
            setReadings([...readings, value]);
            setNewReading("");
        }
    };

    // Convert readings into chart-friendly data
    const chartData = readings.map((val, idx) => ({
        name: `#${idx + 1}`,
        reading: val,
    }));

    return (
        <div className="p-6 max-w-xl mx-auto shadow-lg rounded-xl bg-slate-900 text-white">
            <h2 className="text-2xl font-bold mb-4">IoT Sensor Dashboard</h2>
            
            <div>
                <p className="mb-2">Readings: {readings.join(", ")}</p>

                <label className="block mb-2">
                    Safe Limit:
                    <input
                        type="number"
                        value={limit}
                        onChange={(e) => setLimit(Number(e.target.value))}
                        className="ml-2 border px-2 py-1 text-white"
                    />
                </label>

                <label className="block mb-2 mt-4">
                    Add Reading:
                    <input
                        type="number"
                        value={newReading}
                        onChange={(e) => setNewReading(e.target.value)}
                        className="ml-2 border px-2 py-1 text-white"
                    />
                    <button
                        onClick={handleAddReading}
                        className="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Add
                    </button>
                </label>

                <p className="mt-4 font-semibold">
                    Longest Safe Window: {getSafeWindowLength()} readings
                </p>
            </div>

            {/* Chart */}
            <div className="mt-6 h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip />
                        <Bar dataKey="reading" fill="#38bdf8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SensorDashboard;
