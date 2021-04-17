const Button = ({ children, variant, background, className, dark, ...other }) => {
  return (
    <button className={`${variant == 'outlined' ? 'outlined' : 'filled'} ${className}`} {...other}>
      {children}
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

export default Button
