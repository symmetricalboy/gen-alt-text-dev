import './style.css';
// import { definePopup } from '#imports'; // Removed definePopup
import browser from 'webextension-polyfill'; // Added for potential browser API use, though not strictly needed for this HTML

// export default definePopup(({
// main() {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div>
        <div class="app-icon-container">
          <img src="/icons/gen-alt-text.svg" alt="Extension Icon" width="48" height="48">
        </div>
        <h1>Bluesky Alt Text Generator</h1>
        <div class="description">
          Automatically generate detailed, accessible alt text for your Bluesky images & videos using Google Gemini AI.
        </div>
        
        <div class="info-section">
          <h2>How it Works</h2>
          <p>
            This extension automatically adds a "generate alt text" button next to alt text input fields on bsky.app. 
            Click the button to generate alt text for the associated image or video.
          </p>
          <p>
            You can also generate captions for your posts using the same functionality.
          </p>
           <p>
            Remember to always review the generated text before posting!
          </p>
        </div>
        
        <div class="footer">
          <p>
            Also available as a <a href="https://alttext.symm.app" target="_blank" rel="noopener noreferrer">web app</a>!
          </p>
          <p>
            Feedback, suggestions, assistance, & updates at 
            <a href="https://bsky.app/profile/symm.app" target="_blank" rel="noopener noreferrer">@symm.app</a>
          </p>
          <p>Free & <a href="https://github.com/symmetricalboy/gen-alt-text" target="_blank" rel="noopener noreferrer">open source</a>, for all, forever.</p>
          <p class="copyright">Copyright © 2025 Dylan Gregori Singer (symmetricalboy)</p>
        </div>
      </div>
    `;
  });
//   }
// });
