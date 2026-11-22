// games.js - Danh sách game của web
const GAMES_LIST = [
    {
        id: "hotd1",
        title: "The House of the Dead",
        system: "Sega Saturn (1998)",
        core: "beetle_saturn", // Core giả lập Saturn
        // Thay bằng link GitHub Releases nếu file > 100MB, hoặc để "roms/hotd1.chd" nếu <= 100MB
        romUrl: "https://ia600808.us.archive.org/2/items/THOTD/THOTD.chd", 
        cover: "https://upload.wikimedia.org/wikipedia/en/2/23/The_House_of_the_Dead_cover.jpg",
        players: "1-2 Người (Lightgun / Chuột)"
    },
    {
        id: "hotd2",
        title: "The House of the Dead 2",
        system: "Sega Dreamcast (1999)",
        core: "segaDC", // Core giả lập Dreamcast
        romUrl: "", // Để trống thì web sẽ cho phép chọn file .chd/.cdi từ máy tính
        cover: "https://upload.wikimedia.org/wikipedia/en/6/6f/The_House_of_the_Dead_2_cover.jpg",
        players: "1-2 Người (Lightgun / Chuột)"
    }
];
