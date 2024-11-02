import { CheckIcon } from "@heroicons/react/24/outline"

const ToDoButton = () => {
    return(
        <div className="inline-flex flex-row btn todo gap shadow">
            <div className="check-icon">
                <CheckIcon width={15} height={15} />
            </div>
            <div>
                Wykonałem/am!
            </div>
        </div>
    )
}

export default ToDoButton