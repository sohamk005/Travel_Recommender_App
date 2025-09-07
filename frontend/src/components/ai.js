const SYSTEM_PROMPT = `
You are an expert travel planner. You will receive a list of user criteria (keywords, interests, constraints).
Return ONLY a JSON object with a single top-level key "destinations" containing an array of up to 3 destination objects.
Each destination object MUST contain these keys:
  - name (string)
  - country (string)
  - why_matches (string)
  - best_time (string)
  - budget_category (string)
  - estimated_cost_usd (string)
  - top_activities (array)
  - travel_tips (array)
  - suggested_length_days (number)

Return VALID JSON only (no extra prose, no markdown). Example:
{
  "destinations": [
    {
      "name": "Kyoto",
      "country": "Japan",
      "why_matches": "...",
      "best_time": "Mar-May, Oct-Nov",
      "budget_category": "medium",
      "estimated_cost_usd": "1000-1600 USD",
      "top_activities": ["See temples", "Cherry blossom viewing"],
      "travel_tips": ["Buy rail pass", "Book temples early"],
      "suggested_length_days": 4
    }
  ]
}
`

export async function getLocationFromMistral(criteriasArr) {
  const criteriaString = criteriasArr.join(", ")
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `I have these criterias ${criteriaString}. Please give me a Travel Locations you'd recommend to visit!` },
        ],
        max_tokens: 1024,
      }),
    })
    const data = await response.json()
    return data.choices[0].message.content
  } catch (err) {
    console.error("Error fetching location:", err.message)
  }
}