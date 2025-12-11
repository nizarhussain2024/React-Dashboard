export default function Chart({ data, type = 'line' }) {
  // Simplified chart component - in production use a library like recharts or chart.js
  return (
    <div className="chart-container">
      <div className="chart-placeholder">
        <h3>Chart Visualization</h3>
        <p>Type: {type}</p>
        <p>Data points: {data?.length || 0}</p>
        {/* In production, render actual chart here */}
      </div>
    </div>
  )
}
