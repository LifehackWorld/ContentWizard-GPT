
function openIdeas(){ window.location.href = "ideas.html"; }
function openGenerator(){ window.location.href = "generator.html"; }
function openReels(){ window.location.href = "reels.html"; }

// small helper to create element from html string
function html(str){ const t = document.createElement("template"); t.innerHTML = str.trim(); return t.content.firstChild;}

