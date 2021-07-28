## Getting Started

Install depedencies
```bash
npm install
#or
yarn install
```

## First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## .env config example:
```env
SITENAME=KARAKTERISTIX
API_URL=https://staging.karakteristix.com/backend
SECRET_COOKIE_PASSWORD=YOUR_COOKIES_PASSWORD_32_CHARACTERS
```

## Writing code/component documentation
At the moment, the documentation for KX app is [located here](https://kx-dev.vercel.app/docs/index.html)

Please follow [this tutorial](https://jsdoc.app/) on how to write a document for your code, hence other developers won't need to dig directly into your code.

### example
```jsx
import PropTypes from 'prop-types'

/**
 * @category UI
 * @component
 *
 * @classdesc
 * ## Import
 * ```jsx
 * import Button from '@/components/Button'
 * ```
 *
 * @example <caption>Default.</caption>
 * return (
 *   <Button>My Button</Button>
 * )
 * @example <caption>Outlined button.</caption>
 * return (
 *   <Button variant="outlined">My Button</Button>
 * )
 */
const Button = ({ variant, background, className = '', dark, ...props }) => {
  /**
   * @return {React.ReactElement} - React component
   */
  return (
    <button className={`${variant == 'outlined' ? 'outlined' : 'filled'} ${className}`} {...props}>
      {props.children}

      {/* jsx css in js for isolated styling */}
      <style jsx>{`
        button {
          color: ${dark ? '#fff' : '#fff'};
          background-color: ${background ? background : 'transparent'};
          color: rgb(0, 50, 107);
          border: 1px solid rgb(112, 112, 112);
          font-weight: 600;
          transition: all 0.2s ease;
          letter-spacing: 1px;
          padding: 0.75rem 2.5rem;
          border-radius: 90px;
          cursor: pointer;

          &:hover {
            box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.16);
          }

          &.outlined {
            background-color: transparent;
            color: rgb(0, 50, 107);
            border: 1px solid rgb(112, 112, 112);
            text-transform: uppercase;
            line-height: 1;
          }

          &.filled {
            background: #00326b !important;
            color: white !important;
            text-transform: uppercase;
            border: none;
          }
        }
      `}</style>
    </button>
  )
}

Button.propTypes = {
  /**
   * Button color background
   */
  background: PropTypes.string,
  /**
   * Button label
   */
  children: PropTypes.node,
  /**
   * Add extra css classes
   */
  className: PropTypes.string,
  /**
   * Is the background dark?
   */
  dark: PropTypes.bool,
  /**
   * Variant of the button
   */
  variant: PropTypes.oneOf(['outlined', 'filled'])
}

export default Button
```

Then in your root folder, run:

```bash
yarn docs
yarn docs:build
```

With that command, it will generates your component documentation page.
And the result can be seen here: http://localhost:3200/docs/Button.html