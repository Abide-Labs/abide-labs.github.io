document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
function closeMenu(){nav?.classList.remove('is-open');menu?.setAttribute('aria-expanded','false');}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
const video=document.querySelector('#brand-film');
const motion=document.querySelector('#motion-toggle');
if(video&&motion){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const connection=navigator.connection;
 let userPaused=false;
 let shouldPlay=!reduced.matches&&!connection?.saveData;
 let loaded=false;
 function load(){if(loaded)return;video.src=matchMedia('(max-width:700px)').matches?'/assets/hero-mobile.mp4':'/assets/hero-desktop.mp4';video.load();loaded=true;}
 async function play(){if(!shouldPlay||userPaused)return;load();try{await video.play();motion.textContent='Pause background video';motion.setAttribute('aria-pressed','true');video.classList.add('is-playing');}catch{motion.textContent='Play background video';motion.setAttribute('aria-pressed','false');}}
 function pause(){video.pause();motion.textContent='Play background video';motion.setAttribute('aria-pressed','false');}
 motion.hidden=false;
 motion.textContent='Play background video';
 motion.addEventListener('click',()=>{if(video.paused){userPaused=false;shouldPlay=true;play();}else{userPaused=true;pause();}});
 reduced.addEventListener('change',e=>{shouldPlay=!e.matches&&!connection?.saveData;if(!shouldPlay)pause();else if(!userPaused)play();});
 const observer=new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)video.pause();else if(shouldPlay&&!userPaused)play();},{threshold:.05});observer.observe(video.closest('.hero'));
 document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();else if(shouldPlay&&!userPaused&&video.getBoundingClientRect().bottom>0)play();});
 video.addEventListener('error',()=>{video.classList.remove('is-playing');motion.hidden=true;});
 if(shouldPlay){window.addEventListener('load',()=>{if('requestIdleCallback'in window)requestIdleCallback(()=>play(),{timeout:1500});else setTimeout(play,300);},{once:true});}
}
const form=document.querySelector('#inquiry-form');
function draft(){const data=new FormData(form);const topic=data.get('topic')||'Project inquiry';const body=`Name: ${data.get('name')||''}\nEmail: ${data.get('email')||''}\n\n${data.get('message')||''}`;return{subject:`Abide Labs: ${topic}`,body};}
form?.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const d=draft();window.location.href=`mailto:hello@abide-labs.com?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(d.body)}`;document.querySelector('#draft-status').textContent='Your email app will open with a draft. Review and send it there. If it does not open, copy your inquiry or email us directly.';});
document.querySelector('#copy-inquiry')?.addEventListener('click',async()=>{const d=draft();const status=document.querySelector('#draft-status');try{await navigator.clipboard.writeText(`To: hello@abide-labs.com\nSubject: ${d.subject}\n\n${d.body}`);status.textContent='Inquiry copied. Paste it into your email app and send it to hello@abide-labs.com.';}catch{status.textContent='Copy is unavailable. Email hello@abide-labs.com directly. Your entered text is still here.';}});

const selectedTopic=new URLSearchParams(location.search).get('topic');
const topicSelect=document.querySelector('#topic');
if(topicSelect&&selectedTopic&&Array.from(topicSelect.options).some(o=>o.value===selectedTopic))topicSelect.value=selectedTopic;
