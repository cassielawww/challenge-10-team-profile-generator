// Render html code for output
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
        <title>Our Team!</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid bg-info text-center text-white">
        <h1>Our Team</h1>
    </div>
    <div class="container">
        <div class="row p-2">
            <div class="team-area col-12 d-flex flex-wrap justify-content-center">
                ${renderProfiles(team)}
            </div>
        </div>
    </div>
    </body>
    </html>
    `
}

// Create Team Profile
const renderProfiles = team => {
    // Create Manager Profile
    const createManager = manager => {
        // Create Manager Profile
        return `
        <div class="card employee-card">
            <div class="card-header text-center bg-info text-white">
                <h2 class="card-title">${manager.getName()}</h2>
                <h4 class="card-title">${manager.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOffice()}</a></li>
                </ul>
            </div>
        </div>
        `
    }
    // Create Engineer Profile
    const createEngineer = engineer => {
        return `
        <div class="card employee-card">
            <div class="card-header text-center bg-info text-white">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h4 class="card-title">${engineer.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub Page: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
                </ul>
            </div>
        </div>
        `
    }
    // Create Intern Profile
    const createIntern = intern => {
        return `
        <div class="card employee-card">
            <div class="card-header text-center bg-info text-white">
                <h2 class="card-title">${intern.getName()}</h2>
                <h4 class="card-title">${intern.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `
    }
    
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => createIntern(intern))
        .join("")
    );
    
    return html.join("");
}