import React from 'react'

const Footer = () => {
  return (
    <div className="mt-4 text-white flex justify-between text-md md:text-xl flex-wrap">
          <p>Copyright © 2018 - 2024 Blockchain Helpdesk. All rights reserved.</p>
          <p>
            <a href="/privacy-policy" className="underline">Privacy Policy</a> | <a href="/terms-of-service" className="underline">Terms of Service</a>
          </p>
        </div>
  )
}

export default Footer