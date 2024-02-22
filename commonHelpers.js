import{S as c,i}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const p=new c(".gallery a");function u(o){const r=document.querySelector(".gallery");r.innerHTML=o.map(e=>`
    <div class="photo-card">
    <a href="${e.largeImageURL}" target="_blank">
        <img class="image" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
       <p><i class="img-text">Likes </i><span class="span-text">${e.likes}</span></p>
        <p><i class="img-text">Views </i><span class="span-text">${e.views}</span></p>
        <p><i class="img-text">Comments </i><span class="span-text">${e.comments}</span></p>
        <p><i class="img-text">Downloads </i><span class="span-text">${e.downloads}</span></p>
      </div>
    </div>
  `).join(""),p.refresh()}const f="42334631-07f239856d3b6a49db441bfb9";function d(o){const r=document.querySelector(".loader");r.style.display="block",fetch(`https://pixabay.com/api/?key=${f}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>{console.log(e),r.style.display="none",e.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):u(e.hits)}).catch(e=>{console.error("Error fetching images:",e),r.style.display="none",i.error({title:"Error",message:"Failed to fetch images. Please try again later."})})}const m=document.querySelector("#search-form"),l=document.querySelector("#search-input");m.addEventListener("submit",o=>{o.preventDefault();const r=l.value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search query"});return}d(r),l.value=""});
//# sourceMappingURL=commonHelpers.js.map
