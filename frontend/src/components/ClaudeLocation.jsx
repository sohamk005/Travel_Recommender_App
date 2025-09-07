import "../css/ClaudeLocation.css"

export default function ClaudeLocation({ location }) {
  let parsed

  try {
    parsed = JSON.parse(location)
  } catch (err) {
    return <section className="location-error"><p>⚠️ Failed to parse location data.</p></section>
  }

  const destinations = parsed.destinations || []

  return (
    <section className="location-section">
      {destinations.length === 0 ? (
        <p>No destinations found.</p>
      ) : (
        destinations.map((dest, index) => (
          <div key={index} className="destination-card">
            <h2>{dest.name}, {dest.country}</h2>
            <p><strong>Why it matches:</strong> {dest.why_matches}</p>
            <p><strong>Best time to visit:</strong> {dest.best_time}</p>
            <p><strong>Budget:</strong> {dest.budget_category} ({dest.estimated_cost_usd})</p>
            <p><strong>Suggested length:</strong> {dest.suggested_length_days} days</p>

            <h4>Top Activities:</h4>
            <ul>
              {dest.top_activities.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>

            <h4>Travel Tips:</h4>
            <ul>
              {dest.travel_tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </section>
  )
}