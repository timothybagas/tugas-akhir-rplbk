import React from "react";
import Footer from "./Footer";

export default function Template({ children, title }) {
    return (
        <>
            <div className="p-16">
                <h2 className="text-3xl text-slate-700">{title}</h2>
                {children}
            </div>
            <Footer />
        </>
    );
}