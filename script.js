const donateLinks = [
    {
        name: "Test Donate Link 1",
        desc: "This is a placeholder link",
        url: "https://victoryforphil.com"
    },
    {
        name: "Test Donate Link 1",
        desc: "This is a placeholder link",
        url: "https://victoryforphil.com"
    }
    ,{
        name: "Test Donate Link 1",
        desc: "This is a placeholder link",
        url: "https://victoryforphil.com"
    }
    ,{
        name: "Test Donate Link 1",
        desc: "This is a placeholder link",
        url: "https://victoryforphil.com"
    }
]

const petitionLinks = [
    {
        name: "Test petition Link 1",
        desc: "This is a placeholder link",
        url: "https://victoryforphil.com"
    },
    {
        name: "Test petition Link 1",
        desc: "This is a placeholder link",
        url: "https://victoryforphil.com"
    }
    ,{
        name: "Test petition Link 1",
        desc: "This is a placeholder link",
        url: "https://victoryforphil.com"
    }
    ,{
        name: "Test petition Link 1",
        desc: "This is a placeholder link",
        url: "https://victoryforphil.com"
    }
]

const protestLinks = [
    {
        name: "Test Protest Link 1",
        desc: "This is a placeholder link",
        url: "https://victoryforphil.com"
    },
    {
        name: "Test Protest Link 1",
        desc: "This is a placeholder link",
        url: "https://victoryforphil.com"
    }
    ,{
        name: "Test Protest Link 1",
        desc: "This is a placeholder link",
        url: "https://victoryforphil.com"
    }
    ,{
        name: "Test Protest Link 1",
        desc: "This is a placeholder link",
        url: "https://victoryforphil.com"
    }
]

generateLinks(donateLinks);
function select(obj){
    switch(obj.value){
        case "Donate":
            generateLinks(donateLinks);
            break;
        case "Petition":
            generateLinks(petitionLinks);
            break;
        case "Protest":
            generateLinks(protestLinks);
            break;
        case "Spread the word":
            break;
    }

}

function generateLinks(siteInfo){
    const linkContainer = document.getElementById("links-container");

    linkContainer.innerHTML = ""; // Clear Inner HTML to Refresh Links

    siteInfo.forEach((site)=>{
        linkContainer.innerHTML += `
        <div class="card">
            <div class="card-body">
              <h1>${site.name}</h1>
              <i>${site.desc}</i>
              <hr/>
              <a href="${site.url}">Visit Site </a>
            </div>
          </div>
        `
    })
}