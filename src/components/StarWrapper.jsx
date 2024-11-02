import { StarIcon } from "@heroicons/react/24/outline"
import { useState } from "react";
import { useTasks } from "../context/TaskContext";

const StarWrapper = ({id, rating, ratingSetter, maxStars = 10}) => {
    const [hoverIndex, setHoverIndex] = useState(null)

    const {setRating} = useTasks()

    const handleStarPick = (rtng) => {
        ratingSetter(rtng)
        
        if(id)
            setRating(id, rating)
    }

    return(
        <div className="stars-wrapper">
            {
                Array(maxStars).fill(null).map((x, i) => {
                    return(
                        <StarIcon 
                            key={"star"+i} 
                            className={`star ${i < (hoverIndex ?? rating) ? "filled" : ""}`}
                            width={22} height={22} 
                            strokeWidth={0.8}
                            fill={i < rating ? "gold" : "none"}
                            onMouseEnter={() => setHoverIndex(i + 1)}
                            onMouseLeave={() => setHoverIndex(null)}
                            onClick={() => handleStarPick(i+1)}
                        />
                    )
                })
            }
        </div>
    )
}

export default StarWrapper