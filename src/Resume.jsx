import React from 'react'

function Resume() {
  return (
    <div className="bg-gray-800 text-white">
      <section id="home" className="p-8">
        <h2 className="text-4xl font-bold mb-4">Home</h2>
        <p>Welcome to my professional portfolio website!</p>
      </section>
      <section id="about" className="p-8">
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <p>I am a software engineer with expertise in web development...</p>
      </section>
      <section id="projects" className="p-8">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p>Here are some of my recent projects...</p>
      </section>
      <section id="research" className="p-8">
        <h2 className="text-4xl font-bold mb-4">Research</h2>
        <p>Published papers on AI and machine learning...</p>
      </section>
      <section id="contact" className="p-8">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p>Email: john.doe@example.com</p>
      </section>
    </div>
  )
}

export default Resume