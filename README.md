# TDD Calculator

## Getting Started

### 1. Clone the repo

```bash
git clone git@github.com:ankithv0706/tdd-calculator.git
cd tdd-calculator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run tests

```bash
npm test
```

---

## Example

```js
const { add } = require("./stringCalculator");

add("");
add("1");
add("1,2,3");
add("1\n2,3");
add("//;\n1;2");
add("1,-2,-3");
```

---

### Test Coverage

- Empty strings
- Single & multiple numbers
- Newline as a separator
- Custom delimiters
- Negative number handling with descriptive error messages
