// Classes
class Section {
    constructor(name, projects) {
        this.name = name;
        this.projects = projects;
    }
}

class Project {
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }
}

// Projects
const DATING_GAMES = new Project(
    'Dating Games',
    {
        address: 'https://medium.com/swlh/dating-games-699e56dbb152',
        description: 'Link to Dating Games article on Medium'
    }
);

// Sections
const MEDIUM_ARTICLES = new Section('medium articles', [
    DATING_GAMES
]);

const PHOTOGRAPHY = new Section('photography', []);

export const PROJECT_MANIFEST = [
    MEDIUM_ARTICLES,
    PHOTOGRAPHY
];
