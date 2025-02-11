class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <header class="">
        <!-- Navbar -->
        <div class="flex items-center h-20 justify-around">
            <!-- Navbar Container -->
              <!-- Navbar Logo -->
              <div class="text-4xl font-light uppercase">
                RHIS FBLA
              </div>
      
              <!-- Navbar Menu -->
              <nav class="flex gap-5 items-center">
                <a class="text-lg" href="index.html">Home</a>
                <a class="text-lg" href="conferences.html">Conferences</a>
                <!-- <a class="text-lg" href="">Workshops</a> -->
                <!-- <a class="text-lg" href="">Community Service</a> -->
                <a class="text-lg" href="sponsors.html">Sponsors</a>
                <a class="text-lg bg-sky-900/80 p-2 rounded-md border-2 border-sky-900/90 hover:bg-sky-800/70 transition-colors" href="">Become a Member</a>
              </nav>
          </div>
    </header>
      `;
    }
  }
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer class="bg-slate-500 pt-8">
        <div class="mt-16 grid grid-cols-4 gap-8 place-items-start mx-16">
                <div>
                    <h3 class="text-sm font-semibold leading-6 text-white">About</h3>
                    <ul role="list" class="mt-6 space-y-4">
                        <li><a class="text-sm leading-6 text-gray-300 hover:text-white" href="">Conferences</a></li>
                        <li><a class="text-sm leading-6 text-gray-300 hover:text-white" href="">Sponsors</a></li>
                        <li><a class="text-sm leading-6 text-gray-300 hover:text-white" href="">Membership</a></li>
                    </ul>
                </div>
                <!-- <div>
                    <h3 class="text-sm font-semibold leading-6 text-white mt-10 md:mt-0">History</h3>
                    <ul role="list" class="mt-6 space-y-4">
                        <li><a class="text-sm leading-6 text-gray-300 hover:text-white" href="/competitions">Competitions</a>
                        </li><li><a class="text-sm leading-6 text-gray-300 hover:text-white" href="/press">Press</a>
                        </li>
                    </ul>
                </div> -->
                <!-- <div>
                    <h3 class="text-sm font-semibold leading-6 text-white">Projects</h3>
                    <ul role="list" class="mt-6 space-y-4">
                        <li><a class="text-sm leading-6 text-gray-300 hover:text-white" href="">American Enterprise</a></li>
                        <li><a class="text-sm leading-6 text-gray-300 hover:text-white" href="">Community Service</a></li>
                        <li><a class="text-sm leading-6 text-gray-300 hover:text-white" href="">Partnership with Business</a></li>
                    </ul>
                </div> -->
                <div class="mt-10 md:mt-0">
                    <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
                    <ul role="list" class="mt-6 space-y-4">
                        <li><a class="text-sm leading-6 text-gray-300 hover:text-white" href="">Privacy</a></li>
                        <li><a class="text-sm leading-6 text-gray-300 hover:text-white" href="">Terms</a></li>
                    </ul>
                </div>
        </div>
        <br>
        <div class="flex items-center justify-between mx-16 pb-8">
            <h4 class="text-white">© 2025 River Heights FBLA. All Rights reserved.</h4>
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#fcfcfc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.757,0 -5,2.243 -5,5v8c0,2.757 2.243,5 5,5h8c2.757,0 5,-2.243 5,-5v-8c0,-2.757 -2.243,-5 -5,-5zM8,5h8c1.654,0 3,1.346 3,3v8c0,1.654 -1.346,3 -3,3h-8c-1.654,0 -3,-1.346 -3,-3v-8c0,-1.654 1.346,-3 3,-3zM17,6c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM12,7c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5zM12,9c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3z"></path></g></g>
                </svg>
            </a>
        </div>
      </footer>

      `;
    }
  }

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);