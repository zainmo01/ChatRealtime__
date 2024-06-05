import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
Echo.private("messenger.1.2").listen("MessageSent", (e) => {
    console.log("Great:", e);
    console.log("Great:", e.message);
});

// Echo.join(`group_chat.1`)
//     .here((users) => {
//         console.log("Current users:", users);
//     })
//     .joining((user) => {
//         console.log(user.name + " has joined the channel.");
//     })
//     .leaving((user) => {
//         console.log(user.name + " has left the channel.");
//     })
//     .listen("GroupChatMessage", (e) => {
//         console.log("Great:", e);
//         console.log("Great:", e.message);
//     })
//     .error((error) => {
//         console.log(error);
//     });
