import{a as f,S as u,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="42560540-fd525388af9cdf4135c592592",m="https://pixabay.com/api/";async function y(o){return(await f.get(m,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const s=o.map(t=>`
        <li class="gallery-item">
  <a href="${t.largeImageURL}" class="gallery-link">
    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
  </a>
  <div class="info">
    <p class="info-item"><b>Likes</b><span>${t.likes}</span></p>
    <p class="info-item"><b>Views</b><span>${t.views}</span></p>
    <p class="info-item"><b>Comments</b><span>${t.comments}</span></p>
    <p class="info-item"><b>Downloads</b><span>${t.downloads}</span></p>
  </div>
</li>`).join("");l.insertAdjacentHTML("beforeend",s),g.refresh()}function b(){l.innerHTML=""}function L(){p.classList.remove("hidden")}function w(){p.classList.add("hidden")}const i=document.querySelector(".form"),v=i.elements["search-text"];i.addEventListener("submit",async o=>{o.preventDefault();const s=v.value.trim();if(s===""){a.error({message:"Please enter a search term.",position:"topRight"});return}b(),L();try{const{hits:t}=await y(s);t.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(t)}catch{a.error({message:"Something went wrong. Try again later!",position:"topRight"})}finally{w()}i.reset()});
//# sourceMappingURL=index.js.map
