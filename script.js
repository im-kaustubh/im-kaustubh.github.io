const content = {
  en: {
    profile: "<h2>Profile</h2><p>Analytical and structure-driven thinker with a strong interest in streamlining systems — be it code, numbers, or workflows...</p>",
    contact: "<h2>Contact</h2><p>Email: <a href='mailto:kaustubhbarbudhe@gmail.com'>kaustubhbarbudhe@gmail.com</a><br>GitHub: <a href='https://github.com/im-kaustubh'>im-kaustubh</a><br>Website: <a href='https://im-kaustubh.github.io'>im-kaustubh.github.io</a></p>",
    skills: "<h2>Skills</h2><ul><li>Python, JavaScript, Node.js, C#, Java, SQL</li><li>Git, GitHub, MongoDB, REST APIs</li><li>Power BI, Excel, Word</li><li>Team Management, Leadership, Public Speaking</li></ul>",
    education: "<h2>Education</h2><ul><li>M.Sc. Computer Engineering, Uni Duisburg-Essen</li><li>B.E. Computer Science, Chandigarh University</li></ul>",
    projects: "<h2>Projects</h2><ul><li>OpenLAP (Angular, Java, MongoDB)</li><li>Silent Spray (Unity, C#)</li><li>NeuroCompass (Flask, Python)</li><li>EquiPulse (Python, scikit-learn)</li></ul>",
    volunteering: "<h2>Volunteering</h2><p>Language Guide (Studierendenwerk), Team Liaison (Folklore Fest), HelpAge India</p>",
    hobbies: "<h2>Hobbies</h2><p>Swimming, hiking, documentaries, music, travel</p>"
  },
  de: {
    profile: "<h2>Profil</h2><p>Analytischer und strukturierter Denker mit großem Interesse an der Optimierung von Systemen – ob Code, Zahlen oder Arbeitsabläufe...</p>",
    contact: "<h2>Kontakt</h2><p>Email: <a href='mailto:kaustubhbarbudhe@gmail.com'>kaustubhbarbudhe@gmail.com</a><br>GitHub: <a href='https://github.com/im-kaustubh'>im-kaustubh</a><br>Website: <a href='https://im-kaustubh.github.io'>im-kaustubh.github.io</a></p>",
    skills: "<h2>Fähigkeiten</h2><ul><li>Python, JavaScript, Node.js, C#, Java, SQL</li><li>Git, GitHub, MongoDB, REST APIs</li><li>Power BI, Excel, Word</li><li>Teamleitung, Präsentation, Projektmanagement</li></ul>",
    education: "<h2>Ausbildung</h2><ul><li>M.Sc. Computer Engineering, Uni Duisburg-Essen</li><li>B.E. Informatik, Chandigarh University</li></ul>",
    projects: "<h2>Projekte</h2><ul><li>OpenLAP (Angular, Java, MongoDB)</li><li>Silent Spray (Unity, C#)</li><li>NeuroCompass (Flask, Python)</li><li>EquiPulse (Python, scikit-learn)</li></ul>",
    volunteering: "<h2>Freiwilligenarbeit</h2><p>Sprachführer, Teamkoordination, HelpAge Indien</p>",
    hobbies: "<h2>Hobbys</h2><p>Schwimmen, Wandern, Dokumentationen, Musik, Reisen</p>"
  }
};

function setLang(lang) {
  Object.keys(content[lang]).forEach(sectionId => {
    document.getElementById(sectionId).innerHTML = content[lang][sectionId];
  });
}

window.onload = () => setLang('en');
