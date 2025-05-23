import Credits from '../elements/Credits.js'
import Socials from '../elements/Socials.js'

import logoTS_2 from '/assets/ts_logo_2.png'
import scrollToElementWithId from '../../functions/utils.js'

export default function Footer() {
  return (
    <footer className="flex justify-center mt-12 bg-site-white">
      <div
        className="
          grid grid-cols-2 gap-4 p-8 w-[50vw]
          max-[1400px]:w-[70vw]
          max-[800px]:w-[90vw] max-[800px]:grid-cols-1 max-[800px]:text-center max-[800px]:justify-items-center
        "
      >
        <img
          onClick={() => scrollToElementWithId('#header')}
          src={logoTS_2}
          alt="Timo Smit"
          title="Scroll up!"
          className="cursor-pointer w-[100px] h-[100px]"
        />
        <ul className="flex flex-col gap-4 p-0 contact">
          <li>
            <h3>Contact</h3>
          </li>
          <li>
            <a href="mailto:timo.smit@live.nl" className="max-[800px]:border-b max-[800px]:border-red-500]">
              timo.smit@live.nl
            </a>
          </li>
          <li>
            <a href="tel:+31610792320" className="max-[800px]:border-b max-[800px]:border-red-500]">
              +31 6 10 79 23 20
            </a>
          </li>
          <li>
            <a href="https://timo-smit.webflow.io/" className="max-[800px]:border-b max-[800px]:border-red-500]">
              My design portfolio
            </a>
          </li>
        </ul>
        <Socials />
        <Credits />
      </div>
    </footer>
  )
}
