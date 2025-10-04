import React, { useEffect, useState } from "react";
import "./styles/userManual.css";

// Import images
import img1 from './assets/img 2.png';
import img2 from './assets/img1.png';
import img3 from './assets/img 3.png';
import img4 from './assets/img 4.png';
import img5 from './assets/img5.png';

// Import help images
import sidebarImg from './help/sidebar.png';
import uploadImg from './help/upload.png';
import inputImg from './help/input.png';
import playImg from './help/play.png';
import copyImg from './help/copy.png';
import lightImg from './help/light.png';
import deleteImg from './help/delete.png';
import modesImg from './help/modes.png';

const UserManual = () => {
  const slideshowImages = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
    { src: img5, alt: "Image 5" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => 
      prev === 0 ? slideshowImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) => 
      (prev + 1) % slideshowImages.length
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalMs = 8000;
    const id = setInterval(goToNext, intervalMs);
    return () => clearInterval(id);
  }, [slideshowImages.length]);

  return (
    <div className="user-manual">
      <div className="container">
        <h1 className="main-title">User Manual for iCarKno Chat</h1>
        
        {/* Slideshow Section */}
        <section className="slideshow-section" aria-labelledby="slideshow-title">
          <h2 id="slideshow-title" className="visually-hidden">Feature Overview</h2>
          <div className="slideshow" aria-label="Feature slideshow">
            {slideshowImages.map((image, index) => (
              <div
                key={image.src}
                className={`slide ${index === activeIndex ? "active" : ""}`}
                role="img"
                aria-label={image.alt}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
            <button 
              className="slide-btn prev-btn" 
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              &#8249;
            </button>
            <button 
              className="slide-btn next-btn" 
              onClick={goToNext}
              aria-label="Next slide"
            >
              &#8250;
            </button>
            <div className="slide-dots">
              {slideshowImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-content" aria-labelledby="introduction">
          <h2 id="introduction">Introduction</h2>
          <p>
            The iCarKno chat is an advanced on-premise solution designed for
            secure and efficient querying across multiple documents. It
            prioritizes high data privacy, ensuring that all sensitive information
            remains within your control. With robust support for various
            languages, text-to-speech and speech-to-text, iCarKno chat enables
            seamless querying in various languages, making it ideal for diverse
            environments.
          </p>
        </section>

        {/* Getting Started Section */}
        <section className="section-content" aria-labelledby="getting-started">
          <h2 id="getting-started">Getting Started</h2>
          
          <div className="subsection">
            <h3>Logging In</h3>
            <ul>
              <li>Launch the iCarKno Chat application.</li>
              <li>Enter your username and password.</li>
              <li>Click on the "Signup/Login" button to access the dashboard.</li>
            </ul>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="section-content" aria-labelledby="key-features">
          <h2 id="key-features">Key Features</h2>
          
          <div className="subsection">
            <h3>Uploading Files</h3>
            <p>To upload a file, click on the 3 lines in the sidebar to expand it:</p>
            <div className="image-container">
              <img src={sidebarImg} alt="Sidebar expansion icon" />
            </div>
            <div className="instruction-box">
              Click on the New Container Button to select and upload a file from
              your device.
            </div>
            <p>
              Once you have uploaded a file, it takes a short while to upload
              depending on the size and number of files selected.
            </p>
            <div className="image-container">
              <img src={uploadImg} alt="File upload screen" />
            </div>
          </div>

          <div className="subsection">
            <h3>Querying Uploaded Documents</h3>
            <p>Once the files have been uploaded, you will see the following message on the chat window:</p>
            <div className="instruction-box">
              You can query the documents by asking information related to the
              document in the Chat window.
            </div>
            <p>You can even ask the chatbot to summarize the uploaded documents.</p>
          </div>

          <div className="subsection">
            <h3>Multi-language Support</h3>
            <p>To query in different languages:</p>
            <ul>
              <li>
                Select your question input language from the dropdown in the
                navigation bar (on the top right of the page).
              </li>
              <li>Select your input language from the dropdown shown.</li>
            </ul>
            <div className="image-container">
              <img src={inputImg} alt="Language selection dropdown" />
            </div>
          </div>

          <div className="subsection">
            <h3>Speech Output</h3>
            <p>
              To listen to the speech output, click on the play button at the end of a chat message by the chatbot.
            </p>
            <div className="image-container">
              <img src={playImg} alt="Play button for speech output" />
            </div>
          </div>

          <div className="subsection">
            <h3>Copying Messages</h3>
            <p>To copy the message, click on the copy button:</p>
            <div className="instruction-box">
              The message will be copied to your clipboard.
            </div>
            <div className="image-container">
              <img src={copyImg} alt="Copy button" />
            </div>
          </div>

          <div className="subsection">
            <h3>Theme Switching</h3>
            <p>
              Click on the top-right moon icon button to switch to dark mode and
              click on the sun icon in dark mode to switch back to light mode.
            </p>
            <div className="image-container">
              <img src={lightImg} alt="Dark mode toggle icon" />
            </div>
          </div>

          <div className="subsection">
            <h3>Document Management</h3>
            <p>To handle multiple documents:</p>
            <ul>
              <li>
                When multiple documents are added to a container, they are
                automatically aligned on the left side of the interface for a clear
                and organized view.
              </li>
              <li>
                You can manage these documents by renaming the chat, making it
                easier to keep them organized.
              </li>
              <li>
                If a document is no longer needed, you can delete it by selecting
                the document and choosing the delete option, helping maintain a
                clean document collection.
              </li>
            </ul>
            <div className="image-container">
              <img src={deleteImg} alt="Document management interface" />
            </div>
          </div>

          <div className="subsection">
            <h3>Response Modes</h3>
            <p>To choose between Creative and Contextual modes:</p>
            <ul>
              <li>
                Navigate to the mode selection option located on the interface.
              </li>
              <li>
                Select <strong>Creative Mode</strong> if you want the chatbot to
                provide inference-based answers, where it adds creative replies and
                reasons on its own.
              </li>
              <li>
                Choose <strong>Contextual Mode</strong> to have the chatbot answer
                strictly based on the uploaded documents without adding any
                additional information or reasoning.
              </li>
            </ul>
            <div className="image-container">
              <img src={modesImg} alt="Mode selection options" />
            </div>
          </div>
        </section>

        {/* Question Types Section */}
        <section className="section-content" aria-labelledby="question-types">
          <h2 id="question-types">Types of Questions</h2>
          <p>
            Below are the types of questions you can ask in iCarKno Chat. The
            chatbot supports a variety of queries, from document summaries to
            inference-based creative questions:
          </p>

          <div className="subsection">
            <h3>Contextual Mode Questions</h3>
            <ul>
              <li><strong>Summarization:</strong> "Summarize the key points of this document."</li>
              <li><strong>Document Insight:</strong> "What is this document about?"</li>
              <li><strong>Concept Clarification:</strong> "Explain the concept of X mentioned in the document."</li>
              <li><strong>Specific Information:</strong> "What does the document say about [specific topic]?"</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>Creative Mode Questions</h3>
            <ul>
              <li>
                <strong>Comparative Analysis:</strong> "What do you think is the difference between X and Y?"
              </li>
              <li>
                <strong>Opinion-based Query:</strong> "Is X better than Y? Why do you think so?"
              </li>
              <li>
                <strong>Inference Questions:</strong> "Based on this information, what would happen if...?"
              </li>
              <li>
                <strong>Creative Solutions:</strong> "How would you solve this problem using the concepts from the document?"
              </li>
            </ul>
          </div>
        </section>

        {/* Hindi Section */}
        <section className="section-content hindi-section" aria-labelledby="hindi-manual">
          <h2 id="hindi-manual">हिंदी में यूजर मैन्युअल</h2>
          
          <div className="subsection">
            <h3>परिचय</h3>
            <p>
              iCarKno चैट एक उन्नत ऑन-प्रिमाइज़ समाधान है, जो कई दस्तावेज़ों के बीच सुरक्षित और कुशल क्वेरी के लिए डिज़ाइन किया गया है। यह उच्च डेटा गोपनीयता को प्राथमिकता देता है, जिससे आपकी सभी संवेदनशील जानकारी आपके नियंत्रण में रहती है। विभिन्न भाषाओं के लिए मज़बूत समर्थन के साथ, टेक्स्ट-टू-स्पीच और स्पीच-टू-टेक्स्ट के माध्यम से, iCarKno चैट विभिन्न भाषाओं में क्वेरी करने में सक्षम बनाता है, जो इसे विभिन्न वातावरणों के लिए आदर्श बनाता है।
            </p>
          </div>

          <div className="subsection">
            <h3>शुरुआत</h3>
            <h4>लॉगिन करना</h4>
            <ul>
              <li>iCarKno चैट ऐप्लिकेशन लॉन्च करें।</li>
              <li>अपना उपयोगकर्ता नाम और पासवर्ड दर्ज करें।</li>
              <li>"लॉगिन" बटन पर क्लिक करें ताकि आप डैशबोर्ड तक पहुंच सकें।</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>मुख्य विशेषताएं</h3>
            <h4>शुरुआत कैसे करें:</h4>
            <p>
              फाइल अपलोड करने के लिए, साइडबार में 3 लाइनों पर क्लिक करके इसे विस्तृत करें:
            </p>
            <div className="image-container">
              <img src={sidebarImg} alt="साइडबार आइकन" />
            </div>
            <div className="instruction-box">
              "New Container" बटन पर क्लिक करें और अपनी डिवाइस से कोई फाइल अपलोड करें।
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserManual;