/* (C) Copyright 2022 Lyvan M. <lywaan@yeystudio.com>
 * SPDX-License-Identifier: GPL-3.0
 */

import * as React from "react";

export enum ToggleState {
    OFF,
    INACTIVE,
    ON,
};

export type ToggleProps = {
    id?: string;
    className?: string;
    isBoolean?: boolean;
    value: ToggleState;
    onChange: (newState: ToggleState) => void;

};

export function Toggle({id, className, isBoolean, value, onChange}: ToggleProps) {
    const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
        let newToggleState : ToggleState;

        if (isBoolean) {
            newToggleState = value === ToggleState.ON ? ToggleState.OFF : ToggleState.ON;
        }
        else {
            // Determine the likely intended state based on click position
            const boundingBox = e.currentTarget.getBoundingClientRect();
            const xPos = e.clientX - boundingBox.left;
            const relativeOffset = xPos / boundingBox.width;

            if (relativeOffset > 0.66) {
                newToggleState = ToggleState.ON;
            }
            else if (relativeOffset < 0.33) {
                newToggleState = ToggleState.OFF;
            }
            else {
                newToggleState = ToggleState.INACTIVE;
            }
    
            // Just increment if the click was on the same state
            if (newToggleState === value) {
                newToggleState = (value + 1) % 3;
            }
        }

        onChange(newToggleState);
    };

    return (
        <div id={id} onClick={handleOnClick} data-toggle={value} data-boolean={isBoolean} className={"r3s-toggleContainer".concat(' ', className || "")}>
            <button type={"button"} className={"r3s-toggle"} />
        </div>
    );
}
