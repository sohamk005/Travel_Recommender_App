import Entry from '../components/Entry'
import data from '../misc/data'



export default function main(){
    const entryElements = data.map((entry) => {
        return (
            <Entry
              key={entry.id}
              {...entry}
            />
        )
    }) 

    return (
        <main className="container">
            {entryElements}
        </main>
    )
}