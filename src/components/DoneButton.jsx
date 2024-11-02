import { CheckIcon } from "@heroicons/react/24/outline"

const DoneButton = () => {
    return(
        <div className="inline-flex flex-row btn gap">
            <div className="check-icon">
                <CheckIcon width={15} height={15} />
            </div>
            <div>
                Wykonano
            </div>
        </div>
    )
}

export default DoneButton