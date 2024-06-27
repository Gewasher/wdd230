function run() {
    const button = document.querySelector('button');
    const input = document.querySelector('#favchap');
    const list = document.querySelector('#list');

    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }

    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }


    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
    }

    function displayList(item) {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');

        li.innerHTML = item;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            deleteChapter(li.textContent)
        });
    }
    let chaptersArray = getChapterList() || [];

    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });

    button.addEventListener('click', () => {
        if (input.value != '') {
            displayList(input.value);
            chaptersArray.push(input.value)
            setChapterList();
            input.value = '';
            input.focus();
        }
        else {
            input.focus();
        }








    });
}

run()