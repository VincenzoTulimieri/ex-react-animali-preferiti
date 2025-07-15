

const { createRoot } = ReactDOM
const animalListElement = document.querySelector('.lista-animali')
const root = createRoot(animalListElement)
root.render(<AnimalList />)


function AnimalList() {
    return (
        <>
            <div className="list-container">
                <p>ecco la lista</p>
            </div>
        </>
    )
}