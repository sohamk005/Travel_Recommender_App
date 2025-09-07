import "../css/search.css"
import React from "react"
import CriteriaList from "../components/CriteriaList"
import ClaudeLocation from "../components/ClaudeLocation"
import { getLocationFromMistral } from "../components/ai"

export default function Main() {
    const [criterias, setCriterias] = React.useState([])
    const [locationShown, setLocationShown] = React.useState(false)
    const [location, setLocation] = React.useState("")

    async function getLocation() {
        const LocationMarkdown = await getLocationFromMistral(criterias)
        setLocation(LocationMarkdown)
    }

    function addCriteria(formData) {
        const newCriteria = formData.get("criteria")
        setCriterias(prevCriterias => [...prevCriterias, newCriteria])
    }

    return (
        <main>
            <form action={addCriteria} className="add-criteria-form">
                <input
                    type="text"
                    placeholder="e.g. Asia, Beach, Budget-Friendly, ..."
                    aria-label="Add criteria"
                    name="criteria"
                />
                <button>Add criteria</button>
            </form>

            {criterias.length > 0 &&
                <CriteriaList
                    criterias={criterias}
                    getLocation={getLocation}
                />
            }

            {location && <ClaudeLocation location={location} />}
        </main>
    )
}