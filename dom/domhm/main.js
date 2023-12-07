const articleContainers = document.querySelectorAll('.article-container');

const articleData = [
    {
        title: 'Article 1',
        paragraph: 'This is the content of article 1.',
        imageSrc: 'https://via.placeholder.com/350x150',
    },
    {
        title: 'Article 2',
        paragraph: 'This is the content of article 2.',
        imageSrc: 'https://via.placeholder.com/350x150',
    },
    {
        title: 'Article 3',
        paragraph: 'This is the content of article 2.',
        imageSrc: 'https://via.placeholder.com/350x150',
    },
    {
        title: 'Article 4',
        paragraph: 'This is the content of article 2.',
        imageSrc: 'https://via.placeholder.com/350x150',
    },
    {
        title: 'Article 5',
        paragraph: 'This is the content of article 2.',
        imageSrc: 'https://via.placeholder.com/350x150',
    },
    {
        title: 'Article 6',
        paragraph: 'This is the content of article 2.',
        imageSrc: 'https://via.placeholder.com/350x150',
    },
];

articleContainers.forEach((container, index) => {
    const article = articleData[index];
    const articleName = document.createElement('h1');
    articleName.textContent = article.title;

    const articleParagraph = document.createElement('p');
    articleParagraph.textContent = article.paragraph;

    const articleImage = document.createElement('img');
    articleImage.src = article.imageSrc;

    container.appendChild(articleName);
    container.appendChild(articleParagraph);
    container.appendChild(articleImage);
});

const footerContainer = document.querySelector('.footer-container');
const footer = document.createElement('footer');
const footerParagraph = document.createElement('p');
footerParagraph.textContent = 'This shit is the footer';

footerContainer.append(footerParagraph);
