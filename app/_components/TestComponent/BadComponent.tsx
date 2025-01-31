import React, { useState, useEffect, useRef, Component } from "react";

export const BadComponent = () => {
    let [counter, setCounter] = useState(0);
    let [dataList, setDataList] = useState(data);
    let ref = useRef(null);
    const [inputValue, setInputValue] = useState(""); // Unused state variable

    // Bad: This effect runs every render because dependencies are missing
    useEffect(() => {
        console.log("Component rendered");
    });

    function handleClick() {
        setCounter(counter + 1); // Bad: Directly using counter may cause stale state issues
    }

    function handleClick() {
        setCounter(counter + 1); // Bad: Directly using counter may cause stale state issues
    }

    // Bad: Function inside render
    const inlineFunc = (id) => {
        alert("Item clicked: " + id);
    };

    // Very bad: Using dangerouslySetInnerHTML
    const htmlString = `<h1>Dangerous HTML Injection</h1>`;

    return (
        <div>
            <h1 style={{ color: "red", fontSize: "20px", fontWeight: 900 }}>
                This is a bad React component
            </h1>

            {/* Bad: No accessibility features */}
            <button
                onClick={handleClick}
                style={{ padding: "5px", border: "1px solid black", cursor: "pointer" }}
            >
                Click me (Counter: {counter})
            </button>

            {/* Bad: Rendering large arrays directly in JSX without memoization */}
            {dataList.map((item) => (
                <div key={item.id} onClick={() => inlineFunc(item.id)}>
                    {item.name}
                </div>
            ))}

            {/* Very bad: dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>

            {/* Inefficient way of referencing elements */}
            <div ref={ref}></div>

            <OldComponent />
        </div>
    );
};
