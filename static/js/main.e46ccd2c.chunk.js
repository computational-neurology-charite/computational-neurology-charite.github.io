(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},24:function(e,t,a){e.exports=a(62)},32:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(20),o=a.n(r),s=(a(32),a(23)),l=a(1);var c=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement("div",{className:"header-content"},i.a.createElement("h1",{align:"center"},"Computational Neurology"))),i.a.createElement("nav",null,i.a.createElement(l.Link,{to:"home",smooth:!0,duration:500},"News"),i.a.createElement(l.Link,{to:"projects",smooth:!0,duration:500},"Projects"),i.a.createElement(l.Link,{to:"team",smooth:!0,duration:500},"Team"),i.a.createElement(l.Link,{to:"publications",smooth:!0,duration:500},"Publications"),i.a.createElement(l.Link,{to:"footer",smooth:!0,duration:500},"Contact")))};a(42);const m=[{id:1,title:"Computational Inpatient Monitoring",shortDescription:"Predicting patient outcomes using routinely collected data",fullDescription:"The increasing availability of multimodal and continuous 'physiomes' of neurological patients through digital neuromonitoring, new sensor and wearable technologies paired with advanced data analytics offer opportunities for a fundamental transformation in neurology. For inpatient monitoring in intensive care, stroke medicine and epilepsy computational neurology provides vast opportunities for the development of predictive diagnostic methods for specific and time-critical therapies. By leveraging cutting-edge machine learning techniques, our team aims to transform the raw datasets into actionable intelligence, improving the accuracy, efficiency, and scalability of diagnostic processes. Our work focuses on automating the analysis of biosignals and other clinical data to enhance real-time decision-making, reduce the burden on healthcare professionals, and streamline hospital workflows. By seamlessly integrating AI models into clinical environments, we seek to drive innovation in patient care, ultimately improving outcomes and paving the way for a more data-driven healthcare future.",image:"/images/project_dwc.png"},{id:2,title:"Computational Ambulatory Monitoring",shortDescription:"Predicting patient outcomes using routinely collected data",fullDescription:"Enabled by new, wearable sensors and computational analysis, objective methods for continuous, longitudinal monitoring and risk assessments provide opportunities for a fundamental medical transformation towards personalized, proactive and time-critical therapies in the outpatient setting.",image:"/images/Fig_Wearable_DL.jpg"},{id:3,title:"Critical Dynamics in Brain Networks",shortDescription:"Criticality as the optimal set-point of network dynamics",fullDescription:"The brain's ability to process and integrate information across spatial and temporal domains is central to intact cognitive function. Physics and information theory have provided a framework describing an optimal state of information processing. This critical state, poised at the phase transition between chaotic and ceasing neuronal activity, is characterized by an equilibrium between excitation and inhibition in the neuronal network. When a network of neurons operates near a critical phase transition point, a range of information processing functions, including information transmission, integration, storage, dynamic range, and sensitivity to inputs, are optimized simultaneously. While criticality provides a precise framework linking network structure to dynamics, its central claim, that critical dynamics predicts optimal network and thus cognitive function in humans, has not been proven yet. To try to fill this gap by investigating multi-model cortical measurements, e.g., MRI and iEEG, together with cognitive performance evaluation.",image:"/images/criticality.jpg"},{id:4,title:"Neuro-AI",shortDescription:"Critical dynamics in artificial intelligence networks",fullDescription:"Deep Neural Networks (DNNs) have revolutionized numerous fields, yet their training and design remain challenging due to vast parameter spaces and limited theoretical understanding. We here aim to bridge the gap between neuroscience and artificial intelligence to unlock the full potential of these networks. Our research demonstrates how insight from neurology, biology and physics can innovate and enhance modern DNNs and training methods. Conversely, advancements in AI offer valuable perspectives that deepen our understanding of biological neural processes. We believe that combining ideas from neuroscience and AI is essential to exploring new frontiers in both disciplines.",image:"/images/critical_artificial_nn.png"},{id:5,title:"motus med",shortDescription:"Transforming the epilepsy diagnostic pathway through accessible & intelligent movement analysis",fullDescription:i.a.createElement("div",null,i.a.createElement("a",{href:"https://motusmed.de"},"motus med")," is a video analysis-based digital health tool intended to assist in the diagnosis and monitoring of persons with abnormal movements, seizures, or epilepsy. Videos of suspected videos are uploaded to our platform, undergo automated analysis to detect movement patterns characteristic of seizures, and can be securely shared with a specialist for additional visual review. Through motus med, we apply several vision based AI models that we have developed in the lab.  Motus med integrates with a variety of smartphones and home cameras in order to provide a device agnostic, flexible, and scalable digital solution. The analysis results are provided to users to assist in decision-making during the diagnostic stage and for ongoing monitoring and management of disease activity in persons with epilepsy."),image:"/images/motusmed.png"},{id:6,title:"ALVEEG",shortDescription:"Ambulatory long-term video-EEG monitoring",fullDescription:i.a.createElement("div",null,i.a.createElement("a",{href:"https://www.alveeg.de"},"ALVEEG")," is a prospective, multicentre, randomized and controlled intervention study. In Germany, people with seizure disorders often have to wait months for a long-term video-EEG which is traditionally only performed in specialized hospitals. This can greatly delay the correct diagnosis and treatment. New sensor technologies and data analysis supported by artificial intelligence are opening up new diagnostic approaches. The aim of the project is to improve the care of people with seizure disorders by providing access to long-term video-EEGs in the home setting."),image:"/images/project_alveeg.jpg"},{id:7,title:"Medical Edge AI",shortDescription:"M/EDGE",fullDescription:"With their close integration of programmable microelectronics, sensors and actuators, modern medical devices have opened up fundamentally new diagnostic and therapeutic possibilities. These devices require integration of artificial intelligence and autonomy directly in the medical device, i.e. medical edge computing. Together with partners from academia, med tech and semiconductor industries, the M/EDGE project aims to develop an electronics platform for highly integrated medical edge artificial intelligence.",image:"/images/medge-logo.png"}];function d(e){let{project:t,isExpanded:a,onClick:n}=e;return i.a.createElement("div",{className:`project-card ${a?"expanded":""}`,onClick:n},a?null:i.a.createElement("img",{src:t.image,alt:t.title}),i.a.createElement("h3",null,t.title),i.a.createElement("p",null,a?t.fullDescription:t.shortDescription),a?null:i.a.createElement("body",{className:"more-text"},"More..."))}var u=function(){const[e,t]=Object(n.useState)(null);return i.a.createElement("section",{id:"projects"},i.a.createElement("h2",{className:"section-title"},"Projects"),i.a.createElement("div",{className:"projects-container"},m.map(a=>i.a.createElement(d,{key:a.id,project:a,isExpanded:e===a.id,onClick:()=>(a=>{t(e===a?null:a)})(a.id)}))))};a(17);const p=[{name:"Christian Meisel",role:"Principal Investigator",image:"images/team/christian.jpg",desc:""},{name:"Alexander Nelde",role:"PhD Student",image:"/images/team/alex.jpg",desc:""},{name:"Amrit Kashyap",role:"Postdoc",image:"/images/team/amrit.jpg",desc:""},{name:"Dominik D. Kranz",role:"PhD Student",image:"/images/team/dominik.jpg",desc:"I studied Biophysics at Humboldt-Universit\xe4t zu Berlin, and love interdisciplinary research. My interests include pretty much everything that's cool, new and shiny, but my specialty is applying and adapting Neural Network architectures for biosignal processing, with a focus on ECG and EEG analysis. I especially enjoy bringing these models to the clinic, where they can help to improve patient care. "},{name:"Ela Marie Akay",role:"Medical Doctor",image:"images/team/ela_picture.jpg",desc:"As a neurology resident, I am interested in neurovascular medicine and using Artificial Intelligence to improve patient outcomes in neurocritical care and stroke medicine. In my research, I use routinely collected data for neurocritical and stroke unit patients to generate insights into different neurovascular pathologies. I am also fascinated by the broader implications of AI applications in everyday clinical practice and effects on neurological patients and the healthcare system at large."},{name:"Gadi Miron",role:"Medical Doctor",image:"/images/team/gadi.jpg",desc:i.a.createElement("div",null,"I am a neurologist and researcher with a special interest in epilepsy and digital health. My work focuses on understanding and addressing diagnostic challenges of people with epilepsy through computational analysis of EEG, imaging, and video data. Studies include AI-based video analysis of seizure semiology, retrospective clinical studies, EEG analysis for predicting seizures and long-term cognitive outcomes, and MRI analysis to better understand cognitive dysfunction in epilepsy. I also work to translate our research into clinical practice by developing a digital health tool, ",i.a.createElement("a",{href:"https://motusmed.de"},"https://motusmed.de"),", currently being tested at Charit\xe9 clinics.")},{name:"Jonas Stelzer",role:"Medical Student",image:"images/team/JonasS.jpg",desc:"Currently a medical student at Charit\xe9 University Hospital with a background in Economics from UCL, I am fascinated by the relationship between physiological cycles, such as heart rate variability, and brain states. By leveraging wearables, I am interested in bridging the gap between costly, hard-to-access brain activity data and consumer-grade health monitoring."},{name:"Laura Krumm",role:"PhD Student",image:"images/team/LauraK.png",desc:""},{name:"Lida Antonakopoulou",role:"Medical Doctor",image:"images/team/lidaA.png",desc:""},{name:"Maximilian Sch\xf6ls",role:"Medical Doctor",image:"images/team/Maximilian_Schoels.jpg",desc:""},{name:"Mustafa Halimeh",role:"PhD Student",image:"/images/team/Mustafa.jpg",desc:"Mustafa is a computer scientist working on data-driven pipelines to allow better long-term monitoring and treatment of neurological disorders. His current research involves applying state-of-the deep learning models and analytic tools on data recorded from wearables and videos to detect and predict seizures in epilepsy."},{name:"Paul M\xfcller",role:"PhD Student",image:"/images/team/paul.jpg",desc:"I am interested in cortical dynamics and their relation to cognitive function, especially in the context of epilepsy. Beyond my goal to improve our general understanding of cortical dynamics I aim to identify meaningful biomarkers for epilepsy management. My methods include neuronal, statistical and machine learning models, non-linear time series analysis within the framework of brain criticality, and the evaluation of behavioural testing."},{name:"Robert Terziev",role:"Medical Doctor",image:"/images/team/robert.jpg",desc:""},{name:"Simon Vock",role:"PhD Student",image:"images/team/SimonV.jpg",desc:"I am fascinated by the parallels between artificial neural networks and biological brains. My research focuses on critical phase transitions in machine learning, exploring how networks of simple units can give rise to complex, intelligent behavior. By applying insights from deep learning and physics, I study neural systems with the aim of advancing our understanding of both artificial and biological intelligence. Through this work, I hope to contribute to the development of more efficient AI systems and innovative treatments for neurological disorders."},{name:"Claudia Gorski",role:"Administration",image:"images/team/claudia.jpg",desc:""}];function g(e){let{member:t,isExpanded:a,onClick:n}=e;return i.a.createElement("div",{className:`team-card ${a?"expanded":""}`,onClick:n},i.a.createElement("img",{src:t.image,alt:t.name}),i.a.createElement("h3",null,t.name),i.a.createElement("p",null,t.role),i.a.createElement("p",null,a?t.desc:""===t.desc?null:i.a.createElement("body",{className:"more-text"},"More...")))}var h=function(){const[e,t]=Object(n.useState)(null);return i.a.createElement("div",{className:"team-section-container"},i.a.createElement("section",{id:"team"},i.a.createElement("div",{className:"team-container-container"},i.a.createElement("h2",{className:"section-title team-title"},"Team"),i.a.createElement("div",{className:"team-container"},p.map(a=>i.a.createElement(g,{key:a.name,member:a,isExpanded:e===a.name,onClick:()=>(a=>{t(e===a?null:a)})(a.name)}))))))};var f=function(){const[e,t]=Object(n.useState)([]);return Object(n.useEffect)(()=>{(async()=>{t([{name:"Agustina Aragon Daud, Lily Strittmatter, Mario Andina, Georg von Arnim",role:"",image:"/images/logo_group.webp",desc:""}])})()},[]),i.a.createElement("section",{id:"team"},i.a.createElement("div",{className:"team-container-container"},i.a.createElement("h2",{className:"section-title team-title"},"Alumni"),i.a.createElement("div",{className:"team-container"},e.map((e,t)=>i.a.createElement("div",{key:t,className:"team-card"},i.a.createElement("img",{src:e.image,alt:e.name}),i.a.createElement("h3",null,e.name),i.a.createElement("p",null,e.role),i.a.createElement("p",null,e.desc))))))},y=a(21),v=a.n(y);a(43);function E(e){if(!e)return"";let t=e;const a={"&":"&","\\%":"%","\\#":"#","\\$":"$","\\_":"_","\\{":"{","\\}":"}","\\~{}":" ","\\^{}":"^","\\textbf{":"","\\textit{":"","\\texttt{":"","}":"","{":"","\\ ":" "};Object.keys(a).forEach(e=>{const n=new RegExp(e,"g");t=t.replace(n,a[e])});const n={"\\'{a}":"\xe1","\\`{a}":"\xe0","\\~{a}":"\xe3","\\^{a}":"\xe2","\\.{a}":"a","\\'e":"\xe9","\\`e":"\xe8","\\~e":"\u1ebd","\\^e":"\xea","\\.e":"e"};return Object.keys(n).forEach(e=>{const a=new RegExp(e,"g");t=t.replace(a,n[e])}),t=t.replace(/\\[a-zA-Z]+\{([^}]+)\}/g,"$1")}var b=function(){const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)(null),[o,s]=Object(n.useState)("");Object(n.useEffect)(()=>{(async()=>{try{const a=await fetch("/publications.bib"),n=await a.text(),i=v.a.toJSON(n).map(e=>({id:e.citationKey,title:E(e.entryTags.title),authors:e.entryTags.author,journal:E(e.entryTags.journal),book:E(e.entryTags.booktitle),year:e.entryTags.year,doi:e.entryTags.doi,url:e.entryTags.url,abstract:E(e.entryTags.abstract),entryType:e.entryType,publisher:e.entryTags.publisher,volume:e.entryTags.volume,pages:e.entryTags.pages}));t(i)}catch(e){console.error("Error fetching or parsing BibTeX file:",e)}})()},[]);const l=e.reduce((e,t)=>{const a=t.year||"Unknown Year";return e[a]||(e[a]=[]),e[a].push(t),e},{}),c=Object.keys(l).sort((e,t)=>t-e);return i.a.createElement("section",{id:"publications"},i.a.createElement("h2",{className:"section-title"},"Publications"),c.map(e=>i.a.createElement("div",{key:e,className:"year-section"},i.a.createElement("h3",null,e),i.a.createElement("div",{className:"year-container"},l[e].map(e=>i.a.createElement("div",{key:e.id,className:`publication-card ${a===e.id?"expanded":""}`,onClick:()=>(e=>{r(t=>t===e?null:e)})(e.id)},i.a.createElement("h4",null,e.title),i.a.createElement("p",{style:{color:"grey",marginBottom:"20px",marginTop:"20px"}},e.authors),i.a.createElement("p",null,i.a.createElement("i",null,e.journal||"Preprint")),i.a.createElement("body",{className:"more-text"},a===e.id?"":"More..."),a===e.id&&i.a.createElement(i.a.Fragment,null,e.abstract&&i.a.createElement("p",null,i.a.createElement("strong",null,"Abstract:")," ",e.abstract),e.doi&&i.a.createElement("p",null,i.a.createElement("strong",null,"DOI:")," ",i.a.createElement("a",{href:`https://doi.org/${e.doi}`,target:"_blank",rel:"noopener noreferrer"},e.doi)),e.url&&i.a.createElement("p",null,i.a.createElement("strong",null,"URL:")," ",i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"View Publication")))))))))};var w=function(){return i.a.createElement("div",{id:"footer"},i.a.createElement("footer",null,i.a.createElement("p",null,"Contact:"," ",i.a.createElement("a",{href:"mailto:computational-neurology@charite.de"},"computational-neurology at charite.de")),i.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," Computational Neurology Research Group")))},k=a(22),N=(a(58),a(59),a(60),a(13));const j=[{id:1,title:"\u2022 Christian Meisel selected for Schilling-professorship",shortDescription:n[!0].createElement("div",null," Christian Meisel has been selected for the chaired Schilling Foundation Professorship in Computational Neurology. ",n[!0].createElement("a",{href:"https://www.bihealth.org/en/notices/computationale-neurologie-foerderzusage-fuer-professur-der-schilling-stiftung-an-christian-meisel"}," Link to press release. "),"  ")},{id:2,title:"\u2022 New preprint on critical brain dynamics and cognition",shortDescription:n[!0].createElement("div",null," ",n[!0].createElement("a",{href:"https://www.medrxiv.org/content/10.1101/2024.08.19.24312223v1"},"Link to paper.")," ")},{id:3,title:"\u2022 New preprint on a comprehensive latent-space EEG map",shortDescription:n[!0].createElement("div",null," ",n[!0].createElement("a",{href:"https://www.medrxiv.org/content/10.1101/2024.10.25.24316133v1"},"Link to paper.")," ")}];var D=function(){const e=Object(n.useRef)(null);return n[!0].createElement("section",{id:"home"},n[!0].createElement("p",null,"Welcome to the Computational Neurology Lab at Charit\xe9 Berlin. We work on translational computational approaches to better understand and treat neurological diseases."),n[!0].createElement("div",{className:"news-container"},n[!0].createElement("h2",{className:"section-title"},"News"),n[!0].createElement("div",{className:"carousel-wrapper"},n[!0].createElement("button",{className:"custom-arrow custom-prev-arrow",onClick:()=>{e.current&&e.current.slickPrev()}},n[!0].createElement(N[!0],null)),n[!0].createElement(k[!0],Object.assign({ref:e},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,pauseOnHover:!0,arrows:!1},{className:"news-carousel"}),j.map(e=>n[!0].createElement("div",{className:"news-item",key:e.id},n[!0].createElement("h3",{className:"news-title"},e.title),n[!0].createElement("p",{className:"news-description"},e.shortDescription)))),n[!0].createElement("button",{className:"custom-arrow custom-next-arrow",onClick:()=>{e.current&&e.current.slickNext()}},n[!0].createElement(N[!0],null)))))};var C=function(){return i.a.createElement(s.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(c,null),i.a.createElement("main",null,i.a.createElement(D,null),i.a.createElement(u,null),i.a.createElement(h,null),i.a.createElement(f,null),i.a.createElement(b,null)),i.a.createElement(w,null)))};var M=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then(t=>{let{getCLS:a,getFID:n,getFCP:i,getLCP:r,getTTFB:o}=t;a(e),n(e),i(e),r(e),o(e)})};a(61);o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,null))),M()}},[[24,1,2]]]);
//# sourceMappingURL=main.e46ccd2c.chunk.js.map