import{b as d,Y as f,e as o,o as _,l as x,V as z,u as r,k as S}from"./entry.2bb5d496.js";import{u as I}from"./config.820419e1.js";/* empty css                    */const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var a;const t=l;f(s=>({"71ded496":r(m)}));const e=I();(a=e==null?void 0:e.nuxtIcon)!=null&&a.aliases;const p=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[t.name]||t.name}),m=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),c=o(()=>{var n,i,u;if(!t.size&&typeof((n=e.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=t.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,n)=>(_(),x("span",{style:z({width:r(c),height:r(c)})},null,4))}}),v=S(y,[["__scopeId","data-v-11604bcf"]]);export{v as default};
