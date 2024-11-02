import { XMarkIcon } from "@heroicons/react/24/outline"

const OutdatedButton = () => {
    return(
        <div className="inline-flex flex-row btn outdated gap">
            <div className="check-icon">
                <XMarkIcon width={15} height={15} />
            </div>
            <div>
                Przeterminowane
            </div>
        </div>
    )
}

export default OutdatedButton