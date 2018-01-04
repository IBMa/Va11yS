# React Range

A react component that makes `<input type='range' />` compatible across all browsers.

### Why?

It is a [known issue](https://github.com/facebook/react/issues/554) the `onChange` event does not work in IE. This seeks to be a simple drop in replacement for any `<input type='range' />` and still have the `onChange` event fire in IE.

### Usage

You can pass in any `props` and `className`s as necessary:

```jsx
var Range = require('react-range');

<Range
  className='slider'
  onChange={this.handleOnChange}
  type='range'
  value={20}
  min={0}
  max={100} />
```
