import{S as l,i as a}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d=new l(".gallery a");function u(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(s=>`
    <div class="photo-card">
    <a href="${s.largeImageURL}" target="_blank">
        <img class="image" src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
      </a>
      <div class="info">
       <div class="info-item"><p><i class="img-text">Likes </i><span class="span-text">${s.likes}</span></p></div>
        <div class="info-item"><p><i class="img-text">Views </i><span class="span-text">${s.views}</span></p></div>
        <div class="info-item"><p><i class="img-text">Comments </i><span class="span-text">${s.comments}</span></p></div>
        <div class="info-item"><p><i class="img-text">Downloads </i><span class="span-text">${s.downloads}</span></p></div>
      </div>
    </div>
  `).join(""),d.refresh()}const p="42334631-07f239856d3b6a49db441bfb9";function f(o){const t=document.querySelector(".loader"),s=document.querySelector(".input-btn");function i(){t.style.display="block"}s.addEventListener("click",function(){i()}),fetch(`https://pixabay.com/api/?key=${p}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>{console.log(e),t.style.display="none",e.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):u(e.hits)}).catch(e=>{console.error("Error fetching images:",e),t.style.display="none",a.error({title:"Error",message:"Failed to fetch images. Please try again later."})})}const m=document.querySelector("#search-form"),c=document.querySelector("#search-input");m.addEventListener("submit",o=>{o.preventDefault();const t=c.value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search query"});return}f(t),c.value=""});
//# sourceMappingURL=commonHelpers.js.map
