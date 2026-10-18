import fs from 'node:fs';
const arg=process.argv[2];
if(!arg)throw new Error('Usage: node scripts/set-domain.mjs https://your-domain');
const url=new URL(arg);if(url.protocol!=='https:')throw new Error('Use an HTTPS domain');
const domain=url.origin;
const pages=['','menu/','our-story/','gallery/','contact/'];
for(const route of [...pages,'404/']){
 const path=route?route+'index.html':'index.html';let html=fs.readFileSync(path,'utf8');
 html=html.replace(/<link rel="canonical"[^>]*>/g,'').replace(/<meta property="og:(url|image)"[^>]*>/g,'').replace(/<meta name="robots"[^>]*>/g,'');
 const tags=route==='404/'?'<meta name="robots" content="noindex"/>':`<link rel="canonical" href="${domain}/${route}"/><meta property="og:url" content="${domain}/${route}"/><meta property="og:image" content="${domain}/assets/brand-logo.webp"/>`;
 fs.writeFileSync(path,html.replace('</head>',tags+'</head>'));
}
fs.writeFileSync('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+pages.map(route=>`<url><loc>${domain}/${route}</loc></url>`).join('')+'</urlset>');
fs.writeFileSync('public/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${domain}/sitemap.xml\n`);
console.log('SEO domain configured. Run npm run build. DNS is unchanged.');
