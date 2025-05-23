import{a as f,S as d,i}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="42560540-fd525388af9cdf4135c592592",y="https://pixabay.com/api/";async function g(o){return(await f.get(y,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const s=o.map(t=>`
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
</li>`).join("");p.insertAdjacentHTML("beforeend",s),h.refresh()}function L(){p.innerHTML=""}function w(){u.classList.remove("hidden")}function l(){u.classList.add("hidden")}const c=document.querySelector(".form"),v=c.elements["search-text"];c.addEventListener("submit",o=>{o.preventDefault();const s=v.value.trim();if(s===""){i.error({message:"Please enter a search term.",position:"topRight"});return}L(),w(),g(s).then(t=>{const{hits:n}=t;if(n.length===0){l(),i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(n)}).catch(t=>{i.error({message:"Something went wrong. Try again later!",position:"topRight"})}).finally(()=>{l(),c.reset()})});
//# sourceMappingURL=index.js.map
