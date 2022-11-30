import React from "react";
import Footer from "./Footer";

export default function Template({ children }) {
    return (
        <>
            <div className="p-16">
                {children}
            </div>
            <Footer />
        </>
    );
}