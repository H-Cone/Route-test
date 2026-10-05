import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="notFoundPage">
      <style>{`
        .notFoundPage {
          min-height: 100vh;
          display: grid;
          place-items: center;
          overflow: hidden;
          padding: 32px 20px;
          color: #111c35;
          background-color: #f1f5f9;
          background-image: radial-gradient(#cbd5e1 0.8px, transparent 0.8px);
          background-size: 22px 22px;
          font-family: 'Segoe UI', sans-serif;
        }

        .notFoundContent {
          width: min(100%, 620px);
          text-align: center;
        }

        .notFoundCode {
          margin: 0;
          color: #e2e8f0;
          font-size: clamp(112px, 28vw, 220px);
          font-weight: 800;
          line-height: 0.9;
          letter-spacing: 0;
          text-shadow: 5px 5px 0 #263653;
        }

        .notFoundEyebrow {
          margin: 30px 0 8px;
          color: #263653;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .notFoundTitle {
          margin: 0;
          font-size: clamp(30px, 7vw, 44px);
          font-weight: 750;
          letter-spacing: 0;
        }

        .notFoundText {
          max-width: 420px;
          margin: 14px auto 26px;
          color: #637067;
          font-size: 16px;
          line-height: 1.6;
        }

        .notFoundLink {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 20px;
          border: 2px solid #263653;
          border-radius: 4px;
          background: #263653;
          color: #fff;
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
          transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
        }

        .notFoundLink:hover {
          transform: translateY(-2px);
          background: transparent;
          color: #263653;
        }

        .notFoundLink:focus-visible {
          outline: 3px solid #64748b;
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .notFoundLink {
            transition: none;
          }
        }
      `}</style>

      <section className="notFoundContent" aria-labelledby="not-found-title">
        <p className="notFoundCode" aria-hidden="true">404</p>
        <p className="notFoundEyebrow">Lost your way?</p>
        <h1 className="notFoundTitle" id="not-found-title">Page not found</h1>
        <p className="notFoundText">
          The page you’re looking for may have moved or doesn’t exist. Let’s get you back on track.
        </p>
        <Link className="notFoundLink" to="/dashboard">
          <i className="bi bi-arrow-left" aria-hidden="true" />
          Back to dashboard
        </Link>
      </section>
    </main>
  )
}

export default NotFound