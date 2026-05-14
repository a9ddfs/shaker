fetch('https://font.thmanyah.com/').then(r=>r.text()).then(html=>{
  const match = html.match(/<style data-framer-font-css>(.*?)<\/style>/s);
  if (match) {
    const fonts = match[1].split('}').filter(l => l.includes('thmanyah') && !l.includes('Placeholder')).map(l => l + '}');
    console.log(fonts.join('\n'));
  }
});
