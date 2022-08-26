# react-3switch
![CI](https://github.com/mLyvan/react-3switch/actions/workflows/ci.yaml/badge.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

A simple and minimal functional React component for toggle switches that supports simple two state input and three state input. Hence the name, react-three-state-switch. Since this is nothing more than a button, no extra dependencies are required, and it will stay that way.

Project would always be promptly updated to reflect any breaking changes in React.

## Usage
The module is available on npm.

```bash
npm install react-3switch
```

This would install the component itself, the styles and TypeScript declarations.

Its advised to import the default styling.

```javascript
// Either one depending on your requirements. scss files are also provided.
import "react-3switch/styles.css"; // esm
require("react-3switch/styles.css"); // cjs
```
If you want to override the default styling with your own custom ones, you can target the default classes `.r3s-toggleContainer` and `.r3s-toggle` or the className provided as a prop. Note that most appearance values are set in css variables which could be overriden.

| Variable             | Description                                                                           |
|----------------------|---------------------------------------------------------------------------------------|
| --widget-dimension   | The parent container dimensions. The width is dynamically calculated.                 |
| --button-dimension   | The button dimension, technically the diameter of the circular button.                |
| --animation-duration | Duration for state transition animations. The color and button movement are animated. |

The component itself behaves as a controlled input with the state being handled by the parent. So the usage is identical to normal HTML inputs.
```typescript
import {Toggle, ToggleState} from "react-3switch";

function Component() {
    const [toggleState, setToggleState] = useState<ToggleState>(ToggleState.INACTIVE);
    return (
        <Toggle value={toggleState} onChange={setToggleState} />
    );
}
```

## Available Props
NOTE: `ToggleState` is a TypeScript enum which is an incrementing numerical value. If you are using JavaScript, the values should be replaced by the numerical value, but it's recommended to use TypeScript to not lose any typing information.
```typescript
enum ToggleState {
    OFF, // 0
    INACTIVE, // 1
    ON, // 2
};
```
| Name         | Type                              | Description                                                      |
|--------------|-----------------------------------|------------------------------------------------------------------|
| `id?`        | `string`                          | OPTIONAL container id attribute.                                 |
| `className?` | `string`                          | OPTIONAL container class attribute.                              |
| `onChange`   | `(newState: ToggleState) => void` | Value change handler provided by the parent to update the state. |
| `value`      | `ToggleState`                     | The current value provided by the parent.                        |
| `isBoolean`  | `boolean`                         | `false` by default, `true` if the switch is two-state.           |

## Contributing
If you need to make changes and are interested in sharing those changes, feel free to open a pull request, which would be responded to promptly. General information can be found at [CONTRIBUTING.md](CONTRIBUTING.md). In addition, this component is safe for use in Server Side Rendered applications, so no unsafe`window` and `document` usage which can break SSR.
