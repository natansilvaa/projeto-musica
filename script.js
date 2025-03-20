let musicas =[
    {titulo: 'interestelar', artista: 'natan Silva', src:'musicas/calm-space-music-312291.mp3', img:'imagens/interestelar.jpg'},
    {titulo: 'top musica', artista: 'desconhecido', src:'musicas/lake-view-lo-fi-beat-03-312345.mp3', img:'imagens/logan-weaver-lgnwvr-kcKIUXkA5EM-unsplash.jpg'},
    {titulo: 'funk', artista: 'desconhecido', src:'musicas/funk-244706.mp3', img:'imagens/dwayne-joe-ORL32yX-f9I-unsplash.jpg'}
];
    


let musica = document.querySelector('audio');
let indexMusica =0;

let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica);


//EVENTOS
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 2){
        indexMusica =0
    }
    renderizarMusica(indexMusica);
});

//FUNÇÕES

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent=musicas[index].titulo;
        nomeArtista.textContent=musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math. floor(musica.duration));
    }); 
}


function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100 ) + '%';
    let tempodecorrido = document.querySelector('.inicio');
    tempodecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}