(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),n=document.querySelector("[data-menu-close]");e.addEventListener("click",(()=>{t.classList.toggle("is-open")})),n.addEventListener("click",(()=>{t.classList.toggle("is-open")})),document.addEventListener("click",(e=>{e.target.classList.contains("mobile__link")&&t.classList.toggle("is-open")}))})();
//# sourceMappingURL=index.cfe4e290.js.map