import React from "react";

function Projects() {
  return (
    <section className="py-20">
      <div className="container max-w-5xl mx-auto px-4 text-sm md:text-base">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-8">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">          
          <div className="py-8 animate-fadeInLeft delay-300 rounded-xl shadow-lg p-6 md:p-10">
            <h3 className="text-lg md:text-xl font-semibold mb-4 border-b pb-2 border-gray-300">Bird Sound Denoising</h3>
            <p className="mt-4">Audio denoising has been an area of extensive research, with both traditional techniques and deep learning models being used. However, many existing methods rely on artificially generated noise and often produce subpar results in terms of audio clarity. To address these challenges, I curated a large-scale dataset of natural bird sound noise and innovatively transformed the audio denoising task into an image segmentation problem. I developed the BirdAudioDenoisingModel, which leverages 1,200 audio images to achieve state-of-the-art results in denoising. This model has proven versatile, extending its use to areas like speech denoising, audio separation, audio enhancement, and noise estimation, delivering superior performance across these applications.</p>
            <p className="mt-2"><span className="mr-1 text-blue-500">Skills Used:</span>Computer Vision, Deep Learning, Pytorch, Image Segmentation</p>
            <a href="https://github.com/NNikhil89/Image_Segmentation" className="text-blue-500 hover:underline mt-2 inline-block">GitHub Link</a>
          </div>

          <div className="py-8 animate-fadeInRight delay-300 rounded-xl shadow-lg p-6 md:p-10">
            <h3 className="text-lg md:text-xl font-semibold mb-4 border-b pb-2 border-gray-300">Dog Heart VHS Score Prediction</h3>
            <p className="mt-4">
                Cardiac disease is a leading cause of death in dogs, making the accurate detection of cardiomegaly crucial for better clinical diagnoses. While deep learning methods have shown promise in improving cardiomegaly classification, their integration into clinical practice has been limited by the challenge of aligning AI predictions with radiographic inputs. To address this, I developed a CNN model with an orthogonal layer that aligns the traditional Vertebral Heart Score (VHS) metric, widely used in clinical settings, with deep learning outputs. Experimental results show that the model achieves state-of-the-art accuracy in detecting cardiomegaly, successfully bridging the gap between AI-based predictions and practical clinical applications.</p>
            <p className="mt-2"><span className="mr-1 text-blue-500">Skills Used:</span>Computer Vision, Deep Learning, Pytorch, Object Detection, EfficientNet</p>
            <a href="https://github.com/NNikhil89/Object_Detection" className="text-blue-500 hover:underline mt-2 inline-block">GitHub Link</a>
          </div>

          <div className="py-8 animate-fadeInRight delay-300 rounded-xl shadow-lg p-6 md:p-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2 border-gray-300">Image classification</h3>
            <p className="mt-4">
            Automating the detection of cardiomegaly is crucial for enhancing diagnostic accuracy for veterinarians. In this project, I developed CNN8Net, a Convolutional Neural Network (CNN) specifically designed for cardiomegaly classification. The CNN8Net architecture classifies dog heart sizes into three categories: large, normal, and small. It consists of multiple convolutional layers followed by fully connected layers for precise classification. Evaluated on the Dog Heart dataset, the model demonstrates strong performance and offers significant potential for future improvements in clinical diagnostics.</p>
            <p className="mt-2"><span className="mr-1 text-blue-500">Skills Used:</span>Computer Vision, CNN, Deep Learning, Pytorch, Image classification</p>
            <a href="https://github.com/NNikhil89/Image_Classification" className="text-blue-500 hover:underline mt-2 inline-block">GitHub Link</a>
          </div>

          <div className="py-8 animate-fadeInRight delay-300 rounded-xl shadow-lg p-6 md:p-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2 border-gray-300">PayZelle Money App</h3>
            <p className="mt-4">PayZelle app enables users to transfer money quickly and securely to other individuals using their mobile numbers, or directly to bank accounts. Whether it's sending money to family, friends, or making payments for services, the app ensures seamless and instant transactions.
            Additionally, PayZelle allows users to add money from their digital wallet back into their bank accounts, offering flexibility for managing funds. Users can link multiple bank accounts, and the process of adding money to their account from the wallet is fast, secure, and convenient. With features like real-time notifications, transaction history, and a secure encrypted system, PayZelle ensures a reliable and user-friendly experience for transferring money and managing finances.</p>
            <p className="mt-2"><span className="mr-1 text-blue-500">Skills Used:</span>Next.js, TypeScript, TailWind, PostGres, Webhook</p>
            <a href="https://github.com/NNikhil89/ZelleMoneyApp" className="text-blue-500 hover:underline mt-2 inline-block">GitHub Link</a>
          </div>
        </div>        
      </div>     
    </section>
  );
}

export default Projects;
