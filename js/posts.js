var data = [
    "https://www.youtube.com/embed/ROBXnzBn-S0",
    "https://www.youtube.com/embed/BlvVK4DVhuA",
    "https://www.youtube.com/embed/QFWpfcRrAEM",
    "https://www.youtube.com/embed/YucWjTMhU9o",
    "https://www.youtube.com/embed/40RbZIVHIgw",
    "https://www.youtube.com/embed/cqMJNAI-Xm8",
    "https://www.youtube.com/embed/aCaJ6C5YARY",

]

console.log(data);  
const container = document.querySelector("#container");

data.forEach((r) => {
    
    container.innerHTML += `<iframe width="" src="${r}" width="300" height="250" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});
