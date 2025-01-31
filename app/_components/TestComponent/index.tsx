import React, { useState, useEffect, useRef, Component } from "react";

const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
];

// This class component shouldn't be mixed with functional components in one file
class OldComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentWillMount() { // Deprecated method
        console.log("Component will mount soon!");
    }

    componentDidMount() {
        document.addEventListener("click", () => {
            console.log("Clicked anywhere! Bad practice.");
        });
    }

    render() {
        return (
            <div>
                <p>Count is: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increase Count
                </button>
            </div>
        );
    }
}

const BadComponent = () => {
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

export default BadComponent;
