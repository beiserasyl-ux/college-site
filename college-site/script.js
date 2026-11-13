const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const t=$('#prog');
if(t){let base='all',field='all',q='';
 const run=()=>{let n=0;$$('#prog tbody tr').forEach(r=>{
  const ok=(base!=='9'||r.dataset.g9==='1')&&(field==='all'||r.dataset.f===field)&&r.textContent.toLowerCase().includes(q);
  r.classList.toggle('hide',!ok);if(ok)n++});
  $('#count').textContent=n+' мамандық көрсетілді';
  t.classList.toggle('g9',base==='9');t.classList.toggle('g11',base==='11')};
 $$('[data-base]').forEach(b=>b.onclick=()=>{base=b.dataset.base;$$('[data-base]').forEach(x=>x.setAttribute('aria-pressed',x===b));run()});
 $('#field').onchange=e=>{field=e.target.value;run()};
 $('#search').oninput=e=>{q=e.target.value.toLowerCase();run()};run()}
const f=$('#mailform');
if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);
 location.href='mailto:kolledzh2@vku.edu.kz?subject='+encodeURIComponent('Сұрақ: '+d.get('name'))+'&body='+encodeURIComponent(d.get('msg')+'\n\n— '+d.get('name'))};

const go=()=>{let k=location.hash.slice(1);if(!$('#p-'+k))k='index';
 $$('.page').forEach(p=>p.hidden=p.id!=='p-'+k);
 $$('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===k));
 document.title=($('[data-nav="'+k+'"]').textContent)+' – Сәрсен Аманжолов атындағы колледж';scrollTo(0,0)};
addEventListener('hashchange',go);go();
