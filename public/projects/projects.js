(async function getProjects() {
    try {


        const response = await fetch("/api/projects");
        const result = await response.json();


        const projectsDiv = document.getElementById("projects");


        result.returnJson.map(project => {

            const projectDiv = document.getElementById("main-content");


            const projectName = document.createElement("h2");
            projectName.classList.add("project-title");
            projectName.innerText = project.projectName;

            const projectPitch = document.createElement("p");
            projectPitch.classList.add("project-pitch");
            projectPitch.innerText = project.projectPitch;

            const projectDescription = document.createElement("p");
            projectDescription.classList.add("project-description");
            projectDescription.innerText = project.projectDescription;


            const projectTechnologies = document.createElement("p");
            projectTechnologies.classList.add("project-technologies");
            projectTechnologies.innerText = "Technologies: " + project.projectTechnologies;

            const projectGitLink = document.createElement("a");
            projectGitLink.classList.add("project-gitlink");
            projectGitLink.href = project.projectGitLink;
            projectGitLink.innerText = "Github Link";

            projectDiv.appendChild(projectName);
            projectDiv.appendChild(projectPitch);
            projectDiv.appendChild(projectDescription);
            projectDiv.appendChild(projectTechnologies);
            projectDiv.appendChild(projectGitLink);





        });

        /* 
        show the result on the page...  
        do it in a scalable way that works even if you add new projects 
        */


    } catch (error) {
        console.log(error);
    }
})();