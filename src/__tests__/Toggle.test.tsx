/* (C) Copyright 2022 Lyvan M. <lywaan@yeystudio.com>
 * SPDX-License-Identifier: GPL-3.0
 */

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Toggle, ToggleState } from "../Toggle";

let container: HTMLDivElement | null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container!);
    container!.remove();
    container = null;
});

it("fires onChange when clicked", () => {
    const onChange = jest.fn();
    const value = ToggleState.INACTIVE;

    act(() => {
        render(<Toggle id={"testToggle"} value={value} onChange={onChange} />, container);
    });

    const toggleButton = document.getElementById("testToggle");

    act(() => {
        toggleButton!.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(onChange).toHaveBeenCalledTimes(1);

    act(() => {
        for (let i = 0; i < 3; i++) {
            toggleButton!.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    });
    expect(onChange).toHaveBeenCalledTimes(4);
});

it("updates attributes when value changes", () => {
    let  toggleButton: HTMLElement | null;
    let value = ToggleState.INACTIVE;
    const onChange = jest.fn();

    act(() => {
        render(<Toggle id={"testToggle"} value={value} onChange={onChange} />, container);
    });
    toggleButton = document.getElementById("testToggle");
    expect(toggleButton?.dataset.toggle).toBe(ToggleState.INACTIVE.toString());

    value = ToggleState.ON;
    act(() => {
        render(<Toggle id={"testToggle"} value={value} onChange={onChange} />, container);
    });
    toggleButton = document.getElementById("testToggle");
    expect(toggleButton?.dataset.toggle).toBe(ToggleState.ON.toString());

    value = ToggleState.OFF;
    act(() => {
        render(<Toggle id={"testToggle"} value={value} onChange={onChange} />, container);
    });
    toggleButton = document.getElementById("testToggle");
    expect(toggleButton?.dataset.toggle).toBe(ToggleState.OFF.toString());
});

it("updates value onChange", () => {
    let value = ToggleState.ON;
    const onChange = jest.fn((toggleState) => {
        value = toggleState;
    });

    act(() => {
        render(<Toggle id={"testToggle"} isBoolean={true} value={value} onChange={onChange} />, container);
    });

    const toggleButton = document.getElementById("testToggle");

    act(() => {
        toggleButton!.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(value).toBe(ToggleState.OFF);
});
