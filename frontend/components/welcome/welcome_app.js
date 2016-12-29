import React from 'react'

export default function WelcomeApp({ children }) {
  return (
    <main>
      <section className="welcome-page">
        <h1>Learning Exchange</h1>
        { children }
      </section>
    </main>
  );
}
