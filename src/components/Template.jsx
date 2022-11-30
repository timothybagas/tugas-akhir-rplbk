import React from "react";

export default function Template({ children }) {
    return (
        <div className="bg-slate-200">
            {children}
        </div>
    );
}