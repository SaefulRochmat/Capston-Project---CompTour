class Footer extends HTMLElement {
        constructor() {
        super();
        this.attachShadow({ mode: "open" });
        }
    
        connectedCallback() {
        this.render();
        }
    
        render() {
        this.shadowRoot.innerHTML = `
            <style>@import "/src/styles/tailwindcss-output/tailwind.css";</style>
            <div class="bg-[#043420] items-center px-5 py-4 shadow flex flex-wrap justify-center md:flex md:justify-between">
                <div class="w-full md:w-auto mb-4 md:mb-0 md:flex md:justify-start">
                <a href="/index.html" class="flex items-center justify-center mb-4 md:mb-0">
                    <img src="/src/assets/logo.png" class="h-16" alt="CompTour Logo" />
                </a>
                </div>
                <span class="text-sm text-gray-500 text-center mb-4 md:mb-0 md:text-left">
                    © 2024 <a href="" class="hover:underline">CompTour</a>. All Rights Reserved.
                </span>
            </div>
            `;
        }
    }
    
customElements.define("footer-bar", Footer);