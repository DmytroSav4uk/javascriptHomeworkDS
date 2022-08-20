// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

function createElement(useOwnDiv, parent, tag,innerText,className) {
    let div = null;
    if( useOwnDiv) {
        div = document.createElement('div');
        div.classList.add('boxInner');
    }

    let ele = document.createElement(tag);
    if(innerText!=null)
        ele.innerText = innerText;
    if(className!=null)
    ele.classList.add(className);

    if(useOwnDiv) {
        div.appendChild(ele);
        parent.appendChild(div);
    }else
    parent.appendChild(ele);
}

let targets = document.getElementsByClassName('courses');
let target = targets[0];

for (const course of coursesArray) {
    let div = document.createElement('div');
    div.classList.add('box');

    createElement(true, div, 'h1', course.title);
    createElement(true, div, 'h2', 'Duration (Months): '+ course.monthDuration);
    createElement(true, div, 'h3','Duration (Hours): '+ course.hourDuration);
    //createElement(true, div, 'ol', course.modules,'list')

    let ul = document.createElement('ul');
    div.appendChild(ul);
    for (const module of course.modules) {
       createElement(false, ul,'li', module);


    }


    target.appendChild(div);

}

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

