import React, { Component }  from 'react';
import './Contact.css'
const links = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kyaw-ye-lwin/' },
    { name: 'Facebook', href: 'https://www.facebook.com/share/1Ej6WxN79J/?mibextid=LQQJ4d' },
    { name: 'Github', href: 'https://github.com/kyawyea92' },
    { name: 'Youtube', href: 'https://www.youtube.com/@FocForYou' },
    { name: 'Telegram', href: 'https://t.me/focforyou2024' },
  ]
  const stats = [
    { name: 'Total Poject', value: '10+' },
    { name: 'Team members', value: '100+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  
  export default function Contact() {
    return (
      <div className="contactContainer">
        <img
          alt="contactImage"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="contactBg"
        />
        <div
          aria-hidden="true"
          className="contactDiv1"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="contactDiv2"
          />
        </div>
        <div
          aria-hidden="true"
          className="contactDiv3"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="contactDiv2"
          />
        </div>
        <div className="contactDiv4">
          <div className="contactDiv5">
            <h2 className="contactH2">Let's work together</h2>
            <p className="contactP">
              I have many enterprise project. I have software development service also. I am doing many knowledge sharign courses. All are free!!!
            </p>
          </div>
          <div className="contactDiv6">
            <div className="contactDiv7">
              {links.map((link) => (
                <a key={link.name} href={link.href} target='_blank'>
                  {link.name} <span aria-hidden="true" >&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="contactDiv8">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="contactDiv9">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  