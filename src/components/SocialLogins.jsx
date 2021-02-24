const SocialLogins = () => {
  return (
    <div className="social-wrapper">
      <a href="/">
        <img src="/img/facebook.svg" width="20" height="20" loading="lazy" alt="fb" />
      </a>
      <a href="/">
        <img src="/img/google.svg" width="20" height="20" loading="lazy" alt="fb" />
      </a>

      <style jsx>{`
        .social-wrapper {
          display: flex;
        }
        a {
          width: 35px;
          height: 35px;
          border: 1px solid #00326b;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
        }
      `}</style>
    </div>
  )
}

export default SocialLogins
