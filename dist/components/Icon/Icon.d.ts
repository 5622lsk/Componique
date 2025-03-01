import React from "react";
export type IconName = "icon-check" | "icon-docs" | "icon-login" | "icon-logout" | "icon-qr" | "icon-reload" | "icon-star" | "icon-undo" | "icon-bell" | "icon-bell-off" | "icon-bell-ring" | "icon-call" | "icon-camera" | "icon-code" | "icon-download" | "icon-error" | "icon-heart" | "icon-help" | "icon-home" | "icon-image" | "icon-info" | "icon-mail" | "icon-map" | "icon-menu" | "icon-pin" | "icon-refresh" | "icon-setting" | "icon-share" | "icon-user" | "icon-video" | "icon-web" | "icon-search" | "icon-docs2" | "icon-github" | "icon-blog" | "icon-comment" | "icon-lock" | "icon-unlock" | "icon-bin" | "icon-clip" | "icon-emptyBookmark" | "icon-bookmark" | "icon-pencil" | "icon-pen" | "icon-music" | "icon-wifi" | "icon-minus" | "icon-close" | "icon-sun" | "icon-moon" | "icon-play" | "icon-pause" | "icon-plus" | "icon-arrowUp" | "icon-arrowDown" | "icon-emptyHeart" | "icon-next" | "icon-prev" | "icon-up" | "icon-down" | "icon-github2" | "icon-facebook" | "icon-twitter" | "icon-linkedin" | "icon-line" | "icon-instagram";
type IconProps = {
    name: IconName;
    size?: number;
    color?: string;
    className?: string;
};
declare const Icon: React.FC<IconProps>;
export default Icon;
