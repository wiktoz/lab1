import { PlusIcon } from "@heroicons/react/24/outline"

const AddButton = () => {
    return(
        <div className="inline-flex flex-row btn gap todo shadow">
            <div className="check-icon">
                <PlusIcon width={15} height={15} />
            </div>
            <div>
                Dodaj nowe zadanie
            </div>
        </div>
    )
}

export default AddButton