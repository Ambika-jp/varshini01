function downloadAndShow() {
  const link = document.getElementById("instaLink").value;
  const res = document.getElementById("resolution").value;
  const result = document.getElementById("result");
  const gallery = document.getElementById("gallery");

  // Check if link is valid
  if (!link.includes("instagram.com")) {
    result.innerHTML = "⚠️ தயவு செய்து சரியான Instagram வீடியோ link-ஐ உள்ளிடவும்.";
    return;
  }

  // Simulate AI processing
  result.innerHTML = "🤖 AI உங்கள் வீடியோவை தயாரித்து கொண்டிருக்கிறது...";

  setTimeout(() => {
    result.innerHTML = `✅ உங்கள் வீடியோ ${res} resolution-இல் download செய்யப்பட்டுள்ளது (simulation).`;

    // Create video tag
    const video = document.createElement("video");
    video.src = "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"; // Sample video
    video.controls = true;

    // Add to gallery
    gallery.appendChild(video);
  }, 2000);
}
