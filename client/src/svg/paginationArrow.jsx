import React from "react";
export const paginationArrow = (right, color) => (
    <svg width="17" height="28" viewBox="0 0 17 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={right ? "M2 2L14 14L2 26" : "M15 2L3 14L15 26"} stroke={color} strokeWidth="4" strokeLinecap="round"/>
    </svg>
)