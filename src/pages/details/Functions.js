//funcion para cambiar de video en el iframe
export function clickVideo() {
  let listVideo = document.querySelectorAll(".link_src");
  let mainVideo = document.querySelector(".video-frame");
  listVideo.forEach((iframe) => {
    iframe.onclick = () => {
      listVideo.forEach((vid) => vid.classList.remove("episode_active"));
      iframe.classList.add("episode_active");
      if (iframe.classList.contains("episode_active")) {
        let src = iframe.children[0].getAttribute("href");
        mainVideo.src = src;
      }
    };
  });
}

