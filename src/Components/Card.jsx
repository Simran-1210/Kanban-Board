import React from "react";
import { FaCircle } from "react-icons/fa";
import "../UI/Card.css";

const Card = ({ ticket, user, icon, statusIcon, statusColor, bgColor }) => {
    // Create initials from the user's name
    const userInitials = user?.name
        .split(" ")
        .map((word) => word.charAt(0))
        .join("");

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-id">{ticket?.id}</p>
                {user && (
                    <div
                        className="user-icon"
                        style={{ backgroundColor: bgColor }}>
                        <span className="user-initials">{userInitials}</span>
                        {user?.available !== undefined && (
                            <div
                                className={`status-indicator ${
                                    user?.available
                                        ? "available"
                                        : "not-available"
                                }`}></div>
                        )}
                    </div>
                )}
            </header>
            <div className="card-info">
                <span style={{ color: statusColor }} className="status-icon">
                    {statusIcon}
                </span>
                <p className="card-title">{ticket?.title}</p>
            </div>
            <footer className="card-footer">
                {icon && <div className="card-icon">{icon}</div>}
                <div className="card-tags">
                    <FaCircle />
                    {ticket?.tag.map((tag, index) => (
                        <p key={index} className="card-tag">
                            {tag}
                        </p>
                    ))}
                </div>
            </footer>
        </div>
    );
};

export default Card;