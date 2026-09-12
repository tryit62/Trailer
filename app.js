const gate=document.getElementById("gate");
const player=document.getElementById("playerScreen");
const end=document.getElementById("end");
const video=document.getElementById("video");
const open=document.getElementById("open");
const status=document.getElementById("status");

setTimeout(()=>{status.innerHTML='CANAL // ÉTABLI<span class="cursor">_</span>'},900);

function finish(){
  player.hidden=true;
  end.hidden=false;
  try{document.exitFullscreen?.()}catch(e){}
}

open.addEventListener("click",async()=>{
  status.textContent="OUVERTURE DE LA TRANSMISSION…";
  await new Promise(r=>setTimeout(r,320));
  gate.hidden=true;
  player.hidden=false;
  video.currentTime=0;
  try{
    await video.play();
    // Fullscreen is intentionally not forced: iPad/iPhone may choose its native player.
  }catch(e){
    video.controls=true;
  }
});

video.addEventListener("ended",finish);
video.addEventListener("contextmenu",e=>e.preventDefault());
