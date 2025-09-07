import "../css/CriteriaList.css"

export default function CriteriaList(props) {
    const criteriasListItems = props.criterias.map(criteria => (
        <li key={criteria}>{criteria}</li>
    ))
    return (
        <section>
            <h2>Criterias on hand:</h2>
            <ul className="criterias-list" aria-live="polite">{criteriasListItems}</ul>
            {props.criterias.length > 3 && <div className="get-location-container">
                <div>
                    <h3>Ready for the Best Travel locations?</h3>
                    <p>Get locations according to your list of criterias.</p>
                </div>
                <button onClick={props.getLocation}>Get a location</button>
            </div>}
        </section>
    )
}
