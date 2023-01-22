export default function pauseVideo() {
  const $videos = document.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      window.addEventListener("visibilitychange", (e) =>
        document.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };

  const observer = new IntersectionObserver(cb, { threshold: 0.25 });

  $videos.forEach((el) => observer.observe(el));
}
