let musicas =[
    {titulo: 'interestelar', artista: 'natan Silva', src:'musicas/calm-space-music-312291.mp3', img:'imagens/interestelar.jpg'}
];


let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomwArtista = document.querySelector('.descricao i')

duracaoMusica.textContent = segundosParaMinutos(Math. floor(musica.duration));

//EVENTOS
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

//FUNÇÕES
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






