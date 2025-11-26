import{a as p,S as m,i as a}from"./assets/vendor-CNqCr-V-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="53387402-0d41fff9de6c167d2f24d7858",h="https://pixabay.com/api/";async function g(n){const r={key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(h,{params:r})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(n){const r=n.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:s,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML=""}function q(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}const w=document.querySelector(".form"),v=document.querySelector("input[name='search-text']");w.addEventListener("submit",P);function P(n){n.preventDefault();const r=v.value.trim();if(r===""){a.warning({message:"Please enter a search query!",position:"topCenter"});return}S(),q(),g(r).then(o=>{if(c(),o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"});return}L(o.hits)}).catch(()=>{c(),a.error({message:"Something went wrong. Please try again later.",position:"topCenter"})})}
//# sourceMappingURL=index.js.map
