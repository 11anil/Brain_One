// "use client"
// import Link from "next/link";
// import Navbar from "../../components/Navbar"; 

// const Chatbot = () => {

//     return (
//         <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
// <script>
//   window.botpressWebChat.init({
//       "composerPlaceholder": "Chat with Brain",
//       "botConversationDescription": "chat",
//       "botId": "a5d86cca-13b2-4ba1-955a-358f12c5eb6b",
//       "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
//       "messagingUrl": "https://messaging.botpress.cloud",
//       "clientId": "a5d86cca-13b2-4ba1-955a-358f12c5eb6b",
//       "webhookId": "e8d1e542-f603-4991-a950-07333633551e",
//       "lazySocket": true,
//       "themeName": "prism",
//       "botName": "Brain",
//       "avatarUrl": "https://mediafiles.botpress.cloud/a5d86cca-13b2-4ba1-955a-358f12c5eb6b/webchat/bot.html",
//       "stylesheet": "https://mediafiles.botpress.cloud/a5d86cca-13b2-4ba1-955a-358f12c5eb6b/webchat/bot.html",
//       "frontendVersion": "v1",
//       "useSessionStorage": true,
//       "showBotInfoPage": true,
//       "enableConversationDeletion": true,
//       "showPoweredBy": true,
//       "theme": "prism",
//       "themeColor": "#2563eb",
//       "allowedOrigins": []
//   });
  
// </script>
//         <div className="w-full">
//             <div className="w-1/6">
//                 <Navbar />
//             </div>
//             <div className="h-screen flex items-center flex-col justify-center">
//                 <h1 className="text-[32px] mb-[1rem] md:text-[35px] lg:text-[50px] text-center font-bold leading-[4rem] text-red-500">
//                     Connect With Your Patient
//                 </h1>
               
//                 <Link href='/chat'>
//                     <button className="px-8 py-2 rounded-lg bg-red-500 text-white mt-[1rem]">
//                     Ask question with your chatbot assistant.
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Chatbot;

"use client";
import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const Chatbot = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
        script.async = true;
        script.onload = () => {
            window.botpressWebChat.init({
                composerPlaceholder: "Chat with Brain",
                botConversationDescription: "chat",
                botId: "a5d86cca-13b2-4ba1-955a-358f12c5eb6b",
                hostUrl: "https://cdn.botpress.cloud/webchat/v1",
                messagingUrl: "https://messaging.botpress.cloud",
                clientId: "a5d86cca-13b2-4ba1-955a-358f12c5eb6b",
                webhookId: "e8d1e542-f603-4991-a950-07333633551e",
                lazySocket: true,
                themeName: "prism",
                botName: "Brain",
                avatarUrl: "https://mediafiles.botpress.cloud/a5d86cca-13b2-4ba1-955a-358f12c5eb6b/webchat/bot.html",
                stylesheet: "https://mediafiles.botpress.cloud/a5d86cca-13b2-4ba1-955a-358f12c5eb6b/webchat/bot.html",
                frontendVersion: "v1",
                useSessionStorage: true,
                showBotInfoPage: true,
                enableConversationDeletion: true,
                showPoweredBy: true,
                theme: "prism",
                themeColor: "#2563eb",
                allowedOrigins: [],
            });
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div className="w-full">
            <div className="w-1/6">
                <Navbar />
            </div>
            <div className="h-screen flex items-center flex-col justify-center">
                <h1 className="text-[32px] mb-[1rem] md:text-[35px] lg:text-[50px] text-center font-bold leading-[4rem] text-red-500">
                    Connect With Your Patient
                </h1>
                <Link href='/chat'>
                    <button className="px-8 py-2 rounded-lg bg-red-500 text-white mt-[1rem]">
                        Ask question with your chatbot assistant.
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Chatbot;

