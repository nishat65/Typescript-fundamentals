const alertBox = document.querySelector('.alert-box') as HTMLDivElement;
const progressBar = document.querySelector('.progress-bar') as HTMLDivElement;
const file = document.querySelector('input[type=file]') as HTMLInputElement;
const ulList = document.querySelector('.ul-list') as HTMLUListElement;
const btnPrimary = document.querySelector('.btn-primary') as HTMLButtonElement;
var nodeList = document.getElementsByTagName('LI')!;

console.log('is it working');

const uploadFileName = document.querySelector(
    '.upload-file_name'
) as HTMLInputElement;

let movieList: string[] = [];

progressBar.style.display = `none`;

file.addEventListener('change', (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    let fr = new FileReader();

    fr.readAsText(file);

    fr.onload = function () {
        alertBox.style.transform = `translateY(0%)`;
        uploadFileName.textContent = file.name;
    };

    fr.onprogress = function (e: ProgressEvent<FileReader>) {
        const per = Math.floor((e.loaded / e.total) * 100);
        // btnPrimary.setAttribute('disabled', 'false');
        if (per === 100) {
            setTimeout(function () {
                progressBar.style.display = `none`;
                alertBox.style.transform = `translateY(-100%)`;
            }, 2000);
        } else {
            progressBar.style.display = `block`;
            progressBar.style.width = `${per}px`;
            // btnPrimary.setAttribute('disabled', 'true');
        }
    };

    btnPrimary.addEventListener('click', () => {
        // console.log(movieList);
        const li = document.createElement('li');
        movieList.push(file.name);
        movieList.forEach((list, index) => {
            ulList.appendChild(li);
            li.textContent = list;
            li.classList.add('list');
        });
    });
});
