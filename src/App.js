import React, { useState } from "react";
import './App.css';
import { Slider, Button } from "@mui/material";

export default function RGBPalette() {
    const [r, setR] = useState(255);
    const [g, setG] = useState(255);
    const [b, setB] = useState(255);
    const [saved, setSaved] = useState("rgb(255,255,255)");

    const current = `rgb(${r}, ${g}, ${b})`;

    const sliders = [
        { label: "R", value: r, set: setR, className: "slider-red" },
        { label: "G", value: g, set: setG, className: "slider-green" },
        { label: "B", value: b, set: setB, className: "slider-blue" },
    ];

    return (
        <div className="app-container">
            <h1 className="title">Wzornik kolorów RGB</h1>

            <div className="big-rectangle" style={{ backgroundColor: current }} />

            <p className="instruction">Dobierz kolor suwakami i zapisz przyciskiem:</p>

            <div className="sliders">
                {sliders.map(({ label, value, set, className }) => (
                    <div key={label} className="slider-row">
                        <span className="slider-label">{label}</span>

                        {/* MUI Slider */}
                        <div className={className + " slider-wrapper"}>
                            <Slider
                                min={0}
                                max={255}
                                step={1}
                                value={value}
                                onChange={(_, newValue) => {
                                    const val = Array.isArray(newValue) ? newValue[0] : newValue;
                                    set(Number(val));
                                }}
                                aria-labelledby={`${label}-slider`}
                            />
                        </div>

                        <span className="slider-value">{value}</span>
                    </div>
                ))}
            </div>

            <Button
                variant="contained"
                className="save-button"
                onClick={() => setSaved(current)}
            >
                Pobierz
            </Button>

            <div className="saved-color">
                <div className="small-rectangle" style={{ backgroundColor: saved }} />
                <span className="saved-text">{saved.replace("rgb", "").replace(/[()]/g, "")}</span>
            </div>
        </div>
    );
}
