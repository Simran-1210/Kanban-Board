import "../UI/Navbar.css";
import { MdOutlineTune } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const groupOptions = [
    { label: "Status", value: "status" },
    { label: "User", value: "user" },
    { label: "Priority", value: "priority" },
];

const orderOptions = [
    { label: "Priority", value: "priority" },
    { label: "Title", value: "title" },
];

const Navbar = ({ group, order, onGroupchange, onOrderChange }) => {
    const [expandMore, setExpandMore] = useState(false);

    const handleGroupChange = (e) => {
        onGroupchange(e.target.value);
    };

    const handleOrderChange = (e) => {
        onOrderChange(e.target.value);
    };

    return (
        <div className="nav">
            <div
                className="expand_btn"
                onClick={() => setExpandMore((prev) => !prev)}>
                <MdOutlineTune />
                <span>Display</span>
                <FaAngleDown />
            </div>
            {expandMore && (
                <div className="dropdown">
                    <div className="display">
                        <p>Grouping</p>
                        <select
                            name="group"
                            id="groupBy"
                            value={group}
                            onChange={handleGroupChange}>
                            {groupOptions.map((opt, i) => (
                                <option key={i} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="display">
                        <p>Ordering</p>
                        <select
                            name="order"
                            id="orderBy"
                            value={order}
                            onChange={handleOrderChange}>
                            {orderOptions.map((opt, i) => (
                                <option key={i} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;