import{J as w,aS as f}from"./index.625faa3f.js";function y(){const{supabase:s}=f(),{user:c}=w(),u=async e=>{const{data:t,error:a}=await s.from(e).select("*");if(a)throw a;return t},d=async(e,t)=>{const{data:a,error:r}=await s.from(e).select("*").eq("user_id",t);if(r)throw r;return a},i=async(e,t,a)=>{const{data:r,error:o}=await s.from(e).select("*").eq("id",t,"nome",a);if(o)throw o;return r[0]};return{list:u,listPublic:d,getById:i,post:async(e,t)=>{const{data:a,error:r}=await s.from(e).insert([{...t,user_id:c.value.id}]);if(r)throw r;return a},update:async(e,t)=>{const r=(await i(e,t.id)).checkin_code,{data:o,error:n}=await s.from(e).update({...t,checkin_code:r}).match({id:t.id});if(n)throw n;return o},remove:async(e,t)=>{const{data:a,error:r}=await s.from(e).delete().match({id:t});if(r)throw r;return a}}}export{y as u};
