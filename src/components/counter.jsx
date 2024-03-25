import React from "react";


const formatCount = (count) => {
    return count === 0 ? "Zero" : count
}



const Counter = () => {
    const state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"],
        react: ['fullcourse', "script"]
    };



    return (
        <>

            <span className={getBadgeClasses()}>{formatCount(state.count)}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>

        </>
    )

    function getBadgeClasses() {
        let classes = "badge m-2 badge";
        classes += (state.count === 0) ? "warning" : "primary";
        return classes;
    }
}
export default Counter;
