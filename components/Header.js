import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <nav id="header" class="fixed bg-white w-full z-30 top-0 text-gray-600">
      <div class="w-full container flex flex-wrap items-center mt-0 py-2">
        <div class="pl-4 flex items-center w-1/4">
          <a class="toggleColour text-gray-600 no-underline hover:no-underline font-bold text-xl lg:text-3xl"  href="#">
            Your Anilist
          </a>
        </div>
        <div class="block lg:hidden pr-4">
          <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div class="relative flex w-2/4 mx-auto justify-center">
          <input
            id="docsearch"
            class="w-full transition bg-white shadow-md focus:outline-0 border border-transparent placeholder-gray-600 rounded-lg py-2 pr-4 pl-10 block appearance-none leading-normal ds-input"
            type="text"
            placeholder="Search any user list in anilist by their username"
            autocomplete="off"
            spellcheck="false"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded="false"
            aria-label="search input"
            aria-owns="algolia-autocomplete-listbox-0"
            dir="auto"
            style={{ position: 'relative', 'vertical-align': 'top'}}
            />
          <pre aria-hidden="true" style={{ position: 'absolute', visibility: 'hidden', 'white-space': 'pre',
            'font-size': '16px', 'font-weight': 400, 'word-spacing': '0px', 'letter-spacing': 'normal', 'text-indent': '0px', 'text-rendering': 'auto',
            'text-transform': 'none'}}></pre>
          <div class="ds-dataset-1"></div>
          <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
            <svg class="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
          </div>
        </div>
        <div class="w-1/4 flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent justify-end text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a class="block flex items-center hover:text-gray-600 mr-5" href="https://github.com/guastallaigor/your-anilist">
                <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg>
              </a>
            </li>
            <li class="mr-3">
              <a class="block flex items-center hover:text-gray-600 mr-5" href="https://twitter.com/guastallaigor">
                <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Twitter</title><path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
    <style jsx>{`
    `}</style>
  </header>
)

export default withRouter(Header)
